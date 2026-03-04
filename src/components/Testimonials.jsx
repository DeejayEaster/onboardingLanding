import React from 'react'

const testimonials = [
  {
    quote:
      'SingleLink cut our kickoff back-and-forth in half. Clients know exactly what to do, and our PMs stopped chasing docs in email.',
    author: 'Agency Ops Lead',
    company: 'B2B Growth Agency (12-person team)',
  },
  {
    quote:
      'The branded portal instantly made onboarding feel premium. We looked more organized on day one and projects started faster.',
    author: 'Founder',
    company: 'Performance Marketing Agency',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>Built for teams that run onboarding every month</h2>
          <p>Real outcomes from agency operators who needed less chaos and faster kickoff.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <article className="testimonial-card" key={idx}>
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-meta">
                <strong>{item.author}</strong>
                <span>{item.company}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
