import React from 'react'

export default function Hero() {
  return (
    <section className="container-x section-y">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary-700">Blink. Pay. Go.</h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            Placeholder for a short product description. Keep it crisp and benefit-driven.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        <div className="relative">
          {/* Image placeholder: replace this container with your illustration */}
          <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-card border border-slate-100 grid place-items-center">
            <span className="text-slate-400">Hero Illustration Placeholder</span>
          </div>
          {/* floating chips */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="h-4 w-14 rounded bg-primary-100"></div>
            <div className="h-4 w-14 rounded bg-primary-100"></div>
            <div className="h-4 w-14 rounded bg-primary-100"></div>
          </div>
        </div>
      </div>
    </section>
  )
}



