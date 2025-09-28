
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
                I am a Health Informatics Technology student with project experience in full-stack development, database design, and systems analysis. Skilled in C#, Python, SQL, and user-centered design. Experienced in healthcare and business, translating technical concepts into clear solutions. Strong communicator and team leader with HR and medical interpretation background.
            </p>
            
            {/* Resume download button */}
            <a href="./resume.pdf" download="Quinn_Nguyen_Resume.pdf" className="download-btn">
                📄 Download My Resume
            </a>
        </section>
    );
}
    