import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full py-5 px-6 md:px-10 lg:px-12 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="ShigramPay" className="h-12 w-auto" />
        {/* <span className="font-bold tracking-tight">SHIGRAMPAY</span> */}
      </div>

      <nav className="hidden md:flex items-center gap-8 text-base lg:text-lg text-slate-600">
        <a href="/" className="hover:text-primary-700">Home</a>
        <a href="/personal" className="hover:text-primary-700">Personal</a>
        <a href="/business" className="hover:text-primary-700">Business</a>
        <a href="/contact" className="hover:text-primary-700">Contact us</a>
      </nav>
      <div> </div>
      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
      >
        <svg className={`h-5 w-5 ${open ? 'hidden' : 'block'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg className={`h-5 w-5 ${open ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 px-6 pt-3">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <nav className="flex flex-col divide-y divide-slate-200">
              <a onClick={() => setOpen(false)} href="/" className="px-4 py-3 text-slate-700 hover:bg-slate-50">Home</a>
              <a onClick={() => setOpen(false)} href="/personal" className="px-4 py-3 text-slate-700 hover:bg-slate-50">Personal</a>
              <a onClick={() => setOpen(false)} href="/business" className="px-4 py-3 text-slate-700 hover:bg-slate-50">Business</a>
              <a onClick={() => setOpen(false)} href="/contact" className="px-4 py-3 text-slate-700 hover:bg-slate-50">Contact us</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}



