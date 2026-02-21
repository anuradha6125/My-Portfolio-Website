import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Minimal, high-end links list
  const navLinks = [
    { href: '#home', label: 'Index' },
    { href: '#portfolio', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Floating Header */}
      <header
        className={isScrolled ? "glass-panel" : ""}
        ref={navRef}
        style={{
          position: 'fixed',
          top: isScrolled ? '2vh' : '4vh',
          left: '50%',
          transform: 'translateX(-50%)',
          width: isScrolled ? 'clamp(300px, 90vw, 800px)' : '100%',
          maxWidth: isScrolled ? 'none' : '1400px',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? '1rem 2rem' : '1rem 4rem',
          borderRadius: isScrolled ? '99px' : '0px', // Pill shape only when scrolled
          backgroundColor: isScrolled ? '' : 'transparent',
          border: isScrolled ? '' : 'none',
          boxShadow: isScrolled ? '' : 'none',
          backdropFilter: isScrolled ? '' : 'none',
          color: '#fff',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <a
          href="#home"
          onClick={closeMenu}
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '1.2rem',
            fontWeight: 500,
            textDecoration: 'none',
            color: 'inherit',
            letterSpacing: '-0.02em'
          }}
        >
          ANURADHA
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.85rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: isScrolled ? 'rgba(255,255,255,0.7)' : '#fff',
              border: isScrolled ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.4)',
              padding: '0.4rem 1rem',
              borderRadius: '99px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = isScrolled ? 'rgba(255,255,255,0.7)' : '#fff';
            }}
          >
            Resume
          </a>

          <button
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              padding: '0.5rem 0',
              transition: 'color 0.3s'
            }}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </header>

      {/* Full screen glass menu overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(5, 5, 5, 0.4)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          zIndex: 40,
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
            {navLinks.map((link, i) => (
              <li key={link.href} style={{
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMenuOpen ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + (i * 0.1)}s`
              }}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    lineHeight: 1
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#fff';
                    e.target.style.textShadow = '0 0 40px rgba(255,255,255,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255,255,255,0.9)';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
