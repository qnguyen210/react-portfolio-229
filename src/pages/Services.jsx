// Services page component
export default function Services() {
  // Renders services in organized cards with improved layout
  return (
    <div className="container">
      <h2>Services</h2>
      <p className="services-intro">
        I combine my background in Health Informatics Technology, software
        engineering, and business management to deliver practical solutions in
        programming, web development, and data analysis.
      </p>

      <div className="services-grid">
        {/* Web Development service */}
        <div className="service-card">
          <img src="/images/webdev.webp" alt="Web Development" className="service-img" />
          <h3>Web Development</h3>
          <p>
            Building responsive websites and single-page applications with HTML,
            CSS, JavaScript, React, Node.js, and SQL/MongoDB.
          </p>
        </div>

        {/* Data Analysis service */}
        <div className="service-card">
          <img src="/images/data_engineer.jpg" alt="Data Analysis" className="service-img" />
          <h3>Data Analysis</h3>
          <p>
            Analyzing and visualizing data using Python (NumPy, Pandas,
            Matplotlib, Seaborn), Excel, and Tableau to generate actionable insights.
          </p>
        </div>

        {/* Programming service */}
        <div className="service-card">
          <img src="/images/programming.jpg" alt="Programming" className="service-img" />
          <h3>Programming</h3>
          <p>
            Developing software solutions in Python, C#, and SQL, applying
            object-oriented programming and system design principles.
          </p>
        </div>
      </div>
    </div>
  );
}

