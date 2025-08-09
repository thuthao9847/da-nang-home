'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useTranslations } from '@/utils/translations'

type SubItem = {
  name: string
  href: string
}

type NavigationItem = {
  name: string
  href: string
  items?: SubItem[]
}

const navigationConfig: Record<string, NavigationItem> = {
  home: {
    name: 'navigation.home',
    href: '/',
  },
  sale: {
    name: 'navigation.sale',
    href: '/sale',
  },
  rent: {
    name: 'navigation.rent',
    href: '/rent',
  },
  about: {
    name: 'navigation.about',
    href: '/about',
  },
  contact: {
    name: 'navigation.contact',
    href: '/contact',
  },
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslations()
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center gap-0">
              <Image src="/images/logo.png" alt="Da Nang Home" width={96} height={96} className="h-20 w-20 lg:h-24 lg:w-24" />
              <span className="-ml-1 text-sm lg:text-base font-semibold tracking-wider uppercase text-gray-600 leading-none">Real Estate</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {Object.values(navigationConfig).map((item) => {
            const active = isActive(item.href)
            return (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-semibold leading-6 transition-colors duration-200 ${
                    active ? 'text-primary-500' : 'text-gray-900 hover:text-primary-500'
                  }`}
                >
                  {t(item.name)}
                  {item.items && (
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${
                        active ? 'text-primary-500' : 'text-gray-400 group-hover:rotate-180 group-hover:text-primary-500'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.items && (
                  <div className="absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 opacity-0 invisible transform transition-all duration-300 group-hover:opacity-100 group-hover:visible min-w-[240px]">
                    <div className="pt-2">
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="relative bg-white p-2">
                          <div className="grid grid-cols-1 gap-1">
                            {item.items.map((subItem) => {
                              const subActive = isActive(subItem.href)
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                                    subActive
                                      ? 'text-primary-600 bg-primary-50'
                                      : 'text-gray-900 hover:bg-gray-50 hover:text-primary-500'
                                  }`}
                                >
                                  {t(subItem.name)}
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LanguageSwitcher />
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="Da Nang Home" width={48} height={48} className="h-12 w-12" />
                <div className="leading-tight">
                  <span className="block text-xl font-extrabold text-gray-900">TM</span>
                  <span className="-mt-0.5 block text-xs uppercase tracking-widest text-gray-500">Real Estate</span>
                </div>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {Object.values(navigationConfig).map((item) => {
                  const active = isActive(item.href)
                  return (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 ${
                          active ? 'text-primary-600 bg-primary-50' : 'text-gray-900 hover:bg-gray-50 hover:text-primary-500'
                        }`}
                        onClick={() => !item.items && setMobileMenuOpen(false)}
                      >
                        {t(item.name)}
                        {item.items && (
                          <svg
                            className={`h-4 w-4 ${active ? 'text-primary-500' : 'text-gray-400'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </Link>
                      {item.items && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.items.map((subItem) => {
                            const subActive = isActive(subItem.href)
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                  subActive
                                    ? 'text-primary-600 bg-primary-50'
                                    : 'text-gray-900 hover:bg-gray-50 hover:text-primary-500'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {t(subItem.name)}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="py-6">
                <div className="mb-4">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
