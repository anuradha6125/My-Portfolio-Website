function Hero() {
  const handleResumeClick = () => {
    // Replace with your actual resume URL or file path
    window.open("#", "_blank");
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">ANURADHA</h1>
        <p className="hero-subtitle">Software Developer | Frontend Developer </p>
        <p className="hero-description">
          I build clean, responsive, and accessible web experiences with a focus
          on clarity, performance, and user-centric design.
        </p>

        <div className="hero-actions">
          <button type="button" className="btn btn-outline" onClick={handleResumeClick}>
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;


