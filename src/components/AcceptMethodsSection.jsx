import React, { useEffect, useRef } from 'react'
import { redirectToStore } from '../utils'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AcceptMethodsSection() {
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate badge
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        })
      }

      // Animate heading
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        })
      }

      // Animate description
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        })
      }

      // Animate button
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        })

        // Hover pulse effect
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          })
        })

        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-y bg-white">
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-10 text-center">
        <p ref={badgeRef} className="text-sm font-semibold text-primary-600">Payments</p>
        <h3 ref={headingRef} className="mt-3 text-4xl xl:text-5xl font-extrabold text-slate-900 leading-tight">
          We accept all payment methods
        </h3>
        <p ref={descriptionRef} className="mt-4 text-lg xl:text-xl text-slate-600">
          UPI, credit/debit cards, net banking, and wallets—use what works best for you.
          ShigramPay keeps checkout fast, flexible, and secure everywhere.
        </p>
        <button 
          ref={buttonRef}
          onClick={redirectToStore} 
          className="mt-7 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-blue-300/40 shadow-md transition-all"
        >
          Get Started
        </button>
      </div>
    </section>
  )
}


