import React from 'react';

const projects = [
  {
    title: "Test Request Management System",
    description: "Designed and developed a web-based test request management system for Roop Polymers Limited, streamlining request processing and tracking for improved operational efficiency. Built core features including admin dashboard, secure file uploads, and automated email notifications.",
    category: "Flask, Python, MySQL, HTML/CSS, JavaScript",
    gradient: "linear-gradient(135deg, #ff2d88 0%, #ff6b4d 50%, #ffb74d 100%)",
    date: "May 2025"
  },
  {
    title: "Collegia: AI for College Students",
    description: "Developed Collegia, an AI-powered website designed to serve as a comprehensive information hub for students. Integrated features to provide easy access to essential information like faculty emails and subjects handled by each teacher.",
    category: "AI/ML, Vite+React, API",
    gradient: "linear-gradient(135deg, #8a56ff 0%, #5e60ce 50%, #4ea8de 100%)",
    date: "Oct 2024"
  },
  {
    title: "Movie Analytics Project",
    description: "Scraped movie data from IMDb using web scraping techniques (BeautifulSoup and Selenium). Transformed and cleaned the data for analysis and visualization in Power BI. Designed an interactive Power BI dashboard to present key insights.",
    category: "Python, Power BI, BeautifulSoup, Selenium",
    gradient: "linear-gradient(135deg, #ffb74d 0%, #f77f00 50%, #ff2d88 100%)",
    date: "Sep 2024"
  },
];

function Projects() {
  return (
    <section id="portfolio" className="section-container">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Portfolio</h2>
        <a href="#portfolio" className="portfolio-link">see all work</a>
      </div>

      <div className="portfolio-list">
        {projects.map((project) => (
          <article key={project.title} className="portfolio-item">
            <div 
              className="portfolio-image-placeholder"
              style={{ background: project.gradient }}
            />
            <div className="project-label">{project.title}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;


