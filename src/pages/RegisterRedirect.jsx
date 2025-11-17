import React, { useEffect, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { redirectToStore, getStoreUrl, redirectToAppOrStore } from '../utils'

export default function RegisterRedirect() {
  const { referralCode: pathReferral } = useParams()
  const [searchParams] = useSearchParams()
  const referralFromQuery = searchParams.get('referral') || searchParams.get('ref') || searchParams.get('code')

  const referralCode = useMemo(() => {
    const normalized = (pathReferral || referralFromQuery || '').trim()
    return normalized || ''
  }, [pathReferral, referralFromQuery])

  useEffect(() => {
    redirectToAppOrStore(referralCode)
  }, [referralCode])

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 text-center">
      <div className="max-w-lg">
        <img src="/logo.png" alt="ShigramPay" className="mx-auto mb-6 h-12 w-auto" />
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">Opening ShigramPay</h1>
        <p className="text-slate-600 mb-6">
          {referralCode 
            ? `Opening the app with referral code "${referralCode}". If the app is installed, it will open automatically. Otherwise, you'll be redirected to the app store.`
            : "Opening the app. If the app is installed, it will open automatically. Otherwise, you'll be redirected to the app store."
          }
        </p>
        {referralCode && (
          <p className="text-sm font-mono text-slate-500 mb-4">
            Referral code detected: <span className="text-slate-900">{referralCode}</span>
          </p>
        )}
        <button
          type="button"
          onClick={() => redirectToAppOrStore(referralCode)}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition mb-4"
        >
          Open in App
        </button>
        <button
          type="button"
          onClick={() => redirectToStore(referralCode)}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-white shadow-sm"
        >
          Go to Store
        </button>
        <p className="mt-4 text-sm text-slate-500">
          Or{' '}
          <a href={getStoreUrl(referralCode)} className="text-blue-600 underline">
            open the link directly
          </a>
          .
        </p>
      </div>
    </div>
  )
}


