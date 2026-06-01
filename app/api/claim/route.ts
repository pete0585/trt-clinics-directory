import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  const { listingId, email } = await request.json()

  if (!listingId || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // Verify listing exists
  const { data: listing, error: listingError } = await supabase
    .from('trt_listings')
    .select('id, clinic_name, claimed')
    .eq('id', listingId)
    .single()

  if (listingError || !listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
  }

  if (listing.claimed) {
    return NextResponse.json({ error: 'This listing has already been claimed' }, { status: 409 })
  }

  // Generate token
  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString()

  await supabase.from('trt_claims').insert({
    listing_id: listingId,
    email,
    token,
    verified: false,
    expires_at: expiresAt,
  })

  const verifyUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/claim/verify?token=${token}&id=${listingId}`

  // Send verification email via Resend
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'curl/8.5.0',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? 'FindTRTClinic <hello@mail.findtrtclinic.com>',
        to: email,
        subject: `Verify your claim for ${listing.clinic_name}`,
        html: `
          <p>You requested to claim <strong>${listing.clinic_name}</strong> on FindTRTClinic.com.</p>
          <p>Click the link below to verify your ownership. This link expires in 72 hours.</p>
          <p><a href="${verifyUrl}" style="background:#F97316;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">Verify &amp; Claim Listing</a></p>
          <p style="color:#64748B;font-size:12px">If you didn't request this, you can ignore this email.</p>
        `,
      }),
    }).catch(err => console.error('Failed to send claim email:', err))
  }

  return NextResponse.json({ success: true, clinicName: listing.clinic_name })
}
