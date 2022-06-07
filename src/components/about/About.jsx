import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {GiProgression} from 'react-icons/gi'
import {FaMedal} from 'react-icons/fa'
import {GiMuscleUp} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Image"/>
              </div>
          </div>

          <div className="about__content">
                <div className="about__cards">

                  <article className='about__card'>
                    <GiProgression className='about__icon'/>
                    <h5>Experience</h5>
                    <small>&lt; 1 Year Work Experience</small>
                  </article>

                  <article className='about__card'>
                    <FaMedal className='about__icon'/>
                    <h5>Achievements</h5>
                    <small>Cum Laude Graduate 
                    </small>
                  </article>

                  <article className='about__card'>
                    <GiMuscleUp className='about__icon'/>
                    <h5>Strength</h5>
                    <small>Persistent</small>
                  </article>

                </div>

                <p>
                I decided to take Information Technology long before I even finish my High School studies, 
                back then I was already self-taught by studying about programming languages through the internet. 
                My primary reason why I chose <span className='IT'>Information Technology</span>  as my bachelor’s degree is because of my
                passion in programming. I can see myself not being bored at all as long as I can continually
                practice my passion. It also came to my thinking that I can never go wrong with studying 
                technology, because it is definitely a good field to exert my efforts on. 
                </p>

                <a href='#contacts' className='btn btn-primary'>Message Me</a>
          </div>
      </div>
    </section>
  )
}

export default About