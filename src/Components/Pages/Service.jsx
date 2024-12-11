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
            <div className="img">
                <img src="/Evoting.png" alt="img" />
              </div>
              <h2>E-Voting System</h2>
              <p>
              An E-voting system is a digital platform that allows eligible voters to cast their votes electronically in elections.E-voting systems aim to increase accessibility, reduce fraud election and process by providing a more convenient and faster alternative to traditional paper-based voting.
              </p>
              <p><a href="https://electronics-voting-system.vercel.app/" style={{color:'rgb(88, 88, 238)'}}>Click here to visit the site</a></p>
            </div>
            <div className='project'>
            <div className="img">
                <img src="/Orderup.png" alt="img" />
              </div>
              <h2>Order Up</h2>
              <p>
              A Order Up System is an online platform that enables users to order food from restaurants and delivered to their desired location.Customers can browse menus, customize their orders, and make payments digitally through the system.It is only a frontend website that i build.It's not completed yet.
              </p>
              <p><a href="https://frontend-food-delivery-iota.vercel.app/" style={{color:'rgb(88, 88, 238)'}}>Click here to visit the site</a></p>
            </div>
            <div className='project'>
            <div className="img">
                <img src="/Recipe.png" alt="img" />
              </div>
              <h2>Recipe Info </h2>
              <p>
              It is a user interface for adding a new recipe in a Recipe Information System.It includes input fields for the recipe name, ingredients, and a description of the recipe. It's a responsive and user-friendly, with buttons to add recipe, edit and delete to make it easy to add and manage recipes.
              </p>
              <p><a href="https://recipe-food-info-display.vercel.app/" style={{color:'rgb(88, 88, 238)'}}>Click here to visit the site</a></p>
            </div>
            <div className='project'>
              <div className="img">
                <img src="/Counter.png" alt="img" />
              </div>
              <h2>Counter System</h2>
              <p>
              A Counter Application is a simple digital tool used to increment, decrement, or reset a numerical count and with also time counting.  It typically features buttons for increasing or decreasing the count and a reset button to return the count to zero and start and stop the time.
              </p>
              <p><a href="https://counter-application-rho.vercel.app/" style={{color:'rgb(88, 88, 238)'}}>Click here to visit the site</a></p>
            </div>
            <div className='project'>
            <div className="img">
                <img src="/Porfolio.png" alt="img" />
              </div>
              <h2>Porfolio Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla optio ipsa corrupti! Ad neque consectetur explicabo ipsam eos amet?
              </p>
              <a href="https://github.com/rojmaharjan/Porfolio-Design" style={{color:'rgb(88, 88, 238)'}}>Click here to visit the site</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Service
