'use client'

import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslations } from '@/utils/translations'
import { ContactForm } from '@/components/ui/contact-form'

export default function FloatingContact() {
  const [activeButton, setActiveButton] = useState<'phone' | 'email' | null>(null)
  const { t } = useTranslations()

  return (
    <div className="fixed bottom-24 right-8 z-40 flex flex-col gap-3">
      {/* Phone Button */}
      <div className="relative flex justify-end">
        {activeButton === 'phone' && (
          <div className="sm:absolute sm:right-14 fixed inset-x-4 bottom-36 flex items-center justify-center sm:justify-end">
            <div className="w-full sm:w-auto max-w-[calc(100vw-2rem)] rounded-2xl bg-white px-4 py-3 text-base font-semibold leading-6 text-secondary-900 shadow-xl ring-1 ring-secondary-100 whitespace-nowrap">
              +84 123 456 789
            </div>
          </div>
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
          <>
            {/* Desktop/Tablet layout with backdrop */}
            <div className="hidden sm:block">
              <div
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                onClick={() => setActiveButton(null)}
              />
              <div className="fixed right-14 bottom-0 z-[60]">
                <div className="w-[28rem] md:w-[32rem] max-h-[85vh] overflow-y-auto rounded-2xl bg-secondary-900 p-5 md:p-6 text-text-light shadow-2xl ring-1 ring-secondary-700 mb-28">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold">Send us a Message</h3>
                    <button
                      type="button"
                      onClick={() => setActiveButton(null)}
                      className="rounded-full p-1 text-secondary-300 hover:bg-secondary-800 hover:text-text-light"
                      aria-label="Close"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Mobile floating card (no backdrop) */}
            <div className="sm:hidden fixed inset-x-4 bottom-24 z-50 flex justify-center">
              <div className="w-full max-w-[calc(100vw-2rem)] max-h-[85vh] overflow-y-auto rounded-2xl bg-secondary-900 p-4 text-text-light shadow-2xl ring-1 ring-secondary-700">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Send us a Message</h3>
                  <button
                    type="button"
                    onClick={() => setActiveButton(null)}
                    className="rounded-full p-1 text-secondary-300 hover:bg-secondary-800 hover:text-text-light"
                    aria-label="Close"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <ContactForm />
              </div>
            </div>
          </>
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
