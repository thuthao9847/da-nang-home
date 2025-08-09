export type PropertyType = 'villa' | 'apartment' | 'house' | 'commercial' | 'land' | 'office'

export interface Property {
  slug: string
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  id: string
  yearBuilt: number
  type: PropertyType
  status: 'sale' | 'rent'
  garage?: number
  images: string[]
  amenities: string[]
  description: string
}

export const saleProperties: Property[] = [
  {
    slug: 'modern-beachfront-villa',
    title: 'Modern Beachfront Villa',
    location: 'Son Tra, Da Nang',
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    id: 'S-1001',
    yearBuilt: 2023,
    type: 'villa',
    status: 'sale',
    garage: 2,
    images: [
      '/images/properties/villa1.jpg',
      '/images/properties/apartment1.jpg',
      '/images/properties/penthouse1.jpg'
    ],
    amenities: ['Smoke alarm', 'First aid kit', 'Security cameras', 'Dishwasher', 'Coffee maker'],
    description:
      'A modern beachfront villa offering panoramic ocean views, spacious living areas, and premium finishes throughout. Perfect for luxury coastal living in Da Nang.'
  },
  {
    slug: 'luxury-ocean-view-apartment',
    title: 'Luxury Ocean View Apartment',
    location: 'Ngu Hanh Son, Da Nang',
    price: 280000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    id: 'S-1002',
    yearBuilt: 2022,
    type: 'apartment',
    status: 'sale',
    images: ['/images/properties/apartment1.jpg', '/images/properties/villa1.jpg'],
    amenities: ['TV with cable', 'Refrigerator', 'Microwave', 'Coffee maker'],
    description:
      'A luxury apartment with sweeping ocean views, modern interiors, and convenient access to local amenities and beaches.'
  },
  {
    slug: 'city-center-penthouse',
    title: 'City Center Penthouse',
    location: 'Hai Chau, Da Nang',
    price: 520000,
    bedrooms: 4,
    bathrooms: 4,
    area: 200,
    id: 'S-1003',
    yearBuilt: 2021,
    type: 'apartment',
    status: 'sale',
    garage: 1,
    images: ['/images/properties/penthouse1.jpg', '/images/properties/house1.jpg'],
    amenities: ['Bed linens', 'Iron', 'Self check-in', 'Smoke alarm'],
    description:
      'Penthouse living in the heart of the city, featuring a spacious terrace, premium kitchen, and designer finishes.'
  },
  {
    slug: 'modern-family-house',
    title: 'Modern Family House',
    location: 'Ngu Hanh Son, Da Nang',
    price: 380000,
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    id: 'S-1004',
    yearBuilt: 2020,
    type: 'house',
    status: 'sale',
    images: ['/images/properties/house1.jpg', '/images/properties/apartment1.jpg'],
    amenities: ['Microwave', 'Dishwasher', 'Refrigerator'],
    description:
      'A bright and spacious home designed for family living with open-plan spaces and a private garden.'
  },
  {
    slug: 'commercial-space',
    title: 'Commercial Space',
    location: 'Hai Chau, Da Nang',
    price: 750000,
    bedrooms: 0,
    bathrooms: 2,
    area: 400,
    id: 'S-1005',
    yearBuilt: 2019,
    type: 'commercial',
    status: 'sale',
    images: ['/images/properties/commercial1.jpg'],
    amenities: ['Security cameras', 'Self check-in'],
    description:
      'Prime commercial space in a high-traffic area, ideal for retail or office use.'
  },
  {
    slug: 'development-land',
    title: 'Development Land',
    location: 'Son Tra, Da Nang',
    price: 1200000,
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    id: 'S-1006',
    yearBuilt: 0,
    type: 'land',
    status: 'sale',
    images: ['/images/properties/land1.jpg'],
    amenities: [],
    description:
      'A rare land opportunity in a strategic location suitable for development projects.'
  }
]

