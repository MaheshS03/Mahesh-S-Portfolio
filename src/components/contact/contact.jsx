import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear any previous messages

    try {
      await emailjs.sendForm('service_79s5cyi', 'template_jcrhzwr', form.current, 'WqTYDwDGrYpFQe4Rs');
      setMessage("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Failed to send the message", error);
      setMessage("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>maheshsaravanan2002@gmail.com</h5>
            <a href='mailto:maheshsaravanan2002@gmail.com' target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91-6380-242-661</h5>
            <a href='https://api.whatsapp.com/send?phone=+916380242661' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {message && <p className='contact__message'>{message}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
