'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string, params?: Record<string, string>) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation resources
const translations: Record<string, Record<string, any>> = {
  en: {
    common: require('../public/locales/en/common.json'),
    scenarios: require('../public/locales/en/scenarios.json'),
    analytics: require('../public/locales/en/analytics.json'),
    resources: require('../public/locales/en/resources.json'),
  },
  ar: {
    common: require('../public/locales/ar/common.json'),
    scenarios: require('../public/locales/ar/scenarios.json'),
    analytics: require('../public/locales/ar/analytics.json'),
    resources: require('../public/locales/ar/resources.json'),
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState('en')

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language') || 'en'
    setLanguageState(savedLanguage)
    
    // Set initial document direction
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = savedLanguage
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem('preferred-language', lang)
    // Update document direction for RTL languages
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const t = (key: string, params?: Record<string, string>) => {
    const keys = key.split('.')
    let value = translations[language]

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        // Fallback to English if translation not found
        value = translations.en
        for (const k of keys) {
          value = value?.[k]
          if (value === undefined) break
        }
        break
      }
    }

    if (typeof value !== 'string') {
      return key // Return key if translation not found
    }

    // Simple parameter replacement
    if (params) {
      return value.replace(/{{(\w+)}}/g, (match, param) => params[param] || match)
    }

    return value
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useTranslation(namespace: string = 'common') {
  const { language, t: baseT } = useLanguage()
  
  const t = (key: string, params?: Record<string, string>) => {
    return baseT(`${namespace}.${key}`, params)
  }

  return { t, language }
}