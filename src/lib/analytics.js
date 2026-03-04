export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return

  // Google Analytics (gtag)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }

  // Google Tag Manager / generic dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params })
  }

  // Lightweight fallback for local verification
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log('[analytics]', eventName, params)
  }
}
