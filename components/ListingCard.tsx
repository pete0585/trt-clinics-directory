import Link from 'next/link'
import { MapPin, Phone, Shield, Zap, CheckCircle, Star } from 'lucide-react'
import type { TrtListing } from '@/types'
import { TREATMENT_LABELS, CLINIC_TYPE_LABELS, formatPhone } from '@/lib/utils'

interface ListingCardProps {
  listing: TrtListing
}

export default function ListingCard({ listing }: ListingCardProps) {
  const isFeatured = listing.listing_tier === 'featured'
  const isVerified = listing.listing_tier === 'verified'
  const treatments = (listing.treatment_options ?? []).slice(0, 3)
  const hasMore = (listing.treatment_options ?? []).length > 3

  return (
    <Link href={`/listings/${listing.slug}`} className="block group">
      <article
        className={`relative bg-white rounded-xl border transition-all duration-200 hover:shadow-lg overflow-hidden ${
          isFeatured
            ? 'border-brand-orange shadow-md ring-1 ring-brand-orange/20'
            : isVerified
            ? 'border-brand-blue/30 shadow-sm'
            : 'border-brand-light-2 shadow-sm hover:border-brand-blue/20'
        }`}
      >
        {isFeatured && (
          <div className="bg-brand-orange text-white text-xs font-bold px-3 py-1 text-center tracking-wide uppercase">
            ★ Featured Clinic
          </div>
        )}

        <div className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-brand-navy text-base leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
                {listing.clinic_name}
              </h3>
              <div className="flex items-center gap-1 mt-1 text-brand-steel text-sm">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" aria-label="Location" />
                <span className="truncate">{listing.city}, {listing.state}</span>
              </div>
            </div>

            {/* Tier badge */}
            <div className="flex-shrink-0">
              {isFeatured ? (
                <span className="inline-flex items-center gap-1 bg-brand-orange/10 text-brand-orange-dark text-xs font-semibold px-2 py-1 rounded-full border border-brand-orange/20">
                  <Star className="w-3 h-3" aria-label="" /> Featured
                </span>
              ) : isVerified ? (
                <span className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold px-2 py-1 rounded-full border border-brand-blue/20">
                  <CheckCircle className="w-3 h-3" aria-label="" /> Verified
                </span>
              ) : null}
            </div>
          </div>

          {/* Clinic type + physician supervision badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {listing.clinic_type && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-brand-navy/5 text-brand-navy font-medium border border-brand-navy/10">
                <Zap className="w-3 h-3" aria-label="" />
                {CLINIC_TYPE_LABELS[listing.clinic_type] ?? listing.clinic_type}
              </span>
            )}
            {listing.physician_supervised && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-green-50 text-green-700 font-medium border border-green-200">
                <Shield className="w-3 h-3" aria-label="" />
                Physician-Supervised
              </span>
            )}
            {listing.insurance_accepted && (
              <span className="inline-flex items-center text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-medium border border-blue-200">
                Takes Insurance
              </span>
            )}
          </div>

          {/* Treatment options */}
          {treatments.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {treatments.map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 bg-brand-light text-brand-slate rounded-md border border-brand-light-2"
                >
                  {TREATMENT_LABELS[t] ?? t}
                </span>
              ))}
              {hasMore && (
                <span className="text-xs px-2 py-0.5 text-brand-steel">
                  +{(listing.treatment_options ?? []).length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Phone */}
          {listing.phone && (
            <div className="flex items-center gap-1.5 text-sm text-brand-steel mt-auto">
              <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-label="Phone" />
              <span>{formatPhone(listing.phone)}</span>
            </div>
          )}
        </div>

        {/* CTA footer */}
        <div className={`px-5 py-3 border-t text-sm font-semibold flex items-center justify-between ${
          isFeatured ? 'bg-brand-orange/5 border-brand-orange/10 text-brand-orange-dark' : 'bg-brand-light border-brand-light-2 text-brand-navy'
        }`}>
          <span>View Profile</span>
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </div>
      </article>
    </Link>
  )
}
