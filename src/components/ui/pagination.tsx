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
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-gray-300 hover:border-primary-500 disabled:opacity-50 disabled:hover:border-gray-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {totalPages > 5 && currentPage > 3 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`w-10 h-10 rounded-lg border border-gray-300 hover:border-primary-500
              ${currentPage === 1 ? 'bg-primary-50 text-primary-600 border-primary-500' : ''}`}
          >
            1
          </button>
          {currentPage > 4 && <span className="px-2">...</span>}
        </>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg border border-gray-300 hover:border-primary-500
            ${currentPage === page ? 'bg-primary-50 text-primary-600 border-primary-500' : ''}`}
        >
          {page}
        </button>
      ))}

      {totalPages > 5 && currentPage < totalPages - 2 && (
        <>
          {currentPage < totalPages - 3 && <span className="px-2">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`w-10 h-10 rounded-lg border border-gray-300 hover:border-primary-500
              ${currentPage === totalPages ? 'bg-primary-50 text-primary-600 border-primary-500' : ''}`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-gray-300 hover:border-primary-500 disabled:opacity-50 disabled:hover:border-gray-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
} 