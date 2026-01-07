import React from 'react'

function WhoItsFor() {
  const forItems = [
    'Agencies and consultancies',
    'Service providers and freelancers',
    'Creative professionals',
    'Businesses that onboard clients regularly',
    'Teams that want a premium client experience'
  ]

  const notForItems = [
    'Internal employee onboarding',
    'Complex project management workflows',
    'Large enterprise team collaboration',
    'E-commerce or transactional businesses'
  ]

  return (
    <section className="who-its-for">
      <div className="container">
        <h2 className="section-title">Built for client-based businesses</h2>
        <div className="for-not-for">
          <div className="for-section">
            <h3>✓ Perfect for</h3>
            <ul>
              {forItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="not-for-section">
            <h3>✗ Not built for</h3>
            <ul>
              {notForItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="qualification-note">
          This increases trust and reduces churn later by setting clear expectations.
        </p>
      </div>
    </section>
  )
}

export default WhoItsFor

