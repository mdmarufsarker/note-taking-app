import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
  return (
    // Navigation bar
    <header className="header">
        {/* Logo */}
        <Link to="/" className="logo">Take your Note</Link>
        {/* Hamburger icon */}
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
        {/* Menu */}
        <nav className="nav">
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/important">Important</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
