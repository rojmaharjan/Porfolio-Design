import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import '../Style/Service.css'

const Service = () => {
  const current_time = localStorage.getItem('current_time');

  const [theme, settheme] = useState(current_time ? current_time : 'light');
  
  useEffect(()=>{
    localStorage.setItem('current_time', theme)
  },[theme])

  return (
    <>
   <div className={`Container ${theme}`}>
         <Navbar theme={theme} settheme={settheme}/>
         <div id="Services">
        <div className="container">
          <h1 className="sub-title1">My Services</h1>
          <div className="services-list">
            <div>
              <h2>Web Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla optio ipsa corrupti! Ad neque consectetur explicabo ipsam eos amet?
              </p>
              <a href="#" className="href">Learn more</a>
            </div>
            <div>
              <h2>UI Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla optio ipsa corrupti! Ad neque consectetur explicabo ipsam eos amet?
              </p>
              <a href="#" className="href">Learn more</a>
            </div>
            <div>
              <h2>UX Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla optio ipsa corrupti! Ad neque consectetur explicabo ipsam eos amet?
              </p>
              <a href="#" className="href">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Service
