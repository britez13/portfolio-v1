import { useEffect } from "react";
import gsap from "gsap";
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

const About = () => {
  useEffect(() => {
    gsap.to(".about", { opacity: 1, duration: 2, delay: 2.7 });
  }, []);

  return (
    <main className='about'>
      <SectionTitle>About Me</SectionTitle>
      <section className='container'>
        <div className='description'>
          <img className='my-photo' src='/assets/p.png' alt='My nice photo' />

          <div>
            <p>
              I'm a self-taught Frontend Developer based in Paraguay. Love
              creating nice and solid user interfaces.
            </p>
            <p>
              Althought I mostly code in React.js, I'm open to learn new
              technologies. Actually, my next goal is learning backend.
            </p>
            <p>
              Besides programming, I like solving chess puzzles, playing
              football and reading psyco-thriller books.{" "}
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
