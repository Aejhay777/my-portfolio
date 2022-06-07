import React from 'react'
import './services.css'
import {FaCheckCircle} from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2> Services</h2>

      <div className="container services__container">
        
        <article className='service'>
           <div className="service__head">
                <h3>UI/UX Design</h3>
           </div>

           <ul className='service__list'>
             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>
           </ul>
        </article>
        {/* END OF FIRST CARD */}


        <article className='service'>
           <div className="service__head">
                <h3>Web Development</h3>
           </div>

           <ul className='service__list'>
             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>
           </ul>
        </article>
        {/* END OF SECOND CARD */}


        <article className='service'>
           <div className="service__head">
                <h3>Content Creation</h3>
           </div>

           <ul className='service__list'>
             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>

             <li>
               <FaCheckCircle className='service__list-icon' />
               <p>Lorem, ipsum dolor sir amet consectetur elit.</p>
             </li>
           </ul>
        </article>
        {/* END OF THIRD CARD */}
      </div>

    </section>
  )
}

export default Services