import React, { useState } from 'react';

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity and scope of your project. Typically, a standard website takes 4-6 weeks, while more complex projects can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer custom-made templates?",
    answer: "Yes, all our designs are custom-made to fit your unique brand and requirements. We don't use pre-made templates - every website is crafted specifically for you."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops. Your site will look and function perfectly on any screen size."
  },
  {
    question: "Can I update the website myself after it's launched?",
    answer: "Yes! We build websites using Framer, which includes a user-friendly CMS that allows you to easily update content, images, and more without any coding knowledge. We also provide training to ensure you're comfortable managing your site."
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-container">
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <button 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
