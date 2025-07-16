'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, BarChart3, Globe, Home, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme'
import { useTranslation } from '@/lib/language-context'
import { LanguageSwitcher } from './LanguageSwitcher'

export function NavigationBar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation('common')

  const navItems = [
    { href: '/', label: t('navigation.game'), icon: Heart },
    { href: '/analytics', label: t('navigation.analytics'), icon: BarChart3 },
    { href: '/global', label: t('navigation.impact'), icon: Globe }
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-200">
            <Heart className="w-6 h-6 text-accent" />
            {t('appName')}
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
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            })}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 ml-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={t('navigation.darkMode')}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}