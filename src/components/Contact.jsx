import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section-container contact-section">
      <h2 className="section-title">Let&apos;s talk</h2>
      
      <div className="contact-grid">
        <div className="contact-profile">
          <img 
            src="/hero-image.jpeg" 
            alt="Anuradha"
            className="contact-avatar"
            onError={(e) => {
              e.target.style.backgroundColor = 'var(--bg-elevated)';
              e.target.style.display = 'none';
            }}
          />
          <h3 className="contact-name">ANURADHA</h3>
          <p className="contact-title">Software Developer | Beginner Machine Learning Enthusiast</p>
          <p className="contact-role" style={{ fontSize: '0.9rem', color: 'var(--muted-low)', marginTop: '0.5rem' }}>
            Currently working at RSK Business Solution Company as Dot Net Developer
          </p>
          <a href="mailto:anuradha.2aug@gmail.com" className="contact-email">
            anuradha.2aug@gmail.com
          </a>
          <a href="tel:+919560048966" className="contact-email" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
            +91-9560048966
          </a>
          <button className="btn btn-primary">
            book a call
          </button>
        </div>
        
        <div>
          <p className="contact-message">
            Get in touch and let&apos;s turn concepts into stunning websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;


