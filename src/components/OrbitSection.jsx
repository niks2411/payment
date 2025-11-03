import React from 'react';

export default function OrbitalFeatures() {
  return (
    <section className="bg-white section-y overflow-hidden">
      <div className="container-x">
        {/* Orbital System */}
        <div className="relative w-full max-w-[620px] mx-auto mb-12" style={{ height: '420px' }}>
          {/* Orbit rings */}
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-400/90"></div>
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-blue-400/80"></div>
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-blue-400/70"></div>
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-blue-400/60"></div>

          {/* Title placed between 3rd and 4th rings; frosted background */}
          <div className="absolute z-20 top-[82%] left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-600">Why Choose Us?</h2>
          </div>

          {/* Center logo image */}
          

          {/* Planet 1 - equal size (behind text) */}
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
            <div className="relative w-full h-full animate-spin" style={{ animationDuration: '18s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg overflow-hidden">
                <img src="/icon1.png" alt="planet" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Planet 2 - equal size */}
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
            <div className="relative w-full h-full animate-spin" style={{ animationDuration: '24s' }}>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg overflow-hidden">
                <img src="/icon2.png" alt="planet" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Planet 3 - equal size */}
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
            <div className="relative w-full h-full animate-spin" style={{ animationDuration: '28s', animationDirection: 'reverse' }}>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg overflow-hidden">
                <img src="/icon3.png" alt="planet" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Planet 4 - equal size */}
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <div className="relative w-full h-full animate-spin" style={{ animationDuration: '34s' }}>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full shadow-lg overflow-hidden">
                <img src="/icon4.png" alt="planet" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Center logo/icon - Higher z-index */}
         <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white/60 backdrop-blur-sm grid place-items-center">
            <img src="/logo2.png" alt="Logo" className="h-10 w-10 object-contain" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-center text-sm max-w-3xl mx-auto mb-12 px-6 leading-relaxed">
          Streamline is a fast, light-weight partners platform that enables fast, connection-driven partnership creation for all users through a flexible, scalable, designed for both consumers and merchants, a complete platform.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-0">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full overflow-hidden mb-3 shadow-md">
              <img src="/icon1.png" alt="Trusted & Secure" className="h-full w-full object-cover" />
            </div>
            <h3 className="font-medium text-gray-800 text-sm">Trusted & Secure</h3>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full overflow-hidden mb-3 shadow-md">
              <img src="/icon2.png" alt="Fast & Hassle‑Free Payments" className="h-full w-full object-cover" />
            </div>
            <h3 className="font-medium text-gray-800 text-sm">Fast & Hassle‑Free<br/>Payments</h3>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full overflow-hidden mb-3 shadow-md">
              <img src="/icon3.png" alt="Rewards That Matter" className="h-full w-full object-cover" />
            </div>
            <h3 className="font-medium text-gray-800 text-sm">Rewards That<br/>Matter</h3>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full overflow-hidden mb-3 shadow-md">
              <img src="/icon4.png" alt="All‑in‑One App" className="h-full w-full object-cover" />
            </div>
            <h3 className="font-medium text-gray-800 text-sm">All‑in‑One App</h3>
          </div>
        </div>
      </div>
    </section>
  );
}