import React from 'react'
import { useState } from 'react'
import {MdOutlineDone} from 'react-icons/md'
const Services = () => {
    const [serviceList, setServiceList] = useState([
        {
            id: 1,
            body: "Lorem ipsum dolor sit amet"  
        },
        {
            id: 2,
            body: "Lorem ipsum dolor sit amet"  
        },
        {
            id: 3,
            body: "Lorem ipsum dolor sit amet"  
        },
        {
            id: 4,
            body: "Lorem ipsum dolor sit amet"  
        },
        {
            id: 5,
            body: "Lorem ipsum dolor sit amet"
        }
    ])
  return (
    <div className='Services' id='Services'>
        <div className='Aboutheader'>
            <h5>What I Offer</h5>
            <h1>Services</h1>  
        </div>
        <div className='Servicemain'>
            <div className='Firstthirddiv'>
                <header>UI/UX</header>
                <main>
                    <ul>
                        {serviceList.map(eachone=>
                        <ol>
                            <><MdOutlineDone style={{color: '#4db5ff', marginRight: '0.5rem'}}/></>
                            {eachone.body}
                        </ol>    
                        )}
                    </ul>
                </main>
            </div>
            <div>
                <header>Web Development</header>
                <main>
                    <ul>
                        {serviceList.map(eachone=>
                        <ol>
                            <><MdOutlineDone style={{color: '#4db5ff', marginRight: '0.5rem'}}/></>
                            {eachone.body}
                        </ol>    
                        )}
                        <ol>
                        <><MdOutlineDone style={{color: '#4db5ff', marginRight: '0.5rem'}}/></>
                        Lorem ipsum dolor sit amet"
                        </ol>
                    </ul>
                </main>
            </div>
            <div className='Firstthirddiv'>
                <header>Content Creation</header>
                <main >
                    <ul>
                        {serviceList.map(eachone=>
                        <ol>
                            <><MdOutlineDone style={{color: '#4db5ff', marginRight: '0.5rem'}}/></>
                            {eachone.body}
                        </ol>    
                        )}
                    </ul>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Services