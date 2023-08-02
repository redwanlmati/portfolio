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

              <nav className='container flex flex-wrap items-center justify-between h-32 sticky top-0 z-50 bg-white mx-auto m-0 '>
                  <div>
                    <Link to="/"><img src={logo} className="h-8"/></Link>
                  </div>
                  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="navbar-elements flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-m md:font-medium md:border-0 md:bg-white ">
                        <li>
                        <Link to="/" className="navbar-link " >Work</Link> 
                        </li>
                        <li>
                        <Link to="/about" className="navbar-link underline underline-offset-8 decoration-2">About</Link> 
                        </li>
                        <li>
                        <Link to="/contact" className="navbar-link">Contact</Link> 
                        </li>
                        <li>
      
                          <Link to="https://www.linkedin.com/in/redouane-lmati-3244451b8/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ fontSize: '24px' }}/></Link>
                          <a href='#' className='m-2' ><InstagramIcon style={{ fontSize: '24px' }}/></a>
                          <a href='mailto: redwanlmati5@gmail.com' className='m-2' ><EmailIcon style={{ fontSize: '24px' }}/></a>
                 
                      </li>
                    </ul>
                  </div>
              </nav>  

              <div className='content grid grid-cols-2 gap-4 lg:w-11/12 ml-auto mr-auto mt-16'>
                
               
                <div style={{width:"600px",}}>
                    <img  src={personal} alt="personal image" className="image pp-image" />
                </div>
             

                <div className="flex items-center">
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
                    <Link to="/contact"><button className="contact-button text-xl font-semibold justify-center p-3">Let's Connect<SendIcon className="ml-3" style={{fontSize:"24px", marginTop:"-5px"}}/></button></Link>
                   </div>
                </div>
                
              </div>

              <div className="footer ">
                <div className="flex flex-wrap items-center justify-center h-96">
                  <Link to="https://www.linkedin.com/in/redouane-lmati-3244451b8/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ fontSize: '30px' }}/></Link>
                  <a href='#' className='m-2' ><InstagramIcon style={{ fontSize: '30px' }}/></a>
                  <a href='mailto: redwanlmati5@gmail.com' className='m-2' ><EmailIcon style={{ fontSize: '30px' }}/></a>
                </div>
              </div>

            </div>
        </body>

    </>

  )
}

export default About