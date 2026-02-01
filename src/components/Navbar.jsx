import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <nav className="navbar">
        <div className="logo"><NavLink to="/">Maheswaran Kasi</NavLink></div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      {/* Side Menu */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <NavLink to='/' onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to='/about' onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to='/skills' onClick={toggleMenu}>
          Skills
        </NavLink>
        <NavLink to='/projects' onClick={toggleMenu}>
          Projects
        </NavLink>
        <NavLink to='/contact' onClick={toggleMenu}>
          Contact
        </NavLink>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
