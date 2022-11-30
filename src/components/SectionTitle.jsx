import gsap from "gsap";
import { useEffect } from "react";
import "../styles/SectionTitle.scss"


const SectionTitle = ({children}) => {
  
    // const text = children.split("");

    useEffect(() => {
      gsap.to(".word", { y: 0, duration: 1.5, delay: 2 })
    }, [])
    


  return (
    <h1 className='section-title'>
      <span className="word">{children}<span className="point" >.</span></span>
    </h1>
  );
};

export default SectionTitle




