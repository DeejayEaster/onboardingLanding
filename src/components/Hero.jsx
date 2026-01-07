import React from 'react'
import { APP_LOGIN_URL } from '../config'

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
          <h1 className="hero-title">Client onboarding, reimagined as a guided experience.</h1>
          <p className="hero-subtitle">
            Create branded onboarding microsites that replace emails, folders, and forms — and give clients a better first impression.
          </p>
          <div className="hero-ctas">
            <a href="#cta" className="btn-primary" onClick={(e) => handleSmoothScroll(e, '#cta')}>
              Get Started
            </a>
            <a href="#how-it-works" className="btn-outline" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>
              See How It Works
            </a>
          </div>
          <div className="hero-signin">
            <span>Already have an account? </span>
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

