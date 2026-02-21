import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Her code is as clean as her designs. She completely refocused our frontend architecture while maintaining a beautiful aesthetic. Simply outstanding.",
    name: "Aarav Sharma",
    role: "Tech Lead @ Roop Polymers",
  },
  {
    quote: "A rare mix of technical depth and creative vision. The way she handled our product’s complex data visualization was masterful.",
    name: "Dr. Meera Patel",
    role: "Director @ Collegia AI",
  }
];

function Testimonials() {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1.5, ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section id="testimonials" className="section-container" ref={containerRef} style={{ paddingTop: '15vh', paddingBottom: '15vh' }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem', alignItems: 'center', textAlign: 'center' }}>
        {testimonials.map((t, index) => (
          <div key={index} ref={el => textRefs.current[index] = el} style={{ maxWidth: '900px' }}>
            <p style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              color: '#fff',
              margin: '0 0 3rem 0',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                top: '-2rem',
                left: '-4rem',
                fontSize: '8rem',
                color: 'rgba(255,255,255,0.05)',
                fontFamily: 'serif',
                lineHeight: 1
              }}>
                "
              </span>
              {t.quote}
            </p>
            <div>
              <span style={{
                display: 'block',
                fontFamily: '"Inter", sans-serif',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '0.5rem'
              }}>
                {t.name}
              </span>
              <span style={{
                display: 'block',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.4)'
              }}>
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
