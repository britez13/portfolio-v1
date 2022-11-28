import { projectsInfo } from "../data/projectsInfo"
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <main>
      <h1>Projects</h1>
      <section>
        {projectsInfo.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </main>
  );
}

export default Projects



