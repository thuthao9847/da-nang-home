'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/components/ui/motion'
import { useTranslations } from '@/utils/translations'

const propertyTypes = [
  { id: 'all', name: 'All Properties' },
  { id: 'apartment', name: 'navigation.apartment' },
  { id: 'villa', name: 'navigation.villa' },
  { id: 'house', name: 'navigation.house' },
  { id: 'office', name: 'navigation.office' },
  { id: 'commercial', name: 'navigation.commercial' },
]

const locations = [
  'Son Tra',
  'Ngu Hanh Son',
  'Hai Chau',
  'Thanh Khe',
  'Lien Chieu'
]

export default function Hero() {
  const { t } = useTranslations()
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
          alt={t('home.hero.title')}
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative pt-32"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div variants={fadeIn('up', 0.2)} className="mx-auto max-w-4xl text-center">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-text-light sm:text-6xl">
              {t('home.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-300">{t('home.hero.subtitle')}</p>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.4)} className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-xl bg-background/95 p-4 shadow-xl backdrop-blur-sm">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-700">
                    Property Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full rounded-lg border border-secondary-300 p-2.5 text-secondary-700 transition-colors hover:border-primary-400 focus:border-primary-500 focus:outline-none"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.id === 'all' ? type.name : t(type.name)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-700">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full rounded-lg border border-secondary-300 p-2.5 text-secondary-700 transition-colors hover:border-primary-400 focus:border-primary-500 focus:outline-none"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-700">
                    Search
                  </label>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-500 p-2.5 text-text-light transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
