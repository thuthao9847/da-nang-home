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
    title: 'Luxury Apartment with Ocean View',
    location: 'Son Tra, Da Nang',
    price: 1200,
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    image: '/images/properties/rent-apartment1.jpg',
    href: '/rent/luxury-apartment-ocean-view',
    type: 'apartment'
  },
  {
    id: '2',
    title: 'Modern Villa with Pool',
    location: 'Ngu Hanh Son, Da Nang',
    price: 2500,
    bedrooms: 4,
    bathrooms: 4,
    area: 250,
    image: '/images/properties/rent-villa1.jpg',
    href: '/rent/modern-villa-pool',
    type: 'villa'
  },
  {
    id: '3',
    title: 'City View Office Space',
    location: 'Hai Chau, Da Nang',
    price: 1800,
    bedrooms: 0,
    bathrooms: 2,
    area: 120,
    image: '/images/properties/rent-office1.jpg',
    href: '/rent/city-view-office',
    type: 'office'
  },
  {
    id: '4',
    title: 'Cozy Family House',
    location: 'Thanh Khe, Da Nang',
    price: 1500,
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    image: '/images/properties/rent-house1.jpg',
    href: '/rent/cozy-family-house',
    type: 'house'
  },
  {
    id: '5',
    title: 'Premium Office Suite',
    location: 'Hai Chau, Da Nang',
    price: 2200,
    bedrooms: 0,
    bathrooms: 2,
    area: 180,
    image: '/images/properties/rent-office2.jpg',
    href: '/rent/premium-office-suite',
    type: 'office'
  },
  {
    id: '6',
    title: 'Beachfront Studio',
    location: 'Son Tra, Da Nang',
    price: 800,
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    image: '/images/properties/rent-studio1.jpg',
    href: '/rent/beachfront-studio',
    type: 'apartment'
  },
  {
    id: '7',
    title: 'Commercial Space',
    location: 'Hai Chau, Da Nang',
    price: 3500,
    bedrooms: 0,
    bathrooms: 2,
    area: 300,
    image: '/images/properties/rent-commercial1.jpg',
    href: '/rent/commercial-space',
    type: 'commercial'
  },
  {
    id: '8',
    title: 'Riverside Villa',
    location: 'Ngu Hanh Son, Da Nang',
    price: 3000,
    bedrooms: 5,
    bathrooms: 5,
    area: 400,
    image: '/images/properties/rent-villa2.jpg',
    href: '/rent/riverside-villa',
    type: 'villa'
  }
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

export default function RentPage() {
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
            {t('rent.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            {t('rent.subtitle')}
          </motion.p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <h2 className="text-lg font-semibold text-gray-900">{t('rent.filters.title')}:</h2>
            <div className="relative">
              <button
                onClick={() => {
                  setIsTypeOpen(!isTypeOpen)
                  setIsLocationOpen(false)
                }}
                className="flex items-center justify-between w-48 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              >
                <span className="truncate">
                  {selectedType === 'all' ? t('rent.filters.allProperties') : t(`navigation.${selectedType}`)}
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
                      {type.id === 'all' ? t('rent.filters.allProperties') : t(type.name)}
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
                  {selectedLocation === 'All Locations' ? t('rent.filters.allLocations') : selectedLocation}
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
                      {location === 'All Locations' ? t('rent.filters.allLocations') : location}
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
              {t('rent.noResults')}
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