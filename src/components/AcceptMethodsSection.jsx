import React from 'react'
import { redirectToStore } from '../utils'

export default function AcceptMethodsSection() {
  return (
    <section className="section-y bg-white">
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-10 text-center">
        <p className="text-sm font-semibold text-primary-600">Payments</p>
        <h3 className="mt-3 text-4xl xl:text-5xl font-extrabold text-slate-900 leading-tight">
          We accept all payment methods
        </h3>
        <p className="mt-4 text-lg xl:text-xl text-slate-600">
          UPI, credit/debit cards, net banking, and wallets—use what works best for you.
          ShigramPay keeps checkout fast, flexible, and secure everywhere.
        </p>
        <button onClick={redirectToStore} className="mt-7 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-blue-300/40 shadow-md">
          Get Started
        </button>
      </div>
    </section>
  )
}


