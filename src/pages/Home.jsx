import { Link } from "react-router-dom"
import logo from '../assets/logo.png';

export default function Home() {
    return (
        <section className="container home-hero">
            <img src={logo} alt="Logo" className="logo-img" />
            <h1 className="title">My portfolio</h1>
            <p className="description">
                This is a collection of my work and projects.
            </p>
        </section>
    )
}