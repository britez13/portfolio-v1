import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projectsInfo } from "../data/projectsInfo";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import "../styles/Projects.scss";

const Projects = () => {

  const projectsRef = useRef();
  const tl = useRef();

  
  useEffect( () => {

    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".projects", { opacity: 1, duration: 2, delay: 2.5});

    let ctx = gsap.context(() => {
    
    // Our animations can use selector text like ".box" 
    // this will only select '.box' elements that are children of the component

     tl.current = gsap
       .timeline()
       .to(".project-card01", {
         x: 0,
         opacity: 1,
         duration: 1,
         delay: 2,
        //  scrollTrigger: {
        //    trigger: ".project-card01",
        //  },
       })
       .to(".project-card02", {
         x: 0,
         opacity: 1,
         duration: 1,
         scrollTrigger: {
           trigger: ".project-card02",
           start: "bottom bottom"
         },
       });  
  }, projectsRef); // <- IMPORTANT! Scopes selector text
  
  return () => ctx.revert(); // cleanup


    
  }, [])

  return (
    <main className='projects'>
      <SectionTitle>Projects</SectionTitle>
      <section className='projects-container' ref={projectsRef} >
        {projectsInfo.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </main>
  );
};

export default Projects;
