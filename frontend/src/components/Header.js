import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Header = () => {
  return (
    // Navigation bar
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        Take your Note
      </Link>
      {/* Hamburger icon */}
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      {/* Menu */}
      <nav className="nav">
        <ul className="menu">
          <li>
            <Link to="/" style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
              <AiOutlinePlusSquare style={{ width: "25px", height: "25px" }} />{" "}
              <span style={{ paddingLeft: "5px" }}>Add Note</span>
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/important">Important</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
