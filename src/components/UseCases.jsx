import React, { useEffect, useRef } from 'react'

function UseCases() {
  const useCases = [
    {
      title: 'SEO agency client onboarding',
      before: 'Credentials, analytics access, and intake details are collected across email threads and docs.',
      after: 'One portal collects access, goals, assets, and kickoff requirements in a single guided checklist.',
      outcome: 'Faster kickoff, fewer missing inputs, and less project delay in week one.'
    },
    {
      title: 'Paid media agency handoff',
      before: 'Ad account access, billing details, and creative assets arrive piecemeal and stall campaign launch.',
      after: 'Clients submit required items in order with clear progress and approval checkpoints.',
      outcome: 'Campaigns launch faster with fewer back-and-forth follow-ups from your team.'
    },
    {
      title: 'Web design/development onboarding',
      before: 'Brand files, content, domain details, and approvals come in late or incomplete.',
      after: 'Structured onboarding portal centralizes uploads, signatures, and requirements before build starts.',
      outcome: 'Cleaner project starts, tighter timelines, and a more professional client experience.'
    }
  ]

  const casesRef = useRef([])

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

    casesRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
        observer.observe(el)
      }
    })

    return () => {
      casesRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section id="use-cases" className="use-cases">
      <div className="container">
        <h2 className="section-title">Use Cases</h2>
        <p className="section-intro">See how different businesses use SingleLink</p>
        <div className="use-case-grid">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="use-case"
              ref={(el) => (casesRef.current[index] = el)}
            >
              <h3>{useCase.title}</h3>
              <div className="use-case-content">
                <div className="before-after">
                  <div className="before">
                    <strong>Before:</strong> {useCase.before}
                  </div>
                  <div className="after">
                    <strong>After:</strong> {useCase.after}
                  </div>
                </div>
                <div className="outcome">
                  <strong>Outcome:</strong> {useCase.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases

