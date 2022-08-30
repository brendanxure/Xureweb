import React from 'react'
import { useState } from 'react'
import portfolio1 from '../Images/portfolio1.jpg'
import portfolio2 from '../Images/portfolio2.jpg'
import portfolio3 from '../Images/portfolio3.jpg'
import portfolio4 from '../Images/portfolio4.jpg'
import portfolio5 from '../Images/portfolio5.png'
import portfolio6 from '../Images/portfolio6.jpg'

const Portfolio = () => {
    const [port, setPort] = useState([
        {
            id: 1,
            body: "Crypto Currency Dashbord and Financial Visualization",
            picture: portfolio1,
            link: "#Header"
        },
        {
            id: 2,
            body: "Chart Templates & Infographics in Figma",
            picture: portfolio2,
            link: "#Header"
        },
        {
            id: 3,
            body: "Figman Dashboard UI kit for Data Design Webpage",
            picture: portfolio3,
            link: "#Header"
        },
        {
            id: 4,
            body: "Maintaining Tasks and Tracking progress",
            picture: portfolio4,
            link: "#Header" 
        },
        {
            id: 5,
            body: "Chart Templates & Infographics in Figma",
            picture: portfolio5,
            link: "#Header" 
        },
        {
            id: 6,
            body: "Chart Templates & Infographics in Figma",
            picture: portfolio6,
            link: "#Header" 
        }
    ])
  return (
    <div className='Portfolio' id='Portfolio'>
        <div className='Aboutheader'>
            <h1>Portfolio</h1>           
        </div>
        <div className='Portfoliomain'>
            <div>
                {port.map(eachport=>
                <div className='Eachport'>
                    <image>
                        <img src={eachport.picture} />
                    </image>  
                    <h3>{eachport.body}</h3>
                    <section>
                        <a href="https://github.com" className='Headerlink' target="_blank" >GitHub</a>
                        <a href={eachport.link} className='Headerlink2' >Live Demo</a>
                    </section>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Portfolio