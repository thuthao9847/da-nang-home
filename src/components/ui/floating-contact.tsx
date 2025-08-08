'use client'

import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useTranslations } from '@/utils/translations'

export default function FloatingContact() {
  const [activeButton, setActiveButton] = useState<'phone' | 'email' | null>(null)
  const { t } = useTranslations()

  return (
    <div className="fixed bottom-24 right-8 z-40 flex flex-col gap-2">
      {/* Phone Button */}
      <div className="relative flex justify-end">
        {activeButton === 'phone' && (
          <a
            href="tel:+84123456789"
            className="absolute right-14 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-lg hover:bg-gray-50"
          >
            +84 123 456 789
          </a>
        )}
        <button
          onClick={() => setActiveButton(activeButton === 'phone' ? null : 'phone')}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-colors ${
            activeButton === 'phone'
              ? 'bg-primary-600 text-white'
              : 'text-primary-500 bg-white hover:bg-gray-50'
          }`}
        >
          <PhoneIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Email Button */}
      <div className="relative flex justify-end">
        {activeButton === 'email' && (
          <a
            href="mailto:contact@danang-home.com"
            className="absolute right-14 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-lg hover:bg-gray-50"
          >
            contact@danang-home.com
          </a>
        )}
        <button
          onClick={() => setActiveButton(activeButton === 'email' ? null : 'email')}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-colors ${
            activeButton === 'email'
              ? 'bg-primary-600 text-white'
              : 'text-primary-500 bg-white hover:bg-gray-50'
          }`}
        >
          <EnvelopeIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
