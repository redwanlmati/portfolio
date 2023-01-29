import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


import { Menu } from "@headlessui/react";


import logo from '../img/Logo.png'; // import RL logo
import main from '../img/main.png'; // import main image

//apps logos
import Ae from '../icons/Ae.png'; 
import Ai from '../icons/Ai.png'; 
import Id from '../icons/Id.png'; 
import Pr from '../icons/Pr.png'; 
import Ps from '../icons/Ps.png'; 
import Xd from '../icons/Xd.png'; 
import react from '../icons/React logo.png'; 

//portfolio images
import p1 from '../portfolio/1.png'; 
import p2 from '../portfolio/2.png'; 
import p3 from '../portfolio/3.png'; 
import p4 from '../portfolio/4.png'; 
import p5 from '../portfolio/5.png'; 
import p6 from '../portfolio/6.png'; 

import contact from '../portfolio/284.png'; 

//icons import
import { HiMail, HiDocumentDownload } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im"



function Home() {

    const top = useRef(null);
    const home = useRef(null);
    const about = useRef(null);
    const services = useRef(null);
    const portfolio = useRef(null);
    const contact = useRef(null);
    
    const [info, setInfo] = useState();

    const [currentSection, setCurrentSection] = useState(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mbxouxl', 'template_omre2pb', form.current, 'Q_nQ7HRx7_XtEMehA')
          .then((result) => {
              if(result.text == "OK" && message && mail && name){
                setInfo(
                    <div class="flex items-center bg-green-700 text-white text-sm font-bold px-4 py-3 justify-center" role="alert">
                        <p>Message sent successfuly!</p>
                    </div>
                  )
                  
                  setName("");
                  setMail("");
                  setMessage("");
              }
          }, (error) => {
              
          });
    };

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    console.log(name, mail, message)

    const handleNameChange = (name) => {setName(name)}
    const handleMailChange = (mail) => {setMail(name)}
    const handleMessageChange = (message) => {setMessage(name)}

    return (    
    <>

    <Helmet>
        <title>Homepage</title>
    </Helmet>

    <body ref={top} className="lg:w-10/12 ml-auto mr-auto font-['Roboto_Slab']">
        <div>
            
            <nav class="bg-white p-2 opacity-90 mt-0 fixed lg:w-10/12 w-full z-10 top-0 ml-0">
                <div class="font-['Roboto_Slab'] container flex flex-wrap items-center justify-between mx-auto">
                <Link onClick={()=> {scrollToSection(top)}} class="flex items-center">
                    <img src={logo} class="h-7 mr-3 sm:h-8"/>
                </Link>

                <div class="flex md:order-2 items-center">

                    {/* <Menu as="div" className="flex items-center">
                        <Menu.Button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center justify-center px-2 py-2 text-sm text-gray-500 rounded-lg cursor-pointer">
                        English
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#868c97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                        </Menu.Button>
                    
                        <Menu.Items className="absolute cursor-pointer  top-full min-w-fit w-fit bg-white shadow-lg mt-1 rounded text-sm hover:text-gray-700">
                          
                                <div className="px-4 py-1 flex items-center">
                                    English
                                </div>
                                <div className="px-4 py-1 flex items-center text-gray-500 hover:text-gray-700">
                                    Français
                                </div>
                            
                        </Menu.Items>
                        
          
                    </Menu> */}
                    
                    <div>
                    <button onClick={()=> {scrollToSection(contact)}}  type="button" class="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none font-medium rounded-full text-m px-8 py-2.5 text-center mr-3 md:mr-0">Contact</button>

                    </div>
                </div>
                
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-m md:font-medium md:border-0 md:bg-white">
                    <li>
                        <Link onClick={()=> {scrollToSection(home); setCurrentSection("home")}} class="link block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link onClick={()=> {scrollToSection(about); setCurrentSection("about")}} class="link block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0">About me</Link>
                    </li>
                    <li>
                        <Link onClick={()=> {scrollToSection(services); setCurrentSection("services")}} class="link block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0">Services</Link>
                    </li>
                    <li>
                        <Link onClick={()=> {scrollToSection(portfolio); setCurrentSection("portfolio")}} class="link block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0">Portfolio</Link>
                    </li>
                    </ul>
                </div>

                </div>
            </nav>
        
            <div className="container lg:my-36 my-24 px-6 mx-auto" >

                <div className="grid lg:grid-cols-2 gap-12 flex">

                    <div className="flex lg:justify-end justify-center lg:order-1">
                        <a className="lg:w-6/12 w-8/12 fancy-border-radius rotate-lg-45 outline-double outline-8 outline-offset-8 outline-sky-600 ">
                        <img src={main} className="shadow-lg fancy-border-radius rotate-[-13deg]" alt="" />
                        </a>
                    </div>

                    <div ref={home} id="home" className="grid flex justify-start items-center font-['Roboto_Slab'] gap-y-px">
                        <div className="font-bold text-sky-600 text-2xl">Hello,</div>
                        <h1 className="font-extrabold text-5xl text-gray-900">I'm Redwan Lmati</h1>
                        <div className="font-black text-sky-600 text-4xl">Web / Graphic Designer</div>
                        <p className="font-medium text-2xl text-gray-900">I have plus 3 years of experience as a designer for web and graphics, if you have any brilliant ideas you look to convert into reality you're in the right place. You can reach out to me via the links below.</p>
                        <div className="mt-4 flex">
                            <button onClick={()=> {scrollToSection(contact)}}  type="button" class=" gap-2 inline-flex items-center text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none font-medium rounded-lg lg:text-m text-sm lg:px-8 px-4 lg:py-2.5 py-2.5 text-center mr-3 md:mr-0 ">
                                <IoIosMail className="lg:text-2xl" />
                                Contact
                            </button>
                            <a href="https://drive.google.com/file/d/11VrjXYb955Gq1VjkvcCCjJMZnofCRRE8/view?usp=share_link" target="_blank"><button type="button" class="gap-2 inline-flex items-center lg:ml-4 text-gray-900 outline outline-sky-700 hover:text-white hover:bg-sky-700 focus:ring-4 focus:outline-none font-medium rounded-lg lg:text-m text-sm lg:text-m lg:px-8 px-2 lg:py-2.5 py-2.5 text-center mr-3 md:mr-0">
                                <HiDocumentDownload className="lg:text-2xl" />
                                Download CV
                            </button></a>
                        </div>
                    </div>

                    

                </div>

                <div ref={about} id="about" className="mt-36 bg-sky-100 p-10 grid lg:grid-cols-2 gap-12 flex rounded-lg">
                    <div className="lg:text-8xl text-6xl font-extrabold text-gray-900">
                        <div>
                            About
                        </div>
                        <div>
                            Me.
                        </div>
                    </div>
                    <div className="flex items-center font-medium lg:text-2xl text-lg text-gray-500">
                        I'm a 21 year old economics student passionate about graphic design and conception. Studying economics and marketing allowed me a new perspective to make my designs stand more to the viewer and I'm on a quest to create amazing stuff.
                    </div>
                </div>

                <div ref={services} id="services" className="mt-20 gap-12">
                    <div className="ml-3">
                        <div className="font-regular text-2xl">My Services</div>
                        <div className="font-extrabold text-5xl">What I do</div>
                    </div>
                    
                    <div className="bg-sky-700 lg:w-56 w-52 h-2 mt-0.5 ml-3">&#8203;</div>
                    <div className="bg-sky-700 w-2 lg:h-28 h-20 mb-4 ml-3">&#8203;</div>
                    <div className="grid-cols-2 flex items-center">
                        <div className="bg-sky-700 w-8 h-8 mr-4 mb-7 rounded-full">&#8203;</div>

                        <div className="items-center">
                            <div className="font-bold lg:text-3xl text-2xl">Front-end Web Design</div>                                                   
                            <div className="font-regular lg:text-xl text-sm text-gray-500">Build your unique UI using reactJS</div>
                        </div>

                    </div>

                    
                    <div className="bg-sky-700 w-2 lg:h-28 h-20 mb-4 ml-3">&#8203;</div>
                    <div className="grid-cols-2 flex items-center">
                        <div className="bg-sky-700 w-8 h-8 mr-4 mb-7 rounded-full">&#8203;</div>

                        <div className="items-center">
                            <div className="font-bold lg:text-3xl text-2xl">Product Design</div>                                                   
                            <div className="font-regular lg:text-xl text-sm text-gray-500">Converting your ideas into reality.</div>
                        </div>

                    </div>

                    <div className="bg-sky-700 w-2 lg:h-28 h-20 mb-4 ml-3">&#8203;</div>
                    <div className="grid-cols-2 flex items-center">
                        <div className="bg-sky-700 w-8 h-8 mr-4 mb-7 rounded-full">&#8203;</div>

                        <div className="items-center">
                            <div className="font-bold lg:text-3xl text-2xl ">UI/UX Design</div>                                                   
                            <div className="font-regular lg:text-xl text-sm text-gray-500">Design and test for the best results.</div>
                        </div>

                    </div>

                    <div className="bg-sky-700 w-2 lg:h-28 h-20 mb-4 ml-3">&#8203;</div>
                    <div className="grid-cols-2 flex items-center">
                        <div className="bg-sky-700 w-8 h-8 mr-4 mb-7 rounded-full">&#8203;</div>

                        <div className="items-center">
                            <div className="font-bold lg:text-3xl text-2xl">Graphic Design</div>                                                   
                            <div className="font-regular lg:text-xl text-sm text-gray-500">Banners, logos, adverts etc...</div>
                        </div>

                    </div>

                    <div className="bg-sky-700 w-2 lg:h-28 h-20 mb-4 ml-3">&#8203;</div>
                    <div className="grid-cols-2 flex items-center">
                        <div className="bg-sky-700 w-8 h-8 mr-4 mb-7 rounded-full">&#8203;</div>

                        <div className="items-center">
                            <div className="font-bold lg:text-3xl text-2xl ">Marketing Design</div>                                                   
                            <div className="font-regular lg:text-xl text-sm text-gray-500">Good design is good business.</div>
                        </div>

                    </div>

                    <div className="bg-sky-700 w-2 lg:h-28 h-20 mb-4 ml-3">&#8203;</div>
                    <div className="grid-cols-2 flex items-center">
                        <div className="bg-sky-700 w-8 h-8 mr-4 mb-7 rounded-full">&#8203;</div>

                        <div className="items-center">
                            <div className="font-bold lg:text-3xl text-2xl">Video Editing</div>                                                   
                            <div className="font-regular lg:text-xl text-sm text-gray-500">Edit your videos, and create your ads.</div>
                        </div>

                    </div>
                    <div className="bg-sky-700 w-2 lg:h-28 h-20 mb-4 ml-3">&#8203;</div>
                    
                    
                        

                </div>

                <div className="flex justify-center lg:scale-50 lg:gap-4 gap-1">
                    <div><img src={react} alt="" /></div>
                    <div><img src={Xd} alt="" /></div>
                    <div><img src={Ps} alt="" /></div>
                    <div><img src={Ai} alt="" /></div>
                    <div><img src={Id} alt="" /></div>
                    <div><img src={Pr} alt="" /></div>
                    <div><img src={Ae} alt="" /></div>
                </div>
                
                <div ref={portfolio} id="portfolio" className="mt-20 gap-12">

                    <div className="ml-3 mb-20">
                        <div className="font-regular text-2xl">Recent Projects</div>
                        <div className="font-extrabold text-5xl">My Portfolio</div>
                    </div>

                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 justify-items-center">

                        <div className="rounded-lg shadow-lg bg-white max-w-sm">

                        <a href="#!">
                            <img className="rounded-t-lg" src={p1} alt="" />
                        </a>
                        
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Business website</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Design and implementation of the front- end of an e-commerce website.
                            </p>
                            <a href="https://www.behance.net/gallery/162439705/Fantasy-books-website-design/modules/916287527" target="_blank" ><div className="flex flex-col items-center"><button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View on Behance</button></div></a>
                        
                        </div>
                        </div>

                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img className="rounded-t-lg" src={p2} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Brand Design</h5>
                            <p className="text-gray-700 text-base mb-4">
                            Full branding for "Fanatist" including logo, social posts, promotion videos etc...

                            </p>
                            <a href="https://www.behance.net/gallery/162439941/Logo-design-and-mockup/modules/916289151" target="_blank" ><div className="flex flex-col items-center"><button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View on Behance</button></div>
                            </a>
                        </div>
                        </div>

                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img className="rounded-t-lg" src={p3} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">UI/UX Web + App</h5>
                            <p className="text-gray-700 text-base mb-4">
                            Design of the UI/UX of fanatist for both web usage and mobile apps optimization.

                            </p>
                            <a href="https://www.behance.net/gallery/162440177/UIUX-Design-mockup/modules/916290483" target="_blank" ><div className="flex flex-col items-center"><button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View on Behance</button></div>
                            </a></div>
                        </div>

                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img className="rounded-t-lg" src={p4} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Concept Design</h5>
                            <p className="text-gray-700 text-base mb-4">
                            Livery concept design for Royal Air Maroc with the collaboration of "Ntl9aw fbladna".

                            </p>
                            <a href="https://www.behance.net/gallery/162440219/Livery-Concept-Design/modules/916290773" target="_blank" ><div className="flex flex-col items-center"><button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View on Behance</button></div>
                            </a></div>
                        </div>

                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img className="rounded-t-lg" src={p5} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Commercial Logo Design</h5>
                            <p className="text-gray-700 text-base mb-4">
                            Logo conception and Design for national technology company TECSO.

                            </p>
                            <a href="https://www.behance.net/gallery/162440237/Logo-Design-mockup/modules/916290857" target="_blank" ><div className="flex flex-col items-center"><button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View on Behance</button></div>
                            </a></div>
                        </div>

                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img className="rounded-t-lg" src={p6} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Promotion Video</h5>
                            <p className="text-gray-700 text-base mb-4">
                            "WINGS OF MOROCCO" Promotion video for Royal Air Maroc with the latest simulation technology.
                            </p>
                            <a href="https://youtu.be/oVTWGb1Whsg" target="_blank"><div className="flex flex-col items-center"><button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View on Youtube</button></div></a>
                        </div>
                        </div>
                        
                    </div>

                </div>



                <div ref={contact} className="mt-20 gap-12">

                    <div className="ml-3">
                        <div className="font-regular text-2xl">Get in touch</div>
                        <div className="font-extrabold text-5xl">Contact Me</div>
                        
                    </div>

                    <div className="container my-32 lg:px-6 mx-auto">
                        
                        {/* Section: Design Block */}
                        <section className="mb-20 text-gray-800">
                        
                        <div className="container text-gray-800 px-4 md:px-12">
                            <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6" style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
                            <div className="flex flex-wrap">
                                <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-group mb-6">
                                    <input type="text" name="user_name" value={name} onChange={e=>setName(e.target.value)} className="form-control block 
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name" />
                                    </div>
                                    <div className="form-group mb-6">
                                    <input type="email" name="user_email" value={mail} onChange={e=>setMail(e.target.value)} className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Email address" />
                                    </div>
                                    <div className="form-group mb-6">
                                    <textarea name="message" value={message} onChange={e=>setMessage(e.target.value)} className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            " id="exampleFormControlTextarea13" rows={3} placeholder="Message" defaultValue={""} />
                                    </div>
                                   
                                    <button type="submit" className="
                                w-full
                                px-6
                                py-2.5
                                bg-blue-600
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                hover:bg-blue-700 hover:shadow-lg
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg
                                transition
                                duration-150
                                ease-in-out">Send</button>
                                </form>
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                                <div className="flex flex-wrap">
                                    <div className="lg:mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                        <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                        </div>
                                        <div className="grow ml-6">
                                        <p className="font-bold mb-1">Via Whatsapp</p>
                                        <p className="text-gray-500 text-sm lg:text-base">+2126 27-738567</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    
                                    </div>
                                    <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div className="flex align-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                            </div>
                                        </div>
                                        <div className="grow ml-6">
                                        <p className="font-bold mb-1">Via Mail</p>
                                        <p className="text-gray-500 text-sm lg:text-base">redwanlmati5@gmail.com</p>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                            {info}
                        </div>
                        
                        </section>
                        {/* Section: Design Block */}
                    </div>

                </div>
                    

                    

            </div>          

            
        </div>
        
    </body>

    <footer className="text-center lg:text-left bg-sky-100 text-gray-600 lg:mt-80 font-['Roboto_Slab']">
        
        <div className="mx-6 py-16 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 lg:ml-32">
            <div className>
            <h6 className="
            uppercase
            font-extrabold
            text-2xl
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
            text-sky-700
            "> 
                Thank you for stopping by!
            </h6>
            <p>
                If you have any questions or interested in my services you can contact me at any time!
            </p>
            </div>
            <div className>
            
            
            
            </div>

        </div>
        </div>
        <div className="text-white text-center p-6 bg-sky-700">
        <span>V1.0 © 2023 Copyright</span>
        </div>
    </footer>

    </>
    )
}

export default Home



