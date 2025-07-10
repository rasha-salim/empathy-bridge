'use client'

import { useState, useEffect } from 'react'
import { Heart, ArrowRight, Home } from 'lucide-react'
import { scenarios } from '@/lib/scenarios'
import { GameState, UserProfile } from '@/lib/types'
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
  }, [])

  const startNewScenario = () => {
    const availableScenarios = scenarios.filter(
      s => !gameState.userProfile.completedScenarios.includes(s.id)
    )
    
    if (availableScenarios.length > 0) {
      const scenario = availableScenarios[0]
      setGameState(prev => ({
        ...prev,
        currentScenario: scenario,
        currentPerspectiveIndex: 0,
        gamePhase: 'scenario'
      }))
    }
  }

  const nextPerspective = () => {
    if (!gameState.currentScenario) return

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

    const updatedProfile = {
      ...gameState.userProfile,
      completedScenarios: [...gameState.userProfile.completedScenarios, gameState.currentScenario.id],
      empathyGrowth: [...gameState.userProfile.empathyGrowth, {
        date: new Date().toISOString(),
        score: 85,
        scenario: gameState.currentScenario.title,
        perspective: gameState.currentScenario.perspectives[gameState.currentPerspectiveIndex].role
      }]
    }

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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-8">
        {gameState.gamePhase === 'intro' && (
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <Heart className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Empathy Bridge
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Build deeper understanding through perspective-taking scenarios from Gaza
              </p>
            </div>
            
            <div className="card max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
              <p className="text-gray-600 mb-6">
                Experience different perspectives in challenging situations to build empathy and understanding.
              </p>
              <button
                onClick={startNewScenario}
                className="btn btn-primary w-full"
              >
                Begin Your Journey
              </button>
            </div>
          </div>
        )}

        {gameState.gamePhase === 'scenario' && gameState.currentScenario && (
          <div className="max-w-4xl mx-auto">
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
            </div>

            <div className="card">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Perspective: {gameState.currentScenario.perspectives[gameState.currentPerspectiveIndex].role}
                </h2>
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
                  Perspective {gameState.currentPerspectiveIndex + 1} of {gameState.currentScenario.perspectives.length}
                </span>
                <button
                  onClick={nextPerspective}
                  className="btn btn-primary flex items-center gap-2"
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
            <div className="card text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Reflection Time
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                You've experienced all perspectives in "{gameState.currentScenario.title}". 
                Take a moment to reflect on what you've learned.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                  Systemic Factors
                </h3>
                <div className="space-y-2">
                  {gameState.currentScenario.systemicFactors.map((factor, index) => (
                    <p key={index} className="text-blue-700">• {factor}</p>
                  ))}
                </div>
              </div>

              <button
                onClick={completeScenario}
                className="btn btn-primary mr-4"
              >
                Complete Scenario
              </button>
              <button
                onClick={resetGame}
                className="btn btn-secondary"
              >
                Return Home
              </button>
            </div>
          </div>
        )}

        {gameState.gamePhase === 'complete' && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="card">
              <div className="mb-6">
                <Heart className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Scenario Complete!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  You've successfully explored multiple perspectives. Your empathy journey continues.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Your Progress
                </h3>
                <p className="text-green-700">
                  Completed Scenarios: {gameState.userProfile.completedScenarios.length}
                </p>
                <p className="text-green-700">
                  Empathy Growth Points: {gameState.userProfile.empathyGrowth.length}
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={startNewScenario}
                  className="btn btn-primary w-full"
                >
                  Start Next Scenario
                </button>
                <button
                  onClick={resetGame}
                  className="btn btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}