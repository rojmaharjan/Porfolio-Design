import React from 'react';
import { Link } from 'react-router-dom';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = ({ theme, settheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? settheme('dark') : settheme('light');
  };

  return (
    <>
      <div className="navbar">
        <Link to="/"><img src="/roj logo.png" alt="Roj" className="logo" /></Link>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Services"><li>Service</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img
            src={theme === 'light' ? search_icon_light : search_icon_dark}
            alt=""
          />
        </div>
        <img
          onClick={toggle_mode} // Correctly calling the function
          src={theme === 'light' ? toggle_light : toggle_dark}
          alt=""
          className="toggle-icon"
        />
      </div>
    </>
  );
};

export default Navbar;
