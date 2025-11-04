import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { getFirebase } from '../lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', role: 'User', message: '' })

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('saving')
    setError('')
    try {
      const { db } = getFirebase()
      await addDoc(collection(db, 'contacts'), {
        name: form.name,
        phone: form.phone,
        email: form.email,
        role: form.role,
        message: form.message,
        createdAt: serverTimestamp()
      })
      setStatus('success')
      setForm({ name: '', phone: '', email: '', role: 'User', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Failed to submit. Configure Firebase env keys.')
    }
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="container-x section-y max-w-[820px]">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Contact Us</h1>
        <p className="text-slate-600 mb-8">We’d love to hear from you. Fill this form and we’ll get back soon.</p>

        <form onSubmit={onSubmit} className="bg-slate-50 rounded-2xl p-6 md:p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input name="name" value={form.name} onChange={onChange} required placeholder="Your full name" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-400 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} required pattern="[0-9+\-() ]{7,}" placeholder="e.g. +91 98765 43210" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-400 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-400 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">I am a</label>
              <select name="role" value={form.role} onChange={onChange} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-400 bg-white">
                <option>User</option>
                <option>Merchant</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="How can we help you?" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-400 bg-white" />
          </div>

          <button type="submit" disabled={status==='saving'} className="mt-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-8 py-3 rounded-full font-semibold shadow-blue-300/40 shadow-md">{status==='saving' ? 'Submitting...' : 'Submit'}</button>
          {status==='success' && <p className="mt-3 text-green-600">Thanks! We received your message.</p>}
          {status==='error' && <p className="mt-3 text-red-600">{error}</p>}
        </form>
      </section>
    </main>
  )
}


