import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";
import Map from "../components/Map";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import "../styles/Contact.scss";
import gsap from "gsap";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    gsap.to(".contact", { opacity: 1, duration: 2, delay: 3 });
  }, []);

  return (
    <main className='contact'>
      <SectionTitle>Contact</SectionTitle>
      <div className='container'>
        <div>
          <div className='social-media'>
            <a
              href='https://www.linkedin.com/in/florencio-britez-69065a1b8/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsLinkedin size='1.5rem' fill='#66fcf1' />
            </a>
            <a
              href='https://github.com/britez13'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub size='1.5rem' fill='#66fcf1' />
            </a>

            {/* <SiDiscord size='1.6rem' /> */}
          </div>

          <form ref={form} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='user_name' required />
            <input
              type='email'
              placeholder='my@email.com'
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
            <button type='submit'>Send</button>
          </form>
        </div>

        <div>
          <span>
            <IoLocationOutline size='1.4rem' stroke='#66fcf1' />
          </span>
          <span>Villarrica, Paraguay</span>
          <Map />
        </div>
      </div>
    </main>
  );
};

export default Contact;
