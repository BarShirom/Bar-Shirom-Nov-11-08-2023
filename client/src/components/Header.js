import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css"


const Header = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Movies app</h1>
        <Link className="link" to="/home">Home</Link>
        <Link className="link" to="/favorites">Favorites</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
