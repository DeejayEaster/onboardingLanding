import React, { useEffect, useRef } from 'react'

function Capabilities() {
  const capabilities = [
    {
      type: 'Text',
      icon: '📝',
      purpose: 'Simple informational item or task',
      description: 'Client marks it complete when done. Good for instructions or reminders.',
      useCase: 'Remind clients to review welcome materials or complete simple tasks.'
    },
    {
      type: 'File Upload',
      icon: '📁',
      purpose: 'Collect documents from clients',
      description: 'Client uploads a document (logo, ID, contract, etc.). You can specify allowed file types and size limits.',
      useCase: 'Collect logos, IDs, contracts, or any required documentation.'
    },
    {
      type: 'External Link',
      icon: '🔗',
      purpose: 'Point clients to external resources',
      description: 'Opens a URL in a new tab. Use for pointing clients to external resources, forms, or tools.',
      useCase: 'Link to external forms, tools, or resources clients need to access.'
    },
    {
      type: 'Approval Required',
      icon: '✅',
      purpose: 'Verify information or sign-offs',
      description: 'Client submits for review, then admin approves or rejects. Good for verifying information or sign-offs.',
      useCase: 'Review and approve client submissions before moving forward.'
    },
    {
      type: 'Questionnaire',
      icon: '📋',
      purpose: 'Collect structured data',
      description: 'Embedded form with multiple question types: short text, long text, multiple choice, checkboxes, email, number. Collects structured data.',
      useCase: 'Gather detailed client information through custom forms.'
    },
    {
      type: 'Service Agreement',
      icon: '✍️',
      purpose: 'E-signature requests',
      description: 'E-signature request via Dropbox Sign (HelloSign). Client signs a document electronically.',
      useCase: 'Get contracts and agreements signed digitally with legal validity.'
    }
  ]

  const itemsRef = useRef([])

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

    itemsRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
        observer.observe(el)
      }
    })

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section className="capabilities">
      <div className="container">
        <h2 className="section-title">Powerful checklist items for every need</h2>
        <p className="section-intro">
          SingleLink gives you 7 different checklist item types to handle any onboarding scenario. Mix and match to create the perfect workflow for each client.
        </p>
        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="capability-item"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div className="capability-header">
                <div className="capability-icon">{capability.icon}</div>
                <h3>{capability.type}</h3>
              </div>
              <p className="capability-purpose"><strong>{capability.purpose}</strong></p>
              <p className="capability-description">{capability.description}</p>
              <div className="capability-usecase">
                <strong>Use for:</strong> {capability.useCase}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities

