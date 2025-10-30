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
        <div className="relative min-h-[520px]">
          {/* phone image */}
          <div className="absolute right-0 top-0 h-[520px] w-[360px] rounded-[36px] overflow-hidden">
            <img src="/phone.png" alt="Phone" className="h-full w-full object-contain" />
          </div>

          {/* floating card top-left */}
          <div className="absolute -top-10 left-2 h-20 w-72 rounded-xl overflow-hidden">
            <img src="/card-top-left.png" alt="User card" className="h-full w-full object-contain" />
          </div>

          {/* small blue square icons */}
          {/* <div className="absolute top-56 left-60 h-8 w-8 rounded-lg bg-primary-600 grid place-items-center text-white text-xs">↗</div> */}
          {/* <div className="absolute top-28 left-[19rem] h-8 w-8 rounded-lg bg-primary-600/90 grid place-items-center text-white text-xs">✦</div> */}

          {/* income pill top-right */}
          <div className="absolute top-14 right-6 h-22 w-32 rounded-lg overflow-hidden">
            <img src="/pill.png" alt="Income" className="h-full w-full object-contain" />
          </div>

          {/* success banner bottom-left */}
          <div className="absolute bottom-10 left-8 h-34 w-72 rounded-xl overflow-hidden">
            <img src="/success-banner.png" alt="Success" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}



