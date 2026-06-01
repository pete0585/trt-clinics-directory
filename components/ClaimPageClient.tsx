'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Shield, Star } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Valid email required'),
})
type FormData = z.infer<typeof schema>

interface ClaimPageClientProps {
  listingId: string
}

export default function ClaimPageClient({ listingId }: ClaimPageClientProps) {
  const searchParams = useSearchParams()
  const [step, setStep] = useState<'form' | 'sent' | 'upgrade'>('form')
  const [error, setError] = useState<string | null>(null)
  const [clinicName, setClinicName] = useState('')
  const [isLoadingUpgrade, setIsLoadingUpgrade] = useState(false)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (searchParams.get('verified') === 'true') {
      setStep('upgrade')
    }
  }, [searchParams])

  async function onSubmit(data: FormData) {
    setError(null)
    try {
      const res = await fetch('/api/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId, email: data.email }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error((body as { error?: string }).error ?? 'Failed to send verification email')
      }
      const body = await res.json() as { clinicName?: string }
      setClinicName(body.clinicName ?? '')
      setStep('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  async function handleUpgrade(tier: 'verified' | 'featured') {
    setIsLoadingUpgrade(true)
    try {
      const res = await fetch('/api/upgrade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId, tier }),
      })
      const body = await res.json() as { url?: string }
      if (body.url) {
        window.location.href = body.url
      }
    } finally {
      setIsLoadingUpgrade(false)
    }
  }

  if (step === 'sent') {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" aria-label="" />
        <h1 className="text-2xl font-bold text-brand-navy mb-3">Check Your Email</h1>
        <p className="text-brand-steel">
          We sent a verification link to your email. Click it to claim your listing{clinicName ? ` for ${clinicName}` : ''}.
        </p>
        <p className="text-sm text-brand-steel mt-4">Link expires in 72 hours.</p>
      </div>
    )
  }

  if (step === 'upgrade') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" aria-label="" />
          <h1 className="text-2xl font-bold text-brand-navy mb-2">Listing Claimed!</h1>
          <p className="text-brand-steel">Your clinic profile is live. Upgrade to get more patient inquiries.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-brand-blue/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-brand-blue" aria-label="" />
              <h2 className="font-bold text-brand-navy">Verified</h2>
            </div>
            <div className="text-3xl font-extrabold text-brand-navy mb-1">$199<span className="text-sm font-normal text-brand-steel">/year</span></div>
            <ul className="space-y-2 text-sm text-brand-slate my-4">
              {['Full treatment type display', 'Insurance badge', 'Patient contact form', '"Verified" badge', 'Priority placement'].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-label="" /> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('verified')}
              disabled={isLoadingUpgrade}
              className="w-full py-3 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoadingUpgrade ? 'Loading...' : 'Upgrade to Verified →'}
            </button>
          </div>

          <div className="bg-white border-2 border-brand-orange rounded-xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-brand-orange" aria-label="" />
              <h2 className="font-bold text-brand-navy">Featured</h2>
            </div>
            <div className="text-3xl font-extrabold text-brand-navy mb-1">$399<span className="text-sm font-normal text-brand-steel">/year</span></div>
            <ul className="space-y-2 text-sm text-brand-slate my-4">
              {['Everything in Verified', 'Top 3 city placement', 'Logo display', 'Promo offer slot', 'Monthly performance report'].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-label="" /> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('featured')}
              disabled={isLoadingUpgrade}
              className="w-full py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoadingUpgrade ? 'Loading...' : 'Get Featured →'}
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-brand-steel mt-6">
          One new patient covers your Verified listing cost 15x over.{' '}
          <Link href="/listings" className="text-brand-blue hover:underline">View your live listing →</Link>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white border border-brand-light-2 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-brand-navy mb-2">Claim This Listing</h1>
        <p className="text-brand-steel text-sm mb-6">
          Enter the email address associated with this clinic. We&apos;ll send a verification link to confirm you own it.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-slate mb-1.5">Clinic Email Address</label>
            <input
              {...register('email')}
              type="email"
              placeholder="you@yourclinic.com"
              className="w-full px-3 py-3 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">{error}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-lg transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Verification Email →'}
          </button>
        </form>

        <p className="text-center text-xs text-brand-steel mt-4">
          Claiming is free. Upgrade options available after verification.
        </p>
      </div>
    </div>
  )
}
