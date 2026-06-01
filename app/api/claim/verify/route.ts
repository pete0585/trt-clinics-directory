import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')
  const listingId = searchParams.get('id')

  if (!token || !listingId) {
    return NextResponse.redirect(new URL(`/claim/${listingId ?? ''}?error=missing-params`, request.url))
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: claim } = await supabase
    .from('trt_claims')
    .select('*')
    .eq('token', token)
    .eq('listing_id', listingId)
    .eq('verified', false)
    .gte('expires_at', new Date().toISOString())
    .single()

  if (!claim) {
    return NextResponse.redirect(
      new URL(`/claim/${listingId}?error=invalid-or-expired-token`, request.url)
    )
  }

  const now = new Date().toISOString()

  await Promise.all([
    supabase.from('trt_claims').update({
      verified: true,
      verified_at: now,
    }).eq('id', claim.id),

    supabase.from('trt_listings').update({
      claimed: true,
      claimed_at: now,
      listing_tier: 'free',
    }).eq('id', listingId),
  ])

  return NextResponse.redirect(
    new URL(`/claim/${listingId}?verified=true`, request.url)
  )
}
