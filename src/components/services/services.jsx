import React from 'react';
import './services.css';
import {BsCheck2All} from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer?</h5>
      <h2>Capabilities</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Strong focus on accuracy and precision.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Systematic and methodical approach to tasks and challenges.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Passionate about exploring and mastering cutting-edge technologies.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Excellent in Problem-solving.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Ensuring the site is responsive, to render properly on all devices.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Continuously testing and optimizing website functionality and performance.</p>
            </li>
          </ul>

          
        </article>
      </div>
      

    </section>
  )
}

export default Services