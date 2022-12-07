import { useEffect, useRef } from "react";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsInfo } from "../data/projectsInfo";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import "../styles/Projects.scss";
import { useLayoutEffect } from "react";

// gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // const ref1 = useRef();

  // const projectPageRef = useRef()
  const revealRefs = useRef([]);
  revealRefs.current = [];

  // const tl = useRef();

  useLayoutEffect(() => {}, []);

  useEffect(() => {
    // console.log(revealRefs.current);

    // console.log("project useEffect");

    gsap.to(".projects", { opacity: 1, duration: 1, delay: 2.5 });

    // gsap.to("#hi", {
    //   x: 0,
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: "#hi",
    //     start: "top center+=300px",
    //     toggleActions: "play none none reverse",
    //     // markers: true,
    //   }
    // });

    const observer = new IntersectionObserver((entries) => {

      entries.forEach( (entry) => {

        // console.log("I work entry");

        console.log(entry);

        if(entry.isIntersecting) {
          console.log(entry.target);
          entry.target.classList.add("show");

        }
      })

    }, {threshold: 0.2});

    revealRefs.current.forEach( (el) => {
      observer.observe(el.current)
    })

    // console.log(revealRefs.current);

    // gsap.to(".project01", {
    //   opacity: 1,
    //   x: 0,
    //   duration: 2,
    //   delay: 2.5,
    //   // scrollTrigger: { trigger: ".project01" },
    // })

    // gsap.to(".project02", {
    //   duration: 7,
    //   x: 0,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".project02",
    //     start: "top center",
    //     toggleActions: "play none none reverse",
    //   },
    // });

    // gsap.to(".project03", {
    //   opacity: 1,
    //   x: 0,
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: ".project03",
    //     start: "top center",
    //     markers: true,
    //   },
    //   // scrollTrigger: { trigger: ".project03", start: "top center" },
    // });

    //   gsap.registerPlugin(ScrollTrigger)

    //   gsap.to(".projects", { opacity: 1, duration: 2, delay: 2.5});

    //   let ctx = gsap.context(() => {

    //   // Our animations can use selector text like ".box"
    //   // this will only select '.box' elements that are children of the component

    //    tl.current = gsap
    //      .timeline()
    //      .to(".project-card01", {
    //        x: 0,
    //        opacity: 1,
    //        duration: 1,
    //        delay: 2,
    //       //  scrollTrigger: {
    //       //    trigger: ".project-card01",
    //       //  },
    //      })
    //      .to(".project-card02", {
    //        x: 0,
    //        opacity: 1,
    //        duration: 1,
    //        scrollTrigger: {
    //          trigger: ".project-card02",
    //          start: "bottom bottom"
    //        },
    //      });
    // }, projectsRef); // <- IMPORTANT! Scopes selector text

    // return () => ctx.revert(); // cleanup
  }, []);

  return (
    <main className='projects'>
      <SectionTitle>Projects</SectionTitle>
      <section className='projects-container'>
        {projectsInfo.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            elementsArray={revealRefs.current}
          />
        ))}

        {/* <div className='square'></div>
        <div id='hi'></div>
        <div className='square'></div> */}
      </section>
    </main>
  );
};

export default Projects;
