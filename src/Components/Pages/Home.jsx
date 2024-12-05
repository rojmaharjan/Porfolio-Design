import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../Style/Home.css'

const Home = () => {

const current_time = localStorage.getItem('current_time');

const [theme, settheme] = useState(current_time ? current_time : 'light');

useEffect(()=>{
  localStorage.setItem('current_time', theme)
},[theme])

  return (
    <>
  <div className={`Container ${theme}`}>
  <Navbar theme={theme} settheme={settheme}/>
    <div className="home">
    <div className="header-text">
            <p>Frontend Developer</p>
            <h1>Hello, I'm <span>Roj Maharjan</span> <br /></h1>
          </div>
    <div className="image">
    {theme === 'dark' && <img src="/image.png" alt="Profile" />}
    </div>
    </div>
  </div>

   
    </>
  )
}

export default Home
