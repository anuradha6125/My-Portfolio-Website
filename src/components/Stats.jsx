import React from 'react';

function Stats() {
  return (
    <section id="stats" className="section-container">
      <div className="stats-section">
        <div className="stats-text-wrapper">
          <p className="stats-text">
            I'm a Software Developer and Beginner Machine Learning Enthusiast with expertise in web development, 
            machine learning, and data visualization. Currently working at RSK Business Solution Company as Dot Net Developer 
            and pursuing B.Tech in Computer Science, I bring a passion for creating innovative solutions and turning data into 
            actionable insights.
          </p>
          <a href="#portfolio" className="btn btn-outline">
            View all projects
          </a>
        </div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Projects</span>
            <span className="stat-value">3+</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Years Experience</span>
            <span className="stat-value">2+</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">CGPA</span>
            <span className="stat-value">7.65</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
