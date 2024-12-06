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
          <h1 className="sub-title1">My Projects</h1>
          <div className="services-list">
            <div className='project'>
              <h2>E-Voting System</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla optio ipsa corrupti! Ad neque consectetur explicabo ipsam eos amet?
              </p>
              <p><a href="http://">Click here to visit the site</a></p>
            </div>
            <div className='project'>
              <h2>Order Up</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla optio ipsa corrupti! Ad neque consectetur explicabo ipsam eos amet?
              </p>
              <p><a href="http://">Click here to visit the site</a></p>
            </div>
            <div className='project'>
            <div className="img">
                <img src="/Recipe.png" alt="img" />
              </div>
              <h2>Recipe Info </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla optio ipsa corrupti! Ad neque consectetur explicabo ipsam eos amet?
              </p>
              <p><a href="http://">Click here to visit the site</a></p>
            </div>
            <div className='project'>
              <div className="img">
                <img src="/Counter.png" alt="img" />
              </div>
              <h2>Counter System</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla optio ipsa corrupti! Ad neque consectetur explicabo ipsam eos amet?
              </p>
              <p><a href="http://">Click here to visit the site</a></p>
            </div>
            <div className='project'>
            <div className="img">
                <img src="/Porfolio.png" alt="img" />
              </div>
              <h2>Porfolio Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla optio ipsa corrupti! Ad neque consectetur explicabo ipsam eos amet?
              </p>
              <p><a href="http://">Click here to visit the site</a></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Service
