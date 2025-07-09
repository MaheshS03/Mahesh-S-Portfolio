import React from 'react'
import "./about.css";
import Me from '../../assets/profile-pic.jpeg';
import {BsAward} from 'react-icons/bs';
import {AiOutlineBook} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src= {Me} alt='about' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Intern at ADP India Private Limited</small>
            </article>

            <article className='about__card'>
              <AiOutlineBook className="about__icon" />
                <h5>Education</h5>
                <small>Bachelor's Degree in Computer Science and Engineering</small>
            </article>
          </div>
          <p>
          Driven by a strong commitment to building a career in the software industry as a full-stack developer, I am highly motivated to apply my knowledge and continuously deepen my technical capabilities. 
          My hands-on experience includes Java, NodeJS, ExpressJS, ReactJS, MongoDB, Mongoose, HTML, CSS, JavaScript, REST, and VCS. 
          I bring my best effort and a continuous learning mindset to every project, with a focus on delivering high-quality solutions. 
          My collaborative nature, adaptability to new challenges, and dedication to technical excellence make me a valuable asset to any team.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>

      </div>

    </section>
  )
}

export default About