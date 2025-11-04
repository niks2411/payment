import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { redirectToStore } from '../utils'

export default function Personal() {
  const [scrollY, setScrollY] = useState(0)

  const cards = [
    {
      id: 1,
      title: 'Unmatched Convenience',
      description:
        'Leave the wallet and phone in your pocket. With ShigramPay, your face is your ID and your payment. Add money once, then breeze through checkout anywhere in our network.',
      points: ['No QR scanning or card swiping', 'Works across online and in‑store partners', 'Instant confirmation and receipt'],
      image: '/p1.webp',
    },
    {
      id: 3,
      title: 'Superior Security',
      description:
        'Biometric verification with bank‑grade security. Data is protected end‑to‑end and never shared with third parties.',
      points: ['AI‑powered liveness detection', 'Encrypted templates and secure storage', 'Fraud and misuse prevention'],
      image: '/p3.webp',
    },
    {
      id: 4,
      title: 'No Touch Technology',
      description:
        'Touchless payments that are hygienic and effortless. Simply look at the camera; the rest happens automatically.',
      points: ['Hands‑free checkout', 'Great for food courts and fuel', 'Works with existing merchant devices'],
      image: '/p4.webp',
    },
    {
      id: 5,
      title: 'Easy to Use',
      description:
        'Set up in minutes. Top‑up once, pay anywhere in our network. Track every transaction with instant receipts.',
      points: ['Simple onboarding', 'Top‑ups via UPI/cards', 'Clear, real‑time history'],
      image: '/p5.webp',
    },
    {
      id: 6,
      title: 'Centralized Loyalty Programs',
      description:
        'Earn and redeem rewards automatically across participating merchants. One balance, many benefits.',
      points: ['Unified rewards wallet', 'Auto‑applied perks', 'No extra apps or cards required'],
      image: '/p6.webp',
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
          <h1 className="text-5xl font-extrabold bg-gradient-to-b from-blue-700 to-blue-500 bg-clip-text text-transparent">ShigramPay Personal</h1>
          <p className="mt-2 text-slate-600">Face recognition payments built for everyday life</p>
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
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">Personal</div>
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

      <div className="h-20 md:h-28" />

      {/* FAQs */}
      <section className="section-y bg-slate-50">
        <div className="container-x max-w-[900px] text-center">
          <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Personal FAQs</h3>
          <div className="text-left space-y-4">
            <details className="bg-white rounded-xl p-4 shadow-sm">
              <summary className="font-semibold text-slate-900 cursor-pointer">How do I pay with my face?</summary>
              <p className="mt-2 text-slate-700">Look at the camera for a quick liveness check; once verified, the amount is deducted from your ShigramPay balance.</p>
            </details>
            <details className="bg-white rounded-xl p-4 shadow-sm">
              <summary className="font-semibold text-slate-900 cursor-pointer">Do I need my phone at checkout?</summary>
              <p className="mt-2 text-slate-700">No. Face payments are device‑free; your phone is only needed to manage your account and top‑ups.</p>
            </details>
            <details className="bg-white rounded-xl p-4 shadow-sm">
              <summary className="font-semibold text-slate-900 cursor-pointer">Is my data secure?</summary>
              <p className="mt-2 text-slate-700">Yes. We use bank‑grade encryption and AI‑powered liveness detection. Templates are protected and never shared.</p>
            </details>
            <details className="bg-white rounded-xl p-4 shadow-sm">
              <summary className="font-semibold text-slate-900 cursor-pointer">Where can I use ShigramPay?</summary>
              <p className="mt-2 text-slate-700">Across participating retail, dining, fuel and online partners. We’re expanding quickly.</p>
            </details>
            <details className="bg-white rounded-xl p-4 shadow-sm">
              <summary className="font-semibold text-slate-900 cursor-pointer">Can I track my spending?</summary>
              <p className="mt-2 text-slate-700">Every payment generates an instant receipt with running balance and monthly insights.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-x text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Ready to get started?</h3>
          <p className="mt-2 text-lg text-slate-600">Join thousands paying with their face—fast, secure and contactless.</p>
          <button onClick={redirectToStore} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-blue-300/40 shadow-md">Download ShigramPay</button>
        </div>
      </section>
    </main>
  )
}


