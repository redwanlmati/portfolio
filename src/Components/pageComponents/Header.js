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
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

    const location = useLocation();
    const currentLocation = location.pathname;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    return (

      <header className="bg-white sticky top-0 bottom-10 p-5 z-50 h-30">
      {/* Full Navbar for Desktop */}
      <nav className="hidden md:flex items-center justify-between container mx-auto h-16">
        <div>
          <Link to="/portfolio">
            <span></span>
            <img className="h-6 md:h-8 ml-4" src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="flex items-center space-x-8 mr-4">
          <li>
            <Link
              to="/portfolio"
              className={`navbar-link font-semibold	 ${
                currentLocation !== '/portfolio/contact' && currentLocation !== '/portfolio/about'
                  ? 'underline underline-offset-8 decoration-2'
                  : ''
              }`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/about"
              className={`navbar-link font-semibold ${
                currentLocation === '/portfolio/about' ? 'underline underline-offset-8 decoration-2' : ''
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/contact"
              className={`navbar-link font-semibold	 ${
                currentLocation === '/portfolio/contact' ? 'underline underline-offset-8 decoration-2' : ''
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/redouane-lmati-3244451b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: '24px' }} />
            </Link>
            <a href="#" className="m-2">
              <InstagramIcon style={{ fontSize: '24px' }} />
            </a>
            <a href="mailto: redwanlmati5@gmail.com" className="m-2">
              <EmailIcon style={{ fontSize: '24px' }} />
            </a>
          </li>
        </ul>
      </nav>

      {/* Burger Menu for Mobile */}
      <nav className="md:hidden bg-white">
        <div className="flex items-center justify-between container mx-auto h-16">
          <div>
            <Link to="/portfolio">
              <span></span>
              <img className="h-6 md:h-8" src={logo} alt="Logo" />
            </Link>
          </div>
          <button onClick={toggleMenu} className="">
            {/* The burger menu icon (you can use any icon library here) */}
            {!isMenuOpen ? (
              <MenuIcon style={{fontSize:"45px"}} />
            ) : (
              <>
                <CloseIcon style={{fontSize:"45px"}} />
              </>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col items-center mt-4">
            <li className="mb-4">
              <Link
                to="/portfolio"
                className={`text-2xl ${
                  currentLocation !== '/portfolio/contact' && currentLocation !== '/portfolio/about'
                    ? 'underline underline-offset-8 decoration-2 '
                    : ''
                }`}
                onClick={closeMenu}
              >
                Work
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/portfolio/about"
                className={`text-2xl ${
                  currentLocation === '/portfolio/about' ? 'underline underline-offset-8 decoration-2' : ''
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/portfolio/contact"
                className={`text-2xl ${
                  currentLocation === '/portfolio/contact' ? 'underline underline-offset-8 decoration-2' : ''
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="mt-6">
              <Link
                to="https://www.linkedin.com/in/redouane-lmati-3244451b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ fontSize: '25px' }} />
              </Link>
              <a href="#" className="m-2">
                <InstagramIcon style={{ fontSize: '25px' }} />
              </a>
              <a href="mailto: redwanlmati5@gmail.com" className="m-2">
                <EmailIcon style={{ fontSize: '25px' }} />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>

    );
}

export default Header