import React from 'react'
import CV from "../../assets/Mahesh-S-Profile.pdf";

const CoreToAction = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>View Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CoreToAction