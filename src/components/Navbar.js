import { Link, useFetcher } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo_dark.svg';
import { FaMoon, FaSun, FaGithub, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';


function Navbar({ menuOpen, toggleMenu, }) {
  const [theme, setTheme] = useState(() => {
    // localStorage se last theme load karo
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <div className="left_nav">
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>
        <Link to="/"> <img src={logo} alt="logo" className="logo" /></Link>
        <input type="text" placeholder="Search..." className="search-input search-style" />
      </div>

      <div className="right_nav">
        <FaSearch className="icon" id="search-icon" />
        <Link to="/learn" className='nav_link'>Learn</Link>
        <Link to="/reference" className='nav_link'>Reference</Link>
        <Link to="/community" className='nav_link'>Community</Link>
        <Link to="/blog" className='nav_link'>Blog</Link>
        <span onClick={toggleTheme}>{theme === 'light' ? <FaMoon className="icon" /> : <FaSun className="icon" />}</span>
        <MdTranslate className="icon" />
        <a href="https://github.com/login"  target='_blank' rel="noopener noreferrer"><FaGithub className="icon" /></a>
      </div>
    </nav>
  );
}

export default Navbar;
