import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";
import Map from "../components/Map";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import "../styles/Contact.scss";
import gsap from "gsap";

const Contact = () => {
  const form = useRef();
  const contactRef = useRef();
  const timelineContactRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success("Message sent", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
        className: "toast-message",
      });
    } catch (some_error) {
      toast.error("Something went wrong. Try again.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
        className: "toast-message",
      });
    }

    // .then(

    // )

    // .catch(() => {

    // });
  };

  useEffect(() => {
    timelineContactRef.current = gsap
      .timeline()
      .to(".linkedin-icon", { opacity: 1, y: 0, duration: 1, delay: 2.85 })
      .to(".github-icon", { opacity: 1, y: 0, duration: 1 }, "<")
      .to(".input-text", { opacity: 1, y: 0, duration: 1 }, "-=.65")
      .to(".input-email", { opacity: 1, y: 0, duration: 1 }, "-=.64.8")
      .to(".text-area", { opacity: 1, y: 0, duration: 1 }, "-=.63.8")
      .to(".button-submit", { opacity: 1, y: 0, duration: 1 }, "-=.62.8")
      .to(".map-container", { opacity: 1, duration: 5 }, "-=1");
  }, []);

  return (
    <main className='contact'>
      <ToastContainer hideProgressBar autoClose={2000} />
      <SectionTitle>Contact</SectionTitle>
      <div className='container'>
        <div>
          <div className='social-media'>
            <a
              href='https://www.linkedin.com/in/florencio-britez-69065a1b8/'
              target='_blank'
              rel='noopener noreferrer'
              className='linkedin-icon'
            >
              <BsLinkedin size='1.5rem' fill='#66fcf1' />
            </a>
            <a
              href='https://github.com/britez13'
              target='_blank'
              rel='noopener noreferrer'
              className='github-icon'
            >
              <BsGithub size='1.5rem' fill='#66fcf1' />
            </a>

            {/* <SiDiscord size='1.6rem' /> */}
          </div>

          <form ref={form} onSubmit={handleSubmit}>
            <input
              className='input-text'
              type='text'
              placeholder='Name'
              name='user_name'
              required
            />
            <input
              className='input-email'
              type='email'
              placeholder='some@email.com'
              name='user_email'
              required
            />
            <textarea
              className='text-area'
              name='message'
              cols='30'
              rows='10'
              placeholder='Message goes here'
              required
            ></textarea>
            <button className='button-submit' type='submit'>
              Send
            </button>
          </form>
        </div>

        <div className='map-container'>
          <div className='location'>
            {" "}
            <span>
              <IoLocationOutline size='1.4rem' stroke='#66fcf1' />
            </span>
            <span>Villarrica, Paraguay</span>
          </div>
          <Map />
        </div>
      </div>
    </main>
  );
};

export default Contact;
