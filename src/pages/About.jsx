import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiFirebase,
  SiSass,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiVuedotjs,
  SiStyledcomponents,
  SiPhp,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";

import "../styles/About.scss";

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  const timelineAboutRefMobile = useRef();
  const timelineAboutRefDesktop = useRef();
  
  useEffect(() =>  {

    const mm = gsap.matchMedia()

      mm.add("(max-width: 699px)", () => {
        // mobile setup code here...
        timelineAboutRefMobile.current = gsap
          .timeline()
          .to(".my-photo", { opacity: 1, duration: 2, delay: 2.9 })
          .to(".p1", { opacity: 1, y: 0, duration: 1 }, "-=1.2")
          .to(".p2", { opacity: 1, y: 0, duration: 1 }, "-=.6")
          .to(".p3", { opacity: 1, y: 0, duration: 1 }, "-=.3")
          .to(".skills-title", { opacity: 1, duration: 1 }, "-=.3")
          .fromTo(
            ".list li",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.185 },
            "-=.3"
          );

      });

      mm.add("(min-width: 700px)", () => {
        // desktop setup code here...
         timelineAboutRefDesktop.current = gsap
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
      });
  }, [] )


  
 



  return (
    <main className='about'>
      <SectionTitle>About Me</SectionTitle>
      <section className='container'>
        <div className='description'>
          <img
            className='my-photo'
            src='/assets/photo.png'
            alt='My nice photo'
          />
          <div>
            <p className='p1'>
              I'm Florecio, a self-taught Frontend Developer based in Paraguay.
              I love creating nice and responsive user interfaces.
            </p>
            <p className='p2'>
              Although I mostly code in React.js and its ecosystem, I'm open to learning new
              technologies. That's why I'm currently doing projects with Vue.js, Laravel and 
              MySQL.
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
              <SiVuedotjs size='3rem' />
              <h3>Vue</h3>
            </li>
            <li>
              <SiPhp size='3rem' />
              <h3>PHP</h3>
            </li>
            <li>
              <SiStyledcomponents size='3rem' />
              <h3>styled-components</h3>
            </li>
            <li>
              <SiMysql size='3rem' />
              <h3>MySQL</h3>
            </li>
            <li>
              <SiNodedotjs size='3rem' />
              <h3>Node</h3>
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
