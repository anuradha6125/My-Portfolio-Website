import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1.5, ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '60vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10vh 6vw 5vh 6vw',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: '10vh'
      }}
    >
      {/* Footer Ambient Glow - Shifted up slightly to illuminate Contact + Footer */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(400px, 80vw, 1200px)',
        height: '400px',
        background: 'radial-gradient(ellipse at bottom, rgba(255, 45, 136, 0.3) 0%, rgba(255, 183, 77, 0.1) 50%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }} />

      <div ref={textRef} style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 'clamp(4rem, 10vw, 10rem)',
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          margin: '0 0 2rem 0',
          color: '#fff'
        }}>
          Let's <span style={{ color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>Talk</span>
        </h2>

        <p style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: '1.2rem',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.6)',
          margin: '0 auto 4rem auto',
          maxWidth: '500px',
          fontWeight: 300
        }}>
          Available for freelance opportunities. Have a project in mind? Drop me a line.
        </p>

        <a
          href="mailto:anuradha@example.com"
          className="btn btn-outline"
          style={{
            fontSize: '1rem',
            padding: '1.5rem 4rem',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '99px', // Exception to sharp rule for massive interactive CTA pill
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#fff';
            e.target.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.03)';
            e.target.style.color = '#fff';
          }}
        >
          ANURADHA@EXAMPLE.COM
        </a>
      </div>
    </section>
  );
}

export default Contact;
