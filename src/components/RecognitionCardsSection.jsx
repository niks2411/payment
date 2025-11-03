import React from 'react';

const marqueeItems = Array.from({ length: 6 }, (_, i) => (
  <span
    key={i}
    className="inline-block leading-none py-1 text-sm md:text-base text-slate-700 mr-10"
  >
    India's first <span className="font-bold text-blue-600">Facial Recognition Payment</span> App
  </span>
));

const merchantBenefits = [
  'Increased Efficiency & Sales',
  'Reduced Transaction Failures',
  'Enhanced Security',
  'Fraud Prevention',
  'Valuable Business Insights',
  'Integrated Loyalty & Rewards',
];

const customerBenefits = [
  'Unmatched Convenience',
  'Enhanced Speed',
  'Superior Security',
  'No Touch Technology',
  'Easy to Use',
  'Centralized Loyalty Programs',
];

export default function RecognitionCardsSection() {
  return (
    <section className="relative py-10">
      <div className="mx-auto w-full max-w-[1320px] xl:max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[960px] h-10 mb-6 marquee flex items-center">
          <div className="marquee-inner left-0">{marqueeItems}</div>
        </div>

        <InfoCard maxWidth="max-w-[1360px]">
          <div className="pointer-events-none absolute -z-10 -top-6 -left-4 w-[320px] h-[200px] rounded-[120px] bg-blue-500/50 blur-xl" />
          <div className="pointer-events-none absolute -z-10 -bottom-6 -right-4 w-[300px] h-[190px] rounded-[120px] bg-blue-600/45 blur-xl" />
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <CardHeading title="SHIGRAMPAY?" subtitle="What is" />
              <BulletList>
                <li>ShigramPay offers a genuine hands‑free and device‑free payment journey.</li>
                <li>Customers no longer need to worry about carrying a wallet, a physical card, or even their phone.</li>
                <li>Our platform is a pure software solution.</li>
                <li>Merchants can use their existing smartphones or tablets to accept payments, eliminating capital expenditure, rental fees, and counter clutter associated with dedicated POS machines, QR stands, or kiosks.</li>
              </BulletList>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center justify-start">
              <div className="relative w-full h-[17rem] lg:h-[18rem] rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/image21.jpg" alt="India map with badge" className="h-full w-full object-contain" />
                {/* <img src="/logo2.png" alt="center badge" className="absolute left-[125px] top-[132px] lg:left-[215px] lg:top-[138px] -translate-x-1/2 -translate-y-1/2 h-6 w-6 lg:h-8 lg:w-8 object-contain" /> */}
              </div>
              <p className="mt-2 text-[12px] text-slate-700 text-center">
                India's first <span className="font-semibold text-blue-600">Facial Recognition</span>
                <br />
                Payment App
              </p>
            </div>
          </div>
        </InfoCard>

        <InfoCard className="mt-16 mb-16 xl:mt-14 xl:mb-14" maxWidth="max-w-[1360px]">
          <div className="pointer-events-none absolute -z-10 -top-6 -right-4 w-[300px] h-[190px] rounded-[120px] bg-blue-500/45 blur-xl" />
          <div className="pointer-events-none absolute -z-10 -bottom-6 -left-4 w-[320px] h-[200px] rounded-[120px] bg-blue-600/45 blur-xl" />
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2">
              <CardHeading title="MERCHANT" subtitle="Benefits for" />
              <BulletList items={merchantBenefits} />
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
              <img src="/image5.png" alt="Merchant benefits illustration" className="h-[16rem] w-full object-contain" />
            </div>
          </div>
        </InfoCard>

        <InfoCard className="mt-16 xl:mt-14" maxWidth="max-w-[1360px]">
          <div className="pointer-events-none absolute -z-10 -top-6 -left-4 w-[320px] h-[200px] rounded-[120px] bg-blue-500/50 blur-xl" />
          <div className="pointer-events-none absolute -z-10 -bottom-6 -right-4 w-[300px] h-[190px] rounded-[120px] bg-blue-600/45 blur-xl" />
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2">
              <CardHeading title="CUSTOMER" subtitle="Benefits for" />
              <BulletList items={customerBenefits} />
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
              <img src="/image6.png" alt="Customer benefits illustration" className="h-[16rem] w-full object-contain" />
            </div>
          </div>
        </InfoCard>
      </div>
    </section>
  );
}

function InfoCard({ children, className = '', maxWidth = 'max-w-[960px]' }) {
  return (
    <div className={`relative w-full ${maxWidth} mx-auto ${className}`}>
      <div className="relative bg-white rounded-[22px] shadow-[0_24px_60px_rgba(47,91,255,0.18)] p-6 md:p-10 min-h-[300px] md:min-h-[360px]">
        {children}
      </div>
    </div>
  );
}

function CardHeading({ title, subtitle }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 mb-1">{subtitle}</p>
      <h4 className="text-[22px] leading-7 font-extrabold text-blue-700">{title}</h4>
    </div>
  );
}

function BulletList({ items, children }) {
  if (items) {
    return (
      <ul className="mt-3 space-y-2 text-[13px] leading-6 text-slate-700 list-disc marker:text-blue-600 pl-5">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-3 space-y-2 text-[13px] leading-6 text-slate-700 list-disc marker:text-blue-600 pl-5">
      {children}
    </ul>
  );
}


