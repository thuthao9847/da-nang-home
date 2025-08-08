'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/container'
import { PropertyCard } from '@/components/ui/property-card'
import { Pagination } from '@/components/ui/pagination'
import { useTranslations } from '@/utils/translations'

const properties = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    location: 'Son Tra, Da Nang',
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    image: '/images/properties/villa1.jpg',
    href: '/sale/modern-beachfront-villa',
    type: 'villa'
  },
  {
    id: '2',
    title: 'Luxury Ocean View Apartment',
    location: 'Ngu Hanh Son, Da Nang',
    price: 280000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    image: '/images/properties/apartment1.jpg',
    href: '/sale/luxury-ocean-view-apartment',
    type: 'apartment'
  },
  {
    id: '3',
    title: 'City Center Penthouse',
    location: 'Hai Chau, Da Nang',
    price: 520000,
    bedrooms: 4,
    bathrooms: 4,
    area: 200,
    image: '/images/properties/penthouse1.jpg',
    href: '/sale/city-center-penthouse',
    type: 'apartment'
  },
  {
    id: '4',
    title: 'Modern Family House',
    location: 'Ngu Hanh Son, Da Nang',
    price: 380000,
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    image: '/images/properties/house1.jpg',
    href: '/sale/modern-family-house',
    type: 'house'
  },
  {
    id: '5',
    title: 'Commercial Space',
    location: 'Hai Chau, Da Nang',
    price: 750000,
    bedrooms: 0,
    bathrooms: 2,
    area: 400,
    image: '/images/properties/commercial1.jpg',
    href: '/sale/commercial-space',
    type: 'commercial'
  },
  {
    id: '6',
    title: 'Development Land',
    location: 'Son Tra, Da Nang',
    price: 1200000,
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    image: '/images/properties/land1.jpg',
    href: '/sale/development-land',
    type: 'land'
  },
]

const locations = [
  'All Locations',
  'Son Tra',
  'Ngu Hanh Son',
  'Hai Chau',
  'Thanh Khe',
  'Lien Chieu'
]

const ITEMS_PER_PAGE = 8

export default function SalePage() {
  const { t } = useTranslations()
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [isTypeOpen, setIsTypeOpen] = useState(false)
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const propertyTypes = [
    { id: 'all', name: 'All Properties' },
    { id: 'apartment', name: 'navigation.apartment' },
    { id: 'villa', name: 'navigation.villa' },
    { id: 'house', name: 'navigation.house' },
    { id: 'office', name: 'navigation.office' },
    { id: 'commercial', name: 'navigation.commercial' },
  ]

  const filteredProperties = properties.filter(property => {
    const typeMatch = selectedType === 'all' || property.type === selectedType
    const locationMatch = selectedLocation === 'All Locations' || property.location.includes(selectedLocation)
    return typeMatch && locationMatch
  })

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Reset to first page when filters change
  const handleFilterChange = (type: string, value: string) => {
    if (type === 'type') {
      setSelectedType(value)
    } else {
      setSelectedLocation(value)
    }
    setCurrentPage(1)
  }

  return (
    <div className="py-12 bg-gray-50">
      <Container>
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            {t('sale.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            {t('sale.subtitle')}
          </motion.p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <h2 className="text-lg font-semibold text-gray-900">{t('sale.filters.title')}:</h2>
            <div className="relative">
              <button
                onClick={() => {
                  setIsTypeOpen(!isTypeOpen)
                  setIsLocationOpen(false)
                }}
                className="flex items-center justify-between w-48 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              >
                <span className="truncate">
                  {selectedType === 'all' ? t('sale.filters.allProperties') : t(`navigation.${selectedType}`)}
                </span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isTypeOpen ? 'rotate-180' : ''}`} />
              </button>
              {isTypeOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        handleFilterChange('type', type.id)
                        setIsTypeOpen(false)
                      }}
                      className={`w-full px-3 py-2 text-left hover:bg-gray-50 ${
                        selectedType === type.id ? 'text-[#F4A261] bg-orange-50' : 'text-gray-700'
                      }`}
                    >
                      {type.id === 'all' ? t('sale.filters.allProperties') : t(type.name)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setIsLocationOpen(!isLocationOpen)
                  setIsTypeOpen(false)
                }}
                className="flex items-center justify-between w-48 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              >
                <span className="truncate">
                  {selectedLocation === 'All Locations' ? t('sale.filters.allLocations') : selectedLocation}
                </span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLocationOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        handleFilterChange('location', location)
                        setIsLocationOpen(false)
                      }}
                      className={`w-full px-3 py-2 text-left hover:bg-gray-50 ${
                        selectedLocation === location ? 'text-[#F4A261] bg-orange-50' : 'text-gray-700'
                      }`}
                    >
                      {location === 'All Locations' ? t('sale.filters.allLocations') : location}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {paginatedProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <PropertyCard {...property} />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filteredProperties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-gray-600">
              {t('sale.noResults')}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </motion.div>
        )}
      </Container>
    </div>
  )
} 