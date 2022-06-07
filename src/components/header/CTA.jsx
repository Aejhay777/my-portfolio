import React from 'react'
import myCV from '../../assets/Resume_Aljon_David_N_Santos.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={myCV} download className='btn'>Download Resume</a>
        <a href="#contacts" className='btn btn-primary'>Message me</a>
    </div>
  ) 
}

export default CTA