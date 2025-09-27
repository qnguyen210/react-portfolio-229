
// Home page component
import { Link } from "react-router-dom"
import logo from '../assets/logo.png';

export default function Home() {
    // Renders the home/landing page with intro and navigation buttons
    return (
        <section className="container home-hero">
            {/* Logo and title */}
            <img src={logo} alt="Logo" className="logo-img" />
            <h1 className="title">Welcome to My Portfolio</h1>
            {/* Tagline and mission statement */}
            <p className="tagline">
               Hi, I'm Quinn. Thanks for visiting my portfolio website. Explore my projects, services, and experience.
            </p>
            <p className="mission">
                Mission: build useful, human-centered software and keep learning by doing real projects.
            </p>
            {/* Call-to-action buttons */}
            <div className="cta-buttons">
                <Link to="/about" className="btn primary">About Me</Link>
                <Link to="/projects" className="btn secondary">View Projects</Link>
            </div>
        </section>
    )
}