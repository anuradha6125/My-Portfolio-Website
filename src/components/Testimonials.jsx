import React from 'react';
import CardSwap, { Card } from './CardSwap';

const testimonials = [
  {
    rating: "5 stars",
    quote: "Exceptional work on our web application. The attention to detail and technical expertise resulted in a system that exceeded all our expectations.",
    author: "Project Manager",
    role: "Roop Polymers Ltd"
  },
  {
    rating: "5 stars",
    quote: "Outstanding problem-solving skills and a deep understanding of data analytics. The Power BI dashboards delivered actionable insights that drove real business decisions.",
    author: "Team Lead",
    role: "RS Solar Infrastructure"
  },
  {
    rating: "5 stars",
    quote: "A dedicated developer with excellent communication skills. The AI-powered solution was delivered on time and works flawlessly.",
    author: "Faculty Advisor",
    role: "MRIIRS"
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section-container">
      <h2 className="section-title">Feedback</h2>
      <div className="testimonials-container">
        <div style={{ height: '600px', position: 'relative' }}>
          <CardSwap
            width={500}
            height={400}
            cardDistance={45}
            verticalDistance={65}
            delay={4500}
            skewAmount={2}
            pauseOnHover={true}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                role="article"
                aria-label={`Testimonial from ${testimonial.author}`}
              >
                <div className="testimonial-rating">
                  <span aria-hidden="true">⭐</span>
                  <span>{testimonial.rating}</span>
                </div>
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <span className="testimonial-author">{testimonial.author}</span>
                  <span className="testimonial-role">, {testimonial.role}</span>
                </footer>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
