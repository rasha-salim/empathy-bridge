'use client'

import { Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useLanguage, useTranslation } from '@/lib/language-context'

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' }
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label={t('language.selectLanguage')}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLanguage.nativeName}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg min-w-[150px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                language.code === currentLanguage.code
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              dir={language.code === 'ar' ? 'rtl' : 'ltr'}
            >
              <span className="font-medium">{language.nativeName}</span>
              <span className="text-xs opacity-75 ml-2">{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}