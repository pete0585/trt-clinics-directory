import Link from 'next/link'
import { MapPin, Phone, Globe, Shield, Zap, CheckCircle, Star, Clock, DollarSign, Syringe, ExternalLink } from 'lucide-react'
import type { TrtListing } from '@/types'
import { TREATMENT_LABELS, CLINIC_TYPE_LABELS, CREDENTIAL_LABELS, PRICE_RANGE_LABELS, formatPhone, getStateName } from '@/lib/utils'
import ContactForm from './ContactForm'

interface ListingDetailProps {
  listing: TrtListing
}

export default function ListingDetail({ listing }: ListingDetailProps) {
  const isFeatured = listing.listing_tier === 'featured'
  const isVerified = listing.listing_tier === 'verified'

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className={`rounded-xl border p-6 md:p-8 mb-6 ${
        isFeatured ? 'bg-white border-brand-orange ring-1 ring-brand-orange/20 shadow-md' :
        isVerified ? 'bg-white border-brand-blue/30 shadow-sm' :
        'bg-white border-brand-light-2 shadow-sm'
      }`}>
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {isFeatured && (
                <span className="inline-flex items-center gap-1 bg-brand-orange text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  <Star className="w-3.5 h-3.5" aria-label="" /> Featured
                </span>
              )}
              {isVerified && (
                <span className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full border border-brand-blue/20">
                  <CheckCircle className="w-3.5 h-3.5" aria-label="" /> Verified by FindTRTClinic
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-brand-navy mb-1">{listing.clinic_name}</h1>

            <div className="flex items-center gap-1.5 text-brand-steel mb-4">
              <MapPin className="w-4 h-4 flex-shrink-0" aria-label="Location" />
              <span>{listing.city}, {getStateName(listing.state)} {listing.zip}</span>
            </div>

            {/* Key badges */}
            <div className="flex flex-wrap gap-2">
              {listing.clinic_type && (
                <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-brand-navy/5 text-brand-navy font-medium border border-brand-navy/10">
                  <Zap className="w-4 h-4" aria-label="" />
                  {CLINIC_TYPE_LABELS[listing.clinic_type] ?? listing.clinic_type}
                </span>
              )}
              {listing.physician_supervised && (
                <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-green-50 text-green-700 font-medium border border-green-200">
                  <Shield className="w-4 h-4" aria-label="" />
                  Physician-Supervised
                  {listing.physician_credentials && ` (${CREDENTIAL_LABELS[listing.physician_credentials] ?? listing.physician_credentials})`}
                </span>
              )}
              {listing.insurance_accepted && (
                <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-medium border border-blue-200">
                  <CheckCircle className="w-4 h-4" aria-label="" />
                  Accepts Insurance
                </span>
              )}
              {listing.accepts_new_patients && (
                <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                  Accepting New Patients
                </span>
              )}
            </div>
          </div>

          {/* Contact sidebar */}
          <div className="md:w-56 lg:w-64 space-y-3 flex-shrink-0">
            {listing.phone && (
              <a
                href={`tel:${listing.phone}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" aria-label="Phone" />
                {formatPhone(listing.phone)}
              </a>
            )}
            {listing.booking_url && (
              <a
                href={listing.booking_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold rounded-lg transition-colors"
              >
                Book Appointment <ExternalLink className="w-4 h-4" aria-label="" />
              </a>
            )}
            {listing.website && (
              <a
                href={listing.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-brand-light-2 text-brand-slate hover:border-brand-blue hover:text-brand-blue font-medium rounded-lg transition-colors text-sm"
              >
                <Globe className="w-4 h-4" aria-label="Website" /> Visit Website
              </a>
            )}

            {!listing.claimed && (
              <Link
                href={`/claim/${listing.id}`}
                className="block text-center text-xs text-brand-steel hover:text-brand-blue mt-2 transition-colors"
              >
                Is this your clinic? Claim it →
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          {/* Bio */}
          {listing.bio && (
            <div className="bg-white rounded-xl border border-brand-light-2 p-6">
              <h2 className="font-bold text-brand-navy mb-3">About This Clinic</h2>
              <p className="text-brand-slate leading-relaxed">{listing.bio}</p>
            </div>
          )}

          {/* Treatment Options */}
          {(listing.treatment_options ?? []).length > 0 && (
            <div className="bg-white rounded-xl border border-brand-light-2 p-6">
              <h2 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                <Syringe className="w-5 h-5 text-brand-blue" aria-label="" />
                Treatment Options
              </h2>
              <div className="flex flex-wrap gap-2">
                {(listing.treatment_options ?? []).map(t => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-brand-navy text-white text-sm font-medium rounded-lg"
                  >
                    {TREATMENT_LABELS[t] ?? t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Insurance */}
          {listing.insurance_accepted && (
            <div className="bg-white rounded-xl border border-brand-light-2 p-6">
              <h2 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" aria-label="" />
                Insurance
              </h2>
              {(listing.insurance_list ?? []).length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {(listing.insurance_list ?? []).map(ins => (
                    <span key={ins} className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-md border border-green-200">
                      {ins}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-brand-slate text-sm">This clinic accepts insurance. Contact them for a list of accepted plans.</p>
              )}
            </div>
          )}

          {/* Telehealth States */}
          {listing.telehealth_available && (listing.telehealth_states ?? []).length > 0 && (
            <div className="bg-white rounded-xl border border-brand-light-2 p-6">
              <h2 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-blue" aria-label="" />
                Telehealth Available In
              </h2>
              <div className="flex flex-wrap gap-2">
                {(listing.telehealth_states ?? []).map(s => (
                  <span key={s} className="px-2.5 py-1 bg-brand-blue/10 text-brand-blue text-sm font-medium rounded-md border border-brand-blue/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Details */}
          <div className="bg-white rounded-xl border border-brand-light-2 p-6">
            <h2 className="font-bold text-brand-navy mb-4">Clinic Details</h2>
            <dl className="space-y-3 text-sm">
              {listing.address_line1 && (
                <div>
                  <dt className="text-brand-steel font-medium mb-0.5">Address</dt>
                  <dd className="text-brand-slate">
                    {listing.address_line1}<br />
                    {listing.city}, {listing.state} {listing.zip}
                  </dd>
                </div>
              )}
              {listing.price_range && (
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-brand-steel" aria-label="Price range" />
                  <span className="text-brand-slate">{PRICE_RANGE_LABELS[listing.price_range] ?? listing.price_range}</span>
                </div>
              )}
              {listing.hours_notes && (
                <div>
                  <dt className="flex items-center gap-1.5 text-brand-steel font-medium mb-0.5">
                    <Clock className="w-4 h-4" aria-label="Hours" /> Hours
                  </dt>
                  <dd className="text-brand-slate">{listing.hours_notes}</dd>
                </div>
              )}
            </dl>
          </div>

          {/* Contact Form */}
          {(isVerified || isFeatured) && (
            <div className="bg-white rounded-xl border border-brand-light-2 p-6">
              <h2 className="font-bold text-brand-navy mb-4">Send a Message</h2>
              <ContactForm listingId={listing.id} clinicName={listing.clinic_name} />
            </div>
          )}

          {/* Upgrade CTA for unclaimed */}
          {!listing.claimed && listing.listing_tier === 'free' && (
            <div className="bg-brand-navy rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Own This Clinic?</h3>
              <p className="text-sm text-blue-200 mb-4">Claim your profile to add treatment details, insurance info, and start getting patient inquiries.</p>
              <Link
                href={`/claim/${listing.id}`}
                className="block text-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
              >
                Claim This Listing →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
