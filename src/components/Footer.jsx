import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="container-x py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="flex items-start">
            <img src="/logo.png" alt="ShigramPay" className="h-10 w-auto" />
          </div>

          {/* Service */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3">Service</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-600">FAQ</a></li>
            </ul>
          </div>

          {/* Further Information */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3">Further Information</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-600">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3">Contact us</h4>
            <a href="mailto:support@shigrampay.com" className="text-sm text-primary-600 underline">support@shigrampay.com</a>
            <div className="mt-4 flex items-center gap-3">
              <a className="h-7 w-7 rounded-full bg-primary-600 text-white grid place-items-center text-xs" href="#">f</a>
              <a className="h-7 w-7 rounded-full bg-primary-600 text-white grid place-items-center text-xs" href="#">ig</a>
              <a className="h-7 w-7 rounded-full bg-primary-600 text-white grid place-items-center text-xs" href="#">x</a>
              <a className="h-7 w-7 rounded-full bg-primary-600 text-white grid place-items-center text-xs" href="#">in</a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">© 2025 Shigrampay Inc. Copyright and All rights reserved.</p>
      </div>
    </footer>
  )
}



