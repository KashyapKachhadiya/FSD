import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../Images/download.jpeg")} alt="logo"
            style={{ height: "90px", width: "90px" }} />
        </NavLink>
        <NavLink to="/home">
          <h2>YourApp</h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;