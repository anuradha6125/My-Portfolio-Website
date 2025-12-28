function About() {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2>About</h2>
        <p>Get to know me</p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m a frontend developer who enjoys turning ideas into
            intuitive and performant web interfaces. I focus on writing clean,
            maintainable code and creating user-friendly experiences.
          </p>
          <p>
            I keep up with modern frontend best practices and enjoy working in
            fast-paced, collaborative environments where design and engineering
            work closely together.
          </p>
        </div>

        <div className="about-meta">
          <div className="about-card">
            <h3>Education</h3>
            <p>
              B.Tech in Computer Science
              <br />
              [Your University], [Year]
            </p>
          </div>

          <div className="about-card">
            <h3>Career Goals</h3>
            <p>
              I&apos;m looking to join a team where I can contribute to
              production-ready frontend applications, grow as a React developer,
              and collaborate closely with designers and backend engineers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


