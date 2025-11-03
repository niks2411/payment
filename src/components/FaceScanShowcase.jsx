import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FaceScanShowcase() {
  const sectionRef = useRef(null)
  const faceRef = useRef(null)
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro float-in
      gsap.from(faceRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      })

      // Scan line loop
      const line = faceRef.current.querySelector('#scanLine')
      const redGlow = faceRef.current.querySelector('#scanGlow')
      if (line) {
        gsap.to([line, redGlow], {
          y: 160,
          repeat: -1,
          yoyo: true,
          duration: 2.2,
          ease: 'sine.inOut'
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative section-y bg-gradient-to-b from-white via-primary-50/40 to-white overflow-hidden">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />

      <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Face.svg as background with moving scan line overlay */}
        <div className="flex justify-center">
          <div ref={faceRef} className="relative w-[320px] h-[360px]">
            <img src="/face.svg" alt="Face outline" className="absolute inset-0 h-full w-full object-contain" />
            {/* Red glow behind the scan line */}
            <div id="scanGlow" className="absolute left-6 right-6 top-16 h-3 rounded-full" style={{ background: 'linear-gradient(180deg, rgba(255,59,59,0.55) 0%, rgba(255,59,59,0) 100%)' }} />
            {/* Blue scan line */}
            <div id="scanLine" className="absolute left-8 right-8 top-20 h-1.5 rounded-full" style={{ background: 'linear-gradient(180deg, rgba(47,91,255,0.9) 0%, rgba(47,91,255,0) 100%)' }} />
          </div>
        </div>

        {/* Right: Themed copy instead of cards */}
        <div className="space-y-4">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">Introducing</div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            India’s first <span className="text-blue-700">Facial Recognition</span> payment application
          </h3>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Blink to pay securely—no phones, no cards. Add money once and use it across our network of
            partner stores, restaurants, fuel stations and online merchants.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700 text-sm md:text-base list-disc marker:text-blue-600 pl-5">
            <li>AI‑powered verification with liveness detection</li>
            <li>Bank‑grade encryption and privacy protection</li>
            <li>Instant receipts and smart spending insights</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


