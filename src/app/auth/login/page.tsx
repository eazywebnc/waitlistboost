'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Supabase auth integration
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-zinc-950 to-purple-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">
            Waitlist<span className="text-violet-400">Boost</span>
          </span>
        </a>

        {/* Card */}
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
          <p className="text-zinc-400 text-center mb-8">
            Sign in to manage your waitlists
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-11 pr-12 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <a href="#" className="text-sm text-violet-400 hover:text-violet-300 transition">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-zinc-500 text-sm">or</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Sign up link */}
          <p className="text-center text-zinc-400 text-sm">
            Don&apos;t have an account?{' '}
            <a href="/#hero" className="text-violet-400 hover:text-violet-300 font-semibold transition">
              Join the waitlist
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
