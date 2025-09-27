// Services page component
export default function Services() {
  // Renders a list of services offered with descriptions and images
  return (
    <div>
      <h2>Services</h2>
      <p>
        I combine my background in Health Informatics Technology, software
        engineering, and business management to deliver practical solutions in
        programming, web development, and data analysis.
      </p>

      {/* Web Development service */}
      <h3>Web Development</h3>
      <img src="/images/webdev.webp" alt="Web Development" width="200" />
      <p>
        Building responsive websites and single-page applications with HTML,
        CSS, JavaScript, React, Node.js, and SQL/MongoDB.
      </p>

      {/* Data Analysis service */}
      <h3>Data Analysis</h3>
      <img src="/images/data_engineer.jpg" alt="Data Analysis" width="200" />
      <p>
        Analyzing and visualizing data using Python (NumPy, Pandas,
        Matplotlib, Seaborn), Excel, and Tableau to generate actionable insights.
      </p>

      {/* Programming service */}
      <h3>Programming</h3>
      <img src="/images/programming.jpg" alt="Programming" width="200" />
      <p>
        Developing software solutions in Python, C#, and SQL, applying
        object-oriented programming and system design principles.
      </p>
    </div>
  );
}

