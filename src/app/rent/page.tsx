'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/container'
import { PropertyCard } from '@/components/ui/property-card'
import { Pagination } from '@/components/ui/pagination'
import { GridList } from '@/components/ui/grid-list'
import { useTranslations } from '@/utils/translations'
import { AdvancedFilterModal, AdvancedFilterValues } from '@/components/ui/advanced-filter-modal'

const properties = [
  {
    id: '1',
    title: 'Luxury Apartment with Ocean View',
    location: 'Son Tra, Da Nang',
    price: 1200,
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    image: '/images/properties/studio1.jpg',
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
    image: '/images/properties/rent-villa2.jpg',
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
    image: '/images/properties/office2.jpg',
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

const cities = ['All Cities', 'Da Nang', 'Ho Chi Minh']

const ITEMS_PER_PAGE = 8

export default function RentPage() {
  const { t } = useTranslations()
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [isTypeOpen, setIsTypeOpen] = useState(false)
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [isCityOpen, setIsCityOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [advanced, setAdvanced] = useState<AdvancedFilterValues>({
    priceMin: 0,
    priceMax: 10000,
    areaMin: 0,
    areaMax: 2000,
    beds: 0,
    baths: 0,
    location: 'All Locations',
    amenities: [],
  })
  const [searchQuery, setSearchQuery] = useState('')

  const propertyTypes = [
    { id: 'all', name: 'All Properties' },
    { id: 'apartment', name: 'navigation.apartment' },
    { id: 'villa', name: 'navigation.villa' },
    { id: 'house', name: 'navigation.house' },
    { id: 'office', name: 'navigation.office' },
    { id: 'commercial', name: 'navigation.commercial' },
  ]

  const filteredProperties = properties.filter((property) => {
    const typeMatch = selectedType === 'all' || property.type === selectedType
    const locationMatch =
      selectedLocation === 'All Locations' || (property.location || '').includes(selectedLocation)
    const cityMatch =
      selectedCity === 'All Cities' || (property.location || '').toLowerCase().includes(selectedCity.toLowerCase())
    const q = searchQuery.trim().toLowerCase()
    const titleLc = (property.title || '').toLowerCase()
    const locLc = (property.location || '').toLowerCase()
    const queryMatch = q.length === 0 || titleLc.includes(q) || locLc.includes(q)
    const price = Number(property.price) || 0
    const area = Number(property.area) || 0
    const beds = Number(property.bedrooms) || 0
    const baths = Number(property.bathrooms) || 0
    const priceMatch = price >= advanced.priceMin && price <= advanced.priceMax
    const areaMatch = area >= advanced.areaMin && area <= advanced.areaMax
    const bedsMatch = beds >= advanced.beds
    const bathsMatch = baths >= advanced.baths
    return typeMatch && locationMatch && cityMatch && queryMatch && priceMatch && areaMatch && bedsMatch && bathsMatch
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
    } else if (type === 'location') {
      setSelectedLocation(value)
    } else if (type === 'city') {
      setSelectedCity(value)
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
          <div className="space-y-3">
            {/* Row 1: Search */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Address, City, ZIP..."
                className="h-12 w-full sm:flex-1 sm:min-w-0 sm:max-w-none rounded-2xl border border-secondary-200 bg-white px-4 text-secondary-800 shadow-sm placeholder:text-secondary-400 focus:border-primary-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-600 w-full sm:w-auto"
              >
                Search
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Row 2: Filters */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:items-center">
              {/* Type first */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => {
                    setIsTypeOpen(!isTypeOpen)
                    setIsLocationOpen(false)
                    setIsCityOpen(false)
                  }}
                  className="flex items-center justify-between w-full sm:w-48 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                          selectedType === type.id ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                        }`}
                      >
                        {type.id === 'all' ? t('rent.filters.allProperties') : t(type.name)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* City second */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => {
                    setIsCityOpen(!isCityOpen)
                    setIsTypeOpen(false)
                    setIsLocationOpen(false)
                  }}
                  className="flex items-center justify-between w-full sm:w-48 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <span className="truncate">{selectedCity}</span>
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${isCityOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCityOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          handleFilterChange('city', city)
                          setIsCityOpen(false)
                        }}
                        className={`w-full px-3 py-2 text-left hover:bg-gray-50 ${
                          selectedCity === city ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Location third */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => {
                    setIsLocationOpen(!isLocationOpen)
                    setIsTypeOpen(false)
                    setIsCityOpen(false)
                  }}
                  className="flex items-center justify-between w-full sm:w-48 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                          selectedLocation === location ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                        }`}
                      >
                        {location === 'All Locations' ? t('rent.filters.allLocations') : location}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Filter button at the end */}
              <button
                type="button"
                onClick={() => setIsAdvancedOpen(true)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-600 w-full sm:w-auto"
              >
                Filter
                <AdjustmentsHorizontalIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <GridList
            items={paginatedProperties}
            columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
            gap="gap-6"
            animate
            keyExtractor={(p) => p.id}
            renderItem={(property) => <PropertyCard {...property} isRental />}
          />
        </div>

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

      <AdvancedFilterModal
        isOpen={isAdvancedOpen}
        onClose={() => setIsAdvancedOpen(false)}
        onApply={(vals) => {
          setAdvanced(vals)
          setIsAdvancedOpen(false)
          setCurrentPage(1)
        }}
        priceRange={{ min: 0, max: 10000, step: 50 }}
        areaRange={{ min: 0, max: 2000, step: 10 }}
        locations={[...locations]}
        initial={advanced}
      />
    </div>
  )
} 