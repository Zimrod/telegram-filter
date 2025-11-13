import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function EmailConfirmed() {
  const router = useRouter()
  const [status, setStatus] = useState('Verifying your email...')

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) {
      setStatus('No verification token found.')
      return
    }

    const params = new URLSearchParams(hash.slice(1)) // remove the leading #
    const access_token = params.get('access_token')

    if (!access_token) {
      setStatus('Invalid or missing token.')
      return
    }

    // Use token to sign the user in
    supabase.auth.setSession({
      access_token,
      refresh_token: params.get('refresh_token')
    }).then(({ data, error }) => {
      if (error) {
        setStatus('Failed to verify your email. Please try again.')
      } else {
        setStatus('Email verified! Redirecting...')
        setTimeout(() => router.push('/'), 5000) // Redirect after 5s
      }
    })
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg p-6 rounded-lg text-center">
        <h1 className="text-xl font-bold text-gray-800 mb-3">Email Verification</h1>
        <p className="text-gray-600">{status}</p>
      </div>
    </div>
  )
}
