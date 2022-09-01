import React from 'react'
import  meabout  from "../Images/me-about.jpg";
import {FaAward } from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <div id='About' className='About'>
        <div className='Aboutheader'>
            <h5>Get To Know</h5>
            <h1>About Me</h1>
        </div>
        <div className='Aboutmaindiv'>
            <div className='Aboutleft'>
            <div className='Aboutimg'>
                <img alt='' src={meabout}></img>
            </div>
            </div>
            <div className='Aboutright'>
                <div>
                    <article>
                        <FaAward />
                        <p>Experience</p>
                        <h5>2+ years working</h5>
                    </article>
                    <article>
                        <BsFillPeopleFill />
                        <p>Clients</p>
                        <h5>300+ worldwide</h5>
                    </article>
                    <article>
                        <VscFolderLibrary />
                        <p>Projects</p>
                        <h5>20+ completed</h5>
                    </article>
                </div>
                <p>Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis. Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima. Quibusdam dolor sit provident optio eos quos itaque.
                </p>
                <section className='Aboutlink3'>
                <a className='Headerlink2' href='#Contact'>Let's talk</a>
                </section>
            </div>
        </div>
    </div>
  )
}

export default About