const projects = [
  {
    title: "Responsive Portfolio Website",
    description:
      "A personal portfolio built with React and CSS, featuring smooth scrolling, responsive layout, and a clean design for showcasing work.",
    techStack: ["React", "Vite", "CSS"],
    github: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio-demo.com",
  },
  {
    title: "Task Manager App",
    description:
      "A simple task manager for organizing daily todos with filtering, completion tracking, and local storage persistence.",
    techStack: ["React", "CSS", "Local Storage"],
    github: "https://github.com/your-username/task-manager",
    demo: "https://your-task-manager-demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that fetches real-time data from a public API and displays current conditions with a minimal UI.",
    techStack: ["React", "Fetch API", "CSS"],
    github: "https://github.com/your-username/weather-dashboard",
    demo: "https://your-weather-dashboard-demo.com",
  },
];

function Projects() {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected work that showcases my expertise</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <ul className="project-tech">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;


