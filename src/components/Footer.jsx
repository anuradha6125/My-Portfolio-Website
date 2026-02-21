import React from 'react';

function Footer() {
  return (
    <footer
      className="glass-panel"
      style={{
        margin: '0 2vw 2vw 2vw',
        padding: '6rem 4rem 4rem 4rem',
        borderBottomLeftRadius: '0px', // Anchor it to the bottom
        borderBottomRightRadius: '0px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem' }}>

        {/* Massive Logo / CTA */}
        <div>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            margin: '0 0 1rem 0',
            color: '#fff',
            lineHeight: 1
          }}>
            ANURADHA
          </h2>
          <p style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '300px',
            margin: 0
          }}>
            Frontend Developer & Designer based in India. Building digital experiences that matter.
          </p>
        </div>

        {/* Links Grid */}
        <div style={{ display: 'flex', gap: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Socials</span>
            <a href="https://linkedin.com/in/anuradha-gaur-81487b255" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontFamily: '"Inter", sans-serif', fontSize: '1.1rem', transition: 'color 0.3s' }}>LinkedIn</a>
            <a href="https://github.com/anuradha6125" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontFamily: '"Inter", sans-serif', fontSize: '1.1rem', transition: 'color 0.3s' }}>GitHub</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Navigation</span>
            <a href="#home" style={{ color: '#fff', textDecoration: 'none', fontFamily: '"Inter", sans-serif', fontSize: '1.1rem', transition: 'color 0.3s' }}>Index</a>
            <a href="#portfolio" style={{ color: '#fff', textDecoration: 'none', fontFamily: '"Inter", sans-serif', fontSize: '1.1rem', transition: 'color 0.3s' }}>Work</a>
            <a href="#experience" style={{ color: '#fff', textDecoration: 'none', fontFamily: '"Inter", sans-serif', fontSize: '1.1rem', transition: 'color 0.3s' }}>Experience</a>
          </div>
        </div>

      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Anuradha. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: '"Inter", sans-serif', fontSize: '0.9rem' }}>Local Time: 15:45 IST</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