export const rentProperties: Property[] = [
  {
    slug: 'luxury-apartment-ocean-view',
    title: 'Luxury Apartment with Ocean View',
    location: 'Son Tra, Da Nang',
    price: 1200,
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    id: 'R-2001',
    yearBuilt: 2022,
    type: 'apartment',
    status: 'rent',
    images: ['/images/properties/rent-apartment1.jpg', '/images/properties/apartment1.jpg'],
    amenities: ['TV with cable', 'Refrigerator', 'Dishwasher'],
    description:
      'A modern apartment offering ocean views and comfortable furnishings, perfect for long-term stays.'
  },
  {
    slug: 'modern-villa-pool',
    title: 'Modern Villa with Pool',
    location: 'Ngu Hanh Son, Da Nang',
    price: 2500,
    bedrooms: 4,
    bathrooms: 4,
    area: 250,
    id: 'R-2002',
    yearBuilt: 2021,
    type: 'villa',
    status: 'rent',
    images: ['/images/properties/rent-villa1.jpg', '/images/properties/villa1.jpg'],
    amenities: ['Pool', 'Garden', 'Security cameras'],
    description:
      'A stylish villa with a private pool and modern interiors, located near beaches and cafes.'
  },
  {
    slug: 'city-view-office',
    title: 'City View Office Space',
    location: 'Hai Chau, Da Nang',
    price: 1800,
    bedrooms: 0,
    bathrooms: 2,
    area: 120,
    id: 'R-2003',
    yearBuilt: 2020,
    type: 'office',
    status: 'rent',
    images: ['/images/properties/rent-office1.jpg', '/images/properties/office1.jpg'],
    amenities: ['Elevator', 'Security cameras'],
    description:
      'Office space with city views and excellent transport links.'
  },
  {
    slug: 'cozy-family-house',
    title: 'Cozy Family House',
    location: 'Thanh Khe, Da Nang',
    price: 1500,
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    id: 'R-2004',
    yearBuilt: 2019,
    type: 'house',
    status: 'rent',
    images: ['/images/properties/rent-house1.jpg', '/images/properties/house1.jpg'],
    amenities: ['Microwave', 'Dishwasher'],
    description:
      'A comfortable family home in a quiet neighborhood with easy access to schools and markets.'
  },
  {
    slug: 'premium-office-suite',
    title: 'Premium Office Suite',
    location: 'Hai Chau, Da Nang',
    price: 2200,
    bedrooms: 0,
    bathrooms: 2,
    area: 180,
    id: 'R-2005',
    yearBuilt: 2021,
    type: 'office',
    status: 'rent',
    images: ['/images/properties/rent-office2.jpg', '/images/properties/office2.jpg'],
    amenities: ['Self check-in', 'Security cameras'],
    description:
      'Premium office suite with flexible layouts and premium finishes.'
  },
  {
    slug: 'beachfront-studio',
    title: 'Beachfront Studio',
    location: 'Son Tra, Da Nang',
    price: 800,
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    id: 'R-2006',
    yearBuilt: 2018,
    type: 'apartment',
    status: 'rent',
    images: ['/images/properties/rent-studio1.jpg'],
    amenities: ['Refrigerator', 'Coffee maker'],
    description:
      'Compact beachfront studio ideal for solo professionals or couples.'
  },
  {
    slug: 'commercial-space',
    title: 'Commercial Space',
    location: 'Hai Chau, Da Nang',
    price: 3500,
    bedrooms: 0,
    bathrooms: 2,
    area: 300,
    id: 'R-2007',
    yearBuilt: 2019,
    type: 'commercial',
    status: 'rent',
    images: ['/images/properties/rent-commercial1.jpg', '/images/properties/commercial1.jpg'],
    amenities: ['Security cameras'],
    description:
      'Spacious commercial unit suitable for various business models in a bustling district.'
  },
  {
    slug: 'riverside-villa',
    title: 'Riverside Villa',
    location: 'Ngu Hanh Son, Da Nang',
    price: 3000,
    bedrooms: 5,
    bathrooms: 5,
    area: 400,
    id: 'R-2008',
    yearBuilt: 2022,
    type: 'villa',
    status: 'rent',
    images: ['/images/properties/rent-villa2.jpg', '/images/properties/villa2.jpg'],
    amenities: ['Pool', 'Garden'],
    description:
      'Elegant riverside villa offering expansive living spaces and serene views.'
  }
]

export const getSalePropertyBySlug = (slug: string) => saleProperties.find(p => p.slug === slug)
export const getRentPropertyBySlug = (slug: string) => rentProperties.find(p => p.slug === slug)
