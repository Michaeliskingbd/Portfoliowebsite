import React from 'react'
import "./skills.css"
import Jav from "../assets/logo-javascript.svg"
import html from "../assets/html-1.svg"
import css from "../assets/css-3.svg"
import react from "../assets/react-2.svg"
import node from "../assets/nodejs-icon.svg"
import mongo from "../assets/mongodb-icon-1.svg"
import git from "../assets/git-icon.svg"
import jwt from "../assets/jwt-3.svg"
import sql from "../assets/pngwing.com - 2024-02-10T145413.817.png"
import sass from "../assets/sass-1.svg"
import ap from "../assets/adobe-photoshop-2.svg"
import ai from "../assets/adobe-illustrator-cc-icon.svg"
import mui from "../assets/material-ui-1.svg"
import tailwind from "../assets/tailwindcss.svg"
import express from "../assets/express-109.svg"


const Skills = () => {
  return (
    <div>
        <div id='skills'>
        <article className='skill'> <img src={html} alt='jav'/>HTML </article>
        <article className='skill'> <img src={css} alt='jav'/>CSS</article>
        <article className='skill'> <img src={Jav} alt='jav'/> Javascript</article>
        <article className='skill'> <img src={react} alt='jav'/>  ReactJS</article>
        <article className='skill'> <img src={node} alt='jav'/> NodeJS</article>
        <article className='skill'> <img style={{width:"80px"}} src={express} alt='jav'/>  ExpressJS</article>
        <article className='skill'> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" alt='jav'/>  NextJS</article>
        <article className='skill'> <img src={mongo} alt='jav'/>  MongoDB</article>
        <article className='skill'> <img src={sql} alt='jav'/> MySQL</article>
        <article className='skill'> <img src={tailwind} alt='jav'/> TailwindCSS</article>
        <article className='skill'> <img src={sass} alt='jav'/>  SASS</article>
        <article className='skill'> <img src={mui} alt='jav'/>  Material UI</article>
        <article className='skill'> <img src={git} alt='jav'/>  Git</article>
        <article className='skill'> <img src={jwt} alt='jav'/> JWT</article>
        <article className='skill'> <img src={ap} alt='jav'/>  Photoshop</article>
        <article className='skill'> <img src={ai} alt='jav'/>Illustrator</article>
        </div>
       
    </div>
  )
}

export default Skills