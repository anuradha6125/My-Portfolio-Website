function Contact() {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2>Contact</h2>
        <p>Let&apos;s build something together</p>
      </div>

      <div className="contact-content">
        <p>
          I&apos;m open to opportunities, collaborations, or just a quick chat
          about frontend development. Feel free to reach out:
        </p>

        <ul className="contact-list">
          <li>
            <span>Email:</span>
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </li>
          <li>
            <span>GitHub:</span>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
            >
              github.com/your-username
            </a>
          </li>
          <li>
            <span>LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/your-username
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;


