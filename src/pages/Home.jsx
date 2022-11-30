import { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Home.scss";

const Home = () => {

  const HomeTitle = ({children}) => {
    const word = Array.from(children);

    const letters = word.map((letter, index) => <span key={index} className="letter">{letter === " " ? "\u00A0" : letter}</span>);

    return letters

  };

  
  const Name = ({ children }) => {
     const word = Array.from(children);

     const letters = word.map((letter, index) => (
       <span key={index} className='name'>
         {letter === " " ? "\u00A0" : letter}
       </span>
     ));

     return letters;
  };


  
  
  useEffect(() => {
    gsap.to(".letter", {x: 0, y: 0, duration: .6, delay: 2, stagger: 0.3})
    gsap.to(".name", { x: 0, y: 0, duration: .6, delay: 3, stagger: 0.3 });
    gsap.to(".home-image", { opacity: 1, duration: 10, delay: 3});
  });

  return (
    <main className='home'>
      <section>
        <h1 className='title'>
          <HomeTitle>Hi</HomeTitle>
        </h1>
        <h1 className='title'>
          <HomeTitle>I'm</HomeTitle>
          <span>
            {" "}
            <Name> Florencio</Name>
          </span>
        </h1>
        <h1 className='title'>
          <HomeTitle>Frontend dev.</HomeTitle>
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
