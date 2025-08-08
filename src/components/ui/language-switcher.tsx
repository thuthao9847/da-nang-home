'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
]

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
  const router = useRouter()

  useEffect(() => {
    // Load saved language on mount
    const savedLang = localStorage.getItem('language') || 'en'
    setCurrentLang(savedLang)

    // Add event listener for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'language') {
        setCurrentLang(e.newValue || 'en')
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const handleLanguageChange = (langCode: string) => {
    localStorage.setItem('language', langCode)
    setCurrentLang(langCode)
    setIsOpen(false)
    // Force a page refresh to update all translations
    router.refresh()
  }

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-primary-500 flex items-center gap-2 text-sm font-medium text-gray-900"
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg bg-white py-2 shadow-lg ring-1 ring-gray-900/5">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex w-full items-center gap-2 px-4 py-2 text-sm ${
                  currentLang === language.code
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
