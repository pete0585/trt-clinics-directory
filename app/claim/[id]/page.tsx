import type { Metadata } from 'next'
import ClaimPageClient from '@/components/ClaimPageClient'

interface PageProps {
  params: Promise<{ id: string }>
}

export const metadata: Metadata = {
  title: 'Claim Your Clinic Listing — FindTRTClinic',
  robots: { index: false, follow: false },
}

export default async function ClaimPage({ params }: PageProps) {
  const { id } = await params
  return <ClaimPageClient listingId={id} />
}
