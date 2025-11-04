export function getStoreUrl() {
  try {
    const ua = navigator.userAgent || navigator.vendor || '';
    const isIOS = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && typeof document !== 'undefined' && 'ontouchend' in document);
    if (isIOS) {
      return 'https://apps.apple.com/in/app/shigrampay/id6746239075';
    }
    return 'https://play.google.com/store/apps/details?id=com.vnetix.shigrampay&pcampaignid=web_share';
  } catch (e) {
    return 'https://play.google.com/store/apps/details?id=com.vnetix.shigrampay&pcampaignid=web_share';
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

export function redirectToStore() {
  try {
    const url = getStoreUrl();
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked, try direct navigation
      window.location.href = url;
    }
  } catch (e) {
    console.error('Error redirecting to store:', e);
    window.location.href = getStoreUrl();
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


