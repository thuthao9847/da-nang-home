'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { useTranslations } from '@/utils/translations'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const { t } = useTranslations()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // TODO: Implement form submission
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-12 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900 text-white rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">{t('contact.info.address.label')}</h3>
                  <p className="text-gray-300">{t('contact.info.address.value')}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">{t('contact.info.phone.label')}</h3>
                  <a 
                    href={`tel:${t('contact.info.phone.value')}`}
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {t('contact.info.phone.value')}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">{t('contact.info.email.label')}</h3>
                  <a 
                    href={`mailto:${t('contact.info.email.value')}`}
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {t('contact.info.email.value')}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">{t('contact.info.hours.label')}</h3>
                  <p className="text-gray-300">{t('contact.info.hours.weekdays')}</p>
                  <p className="text-gray-300">{t('contact.info.hours.saturday')}</p>
                  <p className="text-gray-300">{t('contact.info.hours.sunday')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.name.label')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder={t('contact.form.name.placeholder')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email.label')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder={t('contact.form.email.placeholder')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.phone.label')} <span className="text-gray-500">({t('contact.form.phone.optional')})</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder={t('contact.form.phone.placeholder')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message.label')}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder={t('contact.form.message.placeholder')}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm text-center">{t('contact.form.success')}</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm text-center">{t('contact.form.error')}</p>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </div>
  )
} 