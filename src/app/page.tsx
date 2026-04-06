'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { Rocket, Users, BarChart3, Zap, Trophy, ArrowRight, Sparkles, Star, Check, Mail, ChevronDown } from 'lucide-react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-violet-500/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
}

const features = [
  {
    icon: Trophy,
    title: 'Viral Referral Engine',
    desc: 'Each subscriber gets a unique referral link. Gamified leaderboard. Unlock rewards as your list grows.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Track signups, referral chains, conversion rates. Live dashboard with actionable insights.',
  },
  {
    icon: Zap,
    title: 'Launch Automation',
    desc: "Set launch date, auto-send sequences, drip campaigns. One-click launch when you're ready.",
  },
]

const steps = [
  { num: '01', title: 'Create your waitlist', desc: 'Set up in 30 seconds. Custom branding, referral rewards.' },
  { num: '02', title: 'Share your page', desc: 'Beautiful landing page. Embed anywhere. QR codes.' },
  { num: '03', title: 'Watch it grow', desc: 'Viral referrals multiply your reach. Launch with momentum.' },
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['1 waitlist', '500 subscribers', 'Basic analytics', 'Email notifications', 'Referral links'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    features: ['Unlimited waitlists', '10K subscribers', 'Referral engine', 'Custom branding', 'A/B testing', 'Priority support'],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Scale',
    price: '$79',
    period: '/month',
    features: ['Unlimited everything', 'API access', 'Webhooks', 'SSO', 'Dedicated support', 'Custom integrations'],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (!headlineRef.current) return
    const words = headlineRef.current.querySelectorAll('.gsap-word')
    gsap.fromTo(
      words,
      { opacity: 0, y: 50, rotateX: -40 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: 'back.out(1.7)',
        delay: 0.2,
      }
    )
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold">Waitlist<span className="text-violet-400">Boost</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition shadow-lg shadow-violet-500/20"
          >
            Get Early Access
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 pt-24 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-zinc-950 to-purple-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
        <ParticleField />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Smart Waitlist Management
          </motion.div>

          <h1
            ref={headlineRef}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6 [perspective:1000px]"
          >
            <span className="gsap-word inline-block opacity-0 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">Turn&nbsp;</span>
            <span className="gsap-word inline-block opacity-0 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">Launches</span>
            <br />
            <span className="gsap-word inline-block opacity-0 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Into&nbsp;</span>
            <span className="gsap-word inline-block opacity-0 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Events</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            Smart waitlist management that turns early interest into explosive launches.
            Collect emails, gamify referrals, build hype.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl blur opacity-40 group-hover:opacity-70 transition" />
              <input
                type="email"
                placeholder="Enter your email"
                className="relative bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-4 w-72 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            >
              Join the Waitlist <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-zinc-500 text-sm flex items-center justify-center gap-2"
          >
            <Users className="w-4 h-4" />
            <AnimatedCounter target={2847} /> founders already waiting
          </motion.p>

          <div className="absolute top-20 left-10 hidden lg:block">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-lg px-4 py-2 text-sm"
            >
              <span className="text-green-400">+127</span> signups today
            </motion.div>
          </div>
          <div className="absolute top-40 right-10 hidden lg:block">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-lg px-4 py-2 text-sm"
            >
              <Star className="w-4 h-4 inline text-yellow-400 mr-1" /> 4.9/5 rating
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-zinc-600" />
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Launch Big</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Powerful features to turn your pre-launch into a growth engine.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition">
                    <f.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            className="text-4xl sm:text-5xl font-bold text-center mb-16"
          >
            Three Steps to{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Liftoff</span>
          </motion.h2>

          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-2xl font-black">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-lg">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { value: 50, suffix: 'K+', label: 'Subscribers managed' },
              { value: 3, suffix: 'x', label: 'Average referral rate' },
              { value: 200, suffix: '+', label: 'Successful launches' },
            ].map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} custom={i} className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-zinc-400">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah K.', role: 'Indie Maker', text: 'WaitlistBoost helped us get 5,000 signups before launch. The referral engine is insane.' },
              { name: 'Alex M.', role: 'SaaS Founder', text: 'We went from 200 to 8,000 waitlist subscribers in 3 weeks. The viral mechanics just work.' },
              { name: 'Jordan T.', role: 'Product Lead', text: 'The analytics dashboard gives us exactly what we need to know. Best pre-launch tool ever.' },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-zinc-500 text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-zinc-400 text-lg">Start free. Upgrade when you&apos;re ready to scale.</motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className={`relative rounded-2xl p-8 ${p.popular ? 'bg-gradient-to-b from-violet-900/50 to-zinc-900 border-2 border-violet-500' : 'bg-zinc-900/50 border border-zinc-800'}`}
              >
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black">{p.price}</span>
                  <span className="text-zinc-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-zinc-300">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                >
                  {p.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-bold mb-6">
              Start Building Your Waitlist —{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Free</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-zinc-400 text-lg mb-8">
              Join thousands of founders who launch with confidence. No credit card required.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <input
                type="email"
                placeholder="you@company.com"
                className="bg-zinc-900 border border-zinc-700 rounded-xl px-6 py-4 w-72 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition"
              />
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg shadow-violet-500/25"
              >
                Get Started Free <Rocket className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-violet-400" />
            <span className="font-bold text-lg">WaitlistBoost</span>
          </div>
          <div className="flex items-center gap-6 text-zinc-500 text-sm">
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <a href="mailto:contact@eazyweb.nc" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-zinc-600 text-sm">
            Made with love in New Caledonia by{' '}
            <a href="https://eazyweb.nc" className="text-violet-400 hover:text-violet-300 transition">EazyWebNC</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
