import React from 'react'
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";

import logo from '../logo.png'; 
import personal from '../personal.png'; 

//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const About = () => {
  return (
    
    <>
        <Helmet>
            <title>Redouane Lmati</title>
        </Helmet>

        <body className="lg:w-10/12 ml-auto mr-auto ">
            <div>



              <div className='content grid md:grid-cols-2 grid-cols-1 gap-4 lg:w-11/12 ml-auto mr-auto mt-16'>
                
               
                <div className="w-200 md:w-9/12 md:p-0 p-5">
                    <img  src={personal} alt="personal image" className="image pp-image" />
                </div>
             

                <div className="flex items-center md:p-0 p-8">
                   <div className="flex-col">
                    <h1 className="text-3xl font-bold">Hello, my name is Redwan. 👋</h1>
                    <br />
                    <p className="text-xl font-light">
                        I'm a graphic designer, part time film maker based in Marrakech. Design for me started as a hobby to visualize ideas, but the challenge of getting creative and transfering thoughts intro reality have got me intrigued to invest my time into design. I graduated with a bachelor's degree in business management.
                        <br />
                        <br />
                        In my free time I like to stay inspiried and surrounded by creative material to help me stimulate new ideas and thoughts. Amongst the things I will be doing is creating films in my virtual machines <span>Like This</span> or <span>Like This</span> or maybe I'll just be navigating <span>Behance</span>.

                    </p>
                    <br /><br />
                    <Link to="/portfolio/contact"><button className="contact-button text-xl font-semibold justify-center p-3">Let's Connect<SendIcon className="ml-3" style={{fontSize:"24px", marginTop:"-5px"}}/></button></Link>
                   </div>
                </div>
                
              </div>



            </div>
        </body>

    </>

  )
}

export default About