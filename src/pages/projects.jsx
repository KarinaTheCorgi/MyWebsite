import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
    const projects = [
    {
      title: "Snake Game",
      description: "Snake Game using C++",
      tech: ["C++", ".NET Framewokr", "GUI Development"],
      link: "https://github.com/karinathecorgi/SnakeGame",
    },
    {
      title: "US City Population Data Web App",
      description: "Simple Web App ",
      tech: ["Python", "API Calling", "CI/CD", "Docker"],
      link: "https://github.com/KarinaTheCorgi/US-City-Population-Data",
    },
    {
        title: "Doc Decoder",
        description: "A Google Doc Decoder",
        tech: ["Data Parsing", "Python", ""],
        link: "https://github.com/KarinaTheCorgi/SE-320/blob/main/EC/solis_decoder.py",
    }
  ];

    return (
        <>
            <title>Projects</title>
                <section className="projects-page">
                    <div className="section-content">
                        <h1 className="title">Projects</h1>
                        <div className="projects-list">
                            {projects.map((project, idx) => (
                                <div className="project-card" key={idx}>
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
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