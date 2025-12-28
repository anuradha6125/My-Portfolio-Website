function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <a href="#home" className="nav-logo">
          <img src="/logo.png"   alt="Anuradha Gaur" />
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home">//Home</a>
          </li>
          <li>
            <a href="#about">//About</a>
          </li>
          <li>
            <a href="#expertise">//Expertise</a>
          </li>
          <li>
            <a href="#projects">//Projects</a>
          </li>
          <li>
            <a href="#contact">//Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;


