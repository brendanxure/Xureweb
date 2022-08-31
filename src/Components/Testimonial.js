import React from 'react'
import avatar1 from "../Images/avatar1.jpg"
import avatar2 from "../Images/avatar2.jpg"
import avatar3 from "../Images/avatar3.jpg"
import avatar4 from "../Images/avatar4.jpg"
import {useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

function Testimonial() {
    const [slide, setSlide ] = useState([
        {
            id:1,
            image: avatar2,
            name: "Kim Chun Chun"
        },
        {   id:2,
            image: avatar1,
            name: "Kim Yushin"
        },
        {   id:3,
            image: avatar3,
            name: "High Chief Yeon ta bal"
        },
        {   id:4,
            image: avatar4,
            name: "So seo no"
        }
    ])
  return (
    <div className='Testimonial' id='Testimonial'>
        <div className='Aboutheader'>
            <h5>Reviews from clients</h5>
            <h1>Testimonials</h1>           
        </div>
        
        <Swiper navigation={true} modules={[Navigation]} className="Card">
            {slide.map(eachone=> 
            <SwiperSlide>
                <div className='Card1'>
                <img className='Avatar2' src={eachone.image}></img>
                <h3>{eachone.name}</h3>
                <p>Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima. Quibusdam dolor sit provident optio eos quos itaque..</p>
                </div>
            </SwiperSlide>    
            )}
        </Swiper>
    </div> 
  )
}

export default Testimonial