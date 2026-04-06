import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — WaitlistBoost',
  description: 'Terms of Service for WaitlistBoost by EazyWebNC',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-zinc-500 mb-8">Last updated: April 6, 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance</h2>
            <p>By using WaitlistBoost, you agree to these terms. If you do not agree, do not use the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Service Description</h2>
            <p>WaitlistBoost provides waitlist management tools including subscriber collection, referral tracking, and launch automation for product teams and founders.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. User Obligations</h2>
            <p>You agree to provide accurate information, not abuse the referral system, and comply with anti-spam laws (CAN-SPAM, GDPR) when collecting subscriber emails.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Billing</h2>
            <p>Free plans have usage limits. Paid plans are billed monthly via Stripe. You can cancel anytime. Refunds are handled on a case-by-case basis.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
            <p>WaitlistBoost is provided &ldquo;as is&rdquo;. We are not liable for indirect, incidental, or consequential damages arising from use of the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
            <p>EazyWebNC, Noumea, New Caledonia<br />Email: contact@eazyweb.nc</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <a href="/" className="text-violet-400 hover:text-violet-300 transition">← Back to WaitlistBoost</a>
        </div>
      </div>
    </div>
  )
}
