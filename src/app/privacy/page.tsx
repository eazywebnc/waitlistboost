import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — WaitlistBoost',
  description: 'Privacy Policy for WaitlistBoost by EazyWebNC',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-zinc-500 mb-8">Last updated: April 6, 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly: email address, name, and usage data when you create or join a waitlist. We also collect analytics data (page views, referral clicks) to improve our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use your information to provide and improve WaitlistBoost, send waitlist notifications, process referrals, and communicate service updates. We never sell your personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage</h2>
            <p>Your data is stored securely on Supabase infrastructure with encryption at rest and in transit. We retain your data for as long as your account is active.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Your Rights</h2>
            <p>You can request access to, correction of, or deletion of your personal data at any time by contacting us at contact@eazyweb.nc.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Contact</h2>
            <p>WaitlistBoost is operated by EazyWebNC, Noumea, New Caledonia.<br />Email: contact@eazyweb.nc</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <a href="/" className="text-violet-400 hover:text-violet-300 transition">← Back to WaitlistBoost</a>
        </div>
      </div>
    </div>
  )
}
