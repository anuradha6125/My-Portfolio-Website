import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Test Request Mgmt",
    client: "Roop Polymers",
    role: "Full Stack Development",
    year: "2025",
    description: "Streamlining request processing and tracking for improved operational efficiency across the entire manufacturing floor.",
    gradient: "linear-gradient(135deg, rgba(255,45,136,0.2) 0%, rgba(255,107,77,0.1) 100%)",
  },
  {
    title: "Collegia AI",
    client: "Internal Product",
    role: "React / APIs / AI",
    year: "2024",
    description: "An AI-powered hub serving as a comprehensive data center for students. Delivering instant insights on faculty, subjects, and schedules.",
    gradient: "linear-gradient(135deg, rgba(138,86,255,0.2) 0%, rgba(78,168,222,0.1) 100%)",
  },
  {
    title: "Movie Analytics",
    client: "Data Engineering",
    role: "Python / Power BI",
    year: "2024",
    description: "Deep data scraping from IMDb using BeautifulSoup and Selenium, transformed into highly interactive Power BI visualization dashboards.",
    gradient: "linear-gradient(135deg, rgba(255,183,77,0.2) 0%, rgba(255,45,136,0.1) 100%)",
  },
];

function Projects() {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      gsap.fromTo(el,
        { y: 100, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
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
    <section id="portfolio" className="section-container" ref={containerRef} style={{ paddingTop: '5vh' }}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '4rem',
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
          Selected <span style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>Works</span>
        </h2>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)' }}>03</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {projects.map((project, index) => (
          <article
            key={project.title}
            ref={el => projectRefs.current[index] = el}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2rem',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Project Image Placeholder - takes up 7 columns */}
            <div
              className="project-image-wrapper"
              style={{
                gridColumn: index % 2 === 0 ? '1 / 8' : '6 / 13',
                gridRow: '1',
                aspectRatio: '16/10',
                background: project.gradient,
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 'var(--radius-lg)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
                zIndex: 1
              }} />
            </div>

            {/* Project Info - takes up 5 columns, overlaps slightly */}
            <div className="glass-panel" style={{
              gridColumn: index % 2 === 0 ? '7 / 13' : '1 / 7',
              gridRow: '1',
              zIndex: 2,
              padding: '3rem',
              marginTop: '4rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '2rem',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.5)'
              }}>
                <span>{project.client}</span>
                <span>{project.year}</span>
              </div>

              <h3 style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                margin: '0 0 1.5rem 0'
              }}>
                {project.title}
              </h3>

              <span style={{
                display: 'inline-block',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.85rem',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255,255,255,0.05)',
                marginBottom: '1.5rem',
                color: 'rgba(255,255,255,0.8)'
              }}>
                {project.role}
              </span>

              <p style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.6)',
                margin: '0 0 2rem 0',
                fontWeight: 300
              }}>
                {project.description}
              </p>

              <a href="#" className="btn btn-outline" style={{
                fontSize: '0.85rem',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                padding: '0.5rem 0',
                borderRadius: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                VIEW CASE STUDY →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
