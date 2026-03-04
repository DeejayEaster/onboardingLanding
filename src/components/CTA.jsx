import React from 'react'
import { APP_URL, LIVE_EXAMPLE_URL } from '../config'

function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Start your first agency onboarding portal</h2>
          <p className="cta-subtitle">Set up your first client flow in minutes. Keep onboarding polished, repeatable, and kickoff-ready.</p>
          <div className="cta-buttons">
            <a href={APP_URL} className="btn-primary-large">Start Free</a>
            <a href={LIVE_EXAMPLE_URL} className="btn-outline-large">See Live Example</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

