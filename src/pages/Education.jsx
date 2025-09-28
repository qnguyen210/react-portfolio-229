// Education page component
export default function Education() {
  // Renders education history with improved card layout
  return (
    <div className="container">
      <h2>Education</h2>

      <div className="education-grid">
        {/* Centennial College diploma */}
        <div className="edu-card">
          <img src="./images/centennialcollege_logo.jpg" alt="Centennial College Logo" className="edu-logo" />
          <h3>Advanced Diploma of Health Informatics Technology (Co-op)</h3>
          <p className="edu-date">Sep 2024 – Present</p>
          <p className="edu-school">Centennial College, Toronto, ON — GPA: 4.3/4.5</p>
          <details>
            <summary><strong>Courses</strong></summary>
            <ul>
              <li>Tools, Algorithms and Methods for HCIS</li>
              <li>Software System Design</li>
              <li>C# Programming</li>
              <li>Web Application Development</li>
              <li>Database Concepts (SQL)</li>
              <li>Software Requirements Engineering</li>
              <li>Client-Side Web Development</li>
              <li>Web Interface Design</li>
            </ul>
          </details>
          <details>
            <summary><strong>Co-Curricular Activities</strong></summary>
            <ul>
              <li>
                Officer, Centennial Engineering Club – Supported planning and execution of
                student-led technical workshops and events; collaborated with peers to
                promote engineering engagement across campus.
              </li>
            </ul>
          </details>
        </div>

        {/* RMIT University degree */}
        <div className="edu-card">
          <img src="./images/rmitlogo.jpg" alt="RMIT University Logo" className="edu-logo" />
          <h3>Bachelor of Science in Business Management (Human Resources)</h3>
          <p className="edu-date">Aug 2017 – Oct 2022</p>
          <p className="edu-school">RMIT University, Hanoi, Vietnam</p>
          <details>
            <summary><strong>Relevant Courses</strong></summary>
            <ul>
              <li>Python Programming</li>
              <li>Strategic Management</li>
              <li>Leadership and Decision Making</li>
              <li>International Human Resources Management</li>
              <li>Innovation Management</li>
              <li>Organisational Analysis</li>
            </ul>
          </details>
          <details>
            <summary><strong>Co-Curricular Activities</strong></summary>
            <ul>
              <li>
                Ambassador, RMIT Vietnam Wellbeing Department – Promoted wellbeing
                initiatives and organized student events.
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}

