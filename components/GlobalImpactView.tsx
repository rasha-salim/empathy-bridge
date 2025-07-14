'use client'

import { useState, useEffect } from 'react'
import { Globe, Users, Heart, ExternalLink, DollarSign, BookOpen, TrendingUp, MapPin, Share2, MessageCircle, Calendar, Video, FileText, Phone, Mail, Lightbulb, Target, Award, Clock, Plus, Edit2, Trash2, Save, X, Smartphone, Download } from 'lucide-react'
import { NavigationBar } from './NavigationBar'
import { getLocalStorage, setLocalStorage } from '@/lib/utils'
import { scenarios } from '@/lib/scenarios'
import { newsItems, actionItems, organizations, educationalResources, mentalHealthResources, actionApps, PersonalDonation } from '@/lib/resources'

interface GlobalStats {
  totalUsers: number
  completedScenarios: number
  averageEmpathyGrowth: number
  countriesReached: number
  totalPerspectives: number
  activeToday: number
  weeklyGrowth: number
  communityScore: number
}


export function GlobalImpactView() {
  const [globalStats, setGlobalStats] = useState<GlobalStats>({
    totalUsers: 0,
    completedScenarios: 0,
    averageEmpathyGrowth: 0,
    countriesReached: 0,
    totalPerspectives: 0,
    activeToday: 0,
    weeklyGrowth: 0,
    communityScore: 0
  })

  const [selectedTab, setSelectedTab] = useState<'overview' | 'news' | 'actions' | 'resources' | 'donations'>('overview')
  const [userContribution, setUserContribution] = useState({ scenariosCompleted: 0, empathyScore: 0 })
  const [showReflectionModal, setShowReflectionModal] = useState(false)

  useEffect(() => {
    // Get user's contribution data
    const userProfile = getLocalStorage('empathy-bridge-profile', {
      completedScenarios: [],
      empathyGrowth: []
    })
    
    const avgScore = userProfile.empathyGrowth.length > 0
      ? userProfile.empathyGrowth.reduce((sum: number, g: any) => sum + g.score, 0) / userProfile.empathyGrowth.length
      : 0

    setUserContribution({
      scenariosCompleted: userProfile.completedScenarios.length,
      empathyScore: Math.round(avgScore)
    })

    // Simulate enhanced global stats
    setGlobalStats({
      totalUsers: 2847,
      completedScenarios: 8931,
      averageEmpathyGrowth: 82,
      countriesReached: 67,
      totalPerspectives: scenarios.reduce((sum, s) => sum + s.perspectives.length, 0) * 2847,
      activeToday: 156,
      weeklyGrowth: 12.5,
      communityScore: 87
    })
  }, [])


  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'medical':
        return <Heart className="w-5 h-5 text-red-500" />
      case 'humanitarian':
        return <Globe className="w-5 h-5 text-blue-500" />
      case 'children':
        return <Users className="w-5 h-5 text-purple-500" />
      default:
        return <Heart className="w-5 h-5 text-gray-500" />
    }
  }

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'petition':
        return <MessageCircle className="w-5 h-5 text-blue-500" />
      case 'donation':
        return <DollarSign className="w-5 h-5 text-green-500" />
      case 'volunteer':
        return <Users className="w-5 h-5 text-purple-500" />
      case 'awareness':
        return <Share2 className="w-5 h-5 text-orange-500" />
      default:
        return <Target className="w-5 h-5 text-gray-500" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'high':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Personal Impact & Action
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your personal empathy journey and discover ways to take meaningful action
          </p>
          
          {/* User Contribution Banner */}
          {userContribution.scenariosCompleted > 0 && (
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200">
                    Your Contribution: {userContribution.scenariosCompleted} scenarios completed
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Average empathy score: {userContribution.empathyScore} • Thank you for building understanding!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg shadow-sm">
          {[
            { id: 'overview', label: 'Personal Journey', icon: Globe },
            { id: 'news', label: 'Latest News', icon: FileText },
            { id: 'actions', label: 'Take Action', icon: Target },
            { id: 'donations', label: 'My Donations', icon: Heart },
            { id: 'resources', label: 'Resources', icon: BookOpen }
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
            {/* Personal Journey Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Scenarios Completed</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {userContribution.scenariosCompleted}
                    </p>
                  </div>
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  of {scenarios.length} total scenarios
                </p>
              </div>

              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Perspectives Explored</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {userContribution.scenariosCompleted * 4}
                    </p>
                  </div>
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Different viewpoints experienced
                </p>
              </div>

              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Empathy Score</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {userContribution.empathyScore || 0}%
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Your latest assessment
                </p>
              </div>

              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Days Active</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {userContribution.scenariosCompleted > 0 ? Math.max(1, Math.ceil(userContribution.scenariosCompleted / 2)) : 0}
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-warning" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Building understanding over time
                </p>
              </div>
            </div>

            {/* Personal Growth & Reflection */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Your Growth Journey
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Perspective Development
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      {userContribution.scenariosCompleted > 0 
                        ? `You've explored ${userContribution.scenariosCompleted * 4} different perspectives, developing deeper understanding of complex human experiences.`
                        : "Begin your journey to explore multiple perspectives and develop empathy through real-world scenarios."
                      }
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Emotional Intelligence
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      {userContribution.empathyScore > 0
                        ? `Your current empathy score of ${userContribution.empathyScore}% reflects your growing ability to understand and connect with others' experiences.`
                        : "Track your emotional intelligence development as you progress through scenarios."
                      }
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Personal Transformation
                    </h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      {userContribution.scenariosCompleted > 2
                        ? "You're building a foundation of empathy that extends beyond these scenarios into your daily interactions and worldview."
                        : "Continue exploring to experience personal growth and transformation through empathy building."
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Next Steps in Your Journey
                </h3>
                <div className="space-y-4">
                  {userContribution.scenariosCompleted < scenarios.length && (
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Continue Learning</h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">
                        You have {scenarios.length - userContribution.scenariosCompleted} more scenarios to explore.
                      </p>
                      <a href="/" className="text-yellow-600 dark:text-yellow-400 text-sm font-medium hover:underline">
                        Continue Your Journey →
                      </a>
                    </div>
                  )}
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Reflect & Apply</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Take time to reflect on what you've learned and how these insights apply to your daily life and relationships.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Take Action</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Channel your growing empathy into meaningful action that can help those experiencing the situations you've explored.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Tab */}
        {selectedTab === 'news' && (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Latest Updates on Gaza
              </h3>
              <div className="space-y-4">
                {newsItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      item.type === 'news' ? 'bg-blue-100' :
                      item.type === 'report' ? 'bg-green-100' :
                      'bg-purple-100'
                    }`}>
                      {item.type === 'news' ? <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" /> :
                       item.type === 'report' ? <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400" /> :
                       <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>{item.source}</span>
                        <span>•</span>
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1"
                      >
                        Read More <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Stay Informed
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Follow Reliable Sources</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                    Stay updated with verified news from UN agencies and established humanitarian organizations.
                  </p>
                  <div className="space-y-1">
                    <a href="https://www.un.org/news" target="_blank" className="block text-blue-600 dark:text-blue-400 text-sm hover:underline">UN News</a>
                    <a href="https://www.unrwa.org/newsroom" target="_blank" className="block text-blue-600 dark:text-blue-400 text-sm hover:underline">UNRWA Updates</a>
                    <a href="https://www.reuters.com/world/middle-east/" target="_blank" className="block text-blue-600 dark:text-blue-400 text-sm hover:underline">Reuters Middle East</a>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Critical Thinking</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Always verify information from multiple sources and be aware of bias in reporting. Focus on humanitarian impact and human stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions Tab */}
        {selectedTab === 'actions' && (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Take Action for Gaza
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {actionItems.map((action) => (
                  <div key={action.id} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 mb-4">
                      {getActionIcon(action.type)}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{action.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{action.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(action.difficulty)}`}>
                        {action.difficulty}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {action.timeRequired}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {action.impact}
                      </span>
                    </div>
                    
                    <a
                      href={action.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Take Action <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Apps & Tools Section */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Action Apps & Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Essential apps and tools to support boycotts, ethical consumption, and staying informed about your impact.
              </p>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                {actionApps.map((app) => (
                  <div key={app.id} className="p-6 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{app.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{app.description}</p>
                        
                        <div className="mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            app.category === 'boycott' ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300' :
                            app.category === 'ethical_consumption' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300' :
                            app.category === 'activism' ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300' :
                            'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
                          }`}>
                            {app.category.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2 text-sm">Key Features:</h5>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {app.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Download Links */}
                    <div className="flex flex-wrap gap-2">
                      {app.platforms.web && (
                        <a
                          href={app.platforms.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary text-xs flex items-center gap-1 flex-1 justify-center"
                        >
                          <Globe className="w-3 h-3" />
                          Web App
                        </a>
                      )}
                      {app.platforms.android && (
                        <a
                          href={app.platforms.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary text-xs flex items-center gap-1 flex-1 justify-center"
                        >
                          <Download className="w-3 h-3" />
                          Android
                        </a>
                      )}
                      {app.platforms.ios && (
                        <a
                          href={app.platforms.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary text-xs flex items-center gap-1 flex-1 justify-center"
                        >
                          <Download className="w-3 h-3" />
                          iOS
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Humanitarian Organizations
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizations.map((org, index) => (
                  <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      {getTypeIcon(org.type)}
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{org.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            org.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                            org.urgency === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {org.urgency}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-2">{org.focus}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{org.description}</p>
                    <div className="flex gap-2">
                      <a
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-xs flex-1 text-center"
                      >
                        Donate
                      </a>
                      <a
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Donations Tab */}
        {selectedTab === 'donations' && <PersonalDonationsTab />}

        {/* Resources Tab */}
        {selectedTab === 'resources' && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Educational Resources
                </h3>
                <div className="space-y-4">
                  {educationalResources.map((resource) => (
                    <div key={resource.id} className={`p-4 rounded-lg ${
                      resource.category === 'historical' ? 'bg-blue-50' :
                      resource.category === 'documentary' ? 'bg-green-50' :
                      resource.category === 'peace' ? 'bg-purple-50' :
                      'bg-gray-50'
                    }`}>
                      <h4 className={`font-semibold mb-2 flex items-center gap-2 ${
                        resource.category === 'historical' ? 'text-blue-800 dark:text-blue-200' :
                        resource.category === 'documentary' ? 'text-green-800 dark:text-green-200' :
                        resource.category === 'peace' ? 'text-purple-800 dark:text-purple-200' :
                        'text-gray-800 dark:text-gray-200'
                      }`}>
                        {resource.icon === 'BookOpen' && <BookOpen className="w-4 h-4" />}
                        {resource.icon === 'Video' && <Video className="w-4 h-4" />}
                        {resource.icon === 'Users' && <Users className="w-4 h-4" />}
                        {resource.title}
                      </h4>
                      <p className={`text-sm mb-2 ${
                        resource.category === 'historical' ? 'text-blue-700 dark:text-blue-300' :
                        resource.category === 'documentary' ? 'text-green-700 dark:text-green-300' :
                        resource.category === 'peace' ? 'text-purple-700 dark:text-purple-300' :
                        'text-gray-700 dark:text-gray-300'
                      }`}>
                        {resource.description}
                      </p>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-sm hover:underline ${
                          resource.category === 'historical' ? 'text-blue-600 dark:text-blue-400' :
                          resource.category === 'documentary' ? 'text-green-600 dark:text-green-400' :
                          resource.category === 'peace' ? 'text-purple-600 dark:text-purple-400' :
                          'text-gray-600 dark:text-gray-400'
                        }`}>
                      >
                        Learn More →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Mental Health & Self-Care
                </h3>
                <div className="space-y-4">
                  {mentalHealthResources.map((resource, index) => (
                    <div key={index} className={`p-4 rounded-lg ${
                      resource.type === 'warning' ? 'bg-yellow-50' :
                      resource.type === 'crisis' ? 'bg-red-50' :
                      'bg-green-50'
                    }`}>
                      <h4 className={`font-semibold mb-2 ${
                        resource.type === 'warning' ? 'text-yellow-800 dark:text-yellow-200' :
                        resource.type === 'crisis' ? 'text-red-800 dark:text-red-200' :
                        'text-green-800 dark:text-green-200'
                      }`}>
                        {resource.title}
                      </h4>
                      <p className={`text-sm ${
                        resource.type === 'warning' ? 'text-yellow-700 dark:text-yellow-300' :
                        resource.type === 'crisis' ? 'text-red-700 dark:text-red-300' :
                        'text-green-700 dark:text-green-300'
                      }`}>
                        {resource.description}
                      </p>
                      {resource.type === 'crisis' && resource.resources && (
                        <div className="space-y-2 text-sm mt-2">
                          {resource.resources.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2 text-red-700 dark:text-red-300">
                              <Phone className="w-3 h-3" />
                              <span>{item.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="card text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Your Empathy Journey Continues
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            Every perspective explored, every story understood, and every action taken builds your capacity for empathy and understanding. This is your personal journey of growth and transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="btn btn-primary">
              Continue Learning
            </a>
            <a href="/analytics" className="btn btn-secondary">
              Track Your Progress
            </a>
            <button 
              onClick={() => setShowReflectionModal(true)}
              className="btn btn-secondary flex items-center gap-2"
            >
              <Lightbulb className="w-4 h-4" />
              Reflect on Your Growth
            </button>
          </div>
        </div>
      </div>

      {/* Reflection Modal */}
      {showReflectionModal && <ReflectionModal onClose={() => setShowReflectionModal(false)} />}
    </div>
  )
}

// Reflection Modal Component
function ReflectionModal({ onClose }: { onClose: () => void }) {
  const [reflections, setReflections] = useState<Array<{
    scenarioId: number
    scenarioTitle: string
    reflection: string
    date: string
    empathyScore: number
  }>>([])

  useEffect(() => {
    // Get all completed scenarios with their reflections
    const userProfile = getLocalStorage('empathy-bridge-profile', {
      completedScenarios: [],
      empathyGrowth: []
    })

    const reflectionData = userProfile.completedScenarios.map((scenarioId: number) => {
      const scenario = scenarios.find(s => s.id === scenarioId)
      const reflection = getLocalStorage(`empathy-reflection-${scenarioId}`, '')
      const empathyGrowth = userProfile.empathyGrowth.find((g: any) => g.scenarioId === scenarioId)
      
      return {
        scenarioId,
        scenarioTitle: scenario?.title || `Scenario ${scenarioId}`,
        reflection,
        date: empathyGrowth?.date || new Date().toISOString(),
        empathyScore: empathyGrowth?.score || 0
      }
    }).filter(r => r.reflection.trim() !== '')

    setReflections(reflectionData)
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Your Empathy Journey Reflections
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-gray-500 dark:text-gray-400 rotate-45" />
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A personal collection of your thoughts and insights from each scenario
          </p>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {reflections.length === 0 ? (
            <div className="text-center py-12">
              <Lightbulb className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">No Reflections Yet</h3>
              <p className="text-gray-400">
                Complete some scenarios and write your reflections to see them here
              </p>
              <button
                onClick={onClose}
                className="mt-4 btn btn-primary"
              >
                Start a Scenario
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {reflections.map((reflection, index) => (
                <div key={reflection.scenarioId} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {reflection.scenarioTitle}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{new Date(reflection.date).toLocaleDateString()}</span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4 text-red-500" />
                          Empathy Score: {reflection.empathyScore}%
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded">
                      #{index + 1}
                    </span>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                      {reflection.reflection}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {reflections.length} reflection{reflections.length !== 1 ? 's' : ''} in your journey
            </p>
            <button
              onClick={onClose}
              className="btn btn-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Personal Donations Tab Component
function PersonalDonationsTab() {
  const [donations, setDonations] = useState<PersonalDonation[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    const savedDonations = getLocalStorage<PersonalDonation[]>('empathy-bridge-donations', [])
    setDonations(savedDonations)
  }, [])

  const saveDonations = (newDonations: PersonalDonation[]) => {
    setDonations(newDonations)
    setLocalStorage('empathy-bridge-donations', newDonations)
  }

  const addDonation = (donation: Omit<PersonalDonation, 'id'>) => {
    const newDonation: PersonalDonation = {
      ...donation,
      id: Date.now().toString(),
      dateAdded: new Date().toISOString()
    }
    const updatedDonations = [...donations, newDonation]
    saveDonations(updatedDonations)
    setShowAddForm(false)
  }

  const editDonation = (id: string, updatedDonation: Omit<PersonalDonation, 'id'>) => {
    const updatedDonations = donations.map(d => 
      d.id === id ? { ...updatedDonation, id, dateAdded: d.dateAdded, lastVisited: d.lastVisited } : d
    )
    saveDonations(updatedDonations)
    setEditingId(null)
  }

  const deleteDonation = (id: string) => {
    const updatedDonations = donations.filter(d => d.id !== id)
    saveDonations(updatedDonations)
  }

  const totalCampaigns = donations.length
  const campaignsByCategory = donations.reduce((acc, d) => {
    acc[d.category] = (acc[d.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Saved Campaigns</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalCampaigns}</p>
            </div>
            <BookOpen className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Most Recent</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {donations.length > 0 ? new Date(Math.max(...donations.map(d => new Date(d.dateAdded).getTime()))).toLocaleDateString() : 'None'}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Categories</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {Object.keys(campaignsByCategory).length || 0}
              </p>
            </div>
            <Target className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Add Campaign Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Fundraising Campaigns</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Campaign
        </button>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingId) && (
        <DonationForm 
          donation={editingId ? donations.find(d => d.id === editingId) : undefined}
          onSave={editingId ? (data) => editDonation(editingId, data) : addDonation}
          onCancel={() => {
            setShowAddForm(false)
            setEditingId(null)
          }}
        />
      )}

      {/* Campaigns List */}
      {donations.length === 0 ? (
        <div className="card text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">No Campaigns Yet</h3>
          <p className="text-gray-400 dark:text-gray-500 mb-4">
            Save fundraising campaigns (GoFundMe, etc.) that you want to support
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="btn btn-primary"
          >
            Add Your First Campaign
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {donations.map((donation) => (
            <div key={donation.id} className="card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{donation.recipientName}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    donation.category === 'individual' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300' :
                    donation.category === 'family' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300' :
                    donation.category === 'community' ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300' :
                    'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300'
                  }`}>
                    {donation.category}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingId(donation.id)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    <Edit2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button
                    onClick={() => deleteDonation(donation.id)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    <Trash2 className="w-4 h-4 text-red-500 dark:text-red-400" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Added:</span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">{new Date(donation.dateAdded).toLocaleDateString()}</span>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={donation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      // Update last visited timestamp
                      const updatedDonations = donations.map(d => 
                        d.id === donation.id ? { ...d, lastVisited: new Date().toISOString() } : d
                      )
                      saveDonations(updatedDonations)
                    }}
                    className="btn btn-primary flex-1 text-center flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Campaign
                  </a>
                </div>
                
                {donation.notes && (
                  <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300">
                    {donation.notes}
                  </div>
                )}
                
                {donation.lastVisited && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Last visited: {new Date(donation.lastVisited).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Donation Form Component
function DonationForm({ 
  donation, 
  onSave, 
  onCancel 
}: {
  donation?: PersonalDonation
  onSave: (donation: Omit<PersonalDonation, 'id'>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    recipientName: donation?.recipientName || '',
    category: donation?.category || 'individual' as PersonalDonation['category'],
    url: donation?.url || '',
    notes: donation?.notes || ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.recipientName || !formData.url) {
      return
    }
    onSave(formData)
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {donation ? 'Edit Campaign' : 'Add New Campaign'}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Recipient Name *
            </label>
            <input
              type="text"
              value={formData.recipientName}
              onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
              placeholder="e.g., Sarah Johnson, Johnson Family, Gaza Medical Team"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value as PersonalDonation['category']})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="individual">Individual</option>
              <option value="family">Family</option>
              <option value="community">Community</option>
              <option value="organization">Organization</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Campaign URL *
          </label>
          <input
            type="url"
            value={formData.url}
            onChange={(e) => setFormData({...formData, url: e.target.value})}
            placeholder="https://www.gofundme.com/campaign-name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            GoFundMe, Kickstarter, JustGiving, or other fundraising platform URL
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Notes (Optional)
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            placeholder="Why you want to support this campaign, personal connection, etc."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="btn btn-primary flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {donation ? 'Update' : 'Add'} Campaign
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}