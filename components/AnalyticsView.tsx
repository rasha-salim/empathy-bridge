'use client'

import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { TrendingUp, Award, Clock, Target } from 'lucide-react'
import { UserProfile, AnalyticsData } from '@/lib/types'
import { getLocalStorage, formatDate } from '@/lib/utils'
import { NavigationBar } from './NavigationBar'

export function AnalyticsView() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalScenarios: 0,
    completedScenarios: 0,
    averageEmpathyScore: 0,
    growthOverTime: [],
    achievements: [],
    timeSpent: 0
  })

  useEffect(() => {
    const profile = getLocalStorage<UserProfile>('empathy-bridge-profile', {
      name: '',
      age: '',
      completedScenarios: [],
      empathyGrowth: [],
      achievements: []
    })

    setAnalyticsData({
      totalScenarios: 2, // Total available scenarios
      completedScenarios: profile.completedScenarios.length,
      averageEmpathyScore: profile.empathyGrowth.length > 0 
        ? Math.round(profile.empathyGrowth.reduce((acc, point) => acc + point.score, 0) / profile.empathyGrowth.length)
        : 0,
      growthOverTime: profile.empathyGrowth.map(point => ({
        ...point,
        date: formatDate(point.date)
      })),
      achievements: profile.achievements,
      timeSpent: profile.completedScenarios.length * 15 // Estimate 15 minutes per scenario
    })
  }, [])

  const completionRate = analyticsData.totalScenarios > 0 
    ? Math.round((analyticsData.completedScenarios / analyticsData.totalScenarios) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your Empathy Journey
          </h1>
          <p className="text-gray-600">
            Track your progress and growth in understanding different perspectives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Scenarios Completed</p>
                <p className="text-2xl font-bold text-gray-800">
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
              <p className="text-sm text-gray-500 mt-1">{completionRate}% Complete</p>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Average Empathy Score</p>
                <p className="text-2xl font-bold text-gray-800">
                  {analyticsData.averageEmpathyScore}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {analyticsData.averageEmpathyScore >= 80 ? 'Excellent' : 
               analyticsData.averageEmpathyScore >= 60 ? 'Good' : 'Growing'}
            </p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Time Invested</p>
                <p className="text-2xl font-bold text-gray-800">
                  {analyticsData.timeSpent}m
                </p>
              </div>
              <Clock className="w-8 h-8 text-warning" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Learning time this month
            </p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Achievements</p>
                <p className="text-2xl font-bold text-gray-800">
                  {analyticsData.achievements.length}
                </p>
              </div>
              <Award className="w-8 h-8 text-accent" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Milestones unlocked
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Empathy Growth Over Time
            </h3>
            {analyticsData.growthOverTime.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analyticsData.growthOverTime}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                <p>Complete scenarios to see your growth</p>
              </div>
            )}
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Perspective Insights
            </h3>
            {analyticsData.growthOverTime.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analyticsData.growthOverTime}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="perspective" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                <p>Complete scenarios to see perspective insights</p>
              </div>
            )}
          </div>
        </div>

        {analyticsData.growthOverTime.length > 0 && (
          <div className="card mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {analyticsData.growthOverTime.slice(-5).map((point, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{point.scenario}</p>
                    <p className="text-sm text-gray-600">
                      Perspective: {point.perspective}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary">{point.score}</p>
                    <p className="text-sm text-gray-500">{point.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {analyticsData.completedScenarios === 0 && (
          <div className="card mt-8 text-center">
            <div className="max-w-md mx-auto">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Start Your Journey
              </h3>
              <p className="text-gray-600 mb-6">
                Complete your first scenario to begin tracking your empathy growth and insights.
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