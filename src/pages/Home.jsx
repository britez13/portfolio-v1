import { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Home.scss";

const Home = () => {
  useEffect(() => {
    gsap.to(".title > span", { y: 0, duration: 1.5, delay: 2.1, stagger: 1 });
    gsap.to(".title .name", { y: 0, duration: 1.5, delay: 2.2 });
    gsap.to(".home-image", { opacity: 1, duration: 8, delay: 5.1 });
  });

  return (
    <main className='home'>
      <section>
        <h1 className='title'>
          <span>Hi!</span>
        </h1>
        <h1 className='title'>
          <span>
            I'm <span className='name'>Florencio</span>,
          </span>
        </h1>
        <h1 className='title'>
          <span>Frontend Dev</span>
        </h1>
      </section>
      <section>
        <img
          className='home-image'
          src='/assets/home-image.png'
          alt='Person coding'
        />
      </section>
    </main>
  );
};

export default Home;
