import React from 'react'

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="solution-content">
          <h2 className="section-title">A better way</h2>
          <p className="solution-lead">Instead of juggling tools, give every client a single place to get started.</p>
          <p className="solution-text">
            Your platform replaces the chaos of scattered onboarding with a polished, concierge-style experience. Your clients feel taken care of from day one. You get visibility into their progress, can exchange messages, request signatures on documents, and manage file uploads—all in one place.
          </p>
          <p className="solution-text">
            It's designed to feel premium and personal, not like another project management tool cluttered with features you don't need.
          </p>
        </div>
        <div className="solution-visual">
          <div className="solution-video-container">
            <video 
              className="solution-video" 
              autoPlay
              muted
              loop
              playsInline
              aria-label="SingleLink product demonstration"
            >
              <source src="/singlelink.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution

