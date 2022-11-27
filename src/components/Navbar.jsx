import { gsap, Power4, Power2, Power1 } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { IoPerson } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import "../styles/Navbar.scss";
import { useRef, useState, useEffect } from "react";

const Navbar = () => {

  const {pathname}  = useLocation()

  const [renderPage, setRenderPage] = useState(null);

  

  // const ref1 = useRef(null)

  // console.log(pathname);

  
  
  

  const handleClick = (e) => {
    // gsap.to(".slider", { width: "100%", ease: Power2.easeIn, duration: 1.5 })
    // gsap.to(".slider", { width: "0%" , ease: Power2.EaseOut, duration: 1.5, delay: 1.5});

  
    // console.log(e.target.nodeName);

    let nextPage = "";
    
    if(e.target.nodeName === "svg") {
      nextPage = e.target.getAttribute("data-location");
    }

    
    
    
    else if(e.target.nodeName === "path") {
      nextPage = e.target.parentElement.getAttribute("data-location");
    }
    
    //Prevent users to create overlay animation when they click in the current page associated icon
    if(nextPage === pathname) return

    //  useEffect(() => {});


    // setRenderPage(!renderPage)


    gsap.to(".slider", {
      transformOrigin: "left center",
      scaleX: 1,
      duration: 1.5,
      ease: Power2.easeIn,
    });
    gsap.to(".slider", {
      transformOrigin: "right center",
      scaleX: 0,
      duration: 1.5,
      delay: 1.5,
      ease: Power2.easeOut,
    });
  };



 
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <VscHome fill='white' size={"1.5em"} onClick={handleClick} data-location="/" />
          </Link>
          {/* <VscHome >
            <Link to='/' onClick={handleClick}></Link>
          </VscHome> */}
        </li>
        <li onClick={handleClick}>
          <Link to='/about'>
            <IoPerson fill='#66fcf1' size={"1.5em"} data-location='/about' />
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link to='/projects'>
            <BsBriefcase
              size={"1.5em"}
              fill='white'
              data-location='/projects'
            />
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link to='/contact'>
            <BiEnvelope size={"1.5em"} fill='white' data-location='/contact' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
