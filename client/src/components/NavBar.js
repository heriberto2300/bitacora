import React from "react";
import { NavLink } from "react-router-dom";

import '../stylesheets/NavBar.css';

function Header() {
  return(
    <div className="nav-bar">
      <ul className="nav-links">
        <li><NavLink to="/home">Inicio</NavLink></li>
        <li><NavLink to="/courses">Materias</NavLink></li>
        <li><NavLink to="/profile">Perfil</NavLink></li>
      </ul>      
    </div>
  );
}

export default Header;