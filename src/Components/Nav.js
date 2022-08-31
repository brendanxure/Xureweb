import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
    const [ hover, setHover ] = useState('')
  return (
    <div id='Nav' className='Nav'>
        <a href='#Header' onClick={()=> setHover('B')} className={hover === 'B' ? 'hover' : null} style={{color: '#ffffff'}}><AiOutlineHome/></a>
        <a href='#About' onClick={()=> setHover('R')} className={hover === 'R' ? 'hover' : null} style={{color: '#ffffff'}}><AiOutlineUser/></a>
        <a href='#Experience' onClick={()=> setHover('E')} className={hover === 'E' ? 'hover' : null} style={{color: '#ffffff'}}><BiBook/></a>
        <a href='#Testimonial' onClick={()=> setHover('N')} className={hover === 'N' ? 'hover' : null}style={{color: '#ffffff'}}><RiServiceLine /></a>
        <a href='#Contact' onClick={()=> setHover('D')} className={hover === 'D' ? 'hover' : null} style={{color: '#ffffff'}}><BiMessageSquareDetail /></a>
    </div>
  )
}

export default Nav