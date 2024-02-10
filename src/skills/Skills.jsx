import React from 'react'
import "./skills.css"
import Jav from "../assets/logo-javascript.svg"
import html from "../assets/html-1.svg"
import css from "../assets/css-3.svg"
import react from "../assets/react-2.svg"
import node from "../assets/nodejs-icon.svg"
import express from "../assets/icons8-express-js.svg"
import mongo from "../assets/mongodb-icon-2.svg"
import git from "../assets/git-icon.svg"
import jwt from "../assets/jwt-3.svg"
import sql from "../assets/pngwing.com - 2024-02-10T145413.817.png"
import sass from "../assets/sass-1.svg"
import ap from "../assets/adobe-photoshop-2.svg"
import ai from "../assets/adobe-illustrator-cc-icon.svg"
import mui from "../assets/material-ui-1.svg"


const Skills = () => {
  return (
    <div>
        <div id='skills'>
        <article className='skill'> <img src={html} alt='jav'/>HTML </article>
        <article className='skill'> <img src={css} alt='jav'/>CSS</article>
        <article className='skill'> <img src={Jav} alt='jav'/> JAVASCRIPT</article>
        <article className='skill'> <img src={react} alt='jav'/>  REACT</article>
        <article className='skill'> <img src={node} alt='jav'/> NODE.JS</article>
        <article className='skill'> <img src={express} alt='jav'/>  EXPRESS</article>
        <article className='skill'> <img src={mongo} alt='jav'/>  MONGODB</article>
        <article className='skill'> <img src={sql} alt='jav'/> MYSQL</article>
        <article className='skill'> <img src={sass} alt='jav'/>  SASS</article>
        <article className='skill'> <img width="48" height="48" src="https://img.icons8.com/color/48/styled-components.png" alt="styled-components"/> STYLED COMPONENT</article>
        <article className='skill'> <img src={mui} alt='jav'/>  MATERIAL UI</article>
        <article className='skill'> <img src={git} alt='jav'/>  GIT</article>
        <article className='skill'> <img src={jwt} alt='jav'/> JWT</article>
        <article className='skill'> <img src={ap} alt='jav'/>  PHOTOSHOP</article>
        <article className='skill'> <img src={ai} alt='jav'/>ILLUSTATOR</article>
        </div>
       
    </div>
  )
}

export default Skills