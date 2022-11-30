import { useEffect, useRef } from "react";
import gsap from "gsap";
import { projectsInfo } from "../data/projectsInfo";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import "../styles/Projects.scss";

const Projects = () => {
  const ref = useRef(null);

  
  useEffect( () => {

    gsap.to(".projects", { opacity: 1, duration: 2, delay: 2.5 });
    
  }, [])

  return (
    <main className='projects' ref={ref} >
      <SectionTitle>Projects</SectionTitle>
      <section className='projects-container'>
        {projectsInfo.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </main>
  );
};

export default Projects;
