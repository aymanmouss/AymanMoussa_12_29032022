import React from "react";
import { ReactComponent as Logo } from "../../assets/SportSee-logo.svg";
import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <div className='header'>
      <nav>
        <Link to='/'>
          <Logo className='logo' alt='SportSee Logo' />
        </Link>
        <Link className='nav-item' to='/'>
          Accueil
        </Link>
        <Link className='nav-item' to='/'>
          Profil
        </Link>
        <Link className='nav-item' to='/'>
          Réglage
        </Link>
        <Link className='nav-item' to='/'>
          Communauté
        </Link>
      </nav>
    </div>
  );
}
export default Header;
