import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/aljon-david-santos777-114205238" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Aejhay777" target="_blank"><FaGithubSquare /></a>
        <a href="https://dribble.com" target="_blank"><FaDribbbleSquare /></a>
    </div>
  )
}

export default HeaderSocials