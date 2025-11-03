import React from 'react'

export default function Refund() {
  return (
    <main className="bg-white min-h-screen">
      <header className="w-full border-b border-slate-200">
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-6 flex items-center gap-3">
          <img src="/logo.png" alt="ShigramPay" className="h-16 w-auto" />
        </div>
      </header>

      <section className="w-full max-w-[1100px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Refund & Cancellation Policy</h1>
        <p className="text-sm text-slate-500 mt-1">Last Updated: 10 Oct 2025</p>
        <br />
        <p className="text-base md:text-lg text-slate-700 mb-4">At ShigramPay, we are committed to providing a seamless and secure digital payment experience. This Refund & Cancellation Policy governs refunds, reversals, and cancellations for transactions made using ShigramPay closed-loop vouchers.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">1. Nature of ShigramPay Vouchers</h2>
        <ul className="list-disc pl-6 text-base md:text-lg text-slate-700 space-y-1 mb-4">
          <li>ShigramPay vouchers are closed-loop prepaid instruments redeemable only for goods and services within the ShigramPay ecosystem or its directly affiliated merchants.</li>
          <li>Vouchers are non-transferable, non-reloadable, and cannot be encashed.</li>
          <li>As closed-loop instruments, they do not require RBI authorization under the Master Direction on PPIs; however, ShigramPay operates with RBI-aligned consumer protection and data-privacy practices.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">2. Refunds for Failed Transactions</h2>
        <p className="text-base md:text-lg text-slate-700 mb-4">If a transaction fails due to technical or processing errors and voucher value is deducted, the full amount will be re-credited to the same voucher within T+1 working day (T = transaction date). If not received within this time, contact <a href="mailto:support@shigrampay.com" className="text-primary-600 underline">support@shigrampay.com</a> with the voucher ID, transaction ID, date, and description.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">3. Refunds for Merchant Cancellations or Non-Delivery</h2>
        <p className="text-base md:text-lg text-slate-700 mb-4">For non-delivery or cancellations by a ShigramPay-network merchant after redemption, refunds are processed post verification with the merchant. Once verified, the amount will be re-credited to the same voucher within 5–7 working days. ShigramPay may request supporting documents (e.g., order confirmation, cancellation proof) to complete the verification.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">4. Non-Refundable and Expired Vouchers</h2>
        <p className="text-base md:text-lg text-slate-700 mb-4">No refunds, revalidation, or replacement for vouchers that are fully or partially used or have expired. Voucher validity is disclosed at issuance (typically 12 months from the issue date unless specified otherwise). Unused balances lapse after expiry.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">5. Customer-Initiated Cancellations</h2>
        <p className="text-base md:text-lg text-slate-700 mb-4">Since vouchers represent prepaid value, once issued/activated they cannot be cancelled or refunded at customer discretion. Refunds apply only in cases covered under Sections 2 and 3.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">6. Fraud, Misuse, or Unauthorized Transactions</h2>
        <p className="text-base md:text-lg text-slate-700 mb-4">ShigramPay is not liable for losses arising from unauthorized use, credential sharing, or customer negligence. Report suspected fraud immediately to <a href="mailto:support@shigrampay.com" className="text-primary-600 underline">support@shigrampay.com</a>.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">7. No Cash Refunds</h2>
        <p className="text-base md:text-lg text-slate-700 mb-4">All refunds/reversals are processed only by re-credit to the voucher balance. No cash or bank-transfer refunds will be made.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">8. Regulatory & Compliance Framework</h2>
        <p className="text-base md:text-lg text-slate-700 mb-4">ShigramPay adheres to RBI-aligned practices for transparency, secure handling of prepaid value, and customer grievance redressal suitable for closed-loop instruments. All transactions are digitally recorded and auditable.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">9. Contact Us</h2>
        <p className="text-base md:text-lg text-slate-700 mb-6">Email: <a href="mailto:support@shigrampay.com" className="text-primary-600 underline">support@shigrampay.com</a><br />Support Hours: Monday–Friday, 9:00 AM – 6:00 PM IST</p>

        <p className="text-sm text-slate-500">Consumer Protection Disclaimer: ShigramPay operates under a closed-loop digital voucher model. Voucher value does not constitute a deposit with ShigramPay or any bank and is not covered by interest, insurance, or DICGC protection. All transactions are governed by applicable RBI guidelines for closed-loop instruments and ShigramPay’s internal policies.</p>
      </section>
    </main>
  )
}


