import React, { useEffect, useState } from 'react'
import { APP_LOGIN_URL, APP_URL } from '../config'

function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="nav" style={{ boxShadow: scrolled ? '0 4px 6px -1px rgb(0 0 0 / 0.1)' : 'none' }}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">SingleLink</div>
          <div className="nav-links">
            <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>
              How It Works
            </a>
            <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>
              Features
            </a>
            <a href="#use-cases" onClick={(e) => handleSmoothScroll(e, '#use-cases')}>
              Use Cases
            </a>
            <a href={APP_LOGIN_URL} className="nav-signin">
              Sign In
            </a>
            <a href={APP_URL} className="btn-secondary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

