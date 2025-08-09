'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { XMarkIcon, AdjustmentsHorizontalIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useTranslations } from '@/utils/translations'

export type AdvancedFilterValues = {
  priceMin: number
  priceMax: number
  areaMin: number
  areaMax: number
  beds: number
  baths: number
  location: string
  amenities: string[]
}

export interface AdvancedFilterModalProps {
  isOpen: boolean
  onClose: () => void
  onApply: (values: AdvancedFilterValues) => void
  priceRange: { min: number; max: number; step?: number }
  areaRange: { min: number; max: number; step?: number }
  locations: string[]
  initial: AdvancedFilterValues
  amenities?: string[]
  title?: string
}

const DEFAULT_AMENITIES = [
  'Bed linens',
  'Carbon alarm',
  'Check-in lockbox',
  'Coffee maker',
  'Fireplace',
  'Extra pillows',
  'First aid kit',
  'Hangers',
  'Iron',
  'Microwave',
  'Fireplace',
  'Refrigerator',
  'Security cameras',
  'Smoke alarm',
  'Fireplace',
]

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) / (max - min)) * 100
}

type DualRangeProps = {
  min: number
  max: number
  step?: number
  valueMin: number
  valueMax: number
  onChange: (nextMin: number, nextMax: number) => void
}

function DualRange({ min, max, step = 1, valueMin, valueMax, onChange }: DualRangeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState<'min' | 'max' | null>(null)

  const leftPercent = valueToPercent(valueMin, min, max)
  const rightPercent = valueToPercent(valueMax, min, max)

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!dragging || !trackRef.current) return
      const rect = trackRef.current.getBoundingClientRect()
      const px = clamp(e.clientX - rect.left, 0, rect.width)
      const raw = min + (px / rect.width) * (max - min)
      const snapped = Math.round(raw / step) * step
      if (dragging === 'min') {
        const nextMin = clamp(Math.min(snapped, valueMax), min, max)
        onChange(nextMin, valueMax)
      } else {
        const nextMax = clamp(Math.max(snapped, valueMin), min, max)
        onChange(valueMin, nextMax)
      }
    }
    function onUp() {
      setDragging(null)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
    if (dragging) {
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup', onUp)
    }
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [dragging, min, max, step, valueMin, valueMax, onChange])

  return (
    <div className="relative mt-2 h-6 w-full" ref={trackRef}>
      <div className="absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-secondary-200" />
      <div
        className="absolute top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-primary-500"
        style={{ left: `${leftPercent}%`, right: `${100 - rightPercent}%` }}
      />
      <button
        type="button"
        aria-label="Minimum"
        onPointerDown={(e) => {
          e.preventDefault()
          setDragging('min')
        }}
        className="absolute top-1/2 -translate-y-1/2 -ml-[14px] h-7 w-7 rounded-full bg-white ring-2 ring-primary-500"
        style={{ left: `${leftPercent}%` }}
      />
      <button
        type="button"
        aria-label="Maximum"
        onPointerDown={(e) => {
          e.preventDefault()
          setDragging('max')
        }}
        className="absolute top-1/2 -translate-y-1/2 -ml-[14px] h-7 w-7 rounded-full bg-white ring-2 ring-primary-500"
        style={{ left: `${rightPercent}%` }}
      />
    </div>
  )
}

