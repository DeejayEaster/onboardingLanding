import React, { useEffect, useRef } from 'react'

function Features() {
  const featureGroups = [
    {
      title: 'Looks premium from day one',
      features: [
        'Branded microsites with your colors, logo, and fonts',
        'Magic link access—no passwords required',
        'Clean, professional checklist interface',
        'Mobile-responsive design'
      ]
    },
    {
      title: 'Get required assets the first time',
      features: [
        'Document uploads with organization',
        'Digital signature requests',
        'Custom intake questionnaires',
        'Video and resource sharing'
      ]
    },
    {
      title: 'Know what is blocking kickoff',
      features: [
        'Real-time progress tracking',
        'In-platform messaging',
        'Task completion notifications',
        'Client activity dashboard'
      ]
    }
  ]

  const groupsRef = useRef([])

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

    groupsRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
        observer.observe(el)
      }
    })

    return () => {
      groupsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Everything you need, nothing you don't</h2>
        <p className="section-intro">Grouped by outcome, not by feature</p>
        <div className="feature-groups">
          {featureGroups.map((group, index) => (
            <div
              key={index}
              className="feature-group"
              ref={(el) => (groupsRef.current[index] = el)}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

