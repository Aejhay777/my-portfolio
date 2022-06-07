import React from 'react'
import './contacts.css'
import {MdMarkEmailUnread} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_qwkdhv9', 'template_sf7weqq', form.current, 'mb7_Us7ei85gdYIDZ')
    .then((result) => {
        console.log(result.text);
        e.target.reset()
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">

            <article className='contact__option'>
              <MdMarkEmailUnread className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>aejhay.ph@gmail.com</h5>
              <a href="mailto:aejhay.ph@gmail.com" target="_blank">Send a message</a>
            </article>

            <article className='contact__option'>
              <SiMessenger className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Aljon David Santos</h5>
              <a href="https://m.me/acoustic.AJ77" target="_blank">Send a message</a>
            </article>

            <article className='contact__option'>
              <IoLogoWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+63-975-299-6189</h5>
              <a href="https://api.whatsapp.com/send?phone=639752996189" target="_blank">Send a message</a>
            </article>


        </div>
              {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name...' required />
            <input type="email" name='email' placeholder='Your Email...' required />
            <input type="date" name='date' required />
            <textarea name="message" rows="7" placeholder='Your Message Here...' required></textarea>
            <button type="submit" name='submit' className='btn btn-primary'>Send Me A Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contacts