import React from 'react';

export default function RecognitionCardsSection() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-[960px] px-5">
        {/* Section heading above cards */}
        <h3 className="text-center text-[13px] text-slate-700 mb-6">
          India's first <span className="font-bold text-blue-600">Facial Recognition Payment</span> App
        </h3>

        {/* Card 1: What is Shigrampay? */}
        <div className="relative w-full max-w-[780px] mx-auto">
          {/* Small oval blurs behind card: left-top and right-bottom */}
          <div className="pointer-events-none absolute -z-10 -top-6 -left-4 w-[320px] h-[200px] rounded-[120px] bg-blue-500/50 blur-xl" />
          <div className="pointer-events-none absolute -z-10 -bottom-6 -right-4 w-[300px] h-[190px] rounded-[120px] bg-blue-600/45 blur-xl" />

          <div className="relative bg-white rounded-[22px] border border-slate-200 shadow-[0_24px_60px_rgba(47,91,255,0.18)] p-6 md:p-8 min-h-[300px] md:min-h-[340px]">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5">
                <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 mb-1">What is</p>
                <h4 className="text-[22px] leading-7 font-extrabold text-blue-700">SHIGRAMPAY?</h4>
                <ul className="mt-3 space-y-2 text-[13px] leading-6 text-slate-700 list-disc pl-5">
                  <li>ShigramPay offers a genuine hands‑free and device‑free payment journey.</li>
                  <li>Customers no longer need to worry about carrying a wallet, a physical card, or even their phone.</li>
                  <li>Our platform is a pure software solution.</li>
                  <li>Merchants can use their existing smartphones or tablets to accept payments, eliminating capital expenditure, rental fees, and counter clutter associated with dedicated POS machines, QR stands, or kiosks.</li>
                </ul>
              </div>
              <div className="md:w-2/5 flex flex-col items-center justify-start">
                <div className="w-full h-64 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src="/image2.png" alt="India map with badge" className="h-full w-full object-contain" />
                </div>
                <p className="mt-2 text-[12px] text-slate-700 text-center">
                  India's first <span className="font-semibold text-blue-600">Facial Recognition</span><br />Payment App
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Merchant */}
        <div className="relative w-full max-w-[780px] mx-auto mt-24 mb-24">
          {/* Blurs: right-top and left-bottom for the second card */}
          <div className="pointer-events-none absolute -z-10 -top-6 -right-4 w-[300px] h-[190px] rounded-[120px] bg-blue-500/45 blur-xl" />
          <div className="pointer-events-none absolute -z-10 -bottom-6 -left-4 w-[320px] h-[200px] rounded-[120px] bg-blue-600/45 blur-xl" />

          <div className="relative bg-white rounded-[22px] border border-slate-200 shadow-[0_24px_60px_rgba(47,91,255,0.18)] p-6 md:p-8 min-h-[300px] md:min-h-[340px]">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-full">
                <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 mb-1">Benefits for</p>
                <h4 className="text-[22px] leading-7 font-extrabold text-blue-700">MERCHANT</h4>
                <ul className="mt-3 space-y-2 text-[13px] leading-6 text-slate-700 list-disc pl-5">
                  <li>Increased Efficiency & Sales</li>
                  <li>Reduced Transaction Failures</li>
                  <li>Enhanced Security</li>
                  <li>Fraud Prevention</li>
                  <li>Valuable Business Insights</li>
                  <li>Integrated Loyalty & Rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Customer */}
        <div className="relative w-full max-w-[780px] mx-auto mt-24">
          {/* Blurs same as first card: left-top and right-bottom */}
          <div className="pointer-events-none absolute -z-10 -top-6 -left-4 w-[320px] h-[200px] rounded-[120px] bg-blue-500/50 blur-xl" />
          <div className="pointer-events-none absolute -z-10 -bottom-6 -right-4 w-[300px] h-[190px] rounded-[120px] bg-blue-600/45 blur-xl" />

          <div className="relative bg-white rounded-[22px] border border-slate-200 shadow-[0_24px_60px_rgba(47,91,255,0.18)] p-6 md:p-8 min-h-[300px] md:min-h-[340px]">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-full">
                <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 mb-1">Benefits for</p>
                <h4 className="text-[22px] leading-7 font-extrabold text-blue-700">CUSTOMER</h4>
                <ul className="mt-3 space-y-2 text-[13px] leading-6 text-slate-700 list-disc pl-5">
                  <li>Unmatched Convenience</li>
                  <li>Enhanced Speed</li>
                  <li>Superior Security</li>
                  <li>No Touch Technology</li>
                  <li>Easy to Use</li>
                  <li>Centralized Loyalty Programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


