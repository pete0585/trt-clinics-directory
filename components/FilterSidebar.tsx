'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { X, SlidersHorizontal } from 'lucide-react'
import { US_STATES, TREATMENT_LABELS } from '@/lib/utils'

const CLINIC_TYPE_OPTIONS = [
  { value: 'in_person', label: 'In-Person' },
  { value: 'telehealth', label: 'Telehealth' },
  { value: 'hybrid', label: 'In-Person + Telehealth' },
]

export default function FilterSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const state = searchParams.get('state') ?? ''
  const clinicType = searchParams.get('clinicType') ?? ''
  const treatment = searchParams.get('treatmentOption') ?? ''
  const insurance = searchParams.get('insurance') === 'true'
  const physicianSupervised = searchParams.get('physicianSupervised') === 'true'
  const telehealth = searchParams.get('telehealth') === 'true'

  const updateFilter = useCallback((key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('page')
    if (value === null || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`${pathname}?${params.toString()}`)
  }, [router, pathname, searchParams])

  const toggleBoolean = useCallback((key: string, current: boolean) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('page')
    if (current) {
      params.delete(key)
    } else {
      params.set(key, 'true')
    }
    router.push(`${pathname}?${params.toString()}`)
  }, [router, pathname, searchParams])

  const clearAll = useCallback(() => {
    const params = new URLSearchParams()
    const city = searchParams.get('city')
    if (city) params.set('city', city)
    router.push(`${pathname}?${params.toString()}`)
  }, [router, pathname, searchParams])

  const hasFilters = state || clinicType || treatment || insurance || physicianSupervised || telehealth

  return (
    <aside className="bg-white rounded-xl border border-brand-light-2 p-5 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-brand-navy">
          <SlidersHorizontal className="w-4 h-4" aria-label="" />
          <span>Filters</span>
        </div>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs text-brand-steel hover:text-brand-orange transition-colors"
          >
            <X className="w-3 h-3" aria-label="" /> Clear all
          </button>
        )}
      </div>

      {/* State */}
      <div>
        <label className="block text-xs font-semibold text-brand-slate uppercase tracking-wide mb-2">State</label>
        <select
          value={state}
          onChange={e => updateFilter('state', e.target.value || null)}
          className="w-full text-sm px-3 py-2 border border-brand-light-2 rounded-lg bg-white text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue"
        >
          <option value="">All States</option>
          {Object.entries(US_STATES).map(([abbr, name]) => (
            <option key={abbr} value={abbr}>{name}</option>
          ))}
        </select>
      </div>

      {/* Clinic Type */}
      <div>
        <label className="block text-xs font-semibold text-brand-slate uppercase tracking-wide mb-2">Clinic Type</label>
        <div className="space-y-1.5">
          {CLINIC_TYPE_OPTIONS.map(opt => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="clinicType"
                value={opt.value}
                checked={clinicType === opt.value}
                onChange={() => updateFilter('clinicType', clinicType === opt.value ? null : opt.value)}
                className="accent-brand-blue"
              />
              <span className="text-sm text-brand-slate group-hover:text-brand-navy transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
        {clinicType && (
          <button onClick={() => updateFilter('clinicType', null)} className="text-xs text-brand-steel mt-1 hover:text-brand-orange">
            Clear
          </button>
        )}
      </div>

      {/* Treatment Options */}
      <div>
        <label className="block text-xs font-semibold text-brand-slate uppercase tracking-wide mb-2">Treatment Type</label>
        <select
          value={treatment}
          onChange={e => updateFilter('treatmentOption', e.target.value || null)}
          className="w-full text-sm px-3 py-2 border border-brand-light-2 rounded-lg bg-white text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue"
        >
          <option value="">All Treatments</option>
          {Object.entries(TREATMENT_LABELS).map(([val, label]) => (
            <option key={val} value={val}>{label}</option>
          ))}
        </select>
      </div>

      {/* Checkboxes */}
      <div>
        <label className="block text-xs font-semibold text-brand-slate uppercase tracking-wide mb-2">Options</label>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={insurance}
              onChange={() => toggleBoolean('insurance', insurance)}
              className="accent-brand-blue rounded"
            />
            <span className="text-sm text-brand-slate group-hover:text-brand-navy">Accepts Insurance</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={physicianSupervised}
              onChange={() => toggleBoolean('physicianSupervised', physicianSupervised)}
              className="accent-brand-blue rounded"
            />
            <span className="text-sm text-brand-slate group-hover:text-brand-navy">Physician-Supervised (MD/DO)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={telehealth}
              onChange={() => toggleBoolean('telehealth', telehealth)}
              className="accent-brand-blue rounded"
            />
            <span className="text-sm text-brand-slate group-hover:text-brand-navy">Telehealth Available</span>
          </label>
        </div>
      </div>
    </aside>
  )
}
