import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export function getFirebase() {
  const config = {
    apiKey: import.meta.env.VITE_FB_API_KEY || 'AIzaSyDOKtyk88sBgz9cFWSn5mjRnalIpUGHWoY',
    authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN || 'shigrampay-d6558.firebaseapp.com',
    projectId: import.meta.env.VITE_FB_PROJECT_ID || 'shigrampay-d6558',
    storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET || 'shigrampay-d6558.firebasestorage.app',
    messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID || '487801871413',
    appId: import.meta.env.VITE_FB_APP_ID || '1:487801871413:web:2897b2858120ccdd48257c',
  }

  const app = getApps().length ? getApps()[0] : initializeApp(config)
  const db = getFirestore(app)
  return { app, db }
}


