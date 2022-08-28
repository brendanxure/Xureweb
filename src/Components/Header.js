import React from 'react'
import me from '../Images/me.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineDribbble} from 'react-icons/ai'
import CV from '../Images/cv.pdf'
const Header = () => {
  return (
    <div className='Header'>
        <div className='Hello'>
            <h5>Hello I'm</h5>
            <h1>Brendan Xure</h1>
            <h5 style={{color : 'rgba(255, 255, 255, 0.5)'}}>Fullstack Developer</h5>
        </div>
        <div className='Headerlinkdiv'>
            <a className='Headerlink' href={CV} download >Download CV</a>
            <a className='Headerlink2' href=''>Let's talk</a>
        </div>
        <div className="Headerimgdiv">
            <div className='Headericons'>
                <a style={{color : '#4db5ff'}} href='https://linkedin.com' target='_blank' ><BsLinkedin/></a>
                <a style={{color : '#4db5ff'}}href='https://github.com' target='_blank'><FaGithub /></a>
                <a style={{color : '#4db5ff'}}href='https://dribbble.com' target='_blank'><AiOutlineDribbble /></a>
            </div>
            <a href='#Nav' className='Scrolldown'>Scroll Down</a>
            <img className='me' src={me}></img>
        </div>
    </div>
  )
}

export default Header