import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

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
  
      </div>
   </>
  )
}

export default Contact
