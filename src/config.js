// Application URLs
// Update these URLs when your application is deployed
export const APP_URL = 'https://app.singlelink.io'
export const APP_LOGIN_URL = 'https://app.singlelink.io/login'
export const APP_SIGNUP_URL = 'https://app.singlelink.io/signup'
export const LIVE_EXAMPLE_URL = 'https://go.singlelink.io/live-example'

export function getTrackedSignupUrl(source = 'landing', content = 'start_free') {
  const url = new URL(APP_SIGNUP_URL)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', 'website')
  url.searchParams.set('utm_campaign', 'agency_launch')
  url.searchParams.set('utm_content', content)
  return url.toString()
}

