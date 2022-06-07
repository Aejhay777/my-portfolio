import React from 'react'
import './navigation.css'
import {ImHome} from 'react-icons/im'
import {FaUserAlt} from 'react-icons/fa'
import {BiBookmarkAlt} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import {useState} from 'react'


const Navigation = () => {
  const [activeNavigation, setActiveNavigation] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNavigation('#')} className={activeNavigation === '#' ? 'active' : ''}><ImHome /></a>
      <a href='#about' onClick={() => setActiveNavigation('#about')} className={activeNavigation === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href='#experience' onClick={() => setActiveNavigation('#experience')} className={activeNavigation === '#experience' ? 'active' : ''}><BiBookmarkAlt /></a>
      <a href='#services' onClick={() => setActiveNavigation('#services')} className={activeNavigation === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href='#contacts' onClick={() => setActiveNavigation('#contacts')} className={activeNavigation === '#contacts' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Navigation