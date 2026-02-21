import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Hero() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const orbRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Subtle entrance animation for the massive text
    tl.fromTo([text1Ref.current, text2Ref.current],
      { y: 50, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, stagger: 0.2, ease: 'power3.out', delay: 0.1 }
    );

    tl.fromTo(bottomRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=1"
    );

    // Continuous float animation for the ambient orb
    gsap.to(orbRef.current, {
      y: -30,
      x: 20,
      scale: 1.05,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 6vw',
        overflow: 'hidden'
      }}
    >
      {/* Central Ethereal Orb - The core visual of the redesign */}
      <div
        ref={orbRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(300px, 60vw, 800px)',
          height: 'clamp(300px, 50vw, 600px)',
          background: 'radial-gradient(ellipse at center, rgba(255, 45, 136, 0.4) 0%, rgba(255, 183, 77, 0.2) 50%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        }}
      />

      {/* Massive Typography Content */}
      <div style={{ position: 'relative', zIndex: 10, marginTop: '10vh' }}>
        <h1
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(60px, 12vw, 180px)',
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            margin: 0,
            textTransform: 'none',
            color: '#fff'
          }}
        >
          <div ref={text1Ref} style={{ display: 'block' }}>Designing</div>
          <div ref={text2Ref} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>for You</div>
        </h1>
      </div>

      {/* Bottom info bar */}
      <div
        ref={bottomRef}
        style={{
          position: 'absolute',
          bottom: '8vh',
          left: '6vw',
          right: '6vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 10
        }}
      >
        <p style={{
          maxWidth: '400px',
          margin: 0,
          fontSize: '0.95rem',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.7)',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 300
        }}>
          For 2+ years, I've been helping brands and creatives build standout websites. By combining thoughtful design with powerful code, I make the web more beautiful.
        </p>

        <a
          href="#portfolio"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#fff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          See Works
          <span style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '32px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%'
          }}>↓</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
