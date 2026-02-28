import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

function Hero() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const orbRef = useRef(null);
  const bottomRef = useRef(null);
  const overlayRef = useRef(null);
  const fog1Ref = useRef(null);
  const fog2Ref = useRef(null);
  const fog3Ref = useRef(null);
  const isHoveringRef = useRef(false);
  const mouseRef = useRef({ x: 50, y: 50 }); // percentage-based
  const rafRef = useRef(null);
  const currentPos = useRef({ x: 50, y: 50 }); // for smooth interpolation

  // Smooth lerp-based mouse tracking
  const updateReveal = useCallback(() => {
    // Lerp towards target
    currentPos.current.x += (mouseRef.current.x - currentPos.current.x) * 0.08;
    currentPos.current.y += (mouseRef.current.y - currentPos.current.y) * 0.08;

    const { x, y } = currentPos.current;

    if (overlayRef.current) {
      if (isHoveringRef.current) {
        // Create a large radial "hole" in the overlay at cursor position
        overlayRef.current.style.maskImage =
          `radial-gradient(ellipse 320px 280px at ${x}% ${y}%, transparent 0%, transparent 45%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.85) 80%, black 100%)`;
        overlayRef.current.style.webkitMaskImage =
          `radial-gradient(ellipse 320px 280px at ${x}% ${y}%, transparent 0%, transparent 45%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.85) 80%, black 100%)`;
      }
    }

    // Push fog layers away from cursor
    if (fog1Ref.current && fog2Ref.current && fog3Ref.current) {
      const dx = (x - 50) * 0.6;
      const dy = (y - 50) * 0.6;
      if (isHoveringRef.current) {
        fog1Ref.current.style.transform = `translate(${dx * 1.2}px, ${dy * 1.4}px) scale(1.1)`;
        fog2Ref.current.style.transform = `translate(${-dx * 0.8}px, ${dy * 1.1}px) scale(1.15)`;
        fog3Ref.current.style.transform = `translate(${dx * 0.5}px, ${-dy * 0.9}px) scale(1.08)`;
      }
    }

    rafRef.current = requestAnimationFrame(updateReveal);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
    // Transition fog layers to "pushed" state
    [fog1Ref, fog2Ref, fog3Ref].forEach(ref => {
      if (ref.current) {
        ref.current.style.opacity = '0.3';
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    // Reset overlay to fully opaque
    if (overlayRef.current) {
      overlayRef.current.style.maskImage = 'none';
      overlayRef.current.style.webkitMaskImage = 'none';
    }
    // Reset fog layers
    [fog1Ref, fog2Ref, fog3Ref].forEach(ref => {
      if (ref.current) {
        ref.current.style.transform = 'translate(0, 0) scale(1)';
        ref.current.style.opacity = '1';
      }
    });
    // Reset lerp position
    currentPos.current = { x: 50, y: 50 };
  }, []);

  // Touch support
  const handleTouchMove = useCallback((e) => {
    const touch = e.touches[0];
    if (!touch || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: ((touch.clientX - rect.left) / rect.width) * 100,
      y: ((touch.clientY - rect.top) / rect.height) * 100
    };
  }, []);

  useEffect(() => {
    // Entrance animations
    const tl = gsap.timeline();

    tl.fromTo([text1Ref.current, text2Ref.current],
      { y: 50, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, stagger: 0.2, ease: 'power3.out', delay: 0.1 }
    );

    tl.fromTo(bottomRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=1"
    );

    gsap.to(orbRef.current, {
      y: -30, x: 20, scale: 1.05,
      duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });

    // Start the smooth tracking loop
    rafRef.current = requestAnimationFrame(updateReveal);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateReveal]);

  // --- Shared fog layer base styles ---
  const fogBase = {
    position: 'absolute',
    inset: 0,
    zIndex: 4,
    pointerEvents: 'none',
    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease',
    willChange: 'transform, opacity',
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={(e) => { handleTouchMove(e); handleMouseEnter(); }}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 6vw',
        overflow: 'hidden',
        cursor: 'none'
      }}
    >
      {/* Layer 1: Portrait image (always present, hidden by overlay + fog) */}
      <img
        src="/hero-image.jpeg"
        alt="Portrait"
        className="hero-reveal-image"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          zIndex: 1,
          pointerEvents: 'none',
          filter: 'brightness(0.7) contrast(1.15) saturate(0.9)'
        }}
      />

      {/* Layer 2: Dark overlay with radial mask cutout at cursor */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#050505',
          zIndex: 2,
          pointerEvents: 'none',
          transition: 'mask-image 0.15s ease, -webkit-mask-image 0.15s ease',
        }}
      />

      {/* Layer 3: Animated fog wisps — drift away from cursor on hover */}
      <div ref={fog1Ref} style={{
        ...fogBase,
        background: `
          radial-gradient(ellipse 80% 60% at 20% 30%, rgba(5,5,5,0.95), transparent),
          radial-gradient(ellipse 60% 80% at 80% 70%, rgba(5,5,5,0.8), transparent)
        `,
        filter: 'blur(30px)',
      }} />
      <div ref={fog2Ref} style={{
        ...fogBase,
        background: `
          radial-gradient(ellipse 70% 50% at 60% 20%, rgba(5,5,5,0.85), transparent),
          radial-gradient(ellipse 50% 70% at 30% 80%, rgba(5,5,5,0.75), transparent)
        `,
        filter: 'blur(40px)',
      }} />
      <div ref={fog3Ref} style={{
        ...fogBase,
        background: `
          radial-gradient(ellipse 90% 40% at 50% 50%, rgba(5,5,5,0.7), transparent),
          radial-gradient(circle at 70% 40%, rgba(5,5,5,0.6), transparent 60%)
        `,
        filter: 'blur(50px)',
      }} />

      {/* Layer 4: Central Ethereal Orb */}
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
          zIndex: 5,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
        }}
      />

      {/* Layer 5: Text content — ALWAYS at full opacity */}
      <div style={{ position: 'relative', zIndex: 10, marginTop: '10vh' }}>
        <h1 style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 'clamp(60px, 12vw, 180px)',
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          margin: 0,
          textTransform: 'none',
          color: '#fff',
          textShadow: '0 4px 30px rgba(0,0,0,0.5)'
        }}>
          <div ref={text1Ref} style={{ display: 'block' }}>Designing</div>
          <div ref={text2Ref} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>for You</div>
        </h1>
      </div>

      {/* Bottom info bar — absolute, NOT sticky */}
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
          fontWeight: 300,
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
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

      {/* Custom cursor glow that hints "hover to reveal" */}
      <div
        className="hero-cursor-glow"
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,45,136,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 15,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'screen',
          opacity: 0,
          transition: 'opacity 0.4s ease',
        }}
      />
    </section>
  );
}

export default Hero;
