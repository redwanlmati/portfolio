import React from 'react'
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";

//importing images
import logo from '../../logo.png'; 

//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className="footer ">
    <div className="flex flex-wrap items-center justify-center h-96">
      <Link to="https://www.linkedin.com/in/redouane-lmati-3244451b8/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ fontSize: '30px' }}/></Link>
      <a href='#' className='m-2' ><InstagramIcon style={{ fontSize: '30px' }}/></a>
      <a href='mailto: redwanlmati5@gmail.com' className='m-2' ><EmailIcon style={{ fontSize: '30px' }}/></a>
    </div>
  </div>
  )
}

export default Footer