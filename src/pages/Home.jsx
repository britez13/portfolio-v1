import { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Home.scss";

const Home = () => {
        
  useEffect(() => {
    gsap.to(".title", {opacity: 1, duration: 3, delay: 2, stagger: 1})
  });

  return (
    <main>
      <h1 className='title'>Hi,</h1>
      <h1 className='title'>
        I'm <span>Florencio</span>,
      </h1>
      <h1 className='title'>Frontend Developer</h1>
    </main>
  );
};

export default Home;
