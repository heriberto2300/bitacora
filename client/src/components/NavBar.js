import React from "react";
import { NavLink } from "react-router-dom";
import { BsHouseFill, BsGridFill, BsPersonFill } from 'react-icons/bs';

import '../stylesheets/NavBar.css';

function Header({ title }) {
  return(
    <div className="nav-bar">
      <div className="nav-title">
        {title}
      </div>
      <ul className="nav-links">
        <li>
          <BsHouseFill/>
          <NavLink to="/home">
            Inicio
          </NavLink>
        </li>
        <li>
          <BsGridFill/>            
          <NavLink to="/courses">
            Materias
          </NavLink>
        </li>
        <li>
          <BsPersonFill/>
          <NavLink to="/profile">
            Perfil
          </NavLink>
        </li>
      </ul>      
    </div>
  );
}

export default Header;