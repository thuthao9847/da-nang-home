import { en } from './en'
import { vi } from './vi'
import { ru } from './ru'
import { fr } from './fr'
import { zh } from './zh'
import { ko } from './ko'
import { ja } from './ja'
import { hi } from './hi'
import { es } from './es'
import { bn } from './bn'
import { pt } from './pt'
import { de } from './de'

export type Language = 'en' | 'vi' | 'ru' | 'fr' | 'zh' | 'ko' | 'ja' | 'hi' | 'es' | 'bn' | 'pt' | 'de'

export const translations = {
  en,
  vi,
  ru,
  fr,
  zh,
  ko,
  ja,
  hi,
  es,
  bn,
  pt,
  de
}

export type TranslationKey = keyof typeof en | keyof typeof vi 