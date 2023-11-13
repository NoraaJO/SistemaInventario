import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; // Importa FaSearch desde react-icons/fa
import icono1 from "../images/home.png";
import logoutIcon from "../images/logout.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <button className="button">
          <Link to="/home" >
            <img src={icono1} alt="Icono 1" className="navbar-button" />
          </Link>
        </button>
        <div className="navbar-buttons">
          <button className="button">
            <Link to="/logout" >
              <img src={logoutIcon} alt="LogOut" className="navbar-button" />
            </Link>
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
