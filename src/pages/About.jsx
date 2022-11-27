import { useEffect } from "react";
import gsap from "gsap";
import TextSphere from "../components/TextSphere";
import "../styles/About.scss";

const About = () => {

  useEffect(() => {
    gsap.to(".about", { opacity: 1, duration: 2, delay: 2.5 });  
  }, []);

  return (
    <main className='about'>
      <h1 className='title'>About Me</h1>
      <section>
        <div className='description'>
          <img src='' alt='My nice photo' />
          <p>
            I'm a self-taught Frontend Developer based in Paraguay. I love
            creating nice and solid user interfaces
          </p>
          <p>
            Althought I mostly code in React.js, I'm open to learn new
            technologies. Actually, my next goal is learning backend
          </p>
          <p>
            Besides programming, I like solve chess puzzlees, play football and
            read psyco-thriller books.{" "}
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
