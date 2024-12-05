import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import '../Style/Contact.css'

const Contact = () => {
  const current_time = localStorage.getItem('current_time');

  const [theme, settheme] = useState(current_time ? current_time : 'light');
  
  useEffect(()=>{
    localStorage.setItem('current_time', theme)
  },[theme])

  return (
   <>
  <div className={`Container ${theme}`}>
         <Navbar theme={theme} settheme={settheme}/>
        <section className='contact'>
          <div className="content">
            <h1>Contact Us</h1>
          </div>
          <div className="containerr">
            <div className="contactInfo">
              <div className="box">
                <div className="icon"><b><i class="fa-solid fa-location-dot"></i></b></div>
                <div className="text">
                  <h3>Address:</h3>
                  <p><a href="https://maps.app.goo.gl/DavM5zLTpiuN6y3c8" target="_blank">Chapagaun, Lalitpur</a></p>
                </div>
              </div>
              <div className="box">
                <div className="icon"><b><i class="fa-solid fa-phone"></i></b></div>
                <div className="text">
                  <h3>Phone:</h3>
                  <p><a href="tel:+986925487625">986925487625</a></p>
                </div>
              </div>
              <div className="box">
                <div className="icon"><b><i class="fa-solid fa-envelope"></i></b></div>
                <div className="text">
                  <h3>Email:</h3>
                  <p><a href="mailto:mhjroj78@gamil.com">mhjroj78@gamil.com</a></p>
                </div>
              </div>
            </div>
            <div className="contactForm">
              <form action="https://api.web3forms.com/submit" method="POST">
                <h2>Send Message</h2>
                <input type="hidden" name="access_key" value="6fe9d86e-177c-478f-9b54-0f98e9bfd723"></input>
                <div className="inpubox">
                  <input type="text" name="name" required="required" />
                  <span>Full Name</span>
                </div>
                <div className="inpubox">
                  <input type="email" id="email" name="email" required  />
                  <span>Email</span>
                </div>
                <div className="inpubox">
                  <textarea name="Message" id="" required="required"></textarea>
                  <span>Message</span>
                </div>
                <div className="inpubox">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
   </>
  )
}

export default Contact
