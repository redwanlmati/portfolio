import React from 'react'
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";

import logo from '../logo.png'; 

//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

//showcase image
import TECSODetails from '../content/Details/Tecso.webp'

const Tecso = () => {
  return (
    
    <>
            <Helmet>
                <title>Redouane Lmati</title>
            </Helmet>

            <body className="lg:w-10/12 ml-auto mr-auto ">
                <div>

      

                <div className='content grid grid-cols-1 gap-4 lg:w-11/12 ml-auto mr-auto mt-16'>
                    
                <div >
                  <div >
                    <img src={TECSODetails} alt="TecsoCompagny®"/>
                    <div className="text-overlay text-xl text-black font-bold	">TecsoCompagny®</div>
                  </div>
                </div>
                    
                </div>

 

                </div>
            </body>

    </>
    
  )
}

export default Tecso