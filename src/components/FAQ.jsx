import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most custom portfolio or corporate sites take between 3-6 weeks from initial design concepts to final deployment, depending on complexity and animations."
  },
  {
    question: "Do you build custom designs or use templates?",
    answer: "100% custom. I don't use templates or standard bento grids. Every project gets a unique design system based on its specific constraints and brand voice."
  },
  {
    question: "What tech stack do you prefer?",
    answer: "React, Vite, Next.js for the core. GSAP and Lenis for high-end animations and smooth scrolling. Tailwind or custom CSS for styling depending on the project."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, delay: index * 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section id="faq" className="section-container" ref={containerRef} style={{ paddingTop: '5vh' }}>

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
          Common <span style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>Questions</span>
        </h2>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)' }}>06</span>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '2rem 0',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                  fontWeight: 300,
                  transition: 'color 0.3s ease',
                  color: isOpen ? '#fff' : 'rgba(255,255,255,0.7)'
                }}>
                  {faq.question}
                </span>
                <span style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '2rem',
                  fontWeight: 300,
                  lineHeight: 1,
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  color: 'rgba(255,255,255,0.4)'
                }}>
                  +
                </span>
              </button>

              <div style={{
                height: isOpen ? 'auto' : 0,
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <p style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.5)',
                  margin: '0 0 2rem 0',
                  fontWeight: 300
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
