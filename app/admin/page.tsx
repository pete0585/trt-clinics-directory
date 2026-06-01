import type { Metadata } from 'next'
import Link from 'next/link'
import AdminTable from '@/components/AdminTable'
import { getAdminListings, getTotalListingCount } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Admin — FindTRTClinic',
  robots: { index: false, follow: false },
}

interface PageProps {
  searchParams: Promise<{ status?: string; page?: string }>
}

export default async function AdminPage({ searchParams }: PageProps) {
  const params = await searchParams
  const status = (params.status === 'all' ? 'all' : 'pending') as 'pending' | 'all'
  const page = params.page ? parseInt(params.page) : 1

  const [{ listings, total }, totalCount] = await Promise.all([
    getAdminListings(page, status),
    getTotalListingCount(),
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-brand-navy">Listing Management</h1>
          <p className="text-sm text-brand-steel mt-1">{totalCount.toLocaleString()} total listings</p>
        </div>
        <Link
          href="/submit"
          className="px-4 py-2 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-brand-orange-dark transition-colors"
        >
          + Add Listing
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-brand-light-2 p-4 text-center">
          <div className="text-2xl font-bold text-brand-navy">{totalCount}</div>
          <div className="text-xs text-brand-steel mt-1">Total Listings</div>
        </div>
        <div className="bg-white rounded-xl border border-brand-light-2 p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {status === 'pending' ? total : '—'}
          </div>
          <div className="text-xs text-brand-steel mt-1">Pending Review</div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-4">
        <Link
          href="/admin?status=pending"
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            status === 'pending' ? 'bg-brand-navy text-white' : 'bg-white border border-brand-light-2 text-brand-slate hover:border-brand-navy'
          }`}
        >
          Pending Review
        </Link>
        <Link
          href="/admin?status=all"
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            status === 'all' ? 'bg-brand-navy text-white' : 'bg-white border border-brand-light-2 text-brand-slate hover:border-brand-navy'
          }`}
        >
          All Listings
        </Link>
      </div>

      <AdminTable listings={listings} />

      {total > 50 && (
        <div className="flex items-center justify-center gap-3 mt-6 text-sm">
          {page > 1 && (
            <Link href={`/admin?status=${status}&page=${page - 1}`} className="px-4 py-2 border border-brand-light-2 rounded-lg hover:border-brand-blue transition-colors">
              ← Previous
            </Link>
          )}
          <span className="text-brand-steel">Page {page} of {Math.ceil(total / 50)}</span>
          {page < Math.ceil(total / 50) && (
            <Link href={`/admin?status=${status}&page=${page + 1}`} className="px-4 py-2 border border-brand-light-2 rounded-lg hover:border-brand-blue transition-colors">
              Next →
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
