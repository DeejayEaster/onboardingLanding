import React, { useEffect, useRef } from 'react'

function UseCases() {
  const useCases = [
    {
      title: 'Agencies onboarding new clients',
      before: 'Scattered emails, shared Google Drive folders, missed deadlines, confused clients.',
      after: 'One branded microsite per client. Clear checklist. Everything in one place.',
      outcome: 'Clients start projects faster. You look more professional. Less time spent on admin.'
    },
    {
      title: 'Consultants qualifying and recommending services',
      before: 'Long discovery calls, generic intake forms, manual qualification process.',
      after: 'Smart assessments that automatically qualify leads and suggest the right service.',
      outcome: 'Better-qualified leads. Personalized recommendations. Less time wasted on bad fits.'
    },
    {
      title: 'Creative professionals collecting assets and approvals',
      before: 'Files sent via email, lost assets, unclear approval process.',
      after: 'Structured asset collection. Clear approval workflows. Everything organized.',
      outcome: 'Projects start with all assets. Faster turnaround. Happier clients.'
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

