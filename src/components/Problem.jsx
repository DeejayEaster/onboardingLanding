import React, { useEffect, useRef } from 'react'

function Problem() {
  const problemItems = [
    {
      icon: '📧',
      title: 'Scattered emails',
      description: "Important information gets lost in inboxes. Clients miss deadlines because they can't find what they need."
    },
    {
      icon: '📁',
      title: 'Confusing shared drives',
      description: 'Folders with unclear names. Files uploaded to the wrong place. Version control nightmares.'
    },
    {
      icon: '📝',
      title: 'Generic forms',
      description: "One-size-fits-all intake forms that don't adapt to client needs. No personalization, no intelligence."
    },
    {
      icon: '⏰',
      title: 'Endless back-and-forth',
      description: 'Clients ask the same questions repeatedly. You spend hours explaining the same process over and over.'
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
    <section className="problem">
      <div className="container">
        <h2 className="section-title">The current state of onboarding</h2>
        <p className="section-intro">Agency onboarding breaks down in the same four places:</p>
        <div className="problem-list">
          {problemItems.map((item, index) => (
            <div
              key={index}
              className="problem-item"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div className="problem-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem

