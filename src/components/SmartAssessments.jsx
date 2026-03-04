import React, { useEffect, useRef } from 'react'

function SmartAssessments() {
  const examples = [
    {
      title: 'Wedding Photographer',
      description: 'Suggest the right package based on budget and event size automatically.'
    },
    {
      title: 'Consultant',
      description: 'Qualify leads and flag high-priority prospects before the first call.'
    },
    {
      title: 'Creative Agency',
      description: 'Match clients with the right service tier based on their needs and goals.'
    }
  ]

  const examplesRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    examplesRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
        observer.observe(el)
      }
    })

    return () => {
      examplesRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section className="smart-assessments">
      <div className="container">
        <div className="assessments-content">
          <h2 className="section-title">Optional: Smart Assessments</h2>
          <p className="assessments-lead">For agencies with multiple service tiers and qualification paths</p>
          <p className="assessments-text">
            Instead of just collecting information, you can build intelligent questionnaires that automatically generate personalized recommendations based on client responses.
          </p>
          <div className="examples">
            {examples.map((example, index) => (
              <div
                key={index}
                className="example"
                ref={(el) => (examplesRef.current[index] = el)}
              >
                <h4>{example.title}</h4>
                <p>{example.description}</p>
              </div>
            ))}
          </div>
          <p className="assessments-note">
            This is where consultants and agencies say: "Oh—this replaces qualification calls and back-and-forth."
          </p>
        </div>
      </div>
    </section>
  )
}

export default SmartAssessments

