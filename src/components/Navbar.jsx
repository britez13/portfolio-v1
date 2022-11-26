import { gsap, Power4, Power2, Power1 } from "gsap";
import { Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { IoPerson } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import "../styles/Navbar.scss";

const Navbar = () => {

  const handleClick = () => {
    // gsap.to(".slider", { width: "100%", ease: Power2.easeIn, duration: 1.5 })
    // gsap.to(".slider", { width: "0%" , ease: Power2.EaseOut, duration: 1.5, delay: 1.5});

    gsap.to(".slider", { scaleX: 1, duration: 1, ease: Power1.easeIn })
    gsap.to(".slider", { transformOrigin: "lleft center",scaleX: 0, duration: 1, delay: 1.001, ease: Power1.easeOut})
  };

  return (
    <nav>
      <ul>
        <li onClick={handleClick}>
          <Link to='/'>
            <VscHome fill='white' size='1.5em' />
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link to='about'>
            <IoPerson fill='#66fcf1' size={"1.5em"} />
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link to='projects'>
            <BsBriefcase size={"1.5em"} fill='white' />
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link to='contact'>
            <BiEnvelope size={"1.5em"} fill='white' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
