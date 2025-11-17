const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.vnetix.shigrampay&pcampaignid=web_share'
const APP_STORE_URL = 'https://apps.apple.com/in/app/shigrampay/id6746239075'

function getPlatformMeta() {
  if (typeof navigator === 'undefined') {
    return { isIOS: false, isAndroid: false }
  }
  const ua = navigator.userAgent || navigator.vendor || ''
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && typeof document !== 'undefined' && 'ontouchend' in document)
  const isAndroid = /Android/i.test(ua)
  return { isIOS, isAndroid }
}

function appendReferralToUrl(urlString, referralCode, paramKey) {
  if (!referralCode) return urlString
  try {
    const url = new URL(urlString)
    url.searchParams.set(paramKey, referralCode)
    return url.toString()
  } catch (error) {
    console.error('Failed to append referral to URL', error)
    const separator = urlString.includes('?') ? '&' : '?'
    return `${urlString}${separator}${paramKey}=${encodeURIComponent(referralCode)}`
  }
}

export function getStoreUrl(referralCode) {
  try {
    const { isIOS } = getPlatformMeta()
    const sanitizedReferral = typeof referralCode === 'string' ? referralCode.trim() : ''

    if (isIOS) {
      return sanitizedReferral ? appendReferralToUrl(APP_STORE_URL, sanitizedReferral, 'referral') : APP_STORE_URL
    }
    return sanitizedReferral ? appendReferralToUrl(PLAY_STORE_URL, sanitizedReferral, 'referrer') : PLAY_STORE_URL
  } catch (e) {
    return PLAY_STORE_URL
  }
}

export function getMerchantStoreUrl() {
  try {
    const ua = navigator.userAgent || navigator.vendor || '';
    const isIOS = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && typeof document !== 'undefined' && 'ontouchend' in document);
    if (isIOS) {
      return 'https://apps.apple.com/in/app/shigrampay-merchant/id6746115699';
    }
    return 'https://play.google.com/store/apps/details?id=com.vnetix.shigrampaymerchant&pcampaignid=web_share';
  } catch (e) {
    return 'https://play.google.com/store/apps/details?id=com.vnetix.shigrampaymerchant&pcampaignid=web_share';
  }
}

export function redirectToStore(referralCode) {
  try {
    const url = getStoreUrl(referralCode);
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked, try direct navigation
      window.location.href = url;
    }
  } catch (e) {
    console.error('Error redirecting to store:', e);
    window.location.href = getStoreUrl(referralCode);
  }
}

export function redirectToMerchantStore() {
  try {
    const url = getMerchantStoreUrl();
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked, try direct navigation
      window.location.href = url;
    }
  } catch (e) {
    console.error('Error redirecting to merchant store:', e);
    window.location.href = getMerchantStoreUrl();
  }
}

export function getDeepLinkUrl(referralCode) {
  const baseUrl = 'shigrampay://register'
  if (!referralCode) return baseUrl
  const sanitized = referralCode.trim()
  if (!sanitized) return baseUrl
  return `${baseUrl}?referral=${encodeURIComponent(sanitized)}`
}

export function redirectToAppOrStore(referralCode, options = {}) {
  const { fallbackDelay = 2000 } = options
  try {
    const deepLinkUrl = getDeepLinkUrl(referralCode)
    const storeUrl = getStoreUrl(referralCode)
    const { isIOS, isAndroid } = getPlatformMeta()

    // Only attempt deep linking on mobile devices
    if (!isIOS && !isAndroid) {
      // Desktop - go directly to store
      window.location.href = storeUrl
      return
    }

    let hasNavigated = false
    let fallbackTriggered = false

    const markNavigated = () => {
      hasNavigated = true
    }

    const fallbackHandler = () => {
      if (hasNavigated || fallbackTriggered) return
      fallbackTriggered = true
      window.location.href = storeUrl
    }

    // Set up fallback timer
    const timer = setTimeout(fallbackHandler, fallbackDelay)

    // Cleanup handlers - if page hides or blurs, app likely opened
    const cleanup = () => {
      clearTimeout(timer)
      markNavigated()
    }

    window.addEventListener('pagehide', cleanup, { once: true })
    window.addEventListener('blur', cleanup, { once: true })

    // Try to open the app with deep link
    // For both iOS and Android, use direct location assignment
    // If app is installed, it will open; if not, fallback will trigger
    window.location.href = deepLinkUrl

    // Additional Android fallback using intent URL
    if (isAndroid) {
      // Try Android intent URL as backup
      const intentUrl = `intent://register${referralCode ? `?referral=${encodeURIComponent(referralCode.trim())}` : ''}#Intent;scheme=shigrampay;package=com.vnetix.shigrampay;end`
      setTimeout(() => {
        if (!hasNavigated && !fallbackTriggered) {
          try {
            window.location.href = intentUrl
          } catch (e) {
            // Intent failed, fallback will handle
          }
        }
      }, 500)
    }
  } catch (error) {
    console.error('Error launching deep link, falling back to store', error)
    window.location.href = getStoreUrl(referralCode)
  }
}


