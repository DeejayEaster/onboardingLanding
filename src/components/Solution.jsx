import React from 'react'

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="solution-content">
          <h2 className="section-title">A better way</h2>
          <p className="solution-lead">Give every new client one branded onboarding portal instead of 12 scattered threads.</p>
          <p className="solution-text">
            SingleLink replaces scattered onboarding with a polished, repeatable process. Clients know exactly what to do next, and your team spends less time chasing files, signatures, and missing details.
          </p>
          <p className="solution-text">
            You get a premium first impression, clearer progress visibility, and faster kickoff without forcing your clients into another bloated PM workflow.
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

