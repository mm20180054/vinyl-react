import React from "react";
import { Link } from "react-router-dom";
import { BsVinyl } from "react-icons/bs";

function NavBar({ numberOfRentedVinyls }) {
  return (
    <nav className="navBar">
      <Link to="/" className="site-title">
        Vinyl store
      </Link>
      <ul>
        <li className="nav-item">
          <Link to="/about" className="item">
            About us
          </Link>
        </li>
        <Link to="/rent" className="rent-item">
          <>
            <BsVinyl className="rent-icon" />
            <span className="num-vinyls">{numberOfRentedVinyls}</span>
          </>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;