import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <section id="stats" className="section-container" style={{ paddingTop: '5vh' }}>
      <div
        ref={containerRef}
        className="glass-panel"
        style={{
          padding: '4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <p style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          fontWeight: 100,
          lineHeight: 1.4,
          margin: 0,
          color: '#fff',
          maxWidth: '1000px',
          letterSpacing: '-0.02em'
        }}>
          I'm a Software Developer and beginner Machine Learning enthusiast.
          Currently working at <span style={{ color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>RSK Business Solution</span> as a Dot Net Developer
          and pursuing a B.Tech in CS. I bring a passion for creating innovative solutions and turning data into actionable insights.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '3rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '2.5rem', lineHeight: 1, color: '#fff' }}>3+</span>
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Projects</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '2.5rem', lineHeight: 1, color: '#fff' }}>1+</span>
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>Years Experience</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '2.5rem', lineHeight: 1, color: '#fff' }}>7.48</span>
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>CGPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
