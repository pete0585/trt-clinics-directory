import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://findtrtclinic.com'),
  title: {
    default: 'FindTRTClinic — Find Testosterone Replacement Therapy Clinics Near You',
    template: '%s | FindTRTClinic.com',
  },
  description: 'The most comprehensive directory of TRT and hormone optimization clinics in the US. Filter by insurance, treatment type, physician supervision, and telehealth availability.',
  keywords: ['TRT clinic', 'testosterone replacement therapy', 'low testosterone doctor', 'TRT near me', 'hormone optimization clinic'],
  openGraph: {
    type: 'website',
    siteName: 'FindTRTClinic',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-brand-light min-h-screen font-sans antialiased">
        <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-brand-orange rounded-lg w-8 h-8 flex items-center justify-center font-black text-white text-sm">T</div>
                <span className="font-bold text-lg tracking-tight">FindTRTClinic</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link href="/listings" className="text-blue-200 hover:text-white transition-colors">Browse Clinics</Link>
                <Link href="/listings?clinicType=telehealth" className="text-blue-200 hover:text-white transition-colors">Telehealth</Link>
                <Link href="/listings?physicianSupervised=true" className="text-blue-200 hover:text-white transition-colors">Physician-Supervised</Link>
              </nav>

              <div className="flex items-center gap-3">
                <Link
                  href="/submit"
                  className="hidden sm:block px-4 py-2 text-sm font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Add Your Clinic
                </Link>
                <Link
                  href="/listings"
                  className="px-4 py-2 text-sm font-semibold bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg transition-colors"
                >
                  Find Clinics
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-brand-dark text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-brand-orange rounded-lg w-8 h-8 flex items-center justify-center font-black text-white text-sm">T</div>
                  <span className="font-bold text-lg">FindTRTClinic</span>
                </div>
                <p className="text-sm text-blue-200 leading-relaxed">
                  The most comprehensive directory of TRT and hormone optimization clinics in the US.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-blue-300 mb-3">For Patients</h3>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li><Link href="/listings" className="hover:text-white transition-colors">Browse All Clinics</Link></li>
                  <li><Link href="/listings?clinicType=telehealth" className="hover:text-white transition-colors">Telehealth TRT</Link></li>
                  <li><Link href="/listings?insurance=true" className="hover:text-white transition-colors">Takes Insurance</Link></li>
                  <li><Link href="/listings?physicianSupervised=true" className="hover:text-white transition-colors">Physician-Supervised</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-blue-300 mb-3">For Clinics</h3>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li><Link href="/submit" className="hover:text-white transition-colors">Add Your Clinic</Link></li>
                  <li><Link href="/submit#pricing" className="hover:text-white transition-colors">Listing Pricing</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-blue-300 mb-3">Related Directories</h3>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li><a href="https://menopausedirectory.co" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Menopause Specialists</a></li>
                  <li><a href="https://ibclcdirectory.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">IBCLC Directory</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
              <p>© {new Date().getFullYear()} FindTRTClinic. All rights reserved.</p>
              <p>For informational purposes only. Always consult a qualified physician.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
