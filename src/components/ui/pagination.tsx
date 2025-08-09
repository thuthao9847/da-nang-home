'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  // Show max 5 page numbers
  let pageNumbers = pages
  if (totalPages > 5) {
    if (currentPage <= 3) {
      pageNumbers = [...pages.slice(0, 5)]
    } else if (currentPage >= totalPages - 2) {
      pageNumbers = [...pages.slice(totalPages - 5)]
    } else {
      pageNumbers = [...pages.slice(currentPage - 3, currentPage + 2)]
    }
  }

  return (
    <div className="flex items-center justify-center gap-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-secondary-200 bg-white text-secondary-800 shadow-sm transition-colors hover:border-primary-300 disabled:opacity-50 disabled:hover:border-secondary-200"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {totalPages > 5 && currentPage > 3 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl px-4 text-base font-semibold transition-colors ${
              currentPage === 1
                ? 'bg-primary-500 text-white'
                : 'text-secondary-900 hover:text-primary-500'
            }`}
          >
            1
          </button>
          {currentPage > 4 && <span className="px-3 text-secondary-500">...</span>}
        </>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl px-4 text-base font-semibold transition-colors ${
            currentPage === page
              ? 'bg-primary-500 text-white'
              : 'text-secondary-900 hover:text-primary-500'
          }`}
        >
          {page}
        </button>
      ))}

      {totalPages > 5 && currentPage < totalPages - 2 && (
        <>
          {currentPage < totalPages - 3 && <span className="px-3 text-secondary-500">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl px-4 text-base font-semibold transition-colors ${
              currentPage === totalPages
                ? 'bg-primary-500 text-white'
                : 'text-secondary-900 hover:text-primary-500'
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-secondary-200 bg-white text-secondary-800 shadow-sm transition-colors hover:border-primary-300 disabled:opacity-50 disabled:hover:border-secondary-200"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
} 