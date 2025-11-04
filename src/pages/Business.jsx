import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { redirectToMerchantStore } from '../utils'

export default function Business() {
  const [scrollY, setScrollY] = useState(0)

  const cards = [
    {
      id: 1,
      title: 'Increased Efficiency & Sales',
      description:
        'Speed up checkout and serve more customers with frictionless, face‑first payments that work on devices you already own.',
      points: ['Shorter queues, higher throughput', 'Hands‑free experience customers love', 'Easy staff onboarding'],
      image: '/b1.webp',
    },
    {
      id: 2,
      title: 'Reduced Transaction Failures',
      description:
        'Our robust verification reduces errors at the counter and keeps transactions flowing even in busy environments.',
      points: ['Reliable authorization', 'Fewer abandoned orders', 'Smoother rush‑hour operations'],
      image: '/b2.webp',
    },
    {
      id: 3,
      title: 'Enhanced Security',
      description:
        'AI‑driven liveness checks and encrypted biometrics help prevent spoofing and misuse across your locations.',
      points: ['Bank‑grade data protection', 'Configurable risk controls', 'Audit‑ready logs'],
      image: '/b3.webp',
    },
    {
      id: 4,
      title: 'Fraud Prevention',
      description:
        'Real‑time checks, device intelligence, and usage analytics reduce chargebacks and suspicious activity.',
      points: ['Liveness + device signals', 'Anomaly detection', 'Actionable alerts'],
      image: '/b4.webp',
    },
    {
      id: 5,
      title: 'Valuable Business Insights',
      description:
        'Understand conversion, repeat visits, and peak hours with privacy‑safe analytics designed for retail speed.',
      points: ['Revenue and funnel trends', 'Store and staff comparisons', 'Exportable reports'],
      image: '/b5.webp',
    },
  ]

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="bg-white">
      <Navbar />

      {/* Intro */}
      <section className="min-h-[40vh] flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-b from-blue-700 to-blue-500 bg-clip-text text-transparent">ShigramPay Business</h1>
          <p className="mt-2 text-slate-600">Faster lines, fewer failures, richer insights</p>
        </div>
      </section>

      {/* Scroll Stack Cards */}
      <section className="relative">
        {cards.map((card, index) => {
          const start = index * 420
          const progress = Math.max(0, Math.min(1, (scrollY - start) / 420))
          const scale = 0.9 + progress * 0.1
          return (
            <div
              key={index}
              className="sticky h-[85vh] flex items-center justify-center"
              style={{ top: `${index * 10}px`, zIndex: index + 1 }}
            >
              <div
                className="w-full max-w-5xl xl:max-w-6xl mx-4 bg-gradient-to-b from-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 border border-blue-100"
                style={{ transform: `scale(${scale})` }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="p-10 md:p-12 xl:p-16">
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">Business</div>
                    <h2 className="text-4xl xl:text-5xl font-bold mb-4 text-slate-800">{card.title}</h2>
                    <p className="text-lg xl:text-xl text-slate-600 mb-6 leading-relaxed">{card.description}</p>
                    <ul className="space-y-2">
                      {card.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600"></span><span>{p}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-10 md:p-12 xl:p-16 bg-blue-50/60 hidden md:flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="max-h-72 md:max-h-80 xl:max-h-96 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* Packages Section (no prices) */}
      <section className="section-y bg-slate-50">
        <div className="container-x">
          <h3 className="text-3xl font-extrabold text-slate-900 text-center mb-10">Business Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Silver */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="bg-gradient-to-r from-slate-300 to-slate-400 text-slate-900 font-bold text-center py-4 text-lg">Silver Plan</div>
              <div className="p-6 text-slate-700 space-y-3">
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Integrated Device</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Facial Payments</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> AI Enabled</p>
              </div>
            </div>
            {/* Gold */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden hover:shadow-xl hover:border-amber-300 transition-all duration-300">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold text-center py-4 text-lg">Gold Plan</div>
              <div className="p-6 text-slate-700 space-y-3">
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Integrated Device</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Facial Payments</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Digital Ads Integration</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> AI Enabled</p>
              </div>
            </div>
            {/* Platinum */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-600 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold text-center py-4 text-lg">Platinum Plan</div>
              <div className="p-6 text-slate-700 space-y-3">
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Integrated Device</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Facial Payments</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Digital Ads Integration</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Menu Integration</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> AI Enabled</p>
              </div>
            </div>
            {/* BYOD */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden hover:shadow-xl hover:border-orange-500 transition-all duration-300">
              <div className="bg-gradient-to-r from-orange-700 to-orange-800 text-white font-bold text-center py-4 text-lg">BYOD</div>
              <div className="p-6 text-slate-700 space-y-3">
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> Digital Ads Integration</p>
                <p className="flex items-center gap-2"><span className="text-blue-600 font-semibold">•</span> AI Enabled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business FAQs */}
      <section className="section-y bg-white">
        <div className="container-x max-w-[900px] text-center">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Business FAQs</h3>
          <div className="text-left space-y-4">
            <details className="bg-slate-50 rounded-xl p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">What hardware do I need?</summary>
              <p className="mt-2 text-slate-700">Most merchants can start on existing smartphones or tablets—no dedicated POS needed.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">How do you prevent fraud?</summary>
              <p className="mt-2 text-slate-700">We combine liveness detection, device signals, and risk analytics to reduce spoofing and misuse.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">Can I integrate loyalty?</summary>
              <p className="mt-2 text-slate-700">Yes—auto‑apply points and offers at checkout; unified wallet across partners.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">What reporting is available?</summary>
              <p className="mt-2 text-slate-700">Revenue and funnel trends, store comparisons, and exportable reports for finance.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4">
              <summary className="font-semibold text-slate-900 cursor-pointer">Is onboarding complex?</summary>
              <p className="mt-2 text-slate-700">It’s quick—KYC, set up locations, and start accepting in minutes with guided steps.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-x text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Ready to get started?</h3>
          <p className="mt-2 text-lg text-slate-600">Delight customers and speed up lines with face payments.</p>
          <button onClick={redirectToMerchantStore} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-blue-300/40 shadow-md">Download ShigramPay Merchant</button>
        </div>
      </section>

      <div className="h-20 md:h-28" />
    </main>
  )
}


