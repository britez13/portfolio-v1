import { useEffect } from "react";
import gsap from "gsap";
import SectionTitle from "../components/SectionTitle";
import TextSphere from "../components/TextSphere";
import "../styles/About.scss";

const About = () => {

  useEffect(() => {
    gsap.to(".about", { opacity: 1, duration: 2, delay: 2.7 });  
  }, []);

  return (
    <main className='about'>
      <SectionTitle>About Me</SectionTitle>
      <section>
        <div className='description'>
          <img src='' alt='My nice photo' />
          <p>
            I'm a self-taught Frontend Developer based in Paraguay. Love
            creating nice and solid user interfaces.
          </p>
          <p>
            Althought I mostly code in React.js, I'm open to learn new
            technologies. Actually, my next goal is learning backend.
          </p>
          <p>
            Besides programming, I like solving chess puzzles, playing football and
            reading psyco-thriller books.{" "}
          </p>
        </div>

        <div>
          <h2>Skills</h2>
          <TextSphere />
        </div>
      </section>
    </main>
  );
};

export default About;
