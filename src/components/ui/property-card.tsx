'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react'
import { useTranslations } from '@/utils/translations'

interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  href: string
  isRental?: boolean
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  href,
  isRental = false
}: PropertyCardProps) {
  const { t } = useTranslations()
  const translationPrefix = isRental ? 'rent.propertyDetails' : 'sale.propertyDetails'

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <button 
          className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          aria-label={t(`${translationPrefix}.addToFavorites`)}
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>

        <Link href={href} className="block">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-1 hover:text-primary-500 transition-colors">
            {title}
          </h3>
        </Link>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{bedrooms} {t(`${translationPrefix}.bedrooms`)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{bathrooms} {t(`${translationPrefix}.bathrooms`)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{area} {t(`${translationPrefix}.area`)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-primary-500 text-lg font-bold">
            ${price.toLocaleString()}
            {isRental && <span className="text-sm font-normal"> {t(`${translationPrefix}.pricePerMonth`)}</span>}
          </div>
          <Link
            href={href}
            className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors"
          >
            {t(`${translationPrefix}.viewDetails`)}
          </Link>
        </div>
      </div>
    </div>
  )
}
