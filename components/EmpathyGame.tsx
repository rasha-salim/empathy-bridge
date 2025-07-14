'use client'

import { useState, useEffect, useCallback } from 'react'
import { Heart, ArrowRight, Home, BookOpen, Users, Target, Award, RotateCcw, Pause, Play } from 'lucide-react'
import { scenarios } from '@/lib/scenarios'
import { GameState, UserProfile, EmpathyGrowthPoint } from '@/lib/types'
import { getLocalStorage, setLocalStorage } from '@/lib/utils'
import { NavigationBar } from './NavigationBar'

export function EmpathyGame() {
  const [gameState, setGameState] = useState<GameState>({
    currentScenario: null,
    currentPerspectiveIndex: 0,
    userProfile: {
      name: '',
      age: '',
      completedScenarios: [],
      empathyGrowth: [],
      achievements: []
    },
    gamePhase: 'intro'
  })
  
  const [isPaused, setIsPaused] = useState(false)
  const [showUserSetup, setShowUserSetup] = useState(false)
  const [userForm, setUserForm] = useState({ name: '', age: '' })
  const [empathyReflection, setEmpathyReflection] = useState('')
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null)

  // Load saved profile and check for user setup
  useEffect(() => {
    const savedProfile = getLocalStorage<UserProfile>('empathy-bridge-profile', {
      name: '',
      age: '',
      completedScenarios: [],
      empathyGrowth: [],
      achievements: []
    })
    
    setGameState(prev => ({
      ...prev,
      userProfile: savedProfile
    }))
    
    // Show user setup if no profile exists
    if (!savedProfile.name || !savedProfile.age) {
      setShowUserSetup(true)
      setUserForm({ name: savedProfile.name, age: savedProfile.age })
    }
  }, [])

  // Auto-save progress periodically
  useEffect(() => {
    const saveInterval = setInterval(() => {
      if (gameState.userProfile.name) {
        setLocalStorage('empathy-bridge-profile', gameState.userProfile)
        setLocalStorage('empathy-bridge-game-state', {
          currentScenarioId: gameState.currentScenario?.id,
          currentPerspectiveIndex: gameState.currentPerspectiveIndex,
          gamePhase: gameState.gamePhase,
          sessionStartTime: sessionStartTime
        })
      }
    }, 30000) // Save every 30 seconds

    return () => clearInterval(saveInterval)
  }, [gameState, sessionStartTime])

  // Achievement system
  const checkAchievements = useCallback((updatedProfile: UserProfile) => {
    const newAchievements: string[] = []
    
    if (updatedProfile.completedScenarios.length === 1 && !updatedProfile.achievements.includes('First Journey')) {
      newAchievements.push('First Journey')
    }
    if (updatedProfile.completedScenarios.length === 5 && !updatedProfile.achievements.includes('Empathy Explorer')) {
      newAchievements.push('Empathy Explorer')
    }
    if (updatedProfile.empathyGrowth.some(g => g.score >= 90) && !updatedProfile.achievements.includes('Deep Understanding')) {
      newAchievements.push('Deep Understanding')
    }
    if (scenarios.every(s => updatedProfile.completedScenarios.includes(s.id)) && !updatedProfile.achievements.includes('Complete Journey')) {
      newAchievements.push('Complete Journey')
    }

    return [...updatedProfile.achievements, ...newAchievements]
  }, [])

  // Calculate empathy score based on time spent and reflection quality
  const calculateEmpathyScore = useCallback(() => {
    if (!sessionStartTime) return 75

    const timeSpent = (new Date().getTime() - sessionStartTime.getTime()) / 1000 / 60 // minutes
    const reflectionScore = empathyReflection.length > 50 ? 20 : empathyReflection.length > 20 ? 10 : 5
    const timeScore = Math.min(timeSpent * 2, 30) // up to 30 points for time
    
    return Math.min(Math.round(45 + timeScore + reflectionScore), 100)
  }, [sessionStartTime, empathyReflection])

  const setupUser = () => {
    if (!userForm.name.trim() || !userForm.age.trim()) return

    const updatedProfile = {
      ...gameState.userProfile,
      name: userForm.name.trim(),
      age: userForm.age.trim()
    }

    setGameState(prev => ({
      ...prev,
      userProfile: updatedProfile
    }))
    
    setLocalStorage('empathy-bridge-profile', updatedProfile)
    setShowUserSetup(false)
  }

  const startNewScenario = () => {
    const availableScenarios = scenarios.filter(
      s => !gameState.userProfile.completedScenarios.includes(s.id)
    )
    
    if (availableScenarios.length > 0) {
      // Choose scenario based on complexity progression
      const userProgress = gameState.userProfile.completedScenarios.length
      let scenario = availableScenarios[0]
      
      if (userProgress === 0) {
        scenario = availableScenarios.find(s => s.complexity === 'low') || availableScenarios[0]
      } else if (userProgress < 3) {
        scenario = availableScenarios.find(s => s.complexity === 'medium') || availableScenarios[0]
      } else {
        scenario = availableScenarios.find(s => s.complexity === 'high') || availableScenarios[0]
      }

      setGameState(prev => ({
        ...prev,
        currentScenario: scenario,
        currentPerspectiveIndex: 0,
        gamePhase: 'scenario'
      }))
      
      setSessionStartTime(new Date())
      setEmpathyReflection('')
    }
  }

  const nextPerspective = () => {
    if (!gameState.currentScenario || isPaused) return

    if (gameState.currentPerspectiveIndex < gameState.currentScenario.perspectives.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentPerspectiveIndex: prev.currentPerspectiveIndex + 1
      }))
    } else {
      setGameState(prev => ({
        ...prev,
        gamePhase: 'reflection'
      }))
    }
  }

  const completeScenario = () => {
    if (!gameState.currentScenario) return

    const empathyScore = calculateEmpathyScore()
    
    // Save the reflection notes to localStorage
    setLocalStorage(`empathy-reflection-${gameState.currentScenario.id}`, empathyReflection)
    
    const empathyGrowthPoint: EmpathyGrowthPoint = {
      date: new Date().toISOString(),
      score: empathyScore,
      scenario: gameState.currentScenario.title,
      perspective: gameState.currentScenario.perspectives.map(p => p.role).join(', '),
      scenarioId: gameState.currentScenario.id
    }

    const updatedProfile = {
      ...gameState.userProfile,
      completedScenarios: [...gameState.userProfile.completedScenarios, gameState.currentScenario.id],
      empathyGrowth: [...gameState.userProfile.empathyGrowth, empathyGrowthPoint]
    }

    // Check for new achievements
    updatedProfile.achievements = checkAchievements(updatedProfile)

    setLocalStorage('empathy-bridge-profile', updatedProfile)
    
    setGameState(prev => ({
      ...prev,
      userProfile: updatedProfile,
      gamePhase: 'complete'
    }))
  }

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      currentScenario: null,
      currentPerspectiveIndex: 0,
      gamePhase: 'intro'
    }))
    setSessionStartTime(null)
    setEmpathyReflection('')
    setIsPaused(false)
  }

  const selectScenario = (scenarioId: number) => {
    const scenario = scenarios.find(s => s.id === scenarioId)
    if (scenario) {
      setGameState(prev => ({
        ...prev,
        currentScenario: scenario,
        currentPerspectiveIndex: 0,
        gamePhase: 'scenario'
      }))
      setSessionStartTime(new Date())
      setEmpathyReflection('')
    }
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <NavigationBar />
      
      {/* User Setup Modal */}
      {showUserSetup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Welcome! Let's get to know you</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  value={userForm.name}
                  onChange={(e) => setUserForm(prev => ({...prev, name: e.target.value}))}
                  className="input"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Age</label>
                <input
                  type="text"
                  value={userForm.age}
                  onChange={(e) => setUserForm(prev => ({...prev, age: e.target.value}))}
                  className="input"
                  placeholder="e.g., 25 or 20s"
                />
              </div>
              <button
                onClick={setupUser}
                disabled={!userForm.name.trim() || !userForm.age.trim()}
                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Your Empathy Journey
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-8">
        {gameState.gamePhase === 'intro' && (
          <div className="max-w-4xl mx-auto">
            {/* Welcome Header */}
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome{gameState.userProfile.name ? `, ${gameState.userProfile.name}` : ''} to Empathy Bridge
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Build deeper understanding through perspective-taking scenarios from Gaza
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Progress Overview */}
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold">Your Progress</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completed Scenarios:</span>
                    <span className="font-semibold">{gameState.userProfile.completedScenarios.length} / {scenarios.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Achievements:</span>
                    <span className="font-semibold">{gameState.userProfile.achievements.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{width: `${(gameState.userProfile.completedScenarios.length / scenarios.length) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <h2 className="text-xl font-semibold">Recent Achievements</h2>
                </div>
                {gameState.userProfile.achievements.length > 0 ? (
                  <div className="space-y-2">
                    {gameState.userProfile.achievements.slice(-3).map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
                        <Award className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">{achievement}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">Complete scenarios to unlock achievements</p>
                )}
              </div>
            </div>

            {/* Scenario Selection */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-semibold">Choose Your Journey</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {scenarios.map((scenario) => {
                  const isCompleted = gameState.userProfile.completedScenarios.includes(scenario.id)
                  const complexityColor = 
                    scenario.complexity === 'low' ? 'bg-green-100 text-green-800' :
                    scenario.complexity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  
                  return (
                    <div 
                      key={scenario.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        isCompleted ? 'bg-gray-50 border-gray-300' : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
                      }`}
                      onClick={() => !isCompleted && selectScenario(scenario.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`font-semibold text-sm ${isCompleted ? 'text-gray-500' : 'text-gray-800'}`}>
                          {scenario.title}
                        </h3>
                        {isCompleted && <div className="text-green-600 text-xs">✓ Complete</div>}
                      </div>
                      <p className={`text-xs mb-3 ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
                        {scenario.context}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${complexityColor}`}>
                          {scenario.complexity}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" />
                          {scenario.perspectives.length} perspectives
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="text-center">
                <button
                  onClick={startNewScenario}
                  className="btn btn-primary"
                  disabled={gameState.userProfile.completedScenarios.length === scenarios.length}
                >
                  {gameState.userProfile.completedScenarios.length === 0 
                    ? 'Begin Your First Journey' 
                    : gameState.userProfile.completedScenarios.length === scenarios.length
                    ? 'All Scenarios Complete!'
                    : 'Continue Next Scenario'
                  }
                </button>
              </div>
            </div>
          </div>
        )}

        {gameState.gamePhase === 'scenario' && gameState.currentScenario && (
          <div className="max-w-4xl mx-auto">
            {/* Header with controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={resetGame}
                  className="btn btn-secondary flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Home
                </button>
                <button
                  onClick={togglePause}
                  className="btn btn-secondary flex items-center gap-2"
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Scenario {gameState.currentScenario.id} of {scenarios.length}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  gameState.currentScenario.complexity === 'low' ? 'bg-green-100 text-green-800' :
                  gameState.currentScenario.complexity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {gameState.currentScenario.complexity} complexity
                </span>
              </div>
            </div>

            <div className="card mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {gameState.currentScenario.title}
              </h1>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">Context</h3>
                  <p className="text-gray-600 mb-4">{gameState.currentScenario.context}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">Situation</h3>
                  <p className="text-gray-600">{gameState.currentScenario.situation}</p>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Perspective Progress</span>
                  <span>{gameState.currentPerspectiveIndex + 1} / {gameState.currentScenario.perspectives.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{width: `${((gameState.currentPerspectiveIndex + 1) / gameState.currentScenario.perspectives.length) * 100}%`}}
                  ></div>
                </div>
              </div>
            </div>

            <div className={`card ${isPaused ? 'opacity-50' : ''}`}>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold">
                    Perspective: {gameState.currentScenario.perspectives[gameState.currentPerspectiveIndex].role}
                  </h2>
                  <div className="flex items-center gap-2">
                    {gameState.currentScenario.perspectives.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index === gameState.currentPerspectiveIndex 
                            ? 'bg-blue-600' 
                            : index < gameState.currentPerspectiveIndex 
                            ? 'bg-green-500' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-blue-800 font-medium">Background</p>
                  <p className="text-blue-700">{gameState.currentScenario.perspectives[gameState.currentPerspectiveIndex].background}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Thoughts</h4>
                    <p className="text-gray-600">{gameState.currentScenario.perspectives[gameState.currentPerspectiveIndex].thoughts}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Feelings</h4>
                    <p className="text-green-700">{gameState.currentScenario.perspectives[gameState.currentPerspectiveIndex].feelings}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Needs</h4>
                    <p className="text-purple-700">{gameState.currentScenario.perspectives[gameState.currentPerspectiveIndex].needs}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Physical Response</h4>
                    <p className="text-orange-700">{gameState.currentScenario.perspectives[gameState.currentPerspectiveIndex].physiological}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Long-term Impact</h4>
                    <p className="text-red-700">{gameState.currentScenario.perspectives[gameState.currentPerspectiveIndex].longTermImpact}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Take time to deeply consider this perspective before continuing
                </span>
                <button
                  onClick={nextPerspective}
                  disabled={isPaused}
                  className="btn btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {gameState.currentPerspectiveIndex < gameState.currentScenario.perspectives.length - 1 
                    ? 'Next Perspective' 
                    : 'Reflect on Experience'
                  }
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {gameState.gamePhase === 'reflection' && gameState.currentScenario && (
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Reflection Time
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  You've experienced all perspectives in "{gameState.currentScenario.title}". 
                  Take a moment to reflect on what you've learned.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                  Systemic Factors
                </h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {gameState.currentScenario.systemicFactors.map((factor, index) => (
                    <p key={index} className="text-blue-700 text-sm">• {factor}</p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Personal Reflection
                </h3>
                <p className="text-gray-600 mb-4">
                  Reflecting on your experience helps deepen empathy and understanding. Share your thoughts about this scenario:
                </p>
                <textarea
                  value={empathyReflection}
                  onChange={(e) => setEmpathyReflection(e.target.value)}
                  placeholder="What did you learn about these different perspectives? How did experiencing multiple viewpoints change your understanding? What emotions did you feel?"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={6}
                />
                <div className="mt-2 text-sm text-gray-500">
                  {empathyReflection.length > 0 && (
                    <span className={empathyReflection.length >= 50 ? 'text-green-600' : 'text-gray-500'}>
                      {empathyReflection.length} characters • 
                      {empathyReflection.length < 20 ? ' Consider adding more detail for deeper reflection' :
                       empathyReflection.length < 50 ? ' Good start, can you elaborate further?' :
                       ' Excellent reflection! This will contribute to your empathy score.'}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-center space-y-4">
                <button
                  onClick={completeScenario}
                  className="btn btn-primary w-full"
                >
                  Complete Scenario & See Results
                </button>
                <div className="flex gap-4">
                  <button
                    onClick={() => setGameState(prev => ({...prev, gamePhase: 'scenario', currentPerspectiveIndex: 0}))}
                    className="btn btn-secondary flex-1"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Review Perspectives
                  </button>
                  <button
                    onClick={resetGame}
                    className="btn btn-secondary flex-1"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Return Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {gameState.gamePhase === 'complete' && (
          <div className="max-w-3xl mx-auto">
            <div className="card text-center">
              <div className="mb-8">
                <Heart className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Scenario Complete!
                </h2>
                <p className="text-lg text-gray-600">
                  You've successfully explored multiple perspectives. Your empathy journey continues.
                </p>
              </div>

              {/* Empathy Score */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Your Empathy Score
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {gameState.userProfile.empathyGrowth[gameState.userProfile.empathyGrowth.length - 1]?.score || 0}
                </div>
                <p className="text-gray-600">
                  Based on time spent, reflection depth, and engagement
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Progress Update */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    Progress Update
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-green-700">Scenarios Completed:</span>
                      <span className="font-semibold text-green-800">
                        {gameState.userProfile.completedScenarios.length} / {scenarios.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Average Score:</span>
                      <span className="font-semibold text-green-800">
                        {Math.round(gameState.userProfile.empathyGrowth.reduce((sum, g) => sum + g.score, 0) / gameState.userProfile.empathyGrowth.length) || 0}
                      </span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2 mt-4">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-500"
                        style={{width: `${(gameState.userProfile.completedScenarios.length / scenarios.length) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* New Achievements */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                    Achievements
                  </h3>
                  {gameState.userProfile.achievements.length > 0 ? (
                    <div className="space-y-2 text-left">
                      {gameState.userProfile.achievements.slice(-3).map((achievement, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-yellow-100 rounded-lg">
                          <Award className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm font-medium text-yellow-800">{achievement}</span>
                        </div>
                      ))}
                      {gameState.userProfile.achievements.length > 3 && (
                        <p className="text-xs text-yellow-700 text-center mt-2">
                          +{gameState.userProfile.achievements.length - 3} more achievements
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-yellow-700 text-sm">Complete more scenarios to unlock achievements!</p>
                  )}
                </div>
              </div>

              {/* Next Steps */}
              <div className="space-y-4">
                {gameState.userProfile.completedScenarios.length < scenarios.length ? (
                  <button
                    onClick={startNewScenario}
                    className="btn btn-primary w-full"
                  >
                    Continue to Next Scenario
                  </button>
                ) : (
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">
                      Journey Complete! 🎉
                    </h3>
                    <p className="text-purple-700">
                      You've completed all scenarios. You can review any scenario or explore the analytics to see your empathy growth over time.
                    </p>
                  </div>
                )}
                
                <div className="flex gap-4">
                  <button
                    onClick={resetGame}
                    className="btn btn-secondary flex-1 flex items-center justify-center gap-2"
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </button>
                  <button
                    onClick={() => window.location.href = '/analytics'}
                    className="btn btn-secondary flex-1 flex items-center justify-center gap-2"
                  >
                    <Target className="w-4 h-4" />
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}