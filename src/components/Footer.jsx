import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-x py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-primary-600"></div>
            <span className="font-bold tracking-tight">SHIGRAMPAY</span>
          </div>
          <ul className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <li><a href="#" className="hover:text-primary-700">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary-700">Terms</a></li>
            <li><a href="#" className="hover:text-primary-700">Support</a></li>
            <li className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-slate-200"></span>
              <span className="h-6 w-6 rounded-full bg-slate-200"></span>
              <span className="h-6 w-6 rounded-full bg-slate-200"></span>
            </li>
          </ul>
        </div>
        <p className="mt-8 text-xs text-slate-500">© 2025 Shigrampay. All rights reserved.</p>
      </div>
    </footer>
  )
}



