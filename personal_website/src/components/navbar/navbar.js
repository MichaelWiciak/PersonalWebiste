import React from "react";
import "./navbar.css";
import logo from "../../assets/Michael Wiciak-logos_white.png";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";
import { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="LogoContainer">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuButton"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuButton"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuButton"
        >
          Portfolio
        </Link>
        {/* A section about the Teams. It will take the user to a new page which will be about the Teams I am part of */}
        <Link
          activeClass="active"
          to="teams"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuButton"
        >
          Teams
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          const contactElement = document.getElementById("contact");
          if (contactElement) {
            contactElement.scrollIntoView({
              block: "end",
              behavior: "smooth",
              offset: -50,
            });
          }
        }}
      >
        <img src={contact} alt="menu" className="desktopMenuImg" />
        Contact Me
      </button>

      <img
        src={menu}
        alt="logo"
        className="mobMenu"
        onClick={() => {
          console.log('Clicked "mobMenu" image');
          console.log("showMenu: ", showMenu);
          setShowMenu(!showMenu);
          console.log("After setShowMenu(!showMenu)");
          console.log("showMenu: ", showMenu);
        }}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
