'use client'

import Hero from '@/components/sections/hero'
import FeaturedProperties from '@/components/sections/featured-properties'
import { HowWeHelp } from '@/components/sections/how-we-help'
import { PropertyCategories } from '@/components/sections/property-categories'

export default function Home() {
  return (
    <>
      <Hero />
      <PropertyCategories />
      <FeaturedProperties />
      <HowWeHelp />
    </>
  )
}
