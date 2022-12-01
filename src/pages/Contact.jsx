import SectionTitle from "../components/SectionTitle";
import Map from "../components/Map";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import "../styles/Contact.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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

          <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='my@email.com' />
            <textarea
              className='text-area'
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Message goes here'
            ></textarea>
            <button type='submit' onSubmit={handleSubmit}>
              Send
            </button>
          </form>
        </div>

        <div>
          <Map />
        </div>
      </div>
    </main>
  );
};

export default Contact;
