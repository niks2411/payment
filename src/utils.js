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

export function redirectToStore() {
  const url = getStoreUrl();
  window.open(url, '_blank', 'noopener');
}


