import React from 'react'
import { useState } from 'react'
import {MdVerified} from 'react-icons/md'

const Experience = () => {
    const [list, setList ] = useState([
    {
        id: 1,
        name: "Html",
        stage: "Experienced"
    },
    {
        id: 2,
        name: "CSS",
        stage: "Experienced"
    },
    {
        id: 3,
        name: "JavaScript",
        stage: "Experienced"
    },
    {
        id: 4,
        name: "Bootstrap",
        stage: "Experienced"
    },
    {
        id: 5,
        name: "Tailwind",
        stage: "Experienced"
    },
    {
        id: 6,
        name: "React",
        stage: "Experienced"
    },
    ])
    const [backend, setBackend] = useState([
    {
        id: 1,
        name: "Node Js",
        stage: "Experienced"
    },
    {
        id: 2,
        name: "MongoDB",
        stage: "Experienced"
    },
    {
        id: 3,
        name: "Express js",
        stage: "Experienced"
    },
    ])
  return (
    <div className='Experience' id='Experience'>
        <div className='Aboutheader'>
            <h5>What Skills I Have</h5>
            <h1>My Experience</h1>           
        </div>
        <div className='Fullstack'>
            <div className='Frontend'>
                <h3>Frontend Development</h3>
                <div>
                    <ul className='Orderedlist'>
                       {list.map(eachlist=>
                        <ol key={eachlist.id}>
                            <div className='iconsexp'>
                            <MdVerified style={{color:'#4db5ff',marginTop: "0.4rem", marginRight:"0.4rem" }} />
                            <div>
                            <p>{eachlist.name}</p>
                            <p>{eachlist.stage}</p>
                            </div>
                            </div>
                        </ol>
                        )}
                    </ul>
                </div>
            </div>
            <div className='Frontend'>
            <h3>Backend Development</h3>
                <div>
                    <ul className='Orderedlist'>
                    {backend.map(eachlist=>
                        <ol key={eachlist.id}>
                            <div className='iconsexp'>
                                <MdVerified style={{color:'#4db5ff',marginTop: "0.4rem", marginRight:"0.4rem" }} />
                                <div>
                                <p>{eachlist.name}</p>
                                <p>{eachlist.stage}</p>
                                </div>
                            </div>
                        </ol>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience