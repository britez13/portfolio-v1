import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
// import AOS from "aos";
// import "aos/dist/aos.css";

import "../styles/ProjectCard.scss";

const ProjectCard = ({ project, elementsArray }) => {

  const projectRef = useRef()

  // const addToRefs = (el) => {
  //   if (el && !elementsArray.includes(el)) {
  //     elementsArray.push(el);
  //   }

  //   // console.log(el);

  //   gsap.to(el, {
  //     opacity: 1,
  //     x: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: el,
  //     },
  //   });
  // };

  useLayoutEffect(() => {
    // console.log("project card use layout effect");
    // console.log(projectRef)

    // if (projectRef && !elementsArray.includes(projectRef)) {
    //   elementsArray.push(projectRef);
    // }



    // console.log(elementsArray);

    // const mm = gsap.matchMedia();
    // gsap.registerPlugin(ScrollTrigger)

    // mm.add("(max-width: 700px)", () => {
    //   gsap.to(".project-card01", {
    //     opacity: 1,
    //     x: 0,
    //     duration: 2,
    //     delay: 2,
    //     scrollTrigger: {
    //       trigger: ".project-card01",
    //       start: "bottom bottom",
    //     },
    //   });
    //   gsap.to(".project-card02", {
    //     opacity: 1,
    //     x: 0,
    //     duration: 2,
    //     stagger: 1.2,
    //     scrollTrigger: {
    //       trigger: ".project-card02",
    //       start: "bottom bottom",
    //     },
    //   });
    //   gsap.to(".project-card03", {
    //     opacity: 1,
    //     x: 0,
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: ".project-card03",
    //       start: "bottom bottom",
    //     },
    //   });
    // });

    // mm.add("(min-width: 701px)", () => {
    //   gsap.to(".project-card", { opacity: 1, y: 0, duration: 1.5, stagger: 1.2, delay: 3.4})
    // });
  }, []);

  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  return (
    <div className='project-card' ref={projectRef}>
      <picture>
        <source srcSet={project.img.avif} type='image/avif' />
        <source srcSet={project.img.webp} type='image/webp' />
        <img src={project.img.jpg} alt='project image' />
      </picture>
      <div className='info'>
        <h2 className='name'>
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
