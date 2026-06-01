import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'
import { generateListingSlug } from '@/lib/utils'

const schema = z.object({
  clinic_name: z.string().min(2),
  address_line1: z.string().min(5),
  city: z.string().min(2),
  state: z.string().length(2),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/),
  phone: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  email: z.string().email().optional().or(z.literal('')),
  clinic_type: z.enum(['in_person', 'telehealth', 'hybrid']).optional(),
  treatment_options: z.array(z.string()).optional(),
  insurance_accepted: z.boolean().optional(),
  physician_supervised: z.boolean().optional(),
  physician_credentials: z.string().optional(),
  bio: z.string().max(500).optional(),
  submitter_email: z.string().email(),
})

export async function POST(request: NextRequest) {
  const body = await request.json()

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: 'Invalid submission', details: result.error.flatten() }, { status: 422 })
  }

  const data = result.data
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // Generate unique slug
  let slug = generateListingSlug(data.clinic_name, data.city, data.state)
  const { data: existing } = await supabase
    .from('trt_listings')
    .select('slug')
    .eq('slug', slug)
    .single()

  if (existing) {
    slug = `${slug}-${Date.now().toString(36)}`
  }

  const { error: insertError } = await supabase.from('trt_listings').insert({
    slug,
    clinic_name: data.clinic_name,
    address_line1: data.address_line1,
    city: data.city,
    state: data.state.toUpperCase(),
    zip: data.zip,
    phone: data.phone || null,
    website: data.website || null,
    email: data.email || null,
    clinic_type: data.clinic_type ?? 'in_person',
    treatment_options: data.treatment_options ?? [],
    insurance_accepted: data.insurance_accepted ?? false,
    physician_supervised: data.physician_supervised ?? false,
    physician_credentials: data.physician_credentials || null,
    bio: data.bio || null,
    listing_tier: 'free',
    listing_tier_rank: 0,
    source: 'self',
    is_approved: false,
  })

  if (insertError) {
    console.error('Insert error:', insertError)
    return NextResponse.json({ error: 'Failed to create listing' }, { status: 500 })
  }

  // Send confirmation email
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
        to: data.submitter_email,
        subject: `Your clinic listing has been submitted — ${data.clinic_name}`,
        html: `
          <p>Thanks for submitting <strong>${data.clinic_name}</strong> to FindTRTClinic!</p>
          <p>Your listing is under review and will be live within 24 hours.</p>
          <p>Once approved, you can claim your listing and upgrade to Verified or Featured for more visibility.</p>
          <p style="color:#64748B;font-size:12px">Questions? Reply to this email.</p>
        `,
      }),
    }).catch(err => console.error('Failed to send confirmation email:', err))
  }

  return NextResponse.json({ success: true, slug })
}
