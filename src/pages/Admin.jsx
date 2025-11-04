import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { getFirebase } from '../lib/firebase'
import { collection, getDocs, onSnapshot, query, orderBy } from 'firebase/firestore'

// Admin credentials (you can move these to env variables for better security)
const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'shigrampay@2025'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [rows, setRows] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // Check if already authenticated
  useEffect(() => {
    const authStatus = sessionStorage.getItem('admin_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredRows(rows)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = rows.filter(row => {
      return (
        row.name?.toLowerCase().includes(query) ||
        row.email?.toLowerCase().includes(query) ||
        row.phone?.toLowerCase().includes(query) ||
        row.role?.toLowerCase().includes(query) ||
        row.message?.toLowerCase().includes(query)
      )
    })
    setFilteredRows(filtered)
  }, [searchQuery, rows])

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault()
    setAuthError('')
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_authenticated', 'true')
    } else {
      setAuthError('Invalid username or password')
    }
  }

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin_authenticated')
    setUsername('')
    setPassword('')
    setSearchQuery('')
  }

  useEffect(() => {
    if (!isAuthenticated) return
    
    let unsub = null
    
    const loadData = async () => {
      try {
        const { db } = getFirebase()
        const col = collection(db, 'contacts')
        
        // Try using getDocs first
        try {
          const q = query(col, orderBy('createdAt', 'desc'))
          const snap = await getDocs(q)
          const items = snap.docs.map(d => {
            const data = d.data()
            return { id: d.id, ...data }
          })
          setRows(items)
          setLoading(false)
          
          // Then set up real-time listener
          unsub = onSnapshot(q, 
            snap => {
              const items = snap.docs.map(d => {
                const data = d.data()
                return { id: d.id, ...data }
              })
              setRows(items)
              setLoading(false)
            },
            err => {
              setError(`Snapshot error: ${err.message}`)
              setLoading(false)
            }
          )
        } catch (snapErr) {
          // Fallback: try without orderBy
          try {
            const snap = await getDocs(col)
            const items = snap.docs.map(d => {
              const data = d.data()
              return { id: d.id, ...data }
            })
            items.sort((a, b) => {
              const ta = a.createdAt?.toMillis ? a.createdAt.toMillis() : (a.createdAt?.seconds ? a.createdAt.seconds * 1000 : 0)
              const tb = b.createdAt?.toMillis ? b.createdAt.toMillis() : (b.createdAt?.seconds ? b.createdAt.seconds * 1000 : 0)
              return tb - ta
            })
            setRows(items)
            setLoading(false)
            
            // Set up listener without orderBy
            unsub = onSnapshot(col, 
              snap => {
                const items = snap.docs.map(d => {
                  const data = d.data()
                  return { id: d.id, ...data }
                })
                items.sort((a, b) => {
                  const ta = a.createdAt?.toMillis ? a.createdAt.toMillis() : (a.createdAt?.seconds ? a.createdAt.seconds * 1000 : 0)
                  const tb = b.createdAt?.toMillis ? b.createdAt.toMillis() : (b.createdAt?.seconds ? b.createdAt.seconds * 1000 : 0)
                  return tb - ta
                })
                setRows(items)
              },
              err => {
                setError(`Snapshot error: ${err.message}`)
              }
            )
          } catch (fallbackErr) {
            setError(`Failed to load: ${fallbackErr.message}. Check Firestore rules allow reads.`)
            setLoading(false)
          }
        }
      } catch (e) {
        setError(`Firebase error: ${e.message}`)
        setLoading(false)
      }
    }
    
    loadData()
    
    return () => {
      if (unsub) unsub()
    }
  }, [isAuthenticated])

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
          <div className="text-center mb-8">
            <img src="/logo.png" alt="ShigramPay" className="h-12 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Login</h1>
            <p className="text-slate-600">Enter your credentials to access the admin panel</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {authError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {authError}
              </div>
            )}
            
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter username"
                required
                autoFocus
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <section className="container-x section-y">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-3xl font-extrabold text-slate-900">Contact Submissions</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium"
          >
            Logout
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, phone, role, or message..."
              className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-slate-600">
              Showing {filteredRows.length} of {rows.length} results
            </p>
          )}
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}
        <div className="overflow-x-auto bg-slate-50 rounded-xl shadow-card">
          <table className="min-w-full text-left">
            <thead className="text-slate-700 bg-slate-100">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Phone</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Role</th>
                <th className="px-4 py-3 font-semibold">Message</th>
                <th className="px-4 py-3 font-semibold">Created</th>
              </tr>
            </thead>
            <tbody>
              {loading && rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-slate-500">Loading...</td>
                </tr>
              ) : filteredRows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                    {searchQuery ? 'No results found' : 'No submissions yet'}
                  </td>
                </tr>
              ) : (
                filteredRows.map(r => (
                  <tr key={r.id} className="border-t border-slate-200 hover:bg-slate-100 transition">
                    <td className="px-4 py-3 font-medium">{r.name}</td>
                    <td className="px-4 py-3">{r.phone}</td>
                    <td className="px-4 py-3">{r.email}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">
                        {r.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 max-w-[360px] truncate" title={r.message}>{r.message}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {r.createdAt?.toDate ? r.createdAt.toDate().toLocaleString() : 
                       r.createdAt?.seconds ? new Date(r.createdAt.seconds * 1000).toLocaleString() : 
                       r.createdAt ? String(r.createdAt) : '-'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}


