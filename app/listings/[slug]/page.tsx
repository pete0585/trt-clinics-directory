import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import ListingDetail from '@/components/ListingDetail'
import { ViewTracker } from '@/components/ViewTracker'
import { getListing, getFeaturedListings } from '@/lib/data'
import { getStateName, TREATMENT_LABELS } from '@/lib/utils'
import ListingCard from '@/components/ListingCard'
import { createServiceClient } from '@/lib/supabase/server'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const listing = await getListing(slug)
  if (!listing) return { title: 'Clinic Not Found' }

  const title = `${listing.clinic_name} — TRT Clinic in ${listing.city}, ${listing.state} | FindTRTClinic`
  const treatmentStr = (listing.treatment_options ?? [])
    .map(t => TREATMENT_LABELS[t] ?? t)
    .join(', ')

  const desc = `${listing.clinic_name} is a testosterone replacement therapy clinic in ${listing.city}, ${getStateName(listing.state)}.${treatmentStr ? ` Treatments: ${treatmentStr}.` : ''}${listing.insurance_accepted ? ' Accepts insurance.' : ''}${listing.physician_supervised ? ' Physician-supervised.' : ''}`

  return {
    title,
    description: desc.slice(0, 160),
    openGraph: {
      title,
      description: desc.slice(0, 160),
      url: `https://findtrtclinic.com/listings/${slug}`,
    },
  }
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params
  const [listing, related] = await Promise.all([
    getListing(slug),
    getFeaturedListings(3),
  ])

  if (!listing) notFound()

  const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString()
  const supabase = await createServiceClient()
  const { count: viewCount } = await supabase
    .from('listing_views')
    .select('*', { count: 'exact', head: true })
    .eq('directory_slug', 'trt-clinics')
    .eq('listing_id', String(listing.id))
    .gte('viewed_at', monthStart)
  const monthlyViews = viewCount ?? 0

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: listing.clinic_name,
    medicalSpecialty: ['Urology', 'Endocrinology'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address_line1 ?? undefined,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip ?? undefined,
      addressCountry: 'US',
    },
    telephone: listing.phone ?? undefined,
    url: listing.website ?? undefined,
    description: listing.bio ?? undefined,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ViewTracker listingId={String(listing.id)} directorySlug='trt-clinics' />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-brand-steel mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" aria-label="" />
          <Link href="/listings" className="hover:text-brand-blue transition-colors">TRT Clinics</Link>
          <ChevronRight className="w-4 h-4" aria-label="" />
          <Link
            href={`/listings?city=${encodeURIComponent(listing.city)}&state=${listing.state}`}
            className="hover:text-brand-blue transition-colors"
          >
            {listing.city}, {listing.state}
          </Link>
          <ChevronRight className="w-4 h-4" aria-label="" />
          <span className="text-brand-navy font-medium truncate max-w-[200px]">{listing.clinic_name}</span>
        </nav>

        <ListingDetail listing={listing} monthlyViews={monthlyViews} />

        {/* Related listings */}
        {related.filter(r => r.id !== listing.id).length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-brand-navy mb-4">More Featured TRT Clinics</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related
                .filter(r => r.id !== listing.id)
                .slice(0, 3)
                .map(r => <ListingCard key={r.id} listing={r} />)}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
