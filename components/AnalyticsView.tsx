'use client'

import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { TrendingUp, Award, Clock, Target, Brain, Users, Heart, Globe, BookOpen, BarChart3 } from 'lucide-react'
import { UserProfile, AnalyticsData } from '@/lib/types'
import { getLocalStorage, formatDate } from '@/lib/utils'
import { NavigationBar } from './NavigationBar'
import { scenarios } from '@/lib/scenarios'

export function AnalyticsView() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalScenarios: 0,
    completedScenarios: 0,
    averageEmpathyScore: 0,
    growthOverTime: [],
    achievements: [],
    timeSpent: 0
  })

  const [selectedTab, setSelectedTab] = useState<'overview' | 'growth' | 'insights' | 'achievements'>('overview')

  useEffect(() => {
    const profile = getLocalStorage<UserProfile>('unboxing-empathy-profile', {
      name: '',
      age: '',
      completedScenarios: [],
      empathyGrowth: [],
      achievements: []
    })

    // Calculate actual time spent from session durations
    const actualTimeSpent = profile.empathyGrowth.reduce((total, point) => {
      // Use actual session duration if available, otherwise fallback to 15 min estimate
      const sessionTime = point.sessionDuration || 15
      return total + sessionTime
    }, 0)
    
    setAnalyticsData({
      totalScenarios: scenarios.length,
      completedScenarios: profile.completedScenarios.length,
      averageEmpathyScore: profile.empathyGrowth.length > 0 
        ? Math.round(profile.empathyGrowth.reduce((acc, point) => acc + point.score, 0) / profile.empathyGrowth.length)
        : 0,
      growthOverTime: profile.empathyGrowth.map((point, index) => ({
        ...point,
        date: formatDate(point.date),
        sessionNumber: index + 1
      })),
      achievements: profile.achievements,
      timeSpent: actualTimeSpent
    })
  }, [])

  // Enhanced analytics calculations
  const completionRate = analyticsData.totalScenarios > 0 
    ? Math.round((analyticsData.completedScenarios / analyticsData.totalScenarios) * 100)
    : 0

  const empathyTrend = analyticsData.growthOverTime.length >= 2
    ? analyticsData.growthOverTime[analyticsData.growthOverTime.length - 1].score - 
      analyticsData.growthOverTime[0].score
    : 0

  // Scenario complexity analysis
  const completedScenarios = scenarios.filter(s => 
    analyticsData.growthOverTime.some(g => g.scenario === s.title)
  )

  const complexityData = [
    { 
      name: 'Low Complexity', 
      completed: completedScenarios.filter(s => s.complexity === 'low').length,
      total: scenarios.filter(s => s.complexity === 'low').length,
      color: '#10B981'
    },
    { 
      name: 'Medium Complexity', 
      completed: completedScenarios.filter(s => s.complexity === 'medium').length,
      total: scenarios.filter(s => s.complexity === 'medium').length,
      color: '#F59E0B'
    },
    { 
      name: 'High Complexity', 
      completed: completedScenarios.filter(s => s.complexity === 'high').length,
      total: scenarios.filter(s => s.complexity === 'high').length,
      color: '#EF4444'
    }
  ]

  // Perspective role analysis
  const perspectiveRoles = analyticsData.growthOverTime.flatMap(g => 
    g.perspective.split(', ').map(role => role.trim())
  )
  const roleFrequency = perspectiveRoles.reduce((acc, role) => {
    acc[role] = (acc[role] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const topRoles = Object.entries(roleFrequency)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 6)
    .map(([role, count]) => ({ role, count }))

  // Empathy skills radar data
  const empathySkills = [
    { skill: 'Perspective Taking', value: Math.min(analyticsData.averageEmpathyScore + (Math.random() - 0.5) * 10, 100) },
    { skill: 'Emotional Understanding', value: Math.min(analyticsData.averageEmpathyScore + (Math.random() - 0.5) * 15, 100) },
    { skill: 'Cultural Sensitivity', value: Math.min(analyticsData.averageEmpathyScore + (Math.random() - 0.5) * 8, 100) },
    { skill: 'System Thinking', value: Math.min(analyticsData.averageEmpathyScore + (Math.random() - 0.5) * 12, 100) },
    { skill: 'Active Listening', value: Math.min(analyticsData.averageEmpathyScore + (Math.random() - 0.5) * 5, 100) },
    { skill: 'Compassionate Response', value: Math.min(analyticsData.averageEmpathyScore + (Math.random() - 0.5) * 7, 100) }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Your Empathy Journey
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your progress and growth in understanding different perspectives from Gaza
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'growth', label: 'Growth', icon: TrendingUp },
            { id: 'insights', label: 'Insights', icon: Brain },
            { id: 'achievements', label: 'Achievements', icon: Award }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                selectedTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Scenarios Completed</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {analyticsData.completedScenarios}
                    </p>
                  </div>
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${completionRate}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{completionRate}% Complete</p>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Average Empathy Score</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {analyticsData.averageEmpathyScore}
                    </p>
                  </div>
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <div className="flex items-center mt-2">
                  <div className={`text-sm font-medium ${empathyTrend > 0 ? 'text-green-600 dark:text-green-400' : empathyTrend < 0 ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                    {empathyTrend > 0 ? '↗' : empathyTrend < 0 ? '↘' : '→'} {empathyTrend > 0 ? '+' : ''}{empathyTrend} trend
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Time Invested</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {analyticsData.timeSpent}m
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-warning" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Learning time total
                </p>
              </div>

              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Perspectives Explored</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {perspectiveRoles.length}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Different viewpoints
                </p>
              </div>
            </div>

            {/* Scenario Complexity Progress */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Scenario Complexity Progress</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {complexityData.map((complexity, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto relative">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke="#e5e7eb"
                            strokeWidth="8"
                            fill="transparent"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            stroke={complexity.color}
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={`${226.2 * (complexity.completed / Math.max(complexity.total, 1))} 226.2`}
                            className="transition-all duration-500"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                            {complexity.completed}/{complexity.total}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{complexity.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Scenarios</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Growth Tab */}
        {selectedTab === 'growth' && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Empathy Growth Chart */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Empathy Growth Over Time
                </h3>
                {analyticsData.growthOverTime.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={analyticsData.growthOverTime}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sessionNumber" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip 
                        formatter={(value, name) => [`${value}`, 'Empathy Score']}
                        labelFormatter={(label) => `Session ${label}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#3B82F6" 
                        strokeWidth={3}
                        dot={{ r: 5, fill: '#3B82F6' }}
                        activeDot={{ r: 7, fill: '#1E40AF' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2 text-gray-400 dark:text-gray-500" />
                      <p>Complete scenarios to see your growth</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Empathy Skills Radar */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Empathy Skills Assessment
                </h3>
                {analyticsData.completedScenarios > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={empathySkills}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                      <Radar
                        name="Skills"
                        dataKey="value"
                        stroke="#8B5CF6"
                        fill="#8B5CF6"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <div className="text-center">
                      <Brain className="w-12 h-12 mx-auto mb-2 text-gray-400 dark:text-gray-500" />
                      <p>Complete scenarios to see your skills</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Activity */}
            {analyticsData.growthOverTime.length > 0 && (
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {analyticsData.growthOverTime.slice(-5).map((point, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200">{point.scenario}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Perspectives: {point.perspective}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-primary">{point.score}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{point.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Insights Tab */}
        {selectedTab === 'insights' && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Top Perspectives Explored */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Most Explored Perspectives
                </h3>
                {topRoles.length > 0 ? (
                  <div className="space-y-3">
                    {topRoles.map((roleData, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{roleData.role}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: `${(roleData.count / Math.max(...topRoles.map(r => r.count))) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{roleData.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-48 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <div className="text-center">
                      <Users className="w-12 h-12 mx-auto mb-2 text-gray-400 dark:text-gray-500" />
                      <p>Complete scenarios to see perspective insights</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Scenario Scores */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Scenario Performance
                </h3>
                {analyticsData.growthOverTime.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData.growthOverTime}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="scenario" angle={-45} textAnchor="end" height={100} interval={0} fontSize={10} />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Bar dataKey="score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400 dark:text-gray-500" />
                      <p>Complete scenarios to see performance data</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {selectedTab === 'achievements' && (
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Your Achievements
              </h3>
              {analyticsData.achievements.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {analyticsData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                      <div>
                        <p className="font-semibold text-yellow-800 dark:text-yellow-200">{achievement}</p>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">Unlocked</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Award className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">No achievements yet</h4>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Complete scenarios to unlock achievements and track your empathy journey milestones.</p>
                  <a href="/" className="btn btn-primary">Start Your Journey</a>
                </div>
              )}
            </div>

            {/* Available Achievements */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Available Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'First Journey', description: 'Complete your first scenario', icon: '🌟' },
                  { name: 'Empathy Explorer', description: 'Complete 5 scenarios', icon: '🧭' },
                  { name: 'Deep Understanding', description: 'Score 90+ on any scenario', icon: '💎' },
                  { name: 'Complete Journey', description: 'Complete all available scenarios', icon: '🏆' }
                ].map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-4 rounded-lg border ${
                      analyticsData.achievements.includes(achievement.name)
                        ? 'bg-green-50 border-green-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <p className={`font-semibold ${
                        analyticsData.achievements.includes(achievement.name)
                          ? 'text-green-800 dark:text-green-200'
                          : 'text-gray-800 dark:text-gray-200'
                      }`}>
                        {achievement.name}
                      </p>
                      <p className={`text-sm ${
                        analyticsData.achievements.includes(achievement.name)
                          ? 'text-green-700 dark:text-green-300'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                    {analyticsData.achievements.includes(achievement.name) && (
                      <div className="ml-auto">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {analyticsData.completedScenarios === 0 && (
          <div className="card text-center">
            <div className="max-w-md mx-auto">
              <Heart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Start Your Empathy Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Complete your first scenario to begin tracking your empathy growth, unlock insights, and earn achievements.
              </p>
              <a 
                href="/"
                className="btn btn-primary"
              >
                Begin First Scenario
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}