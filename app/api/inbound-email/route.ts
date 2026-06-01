import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.INBOUND_WEBHOOK_SECRET

  if (webhookSecret) {
    const svixId = request.headers.get('svix-id')
    const svixTimestamp = request.headers.get('svix-timestamp')
    const svixSignature = request.headers.get('svix-signature')

    if (!svixId || !svixTimestamp || !svixSignature) {
      return NextResponse.json({ error: 'Missing svix headers' }, { status: 400 })
    }

    const body = await request.text()
    const signedContent = `${svixId}.${svixTimestamp}.${body}`
    const secretBytes = Buffer.from(webhookSecret.replace('whsec_', ''), 'base64')
    const signature = crypto
      .createHmac('sha256', secretBytes)
      .update(signedContent)
      .digest('base64')
    const expectedSig = `v1,${signature}`

    if (!svixSignature.split(' ').includes(expectedSig)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const payload = JSON.parse(body)
    await processInboundEmail(payload)
  } else {
    console.warn('INBOUND_WEBHOOK_SECRET not set — skipping signature verification')
    const payload = await request.json()
    await processInboundEmail(payload)
  }

  return NextResponse.json({ received: true })
}

async function processInboundEmail(payload: Record<string, unknown>) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  await supabase.from('trt_inbound_emails').upsert({
    id: payload.id as string,
    from_email: payload.from as string,
    subject: payload.subject as string,
    body_text: payload.text as string,
    received_at: new Date().toISOString(),
    processed: false,
  }, { onConflict: 'id' }).select()
}
