// Projects page component
export default function Projects() {
  // Renders each project in a grid layout with hover effects
  return (
    <div className="container">
      <h2>Projects</h2>

      <div className="projects-grid">
        {/* Project 1: Banking System */}
        <div className="project-card">
          <h3 className="project-title">Account Management System (Banking)</h3>
          <div className="project-img-wrapper">
            <img src="/images/banking.png" alt="Banking System Project" className="project-img" />
            <div className="project-desc">
              I built a C# banking system with checking/savings/visa accounts, user authentication, transaction logging, and monthly statement generation.
            </div>
          </div>
        </div>

        {/* Project 2: MedInterpreter */}
        <div className="project-card">
          <h3 className="project-title">MedInterpreter</h3>
          <div className="project-img-wrapper">
            <img src="/images/medinterpreter.jpg" alt="MedInterpreter App" className="project-img" />
            <div className="project-desc">
              A healthcare translation app designed with EMR integration. I worked on requirements, UML diagrams, and overall system architecture.
            </div>
          </div>
        </div>

        {/* Project 3: HTML Game */}
        <div className="project-card">
          <h3 className="project-title">HTML Game</h3>
          <div className="project-img-wrapper">
            <img src="/images/webgame.jpg" alt="HTML Game Project" className="project-img" />
            <div className="project-desc">
              A small browser game built with HTML, CSS, and JavaScript. I implemented DOM updates, animations, and simple game state management.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
