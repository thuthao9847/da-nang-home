'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type BreakpointColumns = {
  base?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

function buildGridClass(columns?: BreakpointColumns): string {
  const col = columns || { base: 1, sm: 2, lg: 3 }
  const parts: string[] = []
  if (col.base) parts.push(`grid-cols-${col.base}`)
  if (col.sm) parts.push(`sm:grid-cols-${col.sm}`)
  if (col.md) parts.push(`md:grid-cols-${col.md}`)
  if (col.lg) parts.push(`lg:grid-cols-${col.lg}`)
  if (col.xl) parts.push(`xl:grid-cols-${col.xl}`)
  return parts.join(' ')
}

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export interface GridListProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  keyExtractor?: (item: T, index: number) => string | number
  columns?: BreakpointColumns
  gap?: string
  className?: string
  animate?: boolean
}

export function GridList<T>({
  items,
  renderItem,
  keyExtractor,
  columns,
  gap = 'gap-6',
  className = '',
  animate = false,
}: GridListProps<T>) {
  const gridClass = `grid ${buildGridClass(columns)} ${gap} ${className}`.trim()

  if (animate) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={gridClass}
      >
        {items.map((item, index) => (
          <motion.div key={(keyExtractor?.(item, index) ?? index).toString()} variants={itemVariants}>
            {renderItem(item, index)}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <div key={(keyExtractor?.(item, index) ?? index).toString()}>{renderItem(item, index)}</div>
      ))}
    </div>
  )
}
