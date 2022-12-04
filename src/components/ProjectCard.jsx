import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "../styles/ProjectCard.scss";

const ProjectCard = ({ project }) => {

  
  useEffect(() => {

    const mm = gsap.matchMedia();
    gsap.registerPlugin(ScrollTrigger)


    mm.add("(max-width: 700px)", () => {
      gsap.to(".project-card", {
        opacity: 1,
        x: 0,
        duration: 2,
        stagger: 1.2,
        delay: 2.8,
        // scrollTrigger: {
        //   trigger: ".project-card",
        //   start: "bottom bottom",
        // },
      });
    });

    mm.add("(min-width: 701px)", () => {
      gsap.to(".project-card", { opacity: 1, y: 0, duration: 1.5, stagger: 1.2, delay: 2.8})
    });
    
    
  }, []);


  return (
    <div className='project-card'>
      <picture>
        <source srcSet={project.img.avif} type='image/avif' />
        <source srcSet={project.img.webp} type='image/webp' />
        <img
          src={project.img.jpg}
          alt='project image'
        />
      </picture>
      <div className='info'>
        <h2 className="name">
          <span>{project.id} </span>
          {project.name}
        </h2>
        <p>{project.description}</p>
        <p className='stack'>
          Stack: <span>{project.stack}</span>{" "}
        </p>
        <a href={project.liveURL} target='_blank'>
          See Demo
        </a>
        <a href={project.codeURL} target='_blank'>
          See Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
