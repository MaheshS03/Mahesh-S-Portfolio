import React from 'react';
import './professionalExperience.css';
import {BsCheck2All} from 'react-icons/bs';

const ProfessionalExperience = () => {
  return (
    <section id='experience'>
      <h5>Where I’ve Worked</h5> 
      <h2>Professional Experience</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>ADP India Private Limited | Chennai </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Contributed to production support for ADP’s Multi-Country Payroll and HRMS products used across multiple global regions. </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Worked on analyzing and resolving bugs related to payroll calculations, employee records, and compliance checks. </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Performed database-level investigations to identify data inconsistencies and supported small-scale fixes under supervision. </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Collaborated with senior engineers to ensure system stability and data accuracy in a live enterprise environment.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Documented recurring issues and fixes, contributing to knowledge base for future troubleshooting. </p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Gained exposure to HRMS workflows, payroll processing logic, and industry standards in payroll management systems. </p>
            </li>
          </ul>

          
        </article>
      </div>
      

    </section>
  )
}

export default ProfessionalExperience