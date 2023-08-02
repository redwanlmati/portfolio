import React from 'react'
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser';


import logo from '../logo.png'; 

//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {

    const form = useRef();
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mbxouxl', 'template_omre2pb', form.current, 'Q_nQ7HRx7_XtEMehA')
          .then((result) => {
              if(result.text == "OK" && message && mail && firstName && lastName && phone){
                // Show the "Message Sent" message for 10 seconds
                    setShowMessage(true);
                    setTimeout(() => {
                        setShowMessage(false);
                    }, 10000);
                  setFirstName("");
                  setLastName("");
                  setMail("");
                  setPhone("");
                  setMessage("");
              }
          }, (error) => {
              
          });
    };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [showMessage, setShowMessage] = useState(false);




    const handleFirstNameChange = (firstName) => {setFirstName(firstName)}
    const handleLastNameChange = (lastName) => {setLastName(lastName)}
    const handleMailChange = (mail) => {setMail(mail)}
    const handlePhoneChange = (phone) => {setPhone(phone)}
    const handleMessageChange = (message) => {setMessage(message)}

  return (
    
    
    <>
        <Helmet>
            <title>Redouane Lmati</title>
        </Helmet>

        <body className="lg:w-10/12 ml-auto mr-auto ">
            <div>



              <div>
              
              <section className="bg-white py-20">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                  {/* Contact Details */}
                  <div className="w-full md:w-1/2 px-4 mb-8">
                    <div className="bg-black text-white rounded-lg p-6 shadow-md">
                      <div className="mb-4">
                        <h2 className="text-4xl font-bold mb-4">Contact Me!</h2>
                        <p>Email: redwanlmati@gmail.com</p>
                        <p>Phone: +2126 27-738567</p>
                        <br />
                        <p>Interested in working together and want to connect? If so, please fill out this form and I’ll get back to you. Thanks!</p>
                      </div>
                        <div className="flex flex-wrap items-center justify-center">
                            <Link to="https://www.linkedin.com/in/redouane-lmati-3244451b8/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ fontSize: '30px' }}/></Link>
                            <a href='#' className='m-2' ><InstagramIcon style={{ fontSize: '30px' }}/></a>
                            <a href='mailto: redwanlmati5@gmail.com' className='m-2' ><EmailIcon style={{ fontSize: '30px' }}/></a>
                        </div>
                    </div>

                  {/* Message Sent Notification */}
                  {showMessage && (
                      <div className={`fixed bottom-0 right-0 mb-10 mr-10 bg-green-500 text-white px-4 py-2 rounded-md shadow-md ${
                          showMessage ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-500`}>
                          Message sent successfuly!
                      </div>
                  )}
                  
                  
                </div>
          

                {/* Contact Form */}
                <div className="w-full md:w-1/2 px-4">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={mail}
                          onChange={(e) => setMail(e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="Type your message here"
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray focus:outline-none focus:bg-gray"
                        >
                          Send Message
                        </button>
                        
                      </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

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

export default Contact