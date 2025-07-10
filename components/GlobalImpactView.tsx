'use client'

import { useState, useEffect } from 'react'
import { Globe, Users, Heart, ExternalLink, DollarSign, BookOpen } from 'lucide-react'
import { NavigationBar } from './NavigationBar'

interface GlobalStats {
  totalUsers: number
  completedScenarios: number
  averageEmpathyGrowth: number
  countriesReached: number
}

export function GlobalImpactView() {
  const [globalStats, setGlobalStats] = useState<GlobalStats>({
    totalUsers: 0,
    completedScenarios: 0,
    averageEmpathyGrowth: 0,
    countriesReached: 0
  })

  useEffect(() => {
    // Simulate global stats (in real app, this would come from an API)
    setGlobalStats({
      totalUsers: 1247,
      completedScenarios: 3891,
      averageEmpathyGrowth: 78,
      countriesReached: 34
    })
  }, [])

  const organizations = [
    {
      name: "UNRWA",
      description: "United Nations Relief and Works Agency for Palestine Refugees",
      url: "https://www.unrwa.org/",
      type: "humanitarian"
    },
    {
      name: "Doctors Without Borders",
      description: "Providing medical assistance in Gaza",
      url: "https://www.doctorswithoutborders.org/",
      type: "medical"
    },
    {
      name: "World Food Programme",
      description: "Fighting hunger and providing food assistance",
      url: "https://www.wfp.org/",
      type: "humanitarian"
    },
    {
      name: "UNICEF",
      description: "Protecting children's rights and providing humanitarian aid",
      url: "https://www.unicef.org/",
      type: "children"
    }
  ]

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Global Impact
          </h1>
          <p className="text-gray-600">
            See how our global community is building empathy and taking action
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Global Users</p>
                <p className="text-2xl font-bold text-gray-800">
                  {globalStats.totalUsers.toLocaleString()}
                </p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              People building empathy
            </p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Scenarios Completed</p>
                <p className="text-2xl font-bold text-gray-800">
                  {globalStats.completedScenarios.toLocaleString()}
                </p>
              </div>
              <BookOpen className="w-8 h-8 text-success" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Perspectives explored
            </p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Average Growth</p>
                <p className="text-2xl font-bold text-gray-800">
                  {globalStats.averageEmpathyGrowth}%
                </p>
              </div>
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Empathy improvement
            </p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Countries Reached</p>
                <p className="text-2xl font-bold text-gray-800">
                  {globalStats.countriesReached}
                </p>
              </div>
              <Globe className="w-8 h-8 text-warning" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Global community
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Why This Matters
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Building Understanding
                </h4>
                <p className="text-blue-700">
                  Each scenario completed helps break down barriers and builds bridges between different communities and perspectives.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">
                  Real-World Impact
                </h4>
                <p className="text-green-700">
                  Users report increased awareness of global issues and higher likelihood to support humanitarian causes.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">
                  Educational Value
                </h4>
                <p className="text-purple-700">
                  Educational institutions use Empathy Bridge to teach perspective-taking and global citizenship.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How You Can Help
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">
                  Share Your Journey
                </h4>
                <p className="text-amber-700">
                  Share your empathy journey with friends and family to expand our impact.
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">
                  Support Organizations
                </h4>
                <p className="text-red-700">
                  Consider donating to humanitarian organizations working in Gaza and other conflict zones.
                </p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">
                  Advocate for Change
                </h4>
                <p className="text-indigo-700">
                  Use your voice to advocate for peaceful solutions and humanitarian aid.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Organizations Making a Difference
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((org, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(org.type)}
                    <h4 className="font-semibold text-gray-800">{org.name}</h4>
                  </div>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{org.description}</p>
                <div className="flex gap-2">
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center gap-2 text-sm"
                  >
                    <DollarSign className="w-4 h-4" />
                    Support
                  </a>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary text-sm"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Together, We Can Build a More Empathetic World
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every perspective explored, every story understood, and every action taken brings us closer to a world where empathy guides our response to human suffering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="btn btn-primary"
            >
              Continue Your Journey
            </a>
            <a
              href="/analytics"
              className="btn btn-secondary"
            >
              View Your Impact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}