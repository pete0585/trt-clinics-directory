import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createServiceClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const supabase = await createServiceClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const listingId = session.metadata?.listing_id
        const tier = session.metadata?.tier

        if (!listingId || !tier) break

        const tierRank = tier === 'featured' ? 2 : tier === 'verified' ? 1 : 0

        await supabase.from('trt_listings').update({
          listing_tier: tier,
          listing_tier_rank: tierRank,
          stripe_customer_id: session.customer as string,
          plan_expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        }).eq('id', listingId)

        await supabase.from('trt_payments').insert({
          listing_id: listingId,
          stripe_session_id: session.id,
          stripe_customer_id: session.customer as string,
          amount: session.amount_total,
          status: 'completed',
          tier,
        })
        break
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription
        const customerId = sub.customer as string

        if (sub.status === 'active') {
          await supabase.from('trt_listings')
            .update({
              stripe_subscription_id: sub.id,
              plan_expires_at: new Date(sub.current_period_end * 1000).toISOString(),
            })
            .eq('stripe_customer_id', customerId)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        const customerId = sub.customer as string

        await supabase.from('trt_listings')
          .update({
            listing_tier: 'free',
            listing_tier_rank: 0,
            stripe_subscription_id: null,
            plan_expires_at: null,
          })
          .eq('stripe_customer_id', customerId)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string
        console.warn(`Payment failed for customer ${customerId}`)
        break
      }
    }
  } catch (err) {
    console.error('Webhook processing error:', err)
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
