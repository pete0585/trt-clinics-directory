import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  const adminEmails = (process.env.ADMIN_EMAILS ?? '').split(',').map(e => e.trim())
  if (!adminEmails.includes(user.email ?? '')) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-brand-light">
      <div className="bg-brand-dark text-white px-6 py-3 flex items-center justify-between">
        <span className="font-bold text-sm">FindTRTClinic Admin</span>
        <span className="text-xs text-blue-300">{user.email}</span>
      </div>
      {children}
    </div>
  )
}
