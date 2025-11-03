import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full py-5 px-6 md:px-10 lg:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="ShigramPay" className="h-12 w-auto" />
        {/* <span className="font-bold tracking-tight">SHIGRAMPAY</span> */}
      </div>

      <nav className="hidden md:flex items-center gap-8 text-base lg:text-lg text-slate-600">
        <a href="#" className="hover:text-primary-700">Home</a>
        <a href="#" className="hover:text-primary-700">Personal</a>
        <a href="#" className="hover:text-primary-700">Business</a>
        <a href="#" className="hover:text-primary-700">Contact us</a>
      </nav>

      <div className="flex items-center gap-3">
        {/* <button className="hidden md:inline-flex btn-outline">Sign In</button> */}
        <button className="btn-primary">Sign up</button>
      </div>
    </header>
  )
}



