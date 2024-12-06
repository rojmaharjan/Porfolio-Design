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
              <img src="/Roj.png" alt="Roj" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
              I’m a passionate frontend developer with beginner level of experience in React.js, creating clean and user-friendly web interfaces. Currently honing my skills through on doing Internship in <a href="http://https://geniussystems.com.np/">Genuis System Pvt,Ltd</a>. My aim to build seamless digital experiences. When I’m not coding, I’m exploring creative ideas and tackling new challenges in tech.
              </p>
              <h3>Connect with me</h3>
              <div classname="socialmediia">
                <div className="icons">
                <a href="" className="icons-contact"  style={{marginRight: 30}} data-toggle="tooltip" data-placement="bottom" title="facebook"><i className="fa-brands fa-facebook" /></a>
                <a href="" className="icons-contact"  style={{marginRight: 30}} data-toggle="tooltip" data-placement="bottom" title="instagram"><i className="fa-brands fa-instagram" /></a>
                <a href="" className="icons-contact"  style={{marginRight: 30}} data-toggle="tooltip" data-placement="bottom" title="linkedin"><i className="fa-brands fa-linkedin" /></a>
                <a href="" className="icons-contact"  style={{marginRight: 30}} data-toggle="tooltip" data-placement="bottom" title="github"><i className="fa-brands fa-github" /></a>
                </div>
                </div>
            </div>
          </div>
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
  
              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                <div className="tab-title">
                  <ul className='skillul'>
                    <li ><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, ReactJS</li><br/>
                    <li ><strong>Backend:</strong> PHP, MySQL, MongoDB</li><br/>
                    <li ><strong>Frameworks/Tools:</strong> ReactJS, .NET Framework</li><br/>
                    <li ><strong>Networking:</strong> Cisco Packet Tracer</li>
                  </ul>
                </div>
              </div>
  
              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="Experience">
                <div className="tab-title">
                <ul className='experince'>
                    <h3><strong>Worked as a Sculpture at a self-employed</strong></h3>
                  </ul>
                </div>
              </div>
  
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="Education">
                <div className="table">
                <table>
                  <tbody>
                  <tr>
                    <th>Level</th>
                    <th>Passed Year</th>
                    <th>Board</th>
                    <th>Grade</th>
                    <th>Institution</th>
                  </tr>
                  <tr>
                    <td>Bachelor of Computer Application</td>
                    <td>Running (7th Semester)</td>
                    <td>TU</td>
                    <td>--</td>
                    <td>Jana Bhawana Campus, Pyangaun</td>
                  </tr>
                  <tr>
                    <td>+2</td>
                    <td>2077</td>
                    <td>NEB</td>
                    <td>3.14</td>
                    <td>Pinnacle academy college</td>
                  </tr>
                  <tr>
                    <td>SEE</td>
                    <td>2074</td>
                    <td>NEB</td>
                    <td>3.50 </td>
                    <td>St.paul School</td>
                  </tr>
                  </tbody>
                </table>
                </div>
              </div>
        </div>
      </div>
  
      </div>
    </>
  )
}

export default About
