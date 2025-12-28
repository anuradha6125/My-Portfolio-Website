const expertiseCategories = [
  {
    icon: "💻",
    title: "Software Development",
    highlightWord: "Software",
    highlightColor: "#ec4899",
    subtitle: "Dart, Python, Java, JavaScript, TypeScript",
    description: "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
    code: {
      before: "console.log(",
      after: ");"
    }
  },
  {
    icon: "⚛️",
    title: "Frontend Dev",
    highlightWord: "Frontend Dev",
    highlightColor: "#2a9fd5",
    subtitle: "React, NextJS",
    description: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    code: {
      before: "return (<",
      after: "></>);"
    }
  },
  {
    icon: "📱",
    title: "Flutter Dev",
    highlightWord: "Flutter Dev",
    highlightColor: "#f97316",
    subtitle: "Android, iOS",
    description: "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
    code: {
      before: "print(",
      after: ");"
    }
  },
];

function Skills() {
  return (
    <div className="section-container">
      <div className="section-header">
        <h2>My Expertise</h2>
      </div>

      <div className="expertise-wrapper">
        <div className="expertise-container">
          {expertiseCategories.map((category, index) => (
            <div key={category.title} className="expertise-card-wrapper">
              <article className="expertise-card">
                <div className="expertise-icon">{category.icon}</div>
                <div className="expertise-title-wrapper">
                  <h3 className="expertise-title">
                    <span className="expertise-highlight" style={{ borderBottomColor: category.highlightColor }}>
                      {category.highlightWord}
                    </span>
                    {category.title !== category.highlightWord && (
                      <span> {category.title.replace(category.highlightWord, '').trim()}</span>
                    )}
                  </h3>
                  {category.subtitle && <p className="expertise-subtitle">{category.subtitle}</p>}
                </div>
                <div className="expertise-code-line">
                  <span className="expertise-code-before">{category.code.before}</span>
                  <span className="expertise-code-description">{category.description}</span>
                  <span className="expertise-code-after">{category.code.after}</span>
                </div>
            </article>
              {index < expertiseCategories.length - 1 && <div className="expertise-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;


