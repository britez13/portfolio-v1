import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";
import Map from "../components/Map";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import "../styles/Contact.scss";

const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dnp0kk2",
        "template_wdh1r7d",
        form.current,
        "EOUdlWVJjoLLRDXhf"
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

  return (
    <main className='contact'>
      <SectionTitle>Contact</SectionTitle>
      <div className='container'>
        <div>
          <div className='social-media'>
            <BsLinkedin size='1.5rem' />
            <BsGithub size='1.5rem' />
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
            {/* <CiLocationOn size='1.4rem' fill='#66fcf1' /> */}
          </span>
          <span>Villarrica, Paraguay</span>
          <Map />
        </div>
      </div>
    </main>
  );
};

export default Contact;
