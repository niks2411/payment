import React from 'react'
import { redirectToStore } from '../utils'

export default function DownloadCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="w-full max-w-[1100px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 grid md:grid-cols-2 items-center gap-10 xl:gap-12">
        {/* Left text */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-primary-600">Get Started Now - ShigramPay</p>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 leading-tight">
            Download App For
            <br />
            The Best Experience
          </h2>
          <button onClick={redirectToStore} className="mt-6 btn-primary">Download Now!</button>
        </div>

        {/* Right visuals with placeholders for images */}
        <div className="relative min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex justify-center md:justify-end">
          {/* phone image */}
          <div className="relative h-[380px] w-[260px] sm:h-[460px] sm:w-[320px] md:h-[520px] md:w-[360px] 2xl:h-[500px] 2xl:w-[340px] rounded-[28px] sm:rounded-[32px] md:rounded-[36px] overflow-hidden">
            <img src="/phone.png" alt="Phone" className="h-full w-full object-contain" />
          </div>

          {/* floating card top-left */}
          {/* <div className="absolute -top-8 left-1/2 -translate-x-1/2 md:left-2 md:translate-x-0 h-16 w-56 sm:h-20 sm:w-72 rounded-xl overflow-hidden">
            <img src="/card-top-left.png" alt="User card" className="h-full w-full object-contain" />
          </div> */}

          {/* small blue square icons */}
          {/* <div className="absolute top-56 left-60 h-8 w-8 rounded-lg bg-primary-600 grid place-items-center text-white text-xs">↗</div> */}
          {/* <div className="absolute top-28 left-[19rem] h-8 w-8 rounded-lg bg-primary-600/90 grid place-items-center text-white text-xs">✦</div> */}

          {/* income pill top-right */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-8 h-18 w-28 sm:h-22 sm:w-32 rounded-lg overflow-hidden">
            <img src="/pill.png" alt="Income" className="h-full w-full object-contain" />
          </div>

          {/* success banner bottom-left */}
          <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 h-28 sm:h-34 w-56 sm:w-72 rounded-xl overflow-hidden">
            <img src="/success-banner.png" alt="Success" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}



