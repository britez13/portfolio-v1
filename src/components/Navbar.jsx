import { gsap, Power4, Power2, Power1 } from "gsap";
import { Link, useLocation, Outlet } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { TfiHome } from "react-icons/tfi";
import { IoPerson } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";
import { RiMailSendLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import "../styles/Navbar.scss";
import { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const { pathname } = useLocation();

  const [renderPage, setRenderPage] = useState(null);

  const [navActive, SetNavActive] = useState();

  const getCurrentPage = () => {
    if (pathname === "/") {
      return "home";
    } else if (pathname === "/about") {
      return "about";
    } else if (pathname === "/projects") {
      return "projects";
    } else if (pathname === "/contact") {
      return "contact";
    }
  };

  const handleClick = (e) => {
    // gsap.to(".slider", { width: "100%", ease: Power2.easeIn, duration: 1.5 })
    // gsap.to(".slider", { width: "0%" , ease: Power2.EaseOut, duration: 1.5, delay: 1.5});

    // console.log(e.target.nodeName);

    let nextPage = "";

    if (e.target.nodeName === "svg") {
      nextPage = e.target.getAttribute("data-location");
    } else if (e.target.nodeName === "path") {
      nextPage = e.target.parentElement.getAttribute("data-location");
    }

    //Prevent users to create overlay animation when they click in the current page associated icon
    if (nextPage === pathname) return;

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
    <>
      <nav>
        <ul>
          <li className={getCurrentPage() === "home" ? "active" : ""}>
            <Link to='/'>
              <VscHome size={"1.5em"} onClick={handleClick} data-location='/' />
            </Link>
            {/* <VscHome >
            <Link to='/' onClick={handleClick}></Link>
          </VscHome> */}
          </li>
          <li
            className={getCurrentPage() === "about" ? "active" : ""}
            onClick={handleClick}
          >
            <Link to='/about'>
              <CiUser size={"1.56em"} data-location='/about' />
            </Link>
          </li>
          <li
            className={getCurrentPage() === "projects" ? "active" : ""}
            onClick={handleClick}
          >
            <Link to='/projects'>
              <IoBriefcaseOutline size={"1.4em"} data-location='/projects' />
            </Link>
          </li>
          <li
            className={getCurrentPage() === "contact" ? "active" : ""}
            onClick={handleClick}
          >
            <Link to='/contact'>
              <CiMail size={"1.5em"} data-location='/contact' />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
