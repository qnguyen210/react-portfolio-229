
// About page component
import headshot from '../assets/headshot.jpeg';

export default function About() {
    // Renders the about page with headshot, bio, and resume download
    return (
        <section className="container">
            <h1>About me</h1>
            {/* Headshot image */}
            <img src={headshot} alt="Headshot" className="headshot" />
            <h2>Quinn Nguyen</h2>
            {/* Short bio */}
            <p>
                Hello! I'm a web developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React.
            </p>
            {/* Resume download button */}
            <a href='/resume.pdf' download className="btn primary">Download Resume (PDF)</a>
        </section>
    );
}
    