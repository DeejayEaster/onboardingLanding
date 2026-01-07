import React from 'react'
import { APP_LOGIN_URL } from '../config'

function Footer() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">SingleLink</div>
              <p className="footer-description">
                Create beautiful, branded onboarding experiences for your clients. Replace scattered emails and forms with personalized microsites.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>
                  How It Works
                </a>
                <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>
                  Features
                </a>
                <a href="#use-cases" onClick={(e) => handleSmoothScroll(e, '#use-cases')}>
                  Use Cases
                </a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href={APP_LOGIN_URL}>Sign In</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">FAQ</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SingleLink. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

