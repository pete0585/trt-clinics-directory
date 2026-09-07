import type { Metadata } from "next"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Best TRT/HRT Clinic in Tucson, AZ | TRT/HRT Clinic Directory",
  description: "Find trt/hrt clinic in Tucson, Arizona. 21+ listed. Filter by city and compare providers.",
  alternates: { canonical: `${SITE_URL}/trt-clinics/tucson-az` },
}

async function getListings() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("trt_listings")
    .select("*")
    .eq("city", "Tucson")
    .eq("state", "AZ")
    .eq("is_active", true)
    .limit(24)
  return data ?? []
}

function listingName(row: Record<string, unknown>) {
  return (
    (row["clinic_name"] as string) ||
    (row.name as string) ||
    (row.full_name as string) ||
    (row.clinic_name as string) ||
    "Listing"
  )
}

function listingHref(row: Record<string, unknown>) {
  const slug = String(row.slug || "")
  return "/listings/SLUG".replace("SLUG", slug)
}

export default async function CityPage() {
  const listings = await getListings()
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many trt/hrt clinic are in Tucson, AZ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TRT/HRT Clinic Directory lists 21+ trt/hrt clinic in Tucson, Arizona. Counts change as new listings are seeded.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find trt/hrt clinic in Tucson?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Search findtrtclinic.com and filter by Tucson. Compare listed providers, then contact the one that fits.",
        },
      },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-sm text-neutral-500">Tucson, AZ</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          TRT/HRT Clinic in Tucson, AZ
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          21+ listed trt/hrt clinic in the Tucson area. Pages are generated from live directory listings — not outreach.
        </p>
        <p className="mt-2 text-sm text-neutral-500">{listings.length} shown on this page.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {listings.map((row: Record<string, unknown>, i: number) => (
            <li key={String(row.id || row.slug || i)} className="rounded-xl border border-neutral-200 p-4">
              <Link href={listingHref(row)} className="font-semibold hover:underline">
                {listingName(row)}
              </Link>
              <p className="mt-1 text-sm text-neutral-500">
                {String(row.city || "Tucson")}, {String(row.state || "AZ")}
              </p>
            </li>
          ))}
        </ul>
        {listings.length === 0 && (
          <p className="mt-8 text-neutral-500">Listings for this city are still being seeded.</p>
        )}
      </main>
    </>
  )
}
