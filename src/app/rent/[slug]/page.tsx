"use client"

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { useTranslations } from '@/utils/translations'
import { getRentPropertyBySlug, rentProperties } from '@/data/properties'
import { MapPin, Bed, Bath, Square, Calendar, CheckCircle } from 'lucide-react'

interface PageProps {
  params: { slug: string }
}

export default function RentPropertyDetail({ params }: PageProps) {
  const { t } = useTranslations()
  const property = getRentPropertyBySlug(params.slug)
  if (!property) return notFound()

  const similar = rentProperties.filter((p) => p.slug !== property.slug).slice(0, 3)

  return (
    <div className="py-10 bg-gray-50">
      <Container>
        <nav className="text-sm text-secondary-500 mb-6">
          <Link href="/" className="hover:text-primary-500">{t('navigation.home')}</Link>
          <span className="mx-2">/</span>
          <Link href="/rent" className="hover:text-primary-500">{t('navigation.rent')}</Link>
          <span className="mx-2">/</span>
          <span className="text-secondary-700">{property.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-secondary-100">
              <Image src={property.images[0] || '/images/properties/house1.jpg'} alt={property.title} fill className="object-cover" />
            </div>
            {property.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {property.images.slice(1).map((img) => (
                  <div key={img} className="relative aspect-[16/9] rounded-lg overflow-hidden bg-secondary-100">
                    <Image src={img} alt={property.title} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">{t('detail.common.descriptionTitle')}</h2>
              <p className="text-secondary-700 leading-relaxed">{property.description}</p>
            </section>

            {property.amenities.length > 0 && (
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">{t('detail.common.amenitiesTitle')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-secondary-700">
                      <CheckCircle className="w-4 h-4 text-primary-500" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h1 className="text-2xl font-bold text-secondary-900 mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-secondary-600 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
              <div className="text-primary-500 text-2xl font-bold mb-4">
                ${property.price.toLocaleString()} <span className="text-base font-medium">/ {t('rent.propertyDetails.pricePerMonth')}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-secondary-700"><Bed className="w-4 h-4" /> {property.bedrooms} {t('detail.common.beds')}</div>
                <div className="flex items-center gap-2 text-secondary-700"><Bath className="w-4 h-4" /> {property.bathrooms} {t('detail.common.baths')}</div>
                <div className="flex items-center gap-2 text-secondary-700"><Square className="w-4 h-4" /> {property.area} {t('detail.common.area')}</div>
                <div className="flex items-center gap-2 text-secondary-700"><Calendar className="w-4 h-4" /> {t('detail.common.built')} {property.yearBuilt || '—'}</div>
              </div>
              <Link href="/contact" className="mt-6 inline-flex w-full justify-center rounded-lg bg-primary-500 px-4 py-2 text-white hover:bg-primary-600">{t('detail.common.contactAgent')}</Link>
            </div>

            {similar.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">{t('detail.common.similarTitle')}</h3>
                <div className="space-y-4">
                  {similar.map((sp) => (
                    <Link key={sp.slug} href={`/rent/${sp.slug}`} className="flex gap-3 group">
                      <div className="relative w-24 h-16 rounded-md overflow-hidden bg-secondary-100">
                        <Image src={sp.images[0] || '/images/properties/house1.jpg'} alt={sp.title} fill className="object-cover transition group-hover:scale-105" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-secondary-900 group-hover:text-primary-500">{sp.title}</div>
                        <div className="text-sm text-secondary-600">${sp.price.toLocaleString()} / {t('detail.common.pricePerMonth')}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </div>
  )
}
