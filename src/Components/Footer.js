import React from 'react'
import {GrFacebookOption} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  const now =  new Date();
  return (
    <div className='Footer' id='Footer'>
        <div className='Aboutheader'>
            <h1>Brendan Xure</h1>           
        </div>
        <div className='Summary'>
          <h3><a href='#Services'>Services</a></h3>
          <h3><a href='#Experience'>Experience</a></h3>
          <h3><a href='#Portfolio'>Portfolio</a></h3>
          <h3><a href='#About'>About us</a></h3>
          <h3><a href='#Contact'>Contact us</a></h3>
          <h3><a href='#Testimonial'>Testimonial</a></h3>
        </div>
        <div className='Footericons'>
          <a href='https://web.facebook.com/bukkyobilo/' target='_blank' rel="noreferrer"><GrFacebookOption /></a>
          <a href='https://instagram.com/brendanxure' target='_blank' rel="noreferrer"><BsInstagram /></a>
          <a href='https://twitter.com/brendanxure/' target='_blank' rel="noreferrer"><BsTwitter /></a>
        </div>
        <footer>Copyright &copy;{now.getFullYear()} </footer>
    </div>
  )
}

export default Footer