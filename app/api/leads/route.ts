import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const schema = z.object({
  listingId: z.string().uuid(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const result = schema.safeParse(body)

  if (!result.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 422 })
  }

  const data = result.data
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: listing } = await supabase
    .from('trt_listings')
    .select('id, clinic_name, email, listing_tier')
    .eq('id', data.listingId)
    .in('listing_tier', ['verified', 'featured'])
    .single()

  if (!listing) {
    return NextResponse.json({ error: 'Listing not eligible for inquiries' }, { status: 403 })
  }

  await supabase.from('trt_leads').insert({
    listing_id: data.listingId,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    message: data.message,
    status: 'new',
  })

  // Forward to clinic if they have an email
  if (listing.email) {
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
          to: listing.email,
          reply_to: data.email,
          subject: `New patient inquiry from FindTRTClinic — ${data.name}`,
          html: `
            <p>A potential patient reached out about <strong>${listing.clinic_name}</strong> via FindTRTClinic.</p>
            <table style="border-collapse:collapse;width:100%;max-width:500px">
              <tr><td style="padding:8px;font-weight:bold;color:#64748B">Name:</td><td style="padding:8px">${data.name}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#64748B">Email:</td><td style="padding:8px"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              ${data.phone ? `<tr><td style="padding:8px;font-weight:bold;color:#64748B">Phone:</td><td style="padding:8px">${data.phone}</td></tr>` : ''}
              <tr><td style="padding:8px;font-weight:bold;color:#64748B;vertical-align:top">Message:</td><td style="padding:8px">${data.message}</td></tr>
            </table>
            <p style="color:#64748B;font-size:12px">Sent via FindTRTClinic.com. Reply directly to this email to respond to ${data.name}.</p>
          `,
        }),
      }).catch(err => console.error('Failed to forward lead:', err))
    }
  }

  return NextResponse.json({ success: true })
}
