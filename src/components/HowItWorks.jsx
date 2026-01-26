import React, { useEffect, useRef } from 'react'

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Create a branded microsite',
      description: 'Set up a personalized space with your branding—colors, logo, fonts. Each client gets their own dedicated microsite.'
    },
    {
      number: 2,
      title: 'Add onboarding tasks',
      description: 'Choose from powerful checklist item types: file uploads, e-signatures, questionnaires, approvals, external links, and more. Build the perfect workflow for each client.'
    },
    {
      number: 3,
      title: 'Share a magic link',
      description: 'Clients access their microsite through a simple link—no passwords to remember. They see a clean, professional checklist.'
    },
    {
      number: 4,
      title: 'Track progress',
      description: 'Watch clients work through each item at their own pace. Exchange messages, request signatures, and manage everything in one place.'
    }
  ]

  const stepsRef = useRef([])

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

    stepsRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
        observer.observe(el)
      }
    })

    return () => {
      stepsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How it works</h2>
        <p className="section-intro">Simple steps to transform your client onboarding</p>
        <div className="steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step"
              ref={(el) => (stepsRef.current[index] = el)}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

