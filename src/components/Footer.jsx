import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleFAQClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.querySelector('#faq')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Navigate to home page first
      navigate('/')
      // Wait for navigation and DOM update, then scroll
      setTimeout(() => {
        const element = document.querySelector('#faq')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    }
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="w-full max-w-[1100px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 pt-8 pb-8 md:pt-10 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 xl:gap-12">
          {/* Logo */}
          <div className="flex items-center md:items-start justify-center md:justify-start">
            <img src="/logo.png" alt="ShigramPay" className="h-10 w-auto max-w-full" />
          </div>

          {/* Service */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold text-slate-700 mb-3">Service</h4>
            <ul className="space-y-2 text-base text-slate-600">
              <li><Link to="/contact" className="hover:text-primary-600">Contact Us</Link></li>
              <li><a href="/#faq" onClick={handleFAQClick} className="hover:text-primary-600">FAQ</a></li>
            </ul>
            <Link
              to="/register"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition text-sm"
            >
              Register
            </Link>
          </div>

          {/* Further Information */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold text-slate-700 mb-3">Further Information</h4>
            <ul className="space-y-2 text-base text-slate-600">
              <li><Link to="/terms-and-condition" className="hover:text-primary-600">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary-600">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-primary-600">Refund Policy</Link></li>
              <li><Link to="/grievance" className="hover:text-primary-600">Grievance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold text-slate-700 mb-3">Contact us</h4>

            {/* Office Phone */}
            <div className="flex items-start gap-3 mb-4 justify-center md:justify-start">
              <svg className="w-6 h-6 text-violet-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75l3 3m0 0l-3 3m3-3h-6" />
              </svg>
              <div>
                <p className="text-sm font-medium text-slate-500">Office Phone</p>
                <a href="tel:08310061600" className="text-base text-violet-500 hover:text-violet-600">
                  +91 83100 61600
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 mb-4 justify-center md:justify-start">
              <svg className="w-6 h-6 text-violet-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div>
                <p className="text-sm font-medium text-slate-500">Email</p>
                <a href="mailto:support@shigrampay.com" className="text-base text-violet-500 underline hover:text-violet-600 break-words">
                  support@shigrampay.com
                </a>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex items-start gap-3 mb-4 justify-center md:justify-start">
              <svg className="w-6 h-6 text-violet-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m0-8.25l-3 1.5v8.25l3-1.5m0-6.75l3 1.5m-3-1.5L6 8.25v8.25l3-1.5m0 0l3-1.5m-3 1.5v6.75m3-9.75l3 1.5v8.25l-3-1.5m0-6.75l3 1.5M12 9l3-1.5m-3 1.5v6.75m3-7.5V15m0-6.75L18 6.75v8.25l-3-1.5" />
              </svg>
              <div>
                <p className="text-sm font-medium text-slate-500">Office</p>
                <p className="text-base text-slate-600">
                  2nd Floor, 108, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
              <a href="https://www.facebook.com/ShigramPay" aria-label="Facebook">
                <img src="/facebook.png" alt="Facebook" className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="https://www.instagram.com/shigrampay" aria-label="Instagram">
                <img src="/instagram.png" alt="Instagram" className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="https://x.com/ShigramPay" aria-label="X">
                <img src="/x.png" alt="X" className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="https://www.linkedin.com/company/shigrampay" aria-label="LinkedIn">
                <img src="/linkedin.png" alt="LinkedIn" className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm md:text-base text-slate-500">© 2025 Shigrampay Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}



