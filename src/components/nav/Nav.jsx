import React from 'react'
import './nav.css'
import {FaAward, FaBook, FaFile, FaHome, FaList, FaUser} from "react-icons/fa"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] =useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ""}><FaHome/></a>
      <a href='#about'  onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ""}><FaUser/></a>
      <a href='#experience'  onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ""}><FaAward/></a>
      <a href='#contact'  onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ""}><FaBook/></a>
      <a href='#services'  onClick={() => setActiveNav("#services")} className={activeNav === '#services' ? 'active' : ""}><FaFile/></a>
    </nav>
  )
}

export default Nav