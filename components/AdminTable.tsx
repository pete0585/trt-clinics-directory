'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, XCircle, Eye, ExternalLink } from 'lucide-react'
import type { TrtListing } from '@/types'

interface AdminTableProps {
  listings: TrtListing[]
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
}

export default function AdminTable({ listings, onApprove, onReject }: AdminTableProps) {
  const [processing, setProcessing] = useState<string | null>(null)

  async function handleApprove(id: string) {
    if (processing) return
    setProcessing(id)
    try {
      await fetch(`/api/admin/listings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_approved: true }),
      })
      onApprove?.(id)
    } finally {
      setProcessing(null)
    }
  }

  async function handleReject(id: string) {
    if (processing) return
    setProcessing(id)
    try {
      await fetch(`/api/admin/listings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_active: false, is_approved: false }),
      })
      onReject?.(id)
    } finally {
      setProcessing(null)
    }
  }

  if (listings.length === 0) {
    return (
      <div className="text-center py-12 text-brand-steel">
        <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" aria-label="" />
        <p className="font-medium">No pending listings</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-brand-light-2">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand-light border-b border-brand-light-2">
            <th className="text-left px-4 py-3 font-semibold text-brand-slate">Clinic</th>
            <th className="text-left px-4 py-3 font-semibold text-brand-slate hidden md:table-cell">Location</th>
            <th className="text-left px-4 py-3 font-semibold text-brand-slate hidden lg:table-cell">Type</th>
            <th className="text-left px-4 py-3 font-semibold text-brand-slate hidden lg:table-cell">Tier</th>
            <th className="text-left px-4 py-3 font-semibold text-brand-slate hidden md:table-cell">Source</th>
            <th className="text-center px-4 py-3 font-semibold text-brand-slate">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-light-2">
          {listings.map(listing => (
            <tr key={listing.id} className={`bg-white hover:bg-brand-light/50 transition-colors ${!listing.is_approved ? 'border-l-4 border-l-yellow-400' : ''}`}>
              <td className="px-4 py-3">
                <div className="font-medium text-brand-navy">{listing.clinic_name}</div>
                {listing.phone && <div className="text-xs text-brand-steel mt-0.5">{listing.phone}</div>}
              </td>
              <td className="px-4 py-3 hidden md:table-cell text-brand-slate">
                {listing.city}, {listing.state}
              </td>
              <td className="px-4 py-3 hidden lg:table-cell">
                <span className="text-xs px-2 py-0.5 rounded-md bg-brand-light text-brand-slate border border-brand-light-2">
                  {listing.clinic_type ?? '—'}
                </span>
              </td>
              <td className="px-4 py-3 hidden lg:table-cell">
                <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                  listing.listing_tier === 'featured' ? 'bg-brand-orange/10 text-brand-orange-dark' :
                  listing.listing_tier === 'verified' ? 'bg-brand-blue/10 text-brand-blue' :
                  'bg-brand-light text-brand-steel'
                }`}>
                  {listing.listing_tier}
                </span>
              </td>
              <td className="px-4 py-3 hidden md:table-cell text-xs text-brand-steel">
                {listing.source ?? '—'}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center gap-2">
                  <Link
                    href={`/listings/${listing.slug}`}
                    target="_blank"
                    className="p-1.5 text-brand-steel hover:text-brand-blue transition-colors rounded"
                    title="View listing"
                  >
                    <Eye className="w-4 h-4" aria-label="View" />
                  </Link>
                  {listing.website && (
                    <a
                      href={listing.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-brand-steel hover:text-brand-blue transition-colors rounded"
                      title="Visit website"
                    >
                      <ExternalLink className="w-4 h-4" aria-label="Website" />
                    </a>
                  )}
                  {!listing.is_approved && (
                    <button
                      onClick={() => handleApprove(listing.id)}
                      disabled={processing === listing.id}
                      className="p-1.5 text-green-600 hover:text-green-700 disabled:opacity-50 transition-colors rounded"
                      title="Approve"
                    >
                      <CheckCircle className="w-4 h-4" aria-label="Approve" />
                    </button>
                  )}
                  <button
                    onClick={() => handleReject(listing.id)}
                    disabled={processing === listing.id}
                    className="p-1.5 text-red-500 hover:text-red-700 disabled:opacity-50 transition-colors rounded"
                    title="Reject/Remove"
                  >
                    <XCircle className="w-4 h-4" aria-label="Reject" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
