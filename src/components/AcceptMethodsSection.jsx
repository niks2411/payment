import React from 'react'

export default function AcceptMethodsSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-x grid md:grid-cols-2 gap-10 items-center">
        {/* Left copy */}
        <div>
          <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
            We Accept all
            <br />
            payment methods
          </h3>
          <p className="mt-4 text-slate-600 max-w-md">
            At ShigramPay, we make payments effortless by accepting all major methods — UPI,
            credit/debit cards, net banking, wallets, and more. Enjoy ultimate flexibility and
            convenience for every transaction, anytime, anywhere.
          </p>
          <button className="mt-7 btn-primary">Get Started</button>
        </div>

        {/* Right visuals - leave placeholders for images */}
        <div className="relative flex justify-center md:justify-end">
          {/* main image (image3) */}
          <div className="relative h-60 w-[220px] sm:h-72 sm:w-[260px] md:h-80 md:w-[320px] rounded-2xl overflow-hidden">
            <img src="/image3.png" alt="Payments UI" className="h-full w-full object-contain" />
          </div>
       {/* overlapping smaller image (image4) */}
          <div className="absolute -bottom-8 left-8 sm:left-12 md:left-16 z-10 h-28 w-48 sm:h-30 sm:w-52 md:h-34 md:w-68 rounded-xl overflow-hidden">
            <img src="/image4.png" alt="Analytics UI" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}