export function AdvancedFilterModal({
  isOpen,
  onClose,
  onApply,
  priceRange,
  areaRange,
  locations,
  initial,
  amenities = DEFAULT_AMENITIES,
  title = 'Advanced Search',
}: AdvancedFilterModalProps) {
  const [values, setValues] = useState<AdvancedFilterValues>(initial)
  const { t } = useTranslations()

  useEffect(() => setValues(initial), [initial, isOpen])

  const clamped = useMemo(() => {
    return {
      ...values,
      priceMin: clamp(Math.min(values.priceMin, values.priceMax), priceRange.min, priceRange.max),
      priceMax: clamp(Math.max(values.priceMax, values.priceMin), priceRange.min, priceRange.max),
      areaMin: clamp(Math.min(values.areaMin, values.areaMax), areaRange.min, areaRange.max),
      areaMax: clamp(Math.max(values.areaMax, values.areaMin), areaRange.min, areaRange.max),
    }
  }, [values, priceRange, areaRange])

  if (!isOpen) return null

  const SelectField = ({
    value,
    onChange,
    children,
  }: {
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    children: React.ReactNode
  }) => (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="h-12 w-full appearance-none rounded-2xl border border-secondary-200 bg-white px-4 pr-10 text-secondary-800 shadow-sm focus:border-primary-400 focus:outline-none"
      >
        {children}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary-500" />
    </div>
  )

  const fmt = (n: number) => `$${n.toLocaleString()}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-6">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl rounded-[28px] bg-white p-6 sm:p-8 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-3xl font-bold text-secondary-900">{title || t('advancedFilter.title')}</h3>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-secondary-100">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="h-px w-full bg-secondary-200/70" />

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-base font-semibold text-secondary-800">
              {t('advancedFilter.priceFrom')} <span className="text-primary-600">{fmt(clamped.priceMin)}</span> {t('advancedFilter.to')}{' '}
              <span className="text-primary-600">{fmt(clamped.priceMax)}</span>
            </p>
            <DualRange
              min={priceRange.min}
              max={priceRange.max}
              step={priceRange.step}
              valueMin={clamped.priceMin}
              valueMax={clamped.priceMax}
              onChange={(mn, mx) => setValues((v) => ({ ...v, priceMin: mn, priceMax: mx }))}
            />
          </div>

          <div>
            <p className="mb-2 text-base font-semibold text-secondary-800">
              {t('advancedFilter.sizeFrom')} <span className="text-primary-600">{clamped.areaMin}</span> {t('advancedFilter.to')}{' '}
              <span className="text-primary-600">{clamped.areaMax}</span>
            </p>
            <DualRange
              min={areaRange.min}
              max={areaRange.max}
              step={areaRange.step}
              valueMin={clamped.areaMin}
              valueMax={clamped.areaMax}
              onChange={(mn, mx) => setValues((v) => ({ ...v, areaMin: mn, areaMax: mx }))}
            />
          </div>

          <div>
            <SelectField value={clamped.location} onChange={(e) => setValues((v) => ({ ...v, location: e.target.value }))}>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </SelectField>
          </div>

          <div>
            <SelectField value={clamped.beds} onChange={(e) => setValues((v) => ({ ...v, beds: Number(e.target.value) }))}>
              <option value={0}>{t('advancedFilter.rooms')}</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}+
                </option>
              ))}
            </SelectField>
          </div>

          <div>
            <SelectField value={clamped.baths} onChange={(e) => setValues((v) => ({ ...v, baths: Number(e.target.value) }))}>
              <option value={0}>{t('advancedFilter.bathsAny')}</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}+
                </option>
              ))}
            </SelectField>
          </div>

          <div>
            <SelectField value={clamped.beds} onChange={(e) => setValues((v) => ({ ...v, beds: Number(e.target.value) }))}>
              <option value={0}>{t('advancedFilter.bedsAny')}</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}+
                </option>
              ))}
            </SelectField>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-secondary-800">{t('advancedFilter.amenities')}:</p>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {(amenities || []).map((a) => {
              const checked = values.amenities.includes(a)
              return (
                <label key={a} className="flex items-center gap-2 text-secondary-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                    checked={checked}
                    onChange={(e) =>
                      setValues((v) => ({
                        ...v,
                        amenities: e.target.checked
                          ? [...v.amenities, a]
                          : v.amenities.filter((x) => x !== a),
                      }))
                    }
                  />
                  <span>{a}</span>
                </label>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-secondary-300 px-5 text-secondary-800 hover:bg-secondary-50"
          >
            {t('advancedFilter.cancel')}
          </button>
          <button
            onClick={() => onApply(clamped)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 font-semibold text-white shadow-sm hover:bg-primary-600"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
            {t('advancedFilter.apply')}
          </button>
        </div>
      </div>
    </div>
  )
}


