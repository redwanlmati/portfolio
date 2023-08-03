import React from 'react'
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";


//importing images
import logo from '../logo.png'; 



import DTT from '../content/DTT.webp'
import TECSO from '../content/tecso.webp'
import DECORY from '../content/decroy.webp'

//images details
import DTTDetails from '../content/Details/D.T.T.webp'
import TECSODetails from '../content/Details/Tecso.webp'
import DECORYDetails from '../content/Details/Decory.webp'

//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';



function Home() {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  
  return (



    <>
    
        <Helmet>
            <title>Redouane Lmati</title>
        </Helmet>

        <body className="lg:w-10/12 ml-auto mr-auto ">

            <div>
              <div className='content grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:w-11/12 ml-auto mr-auto mt-2 md:mt-16'>
                
                <div className="content-grid" id="grid-img">
                  <Link to="/portfolio/drivethroughtime"><div className="image-container" >
                    <img src={DTT} alt="Drive Through Time" className="image" />
                    {/* <div className="text-overlay text-xl text-black font-bold	">Drive Through Time</div> */}
                  </div></Link>
                </div>

                <div className="content-grid" id="grid-img">
                  <Link to="/portfolio/tecso"><div className="image-container">
                    <img src={TECSO} alt="TecsoCompagny®" className="image" />
                    <div className="text-overlay text-xl text-black font-bold	">TecsoCompagny®</div>
                  </div></Link>
                </div>

                <div className="content-grid" id="grid-img">
                  <Link to="/portfolio/decory"><div className="image-container">
                    <img src={DECORY} alt="Decory®" className="image" />
                    <div className="text-overlay text-xl text-black font-bold	">Decory®</div>
                  </div></Link>
                </div>
                
              </div>

            </div>
        </body>

    </>

  )
}

export default Home