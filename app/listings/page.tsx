import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import FilterSidebar from '@/components/FilterSidebar'
import SearchBar from '@/components/SearchBar'
import { getListings } from '@/lib/data'
import type { ListingFilters } from '@/types'
import { getStateName } from '@/lib/utils'

interface PageProps {
  searchParams: Promise<Record<string, string>>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams
  const city = params.city ?? ''
  const state = params.state ?? ''
  const title = city && state
    ? `TRT Clinics in ${city}, ${state} — Find Testosterone Replacement Therapy`
    : state
    ? `TRT Clinics in ${getStateName(state)} — Find Testosterone Replacement Therapy`
    : 'Browse TRT Clinics — Find Testosterone Replacement Therapy Near You'

  return {
    title,
    description: 'Browse testosterone replacement therapy clinics. Filter by insurance, treatment type, physician supervision, and telehealth availability.',
  }
}

export default async function ListingsPage({ searchParams }: PageProps) {
  const params = await searchParams

  const filters: ListingFilters = {
    city: params.city || undefined,
    state: params.state || undefined,
    clinicType: (params.clinicType as ListingFilters['clinicType']) || undefined,
    treatmentOption: (params.treatmentOption as ListingFilters['treatmentOption']) || undefined,
    insurance: params.insurance === 'true' ? true : undefined,
    physicianSupervised: params.physicianSupervised === 'true' ? true : undefined,
    telehealth: params.telehealth === 'true' ? true : undefined,
    search: params.search || undefined,
    page: params.page ? parseInt(params.page) : 1,
  }

  const { listings, total, page, totalPages } = await getListings(filters)

  const city = params.city ?? ''
  const state = params.state ?? ''
  const heading = city && state
    ? `TRT Clinics in ${city}, ${state}`
    : state
    ? `TRT Clinics in ${getStateName(state)}`
    : 'All TRT Clinics'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search bar */}
      <div className="mb-6">
        <Suspense>
          <SearchBar defaultCity={city} defaultState={state} />
        </Suspense>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <Suspense fallback={<div className="h-64 bg-white rounded-xl border border-brand-light-2 animate-pulse" />}>
            <FilterSidebar />
          </Suspense>
        </aside>

        {/* Results */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-brand-navy">{heading}</h1>
              <p className="text-sm text-brand-steel mt-0.5">
                {total === 0 ? 'No clinics found' : `${total.toLocaleString()} clinic${total !== 1 ? 's' : ''} found`}
              </p>
            </div>
          </div>

          {listings.length === 0 ? (
            <div className="bg-white rounded-xl border border-brand-light-2 p-12 text-center">
              <p className="text-brand-steel font-medium mb-2">No clinics found matching your filters.</p>
              <Link href="/listings" className="text-brand-blue hover:underline text-sm">Clear filters and browse all</Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {listings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {page > 1 && (
                <Link
                  href={`?${new URLSearchParams({ ...params, page: String(page - 1) }).toString()}`}
                  className="px-4 py-2 text-sm border border-brand-light-2 rounded-lg hover:border-brand-blue text-brand-slate hover:text-brand-blue transition-colors"
                >
                  ← Previous
                </Link>
              )}
              <span className="text-sm text-brand-steel">Page {page} of {totalPages}</span>
              {page < totalPages && (
                <Link
                  href={`?${new URLSearchParams({ ...params, page: String(page + 1) }).toString()}`}
                  className="px-4 py-2 text-sm border border-brand-light-2 rounded-lg hover:border-brand-blue text-brand-slate hover:text-brand-blue transition-colors"
                >
                  Next →
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
