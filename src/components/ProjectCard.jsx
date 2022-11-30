import { useEffect } from "react";
import gsap from "gsap";
import "../styles/ProjectCard.scss";

const ProjectCard = ({ project }) => {
  useEffect(() => {
    
    gsap.to(".project-card", {scale: 1, opacity: 1, duration: 2, stagger: 1.2, delay: 4.5})
    
  }, []);

  
  



  return (
    <div className='project-card'>
      <picture>
        <source srcSet={project.img.avif} type='image/avif' />
        <source srcSet={project.img.webp} type='image/webp' />
        <img
          decoding='async'
          loading='lazy'
          src={project.img.jpg}
          alt='an avif image'
        />
      </picture>
      <div className='info'>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <p>
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
