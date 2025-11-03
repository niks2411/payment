import React from 'react'

export default function Footer() {
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
              <li><a href="#" className="hover:text-primary-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-600">FAQ</a></li>
            </ul>
          </div>

          {/* Further Information */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold text-slate-700 mb-3">Further Information</h4>
            <ul className="space-y-2 text-base text-slate-600">
              <li><a href="/terms" className="hover:text-primary-600">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-primary-600">Privacy Policy</a></li>
              <li><a href="/refund" className="hover:text-primary-600">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold text-slate-700 mb-3">Contact us</h4>
            <a href="mailto:support@shigrampay.com" className="text-base text-primary-600 underline break-words">support@shigrampay.com</a>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
              <a href="#" aria-label="Facebook">
                <img src="/facebook.png" alt="Facebook" className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/instagram.png" alt="Instagram" className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#" aria-label="X">
                <img src="/x.png" alt="X" className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
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



