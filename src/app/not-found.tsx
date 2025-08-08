'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timeout = setTimeout(() => {
      router.push('/')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for doesn't exist. You will be redirected to the home page in a few seconds...
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-[#F4A261] text-white px-6 py-2 rounded-lg hover:bg-[#E76F51] transition-colors"
      >
        Go to Home Page
      </button>
    </div>
  )
} 