import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="header">
          <h1>Movies app</h1>
        </div>
        <div className="linkSection">
          <Link className="link" to="/home">
            Home
          </Link>
          <Link className="link" to="/favorites">
            Favorites
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
