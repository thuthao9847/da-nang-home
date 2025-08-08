'use client'

import Image from 'next/image'
import { HeartIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/components/ui/motion'
import { useTranslations } from '@/utils/translations'

const properties = [
  {
    id: 1,
    title: 'Modern Beachfront Villa',
    location: 'Son Tra, Da Nang',
    price: '$450,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    beds: 4,
    baths: 3,
    area: '350',
  },
  {
    id: 2,
    title: 'Luxury Ocean View Apartment',
    location: 'Ngu Hanh Son, Da Nang',
    price: '$280,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    beds: 3,
    baths: 2,
    area: '120',
  },
  {
    id: 3,
    title: 'City Center Penthouse',
    location: 'Hai Chau, Da Nang',
    price: '$520,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    beds: 4,
    baths: 4,
    area: '200',
  },
]

export default function FeaturedProperties() {
  const { t } = useTranslations()

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeIn('up', 0.2)} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            {t('properties.title')}
          </h2>
          <p className="mt-2 text-lg leading-8 text-secondary-600">{t('properties.subtitle')}</p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {properties.map((property, index) => (
            <motion.article
              key={property.id}
              variants={fadeIn('up', 0.2 + index * 0.1)}
              className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-secondary-100 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 z-10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-full bg-background p-2 text-secondary-900 shadow-sm transition-colors hover:bg-secondary-100"
                  >
                    <HeartIcon className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-background p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-x-4 text-xs">
                    <div className="flex items-center gap-x-1 text-secondary-500">
                      <MapPinIcon className="h-4 w-4" />
                      {property.location}
                    </div>
                  </div>
                  <div className="mt-3 text-lg font-semibold leading-6 text-secondary-900">
                    <h3>{property.title}</h3>
                  </div>
                  <div className="mt-4 flex items-center gap-x-4 text-sm">
                    <div className="text-secondary-600">
                      🛏️ {property.beds} {t('properties.beds')}
                    </div>
                    <div className="text-secondary-600">
                      🚿 {property.baths} {t('properties.baths')}
                    </div>
                    <div className="text-secondary-600">
                      📏 {property.area} {t('properties.area')}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-lg font-semibold text-[#F4A261]">{property.price}</div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg bg-[#F4A261] px-3 py-2 text-sm font-semibold text-text-light shadow-sm transition-colors hover:bg-[#E76F51] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A261]"
                  >
                    {t('properties.viewDetails')}
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
