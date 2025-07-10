'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, BarChart3, Globe, Home } from 'lucide-react'

export function NavigationBar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Game', icon: Heart },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/global', label: 'Global Impact', icon: Globe }
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <Heart className="w-6 h-6 text-accent" />
            Empathy Bridge
          </Link>
          
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}