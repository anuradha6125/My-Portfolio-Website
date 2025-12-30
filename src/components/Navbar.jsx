import React from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Feedback' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="navbar">
      <nav className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          ANURADHA
        </a>

        <button 
          className={`menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="menu-icon">
            {isMenuOpen ? 'Close' : 'Menu'}
          </span>
        </button>
      </nav>

      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <nav className="menu-nav" onClick={(e) => e.stopPropagation()}>
          <ul className="menu-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="menu-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


