'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, MapPin, ChevronDown } from 'lucide-react'
import { US_STATES } from '@/lib/utils'

interface SearchBarProps {
  className?: string
  defaultCity?: string
  defaultState?: string
}

export default function SearchBar({ className = '', defaultCity = '', defaultState = '' }: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [city, setCity] = useState(defaultCity || searchParams.get('city') || '')
  const [state, setState] = useState(defaultState || searchParams.get('state') || '')

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (city.trim()) params.set('city', city.trim())
    if (state) params.set('state', state)
    startTransition(() => {
      router.push(`/listings?${params.toString()}`)
    })
  }

  return (
    <form onSubmit={handleSearch} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-steel w-5 h-5" aria-label="Location" />
        <input
          type="text"
          placeholder="City (e.g. Austin, Dallas)"
          value={city}
          onChange={e => setCity(e.target.value)}
          className="w-full pl-10 pr-4 py-3.5 rounded-lg border border-brand-light-2 bg-white text-brand-slate placeholder-brand-steel focus:outline-none focus:ring-2 focus:ring-brand-blue text-base"
        />
      </div>

      <div className="relative">
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-steel w-4 h-4 pointer-events-none" aria-label="Select state" />
        <select
          value={state}
          onChange={e => setState(e.target.value)}
          className="appearance-none w-full sm:w-44 pl-4 pr-10 py-3.5 rounded-lg border border-brand-light-2 bg-white text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-blue text-base cursor-pointer"
        >
          <option value="">All States</option>
          {Object.entries(US_STATES).map(([abbr, name]) => (
            <option key={abbr} value={abbr}>{name}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-base whitespace-nowrap"
      >
        <Search className="w-5 h-5" aria-label="Search" />
        {isPending ? 'Searching...' : 'Find Clinics'}
      </button>
    </form>
  )
}
