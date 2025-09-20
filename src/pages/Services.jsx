export default function Services() {
  const services = [
    { group: "Front-End", items: ["React", "React Router", "Vite", "HTML", "CSS", "Responsive UI"] },
    { group: "Back-End", items: ["Node.js", "Express", "REST APIs", "JSON", "Auth (basic)"] },
    { group: "Data & Tools", items: ["SQL (CRUD)", "Git/GitHub", "npm", "Postman"] },
  ];
  
  return (
    <section className="container">
      <h1>Services</h1>
      <p>Here are the main areas I’m comfortable with right now:</p>

      <div className="service-groups">
        {services.map((s) => (
          <div key={s.group} className="service-card">
            <h3>{s.group}</h3>
            <div className="tags">
              {s.items.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
