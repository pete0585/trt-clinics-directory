import { NextRequest, NextResponse } from 'next/server'
import { stripe, TIER_PRICES } from '@/lib/stripe'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  const { listingId, tier } = await request.json()

  if (!listingId || !tier || !['verified', 'featured'].includes(tier)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: listing } = await supabase
    .from('trt_listings')
    .select('id, clinic_name, slug')
    .eq('id', listingId)
    .single()

  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
  }

  const priceId = TIER_PRICES[tier]
  if (!priceId) {
    return NextResponse.json({ error: 'Price not configured' }, { status: 500 })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://findtrtclinic.com'

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    allow_promotion_codes: true,
    metadata: {
      listing_id: listingId,
      tier,
    },
    success_url: `${siteUrl}/claim/${listingId}?verified=true&upgraded=true`,
    cancel_url: `${siteUrl}/claim/${listingId}?verified=true`,
  })

  return NextResponse.json({ url: session.url })
}
