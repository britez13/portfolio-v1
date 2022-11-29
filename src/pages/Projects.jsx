import { projectsInfo } from "../data/projectsInfo"
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.scss"

const Projects = () => {
  return (
    <main className="projects">
      <h1>Projects</h1>
      <section className="projects-container">
        {projectsInfo.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </main>
  );
}

export default Projects



