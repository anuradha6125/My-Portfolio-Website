import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Software Dev",
    domain: "Engineering",
    description: "C, C++, Python, Flask, HTML/CSS, JavaScript, and API Integration tailored to scale."
  },
  {
    title: "Machine Learning",
    domain: "Data & Inference",
    description: "Scikit, Python integrations, and deep data analysis converting raw data into action."
  },
  {
    title: "Data Visualization",
    domain: "Analytics",
    description: "MySQL, Microsoft Power BI, Excel dashboards orchestrating complex datasets."
  },
  {
    title: "Creative Design",
    domain: "Visual Identity",
    description: "Photoshop, Figma, Krita ensuring the visual aesthetic matches technical power."
  },
];

function Services() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, delay: index * 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section id="services" className="section-container" ref={containerRef}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '6rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '2rem'
      }}>
        <h2 style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 300,
          letterSpacing: '-0.04em',
          margin: 0
        }}>
          Core <span style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>Expertise</span>
        </h2>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)' }}>05</span>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem 3rem',
          width: '100%',
          maxWidth: '1200px'
        }}>
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => itemsRef.current[index] = el}
              className="glass-panel"
              style={{
                padding: '2.5rem',
              }}
            >
              <span style={{
                display: 'inline-block',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '1rem'
              }}>
                {service.domain}
              </span>
              <h3 style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '2rem',
                fontWeight: 300,
                margin: '0 0 1rem 0'
              }}>
                {service.title}
              </h3>
              <p style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.6)',
                margin: 0,
                fontWeight: 300
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Services;
