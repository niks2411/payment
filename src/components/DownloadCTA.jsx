import React, { useEffect, useRef } from 'react'
import { redirectToStore } from '../utils'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DownloadCTA() {
  const sectionRef = useRef(null)
  const phoneRef = useRef(null)
  const pillRef = useRef(null)
  const bannerRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements
      const badge = textRef.current?.querySelector('.text-blue-700')
      const heading = textRef.current?.querySelector('h2')
      const description = textRef.current?.querySelector('p')
      
      if (badge) {
        gsap.from(badge, {
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
      
      if (heading) {
        gsap.from(heading, {
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
      
      if (description) {
        gsap.from(description, {
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

      // Animate phone
      gsap.from(phoneRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      })

      // Floating animation for phone
      gsap.to(phoneRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      })

      // Animate pill badge
      gsap.from(pillRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      })

      // Animate success banner
      gsap.from(bannerRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      })

      // Animate button
      gsap.from(buttonRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      })

      // Floating animations for badges
      if (pillRef.current) {
        gsap.to(pillRef.current, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1
        })
      }

      if (bannerRef.current) {
        gsap.to(bannerRef.current, {
          y: -8,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.2
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-blue-50/50 to-white py-20 md:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-[1100px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 grid md:grid-cols-2 items-center gap-10 xl:gap-16">
        {/* Left text */}
        <div ref={textRef} className="text-center md:text-left z-10">
          {/* <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            ✨ Get Started Now
          </div> */}
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Download App For
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              The Best Experience
            </span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
            Join thousands of users making secure, instant payments with just a glance. Available on iOS and Android.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-blue-100">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-slate-700">iOS & Android</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-blue-100">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Secure & Safe</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-blue-100">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Lightning Fast</span>
            </div>
          </div>

          <button 
            ref={buttonRef}
            onClick={redirectToStore} 
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-base font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Download Now</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* App Store badges */}
          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            <div className="text-xs text-slate-500">Available on</div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 bg-black/5 rounded-lg border border-slate-200">
                <div className="text-xs font-semibold text-slate-700">App Store</div>
              </div>
              <div className="px-3 py-1.5 bg-black/5 rounded-lg border border-slate-200">
                <div className="text-xs font-semibold text-slate-700">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right visuals */}
        <div className="relative min-h-[500px] sm:min-h-[580px] md:min-h-[620px] flex justify-center md:justify-end items-center">
          {/* Phone image */}
          <div 
            ref={phoneRef}
            className="relative h-[420px] w-[280px] sm:h-[500px] sm:w-[340px] md:h-[580px] md:w-[380px] z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-[36px] blur-xl"></div>
            <img 
              src="/phone.png" 
              alt="ShigramPay App" 
              className="relative h-full w-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating pill badge top-right */}
          <div 
            ref={pillRef}
            className="absolute top-8 right-8 sm:top-12 sm:right-12 h-20 w-28 sm:h-24 sm:w-36 z-20"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-md"></div>
            <img 
              src="/pill.png" 
              alt="Payment" 
              className="relative h-full w-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Success banner bottom-left */}
          <div 
            ref={bannerRef}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 h-32 sm:h-40 w-64 sm:w-80 z-20"
          >
            <div className="absolute inset-0 bg-green-500/10 rounded-xl blur-md"></div>
            <img 
              src="/success-banner.png" 
              alt="Success" 
              className="relative h-full w-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Decorative circles */}
          <div className="absolute top-1/4 left-0 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-0 w-2.5 h-2.5 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  )
}



