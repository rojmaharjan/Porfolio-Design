import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Service from './Components/Pages/Service'

function App() {

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path="/Services" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>} />
    </Routes>

   
    </>
  )
}

export default App
