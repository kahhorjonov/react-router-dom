import { NavLink, Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav>
      <NavLink style={NavlinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={NavlinkStyles} to="about">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
