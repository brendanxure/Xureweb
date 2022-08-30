import React from 'react'
import {MdOutlineEmail} from "react-icons/md"
import {TbBrandMessenger} from "react-icons/tb"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pdy85un', 'template_rk7wsqb', form.current, 'DfUa95LXgAOAfiT8l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
    }
  return (
    <div className='Contact' id='Contact'>
        <div className='Aboutheader'>
            <h5>Get In Touch</h5>
            <h1>Contact Me</h1>           
        </div>
        <div className='Contactmain'>
            <div className='Contactarticle'>
                <article>
                    <MdOutlineEmail style={{width: "25px", height: "25px", marginBottom: "1rem" }}/>
                    <h3>Email</h3>
                    <p>Support@brendanxure.com</p>
                    <a href='mailto:brendanxure@outlook.com' target='_blank'>Send a message</a>
                </article>
                <article>
                    <TbBrandMessenger style={{width: "25px", height: "25px", marginBottom: "1rem" }}/>
                    <h3>Messenger</h3>
                    <p>Brendan Xure</p>
                    <a href='https://m.me/bukkyobilo' target='_blank'>Send a message</a>
                </article>
                <article>
                    <BsWhatsapp style={{width: "23px", height: "23px", marginBottom: "1rem" }} />
                    <h3>WhatsApp</h3>
                    <p>+234 817 266 5800</p>
                    <a href='https://wa.me/+2348172665800?text=Hi' target='_blank'>Send a message</a>
                </article>
            </div>
            <form className='Contactform' ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required></input>
                <input type="email" name='email' placeholder='Your Email' required></input>
                <textarea placeholder='Your Message' name='message' required></textarea>
                <button className='Headerlink2' type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact