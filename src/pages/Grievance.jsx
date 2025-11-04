import React from 'react'

export default function Grievance() {
  return (
    <main className="bg-white min-h-screen">
      <header className="w-full border-b border-slate-200">
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-6 flex items-center gap-3">
          <img src="/logo.png" alt="ShigramPay" className="h-16 w-auto" />
        </div>
      </header>

      <section className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">ShigramPay – Grievance Redressal Policy</h1>
        <p className="text-sm text-slate-500 mt-1">Last Updated: 10 Oct 2025</p>
        <br />
        <p className="text-base md:text-lg text-slate-700 mb-4">At ShigramPay Pvt. Ltd. (“ShigramPay”, “we”, “our”, or “us”), we are committed to ensuring a transparent, fair, and prompt resolution of customer and merchant grievances.</p>
        <p className="text-base md:text-lg text-slate-700 mb-6">This Grievance Redressal Policy outlines the framework for addressing and resolving user complaints related to our services, vouchers, or any aspect of their interaction with ShigramPay. This Policy is in line with the Reserve Bank of India’s Master Directions on Prepaid Payment Instruments (PPIs) and the Digital Personal Data Protection Act, 2023.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">1. Objective</h2>
        <ul className="list-disc pl-6 text-base md:text-lg text-slate-700 space-y-1 mb-6">
          <li>Establish a structured grievance redressal mechanism for ShigramPay users.</li>
          <li>Ensure that grievances are handled fairly, transparently, and promptly.</li>
          <li>Provide users with clear escalation paths if they are not satisfied with the initial response.</li>
          <li>Comply with all applicable RBI and data protection guidelines.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">2. Scope</h2>
        <ul className="list-disc pl-6 text-base md:text-lg text-slate-700 space-y-1 mb-6">
          <li>Voucher purchase, redemption, or refund issues.</li>
          <li>Settlement or payout-related grievances (for merchants).</li>
          <li>Unauthorized transactions or security incidents.</li>
          <li>Account-related complaints (login, profile, or KYC).</li>
          <li>Privacy, data handling, or information security concerns.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">3. Guiding Principles</h2>
        <ul className="list-disc pl-6 text-base md:text-lg text-slate-700 space-y-1 mb-6">
          <li>Accessibility</li>
          <li>Transparency</li>
          <li>Responsiveness</li>
          <li>Fairness</li>
          <li>Compliance</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">4. Channels for Lodging Complaints</h2>
        <p className="text-base md:text-lg text-slate-700 mb-2">Users can raise complaints or report issues using any of the following official channels:</p>
        <p className="text-base md:text-lg text-slate-700 mb-2">A. Email – <a href="mailto:support@shigrampay.com" className="text-primary-600 underline">support@shigrampay.com</a></p>
        <p className="text-base md:text-lg text-slate-700 mb-2">B. In-App/Website – Use “Help & Support” or “Contact Us”</p>
        <p className="text-base md:text-lg text-slate-700 mb-6">C. Physical – ShigramPay Pvt. Ltd., No. 108, 2nd Floor 27th Main Road, HSR Layout Sector 2, Bangalore 560102 (Attn: Grievance Officer)</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">5. Grievance Redressal Process</h2>
        <ol className="list-decimal pl-6 text-base md:text-lg text-slate-700 space-y-1 mb-6">
          <li>Register the complaint – unique ticket ID is generated.</li>
          <li>Acknowledgment – within 24 working hours.</li>
          <li>Investigation & resolution – typically within 7 working days; delays will be communicated.</li>
          <li>Escalation – unresolved cases escalate to the Grievance Officer.</li>
        </ol>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">6. Escalation Matrix</h2>
        <p className="text-base md:text-lg text-slate-700 mb-2">Level 1 – Customer Support Team (support@shigrampay.com), resolution within 7 working days.</p>
        <p className="text-base md:text-lg text-slate-700 mb-6">Level 2 – Grievance Officer: grievance.officer@shigrampay.com | 8310061600 | Address as above. Acknowledgment within 48 hours, resolution within 15 working days.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">7. Closure of Complaints</h2>
        <p className="text-base md:text-lg text-slate-700 mb-6">A complaint is closed when the user confirms satisfaction, there is no response within 7 days after final reply, or a final written communication is sent by the Grievance Officer.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">8–12. Monitoring, Compliance, Privacy, Review, Disclaimer</h2>
        <p className="text-base md:text-lg text-slate-700">We review complaint data periodically for improvements; comply with RBI, DPDP Act, and IT Act; handle data with strict confidentiality; review this policy annually; and operate as a closed‑loop voucher platform (funds aren’t bank deposits nor DICGC‑insured).</p>
      </section>
    </main>
  )
}



