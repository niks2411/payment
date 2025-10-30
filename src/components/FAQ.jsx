import React, { useState } from 'react'

const faqs = [
  { q: 'What is Shigrampay?', a: 'A short answer about facial recognition based payments.' },
  { q: 'How secure is it?', a: 'Describe security controls and privacy in brief.' },
  { q: 'Which devices are supported?', a: 'Any device with a camera; merchants can use existing phones.' },
  { q: 'Do customers need internet?', a: 'Outline offline/poor connectivity flow at high level.' }
]

function Item({ q, a, i }) {
  const [open, setOpen] = useState(i === 0)
  return (
    <div className="border-b border-slate-200">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="font-semibold text-slate-800">{q}</span>
        <span className={`h-6 w-6 grid place-items-center rounded-full border ${open ? 'bg-primary-600 text-white border-primary-600' : 'border-slate-300 text-slate-500'}`}>{open ? '-' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-slate-600 text-sm">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section-y relative">
      {/* decorative rings */}
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full border-8 border-primary-200 -z-10"></div>
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full border-8 border-primary-200 -z-10"></div>
      <div className="container-x">
        <h3 className="text-2xl font-bold text-primary-700 text-center">FAQ's</h3>
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-primary-200 bg-white p-4 md:p-6 shadow-card">
          {faqs.map((f, i) => (
            <Item key={i} i={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}



