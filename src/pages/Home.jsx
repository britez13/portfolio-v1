import { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Home.scss";

const Home = () => {

  

  
  

  const FirstTitle = ({ children }) => {
    const word = Array.from(children);

    const letters = word.map((letter, index) => (
      <span key={index} className='letter-group1'>
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));

    return letters;
  };

  const SecondTitle = ({ children }) => {
    const word = Array.from(children);

    const letters = word.map((letter, index) => (
      <span key={index} className='letter-group2'>
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));

    return letters;
  };

  const ThirdTitle = ({ children }) => {
    const word = Array.from(children);

    const letters = word.map((letter, index) => (
      <span key={index} className='letter-group3-name'>
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));

    return letters;
  };

  const FourthTitle = ({ children }) => {
    const word = Array.from(children);

    const letters = word.map((letter, index) => (
      <span key={index} className='letter-group4'>
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));

    return letters;
  };

  // const Name = ({ children }) => {
  //   const word = Array.from(children);

  //   const letters = word.map((letter, index) => (
  //     <span key={index} className='name'>
  //       {letter === " " ? "\u00A0" : letter}
  //     </span>
  //   ));

  //   return letters;
  // };

  useEffect(() => {
    gsap.to(".letter-group1", { x: 0, y: 0, duration: 0.4, delay: 2, stagger: 0.2 });
    gsap.to(".letter-group2", { x: 0, y: 0, duration: 0.4, delay: 2.8, stagger: 0.2 });
    gsap.to(".letter-group3-name", { x: 0, y: 0, duration: 0.4, delay: 3.3, stagger: 0.2 });
    gsap.to(".letter-group4", { x: 0, y: 0, duration: 0.4, delay: 5.4, stagger: 0.2 });
    // gsap.to(".name", { x: 0, y: 0, duration: 0.6, delay: 3, stagger: 0.3 });
    gsap.to(".home-image", { opacity: 1, duration: 8, delay: 7.8 })
    // gsap.to(".home-image", { opacity: 1, duration: 10, delay: 3 });

    // const tl = gsap.timeline({
    //   defaults: { duration: 0.8, y: 0, x: 0 }
    // })

    // const tl = gsap.timeline()
    // .to(".letter-group1")
    // tl.to(".letter-group2")
    


  });

  return (
    <main className='home'>
      <section>
        <h1 className='title'>
          <FirstTitle>Hi!</FirstTitle>
        </h1>
        <h1 className='title'>
          <SecondTitle>I'm</SecondTitle>
          <ThirdTitle> Florencio</ThirdTitle>
        </h1>
        <h1 className='title'>
          <FourthTitle>Frontend dev</FourthTitle>
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
