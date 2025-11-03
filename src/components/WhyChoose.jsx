import React from 'react'

const Dot = ({ color }) => (
  <div className={`h-3 w-3 rounded-full ${color}`}></div>
)

export default function WhyChoose() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="relative aspect-square max-w-[380px] mx-auto">
            {/* Orbit placeholder. Replace central logo circle and ring dots with your artwork */}
            <div className="absolute inset-0 rounded-full"></div>
            <div className="absolute inset-6 rounded-full"></div>
            <div className="absolute inset-12 rounded-full"></div>
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-primary-600 grid place-items-center text-white font-bold">S</div>
            <Dot color="bg-primary-600 absolute left-0 top-1/2 -translate-y-1/2" />
            <Dot color="bg-amber-500 absolute right-6 top-8" />
            <Dot color="bg-rose-500 absolute right-2 bottom-10" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-700">Why Choose Us?</h3>
            <p className="mt-2 text-slate-600">Short supporting sentence about the unique value.</p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
              <div className="flex flex-col items-center gap-2">
                <Dot color="bg-primary-600" />
                <span className="text-slate-600 text-center">Faster & Secure</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Dot color="bg-amber-500" />
                <span className="text-slate-600 text-center">Zero Hardware</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Dot color="bg-rose-500" />
                <span className="text-slate-600 text-center">Reliable Uptime</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Dot color="bg-emerald-500" />
                <span className="text-slate-600 text-center">All-On-One App</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



