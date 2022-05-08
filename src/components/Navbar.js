import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth } from "./auth";

const Navbar = () => {
  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink style={NavlinkStyles} to="/">
        Home
      </NavLink>

      <NavLink style={NavlinkStyles} to="about">
        About
      </NavLink>

      <NavLink style={NavlinkStyles} to="products">
        Products
      </NavLink>

      <NavLink style={NavlinkStyles} to="users">
        Users
      </NavLink>

      <NavLink style={NavlinkStyles} to="profile">
        Profile
      </NavLink>

      {!auth.user && (
        <NavLink style={NavlinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
