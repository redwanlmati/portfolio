import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";

//importing images
import logo from '../../logo.png'; 

//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {

    const location = useLocation();
    const currentLocation = location.pathname;

    return (
    <nav className='container flex flex-wrap items-center justify-between h-32 sticky top-0 z-50 bg-white mx-auto m-0 '>
        <div>
        <Link to="/portfolio"><img src={logo} className="h-8"/></Link>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul className="navbar-elements flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-m md:font-medium md:border-0 md:bg-white ">
            <li>
            <Link to="/" className={`navbar-link ${(currentLocation !== "/contact" && currentLocation !=="/about") ? "underline underline-offset-8 decoration-2" : "" }`}>Work</Link> 
            </li>
            <li>
            <Link to="/about" className={`navbar-link ${(currentLocation =="/about") ? "underline underline-offset-8 decoration-2" : "" }`}>About</Link> 
            </li>
            <li>
            <Link to="/contact" className={`navbar-link ${(currentLocation == "/contact") ? "underline underline-offset-8 decoration-2" : "" }`}>Contact</Link> 
            </li>
            <li>

                <Link to="https://www.linkedin.com/in/redouane-lmati-3244451b8/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ fontSize: '24px' }}/></Link>
                <a href='#' className='m-2' ><InstagramIcon style={{ fontSize: '24px' }}/></a>
                <a href='mailto: redwanlmati5@gmail.com' className='m-2' ><EmailIcon style={{ fontSize: '24px' }}/></a>
        
            </li>
        </ul>
        </div>
    </nav>  
    )
}

export default Header