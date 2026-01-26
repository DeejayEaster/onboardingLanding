import React from 'react'
import { APP_URL, LIVE_EXAMPLE_URL } from '../config'

function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Create your first microsite</h2>
          <p className="cta-subtitle">Join early access and transform how you onboard clients</p>
          <div className="cta-buttons">
            <a href={APP_URL} className="btn-primary-large">Get Started</a>
            <a href={LIVE_EXAMPLE_URL} className="btn-outline-large">See a Live Example</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

