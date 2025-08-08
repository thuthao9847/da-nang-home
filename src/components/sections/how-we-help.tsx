'use client'

import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'
import { useTranslations } from '@/utils/translations'

export function HowWeHelp() {
  const { t } = useTranslations()

  const features = [
    {
      icon: MagnifyingGlassIcon,
      title: t('howWeHelp.affordTitle'),
      description: t('howWeHelp.affordDescription'),
      link: '/calculator',
    },
    {
      icon: BanknotesIcon,
      title: t('howWeHelp.costsTitle'),
      description: t('howWeHelp.costsDescription'),
      link: '/costs',
    },
    {
      icon: ArrowTrendingUpIcon,
      title: t('howWeHelp.paymentTitle'),
      description: t('howWeHelp.paymentDescription'),
      link: '/payment',
    },
  ]

  return (
    <section className="bg-primary-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            {t('howWeHelp.title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary-600">{t('howWeHelp.subtitle')}</p>
        </div>

        <div className="mt-12">
          <div className="mb-12 flex justify-center gap-4">
            <button className="rounded-full bg-primary-500 px-6 py-2 font-medium text-text-light">
              {t('howWeHelp.buying')}
            </button>
            <button className="rounded-full border border-primary-500 px-6 py-2 font-medium text-primary-500 hover:bg-primary-50">
              {t('howWeHelp.rating')}
            </button>
            <button className="rounded-full border border-primary-500 px-6 py-2 font-medium text-primary-500 hover:bg-primary-50">
              {t('howWeHelp.selling')}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative flex flex-col items-center rounded-2xl bg-background p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-6 rounded-lg bg-primary-100 p-3">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-center text-xl font-semibold text-secondary-900">{feature.title}</h3>
                <p className="mt-4 text-center text-secondary-600">{feature.description}</p>
                <Link
                  href={feature.link}
                  className="mt-6 inline-block rounded-full border border-primary-500 px-6 py-2 text-sm font-medium text-primary-500 hover:bg-primary-50"
                >
                  {t('howWeHelp.learnMore')}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-secondary-600">
              {t('howWeHelp.spotlightText')}{' '}
              <Link href="/contact" className="text-primary-500 hover:text-primary-600">
                {t('howWeHelp.letsChat')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
