# FindTRTClinic — TRT Clinic Directory

The first comprehensive, filterable directory of testosterone replacement therapy (TRT) and hormone optimization clinics in the United States. Domain: `findtrtclinic.com`.

## Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Database:** Supabase (shared Directories project `fbuqrnzofktepkzyfmhy`, prefix `trt_`)
- **Payments:** Stripe (Verified $199/yr, Featured $399/yr)
- **Email:** Resend (sending subdomain: `mail.findtrtclinic.com`)
- **Deployment:** Vercel

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in values
cp .env.example .env.local

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Required Environment Variables

See `.env.example` for the full list. Key values:

| Variable | Source |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project settings |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase project settings (anon/public key) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase project settings (service_role — never expose client-side) |
| `STRIPE_SECRET_KEY` | Stripe Dashboard → Developers → API Keys |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard → Webhooks (see below) |
| `STRIPE_VERIFIED_PRICE_ID` | Stripe Dashboard → Products (create $199/yr price) |
| `STRIPE_FEATURED_PRICE_ID` | Stripe Dashboard → Products (create $399/yr price) |
| `RESEND_API_KEY` | Resend Dashboard → API Keys |
| `ADMIN_EMAILS` | Comma-separated admin emails |

## Supabase Setup

The directory uses the **shared Directories project** (`fbuqrnzofktepkzyfmhy`) with `trt_` prefixed tables.

### Apply the migration

```bash
# Option 1: Via Supabase MCP (recommended — already connected to fbuqrnzofktepkzyfmhy)
# Run the SQL in supabase/migrations/001_initial_schema.sql via the MCP tool

# Option 2: Via Supabase CLI
supabase db push --db-url "postgresql://postgres:<password>@db.fbuqrnzofktepkzyfmhy.supabase.co:5432/postgres"

# Option 3: Paste the SQL directly into Supabase SQL editor
```

### Verify the migration

```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' AND table_name LIKE 'trt_%';
```

## Stripe Setup

### 1. Create Products

In [Stripe Dashboard](https://dashboard.stripe.com/products):

1. Create **"TRT Directory — Verified Listing"**
   - Recurring price: $199/year
   - Copy the Price ID → set as `STRIPE_VERIFIED_PRICE_ID`

2. Create **"TRT Directory — Featured Listing"**
   - Recurring price: $399/year
   - Copy the Price ID → set as `STRIPE_FEATURED_PRICE_ID`

### 2. Configure Webhook

1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://findtrtclinic.com/api/webhooks/stripe`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
4. Copy the signing secret → set as `STRIPE_WEBHOOK_SECRET`

## Resend Setup

1. Add domain `mail.findtrtclinic.com` in Resend Dashboard
2. Add DNS records at Namecheap:
   - MX: `inbound-smtp.us-east-1.amazonaws.com` (priority 10)
   - TXT: SPF, DKIM records from Resend
3. Set `RESEND_FROM_EMAIL=FindTRTClinic <hello@mail.findtrtclinic.com>`

**Never send from the root domain `findtrtclinic.com` — only from `mail.findtrtclinic.com`.**

## Vercel Deployment

1. Push this directory to `pete0585/trt-clinics-directory` GitHub repo
2. Connect repo to Vercel project
3. Set all environment variables in Vercel Dashboard → Settings → Environment Variables
4. Set custom domain to `findtrtclinic.com`
5. Deploy

The `vercel.json` has no `env` block — all env vars go in the Vercel dashboard only.

## Data Seeding

### Initial seed (400-600 clinics)

```bash
# Set env vars, then run:
NEXT_PUBLIC_SUPABASE_URL=https://fbuqrnzofktepkzyfmhy.supabase.co \
SUPABASE_SERVICE_ROLE_KEY=your-key \
npx ts-node scripts/seed.ts
```

The seed script has sample data. For real data, run the DataForSEO seeder via the `data-seeder` agent with this config:

```json
{
  "slug": "trt-clinics",
  "table": "trt_listings",
  "queries": ["TRT clinic", "testosterone replacement therapy", "men's health testosterone", "low t center"],
  "name_field": "clinic_name",
  "scraper_enabled": true
}
```

### Add to directories.json

After deployment, add to `directories.json` in the Aidam workspace:

```json
{
  "slug": "trt-clinics",
  "name": "TRT Clinics Directory",
  "domain": "findtrtclinic.com",
  "table_prefix": "trt",
  "status": "live",
  "active_filter": "is_approved",
  "scraper_name_field": "clinic_name"
}
```

This arms the data-seeder, seo-content, outreach, error-watcher, and revenue-monitor agents automatically.

## URL Structure

| URL | Description |
|---|---|
| `/` | Homepage with search |
| `/listings` | Browse all clinics (filterable) |
| `/listings/[slug]` | Individual clinic detail page |
| `/trt-clinics/[state]` | State landing page |
| `/trt-clinics/[state]/[city]` | City landing page |
| `/submit` | Submit a free listing |
| `/claim/[id]` | Claim a listing |
| `/admin` | Admin panel (protected) |

## Admin Access

The admin panel at `/admin` requires Supabase Auth. Set `ADMIN_EMAILS` to the admin email(s). Admin can approve/reject listings and manage tiers.

For local admin access, log in via Supabase Auth email magic link at `/admin/login`.

## Architecture Notes

- All database writes use `SUPABASE_SERVICE_ROLE_KEY` via server-side routes — never exposed to client
- Stripe checkout uses real Price IDs (not inline `price_data`) to support coupons and the revenue monitor
- Claim flow uses custom 64-char hex tokens (not Supabase Auth OTP) — avoids creating unintended auth users
- Search uses PostgreSQL tsvector with a BEFORE INSERT/UPDATE trigger (not GENERATED ALWAYS — Supabase rejects immutable expressions)
- Proximity search uses `find_trt_near(search_lat, search_lng)` RPC with parameter names that avoid collision with existing `lat`/`lng` columns
