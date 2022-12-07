import { useEffect, useRef } from "react";
// import { useLayoutEffect } from "react";

import gsap, { Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import TextSphere from "../components/TextSphere";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGreensock } from "react-icons/si";



import "../styles/About.scss";

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  const titleRef = useRef()
  const timelineAboutRef = useRef();
  

  
  // const funCallback = (entries) => {
  //     entries.forEach((entry) => {
  //       entry.target.classList.toggle("move", entry.isIntersecting);
  //     });   
  // }

  
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.7
  // }


  // useLayoutEffect(() => {
  //   gsap.to(".about", { opacity: 1, duration: 2, delay: 2.7 });

  //   // gsap.to(".skills-title", {
  //   //   x: 0,
  //   //   color: "green",
  //   //   duration: 8,
  //   //   scrollTrigger: {
  //   //     trigger: ".skills-title",
  //   //     toggleActions: "play none none reverse",
  //   //     markers: true,
  //   //   },
  //   // });



  // }, []);

  useEffect(() =>  {

    // const el = document.querySelectorAll(".skills-title")

    // // const elements = el.map(element => console.log(element))

    // const observer = new IntersectionObserver(funCallback, options);
  
    
    // el.forEach(  (element) => {
    //   observer.observe(element)
    // })
      

    // return observer.unobserve(el)

    timelineAboutRef.current = gsap
      .timeline()
      .to(".my-photo", { opacity: 1, duration: 2, delay: 2.9 })
      .to(".p1", { opacity: 1, y: 0, duration: 1 }, "-=1.2")
      .to(".p2", { opacity: 1, y: 0, duration: 1 }, "-=.6")
      .to(".p3", { opacity: 1, y: 0, duration: 1 }, "-=.3")
      .to(".skills-title", { opacity: 1, duration: 1 }, "-=3")
      .fromTo(
        ".list li",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.185 },
        "-=2.8"
      );
      // .to(".input-email", { opacity: 1, y: 0, duration: 1 }, "<")
      // .to(".text-area", { opacity: 1, y: 0, duration: 1 }, "<")
      // .to(".button-submit", { opacity: 1, y: 0, duration: 1 }, "<")
      // .to(".map-container", { opacity: 1, duration: 5 }, "-=1");



  }, [] )


  
 



  return (
    <main className='about'>
      <SectionTitle>About Me</SectionTitle>
      <section className='container'>
        <div className='description'>
          <img className='my-photo' src='/assets/p.png' alt='My nice photo' />
          <div>
            <p className='p1'>
              I'm a self-taught Frontend Developer based in Paraguay. Love
              creating nice and responsive user interfaces.
            </p>
            <p className='p2'>
              Althought I mostly code in React.js, I'm open to learn new
              technologies. Actually, my next goal is learning backend.
            </p>
            <p className='p3'>
              Besides programming, I like solving chess puzzles, playing
              football and reading thriller books.{" "}
            </p>
          </div>
        </div>

        <div className='skills'>
          <h2 className='skills-title'>
            Skills<span>.</span>
          </h2>
          {/* <TextSphere /> */}
          <ul className='list'>
            <li>
              <SiHtml5 size='3rem' />
              <h3>HTML</h3>
            </li>
            <li>
              <SiCss3 size='3rem' />
              <h3>CSS</h3>
            </li>
            <li>
              <SiJavascript size='3rem' />
              <h3>JavaScript</h3>
            </li>

            <li>
              <SiReact size='3rem' />
              <h3>React</h3>
            </li>
            <li>
              <SiReactrouter size='3rem' />
              <h3>React Router</h3>
            </li>
            <li>
              <SiSass size='3rem' />
              <h3>Sass</h3>
            </li>
            <li>
              <SiTailwindcss size='3rem' />
              <h3>Tailwind</h3>
            </li>
            <li>
              <SiNextdotjs size='3rem' />
              <h3>Next.js</h3>
            </li>
            <li>
              <SiFirebase size='3rem' />
              <h3>Firebase</h3>
            </li>
            <li>
              <SiTypescript size='3rem' />
              <h3>TypeScript</h3>
            </li>
            <li>
              <SiGreensock size='3rem' />
              <h3>Greensock</h3>
            </li>
            <li>
              <SiGit size='3rem' />
              <h3>Git</h3>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
