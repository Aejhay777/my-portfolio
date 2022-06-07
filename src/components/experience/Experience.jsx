import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='skills'>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
          
          <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>CSS</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>JavaScript</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>Bootstrap</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>ReactJS</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>TailwindCSS</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                </div>
          </div>
          {/*END OF FRONTEND*/}
          <div className="experience__backend">
               <h3>Backend Development</h3>
                <div className="experience__content">

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>PHP</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>MySQL</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>MongoDB</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>Python</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>

                      <arcticle className="experience__details">
                      <br />
                      <BsPatchCheckFill className='experience__details-icon'/>
                      <div>
                      <h4>Node JS</h4>
                      <small className='text-light'>Experienced</small>
                      </div>
                      </arcticle>


            </div>
          </div>
    
    
    
      </div>
    </section>
  )
}

export default Experience