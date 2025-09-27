// Projects page component
export default function Projects() {
  // Renders a list of project summaries with images and descriptions
  return (
    <div>
      <h2>Projects</h2>

      {/* Project 1: Banking System */}
      <h3>Account Management System (Banking)</h3>
      <img src="/images/banking.png" alt="Banking System Project" />
      <p>
        I built a C# banking system with checking/savings/visa accounts, user
        authentication, transaction logging, and monthly statement generation.
      </p>

      {/* Project 2: MedInterpreter */}
      <h3>MedInterpreter</h3>
      <img src="/images/medinterpreter.jpg" alt="MedInterpreter App" />
      <p>
        A healthcare translation app designed with EMR integration. I worked on
        requirements, UML diagrams, and overall system architecture.
      </p>

      {/* Project 3: HTML Game */}
      <h3>HTML Game</h3>
      <img src="/images/webgame.jpg" alt="HTML Game Project" />
      <p>
        A small browser game built with HTML, CSS, and JavaScript. I implemented
        DOM updates, animations, and simple game state management.
      </p>
    </div>
  );
}
