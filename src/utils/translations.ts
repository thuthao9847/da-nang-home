'use client'

import { translations, Language } from '@/translations'

export function useTranslations() {
  // Hydration guard to avoid SSR/CSR text mismatch
  const [hydrated, setHydrated] = require('react').useState(false)
  require('react').useEffect(() => setHydrated(true), [])

  // Get language from localStorage or default to 'en'
  const getLanguage = (): Language => {
    // During the very first client render (before useEffect runs),
    // force 'en' so it matches the server HTML and avoids hydration warning.
    if (!hydrated) return 'en'
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') || 'en') as Language
    }
    return 'en'
  }

  const t = (key: string) => {
    const language = getLanguage()
    const keys = key.split('.')
    let current: any = translations[language]

    for (const k of keys) {
      if (current === undefined) return key
      current = current[k]
    }

    return current || key
  }

  const setLanguage = (lang: Language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
      window.dispatchEvent(new Event('languageChange'))
    }
  }

  const getLanguageValue = () => getLanguage()

  return { t, setLanguage, getLanguageValue }
}
