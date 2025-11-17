import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
    const projects = [
    {
        title: "This Website",
        description: "[Present] My personal website using ReactJS, originally had karinathec.org with AWS instead of netlify/github.",
        skills: ["ReactJS", "CSS", "HTML", "CI/CD", "AWS"],
        link: "https://github.com/KarinaTheCorgi/MyWebsite",
    },
    {
        title: "NotABot",
        description: "[Spring 2025] A fake discord chatbot",
        skills: ["Python - Backend", "SQL", "Multithreading", "Testing"],
        link: "https://github.com/KarinaTheCorgi/NotABot"
    },
    {
        title: "P1 Alerts",
        description: "[Spring 2025] Program for Polling IT ticketing db for certain priority ticket, then trigger Arduino accordingly.",
        skills: ["NodeJS", "Arduino - Embedded Target", "Event Polling", "API Calling", "Serial Communication", "Coding with a team"],
        link: "https://github.com/Friends-without-benefits/P1-Alerts"
    },
    {
      title: "US City Population Data Web App",
      description: "[Spring 2025] Simple Web App ",
      skills: ["Python - Frontend", "API Calling", "CI/CD", "Docker"],
      link: "https://github.com/KarinaTheCorgi/US-City-Population-Data",
    },
    {
        title: "Doc Decoder",
        description: "[Spring 2025] A Google Doc Decoder",
        skills: ["Python", "Data Parsing"],
        link: "https://github.com/KarinaTheCorgi/SE-320/blob/main/EC/solis_decoder.py",
    },
    {
      title: "Snake Game",
      description: "[Fall 2023] Snake Game using C++",
      skills: ["C++", ".NET Framework", "GUI", "OOP"],
      link: "https://github.com/karinathecorgi/SnakeGame",
    },
  ];

    return (
        <>
            <title>Projects</title>
                <section className="projects-page">
                    <div className="section-content">
                        <div>
                            <h1 className="title">Projects</h1>
                            <a href="../public/KarinaSolis_Resume.pdf" download="KarinaSResume">
                                <button class="download-button">
                                    <i class="fa fa-download"></i> Resume
                                </button>
                            </a>
                        </div>
                        <div className="projects-list">
                            {projects.map((project, idx) => (
                                <div className="project-card" key={idx}>
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <p><strong>Skills:</strong> {project.skills.join(", ")}</p>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            View Project
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
        </>
    )
}