import React from 'react';

const services = [
  {
    title: "Programming Languages",
    description: "C, C++, Python, Machine Learning, Scikit, Flask, CSS/JS"
  },
  {
    title: "Database & Tools",
    description: "MySQL, Microsoft Power BI, Excel"
  },
  {
    title: "Graphic Design",
    description: "Photoshop, Figma, Krita"
  },
  {
    title: "Web Development",
    description: "Flask, React, HTML/CSS, JavaScript, API Integration"
  },
];

function Services() {
  return (
    <section id="services" className="section-container services-section">
      <div className="services-bg-number">7</div>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.title} className="service-item">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <a href="#services" className="services-link">View all services</a>
    </section>
  );
}

export default Services;


