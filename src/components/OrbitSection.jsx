import React from 'react';

export default function OrbitalFeatures() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Orbital System */}
        <div className="relative w-full max-w-md mx-auto mb-12" style={{ height: '400px' }}>
          {/* Orbit rings */}
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gray-200 rounded-full"></div>
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gray-200 rounded-full"></div>
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gray-200 rounded-full"></div>
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-200 rounded-full"></div>

          {/* Title placed between 3rd and 4th rings; frosted background */}
          <div className="absolute z-20 top-[85%] left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-sm px-3 py-1 rounded-full">
            <h2 className="text-2xl font-semibold text-blue-600">Why Choose Us?</h2>
          </div>

          {/* Planet 1 - equal size (behind text) */}
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
            <div className="relative w-full h-full animate-spin" style={{ animationDuration: '18s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 rounded-full shadow-lg grid place-items-center text-white text-[10px]"></div>
            </div>
          </div>

          {/* Planet 2 - equal size */}
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
            <div className="relative w-full h-full animate-spin" style={{ animationDuration: '24s' }}>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full shadow-lg grid place-items-center text-white text-[10px]"></div>
            </div>
          </div>

          {/* Planet 3 - equal size */}
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
            <div className="relative w-full h-full animate-spin" style={{ animationDuration: '28s', animationDirection: 'reverse' }}>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500 rounded-full shadow-lg grid place-items-center text-white text-[10px]"></div>
            </div>
          </div>

          {/* Planet 4 - equal size */}
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <div className="relative w-full h-full animate-spin" style={{ animationDuration: '34s' }}>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-yellow-500 rounded-full shadow-lg grid place-items-center text-white text-[10px]"></div>
            </div>
          </div>

          {/* Center logo/icon - Higher z-index */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
          </div>
        </div>

        {/* optional spacer below graphic */}
        <div className="h-2"></div>

        {/* Description */}
        <p className="text-gray-500 text-center text-sm max-w-2xl mx-auto mb-12 px-4 leading-relaxed">
          Streamline is a fast, light-weight partners platform that enables fast, connection-driven partnership creation for all users through a flexible, scalable, designed for both consumers and merchants, a complete platform.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-3 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 text-sm">Trusted & Secure</h3>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-3 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 text-sm">Fast & Hassle-Free<br/>Payments</h3>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-3 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 text-sm">Rewards That<br/>Matter</h3>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mb-3 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800 text-sm">All-in-One App</h3>
          </div>
        </div>
      </div>
    </div>
  );
}