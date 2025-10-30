import React from 'react'

export default function DownloadCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x grid md:grid-cols-2 items-center gap-10">
        {/* Left text */}
        <div>
          <p className="text-sm font-semibold text-primary-600">Get Started Now - ShigramPay</p>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 leading-tight">
            Download App For
            <br />
            The Best Experience
          </h2>
          <button className="mt-6 btn-primary">Download Now!</button>
        </div>

        {/* Right visuals with placeholders for images */}
        <div className="relative min-h-[420px]">
          {/* phone image */}
          <div className="absolute right-0 top-0 h-[440px] w-[220px] rounded-[36px] overflow-hidden">
            <img src="/phone.png" alt="Phone" className="h-full w-full object-contain" />
          </div>

          {/* floating card top-left */}
          <div className="absolute -top-4 left-6 h-16 w-56 rounded-xl overflow-hidden">
            <img src="/card-top-left.png" alt="User card" className="h-full w-full object-contain" />
          </div>

          {/* small blue square icons */}
          <div className="absolute top-40 left-40 h-7 w-7 rounded-lg bg-primary-600 grid place-items-center text-white text-xs">↗</div>
          <div className="absolute top-24 left-56 h-7 w-7 rounded-lg bg-primary-600/90 grid place-items-center text-white text-xs">✦</div>

          {/* income pill top-right */}
          <div className="absolute top-16 right-0 h-10 w-28 rounded-lg overflow-hidden">
            <img src="/pill.png" alt="Income" className="h-full w-full object-contain" />
          </div>

          {/* success banner bottom-left */}
          <div className="absolute bottom-0 left-0 h-12 w-64 rounded-xl overflow-hidden">
            <img src="/success-banner.png" alt="Success" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}



