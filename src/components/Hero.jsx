import React from 'react'
import { APP_LOGIN_URL, APP_URL, LIVE_EXAMPLE_URL } from '../config'
import { trackEvent } from '../lib/analytics'

function Hero() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Client onboarding portals for small marketing agencies.</h1>
          <p className="hero-subtitle">
            Replace onboarding chaos across email, docs, and shared drives with one branded client portal that collects everything and keeps kickoff on track.
          </p>
          <div className="hero-ctas">
            <a
              href={APP_URL}
              className="btn-primary"
              onClick={() => trackEvent('cta_click', { location: 'hero', cta: 'start_free' })}
            >
              Start Free
            </a>
            <a
              href={LIVE_EXAMPLE_URL}
              className="btn-outline"
              onClick={() => trackEvent('cta_click', { location: 'hero', cta: 'live_example' })}
            >
              See Live Example
            </a>
          </div>
          <div className="hero-signin">
            <span>Built for agencies onboarding retainer clients every month. </span>
            <a href={APP_LOGIN_URL} className="hero-signin-link">Sign In</a>
          </div>
        </div>
        <div className="hero-visual">
          {/* Abstract visual - can be replaced with product screenshot/gif when ready */}
          {/* To swap: Replace the microsite-mockup div below with: */}
          {/* <img src="/path/to/product-screenshot.png" alt="SingleLink product" className="hero-product-image" /> */}
          <div className="microsite-mockup">
            <div className="mockup-header">
              <div className="mockup-brand">
                <div className="mockup-logo"></div>
                <span className="mockup-brand-name">Client Portal</span>
              </div>
            </div>
            <div className="mockup-content">
              <div className="mockup-checklist">
                <div className="checklist-item completed">
                  <div className="check-icon">✓</div>
                  <span>Review welcome materials</span>
                </div>
                <div className="checklist-item completed">
                  <div className="check-icon">✓</div>
                  <span>Sign service agreement</span>
                </div>
                <div className="checklist-item active">
                  <div className="check-icon">○</div>
                  <span>Upload required documents</span>
                </div>
                <div className="checklist-item">
                  <div className="check-icon">○</div>
                  <span>Complete intake questionnaire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

