import React from 'react';
import './header.css';
import CTA from "./CoreToAction";
// import Me from "../../assets/profile-picture.jpeg";
import Type from './type';

const header = () => {
  return (
    <header>
      <div className='container header__container' id="header">
        <h4>Hello I'm</h4>
        <h1>Mahesh S</h1>
        <div>
          <h5 className='text-light'>
            <Type />
          </h5>
        </div>
        <CTA />
      </div>
    </header>
  )
}

export default header