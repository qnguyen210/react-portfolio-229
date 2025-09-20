import { Link } from "react-router-dom"
import logo from '../assets/logo.png';

export default function Home() {
    return (
        <section className="container home-hero">
            <img src={logo} alt="Logo" className="logo-img" />
            <h1 className="title">Welcome to My Portfolio</h1>
            <p className="tagline">
               Hi, I'm Quinn. Thanks for visiting my portfolio website. Explore my projects, services, and experience.
            </p>

            <p className="mission">
                Mission: build useful, human-centered software and keep learning by doing real projects.
            </p>

            <div className="cta-buttons">
                <Link to="/about" className="btn primary">About Me</Link>
                <Link to="/projects" className="btn secondary">View Projects</Link>
            </div>
        </section>
    )
}