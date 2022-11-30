
import SectionTitle from "../components/SectionTitle";
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { SiDiscord } from "react-icons/si"
import { RiSendPlaneFill } from "react-icons/ri";


import "../styles/Contact.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className='contact'>
      <SectionTitle>Contact</SectionTitle>
      <div className='container'>
        <form>
          <input type='email' placeholder='your@email.com' />
          <textarea
            className="text-area"
            name=''
            id=''
            cols='30'
            rows='15'
            placeholder='Message goes here :)'
          ></textarea>
          <button type='submit' onSubmit={handleSubmit}>
            Send{" "}
            <span>
              <RiSendPlaneFill />
            </span>
          </button>
        </form>

        <div className='social-media'>
          <BsLinkedin size='2rem' />
          <BsGithub size='2rem' />
          <SiDiscord size='2.1rem' />
        </div>
      </div>
    </main>
  );
};

export default Contact;
