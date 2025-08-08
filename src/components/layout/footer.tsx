'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { useTranslations } from '@/utils/translations'
import { 
  MapPin, 
  Phone, 
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Clock
} from 'lucide-react'

export default function Footer() {
  const { t } = useTranslations()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // TODO: Implement newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setSubmitStatus('success')
      setEmail('')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link href="/" className="block mb-6">
                <Image
                  src="/logo-white.svg"
                  alt="Da Nang Home"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-400 mb-6">
                {t('footer.about.description')}
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  aria-label={t('footer.social.facebook')}
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  aria-label={t('footer.social.instagram')}
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  aria-label={t('footer.social.linkedin')}
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  aria-label={t('footer.social.youtube')}
                >
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                {t('footer.quickLinks.title')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-primary-500 transition-colors">
                    {t('navigation.about')}
                  </Link>
                </li>
                <li>
                  <Link href="/sale" className="text-gray-400 hover:text-primary-500 transition-colors">
                    {t('navigation.sale')}
                  </Link>
                </li>
                <li>
                  <Link href="/rent" className="text-gray-400 hover:text-primary-500 transition-colors">
                    {t('navigation.rent')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                    {t('navigation.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                {t('footer.contact.title')}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{t('footer.contact.address.value')}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <a href={`tel:${t('footer.contact.phone.value')}`} className="hover:text-primary-500 transition-colors">
                    {t('footer.contact.phone.value')}
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <a href={`mailto:${t('footer.contact.email.value')}`} className="hover:text-primary-500 transition-colors">
                    {t('footer.contact.email.value')}
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2">{t('footer.contact.hours.label')}</h4>
                <div className="space-y-1">
                  <p className="text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary-500" />
                    {t('footer.contact.hours.weekdays')}
                  </p>
                  <p className="text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary-500" />
                    {t('footer.contact.hours.saturday')}
                  </p>
                  <p className="text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary-500" />
                    {t('footer.contact.hours.sunday')}
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                {t('footer.newsletter.title')}
              </h3>
              <p className="text-gray-400 mb-4">
                {t('footer.newsletter.description')}
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footer.newsletter.placeholder')}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
                >
                  {isSubmitting ? '...' : t('footer.newsletter.button')}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-500 text-sm">{t('footer.newsletter.success')}</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm">{t('footer.newsletter.error')}</p>
                )}
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
