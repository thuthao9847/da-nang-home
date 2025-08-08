'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/ui/container'

const teamMembers = [
  {
    id: '01',
    name: 'John Smith',
    role: 'Property Management',
    description: 'Expert in luxury property management with over 10 years of experience in the Da Nang market.',
    image: '/images/team/member1.jpg'
  },
  {
    id: '02',
    name: 'David Nguyen',
    role: 'Investment Advisor',
    description: 'Specializing in real estate investment strategies and market analysis for both local and international clients.',
    image: '/images/team/member2.jpg'
  },
  {
    id: '03',
    name: 'Sarah Chen',
    role: 'Sales Director',
    description: 'Leading our sales team with expertise in luxury property transactions and client relationships.',
    image: '/images/team/member3.jpg'
  }
]

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-600 uppercase tracking-wider mb-4"
          >
            ABOUT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            The dream team of
            <br />
            real estate experts.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We Help You Find Your Dream Property. Period.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="relative bg-white rounded-2xl overflow-hidden group"
            >
              <div className="relative h-[400px] bg-[#E8F3E8]">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {member.id}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white to-transparent" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Property Management
              </h3>
              <p className="text-gray-600">
                Professional management services ensuring optimal returns and tenant satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Investment Advisory
              </h3>
              <p className="text-gray-600">
                Expert guidance on real estate investments and market analysis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sales & Marketing
              </h3>
              <p className="text-gray-600">
                Strategic marketing and sales solutions for property transactions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
} 