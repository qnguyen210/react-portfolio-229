import headshot from '../assets/headshot.jpeg';

export default function About() {
    return (
        <section className="container">
            <h1>About me</h1>
            <img src={headshot} alt="Headshot" className="headshot" />

            <h2>Quinn Nguyen</h2>

            <p>
                Hello! I'm a web developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React.
            </p>

            <a href='/resume.pdf' download className="btn primary">Download Resume (PDF)</a>
        </section>
    );
}       
    