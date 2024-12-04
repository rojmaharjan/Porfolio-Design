import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../Style/About.css'

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const current_time = localStorage.getItem('current_time');

  const [theme, settheme] = useState(current_time ? current_time : 'light');
  
  useEffect(()=>{
    localStorage.setItem('current_time', theme)
  },[theme])
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className={`Container ${theme}`}>
         <Navbar theme={theme} settheme={settheme}/>
         <div id="About">
        
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="/roj.jpg" alt="Roj" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                A excepturi ut aspernatur quibusdam voluptates perferendis, sit quam veritatis repellat modi tempora veniam hic magni eaque aliquam!
                Quam, labore totam officia sapiente cupiditate nulla architecto sunt fuga consequatur maiores? Quas quae maxime accusantium odit sunt voluptas.
              </p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                  onClick={() => handleTabClick('skills')}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                  onClick={() => handleTabClick('experience')}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                  onClick={() => handleTabClick('education')}
                >
                  Education
                </p>
              </div>
  
              {/* <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                <ul>
                  <li><span>UI/UX</span><br />Designing web app interface</li>
                  <li><span>Web Development</span><br />Web app Development</li>
                  <li><span>App Development</span><br />Building Android iOS apps</li>
                </ul>
              </div>
  
              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="Experience">
                <ul>
                  <li><span>UI/UX</span><br />ABCHJDMDMDMMDMDMDMDDMDMDMD</li>
                  <li><span>Web Development</span><br />Web app Development</li>
                  <li><span>App Development</span><br />Building Android iOS apps</li>
                </ul>
              </div>
  
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="Education">
                <ul>
                  <li><span>UI/UX</span><br />ANAJNCJDNDJCMDJDMDMF</li>
                  <li><span>Web Development</span><br />Web app Development</li>
                  <li><span>App Development</span><br />Building Android iOS apps</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
  
      </div>
    </>
  )
}

export default About
