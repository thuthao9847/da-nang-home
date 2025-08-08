import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { LanguageProvider } from '@/contexts/language-context'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import FloatingContact from '@/components/ui/floating-contact'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingContact />
            <ScrollToTop />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
