import React from "react";
import "./style.css";
import { ReactComponent as SwimmingIcon } from "../../assets/swimming-icon.svg";
import { ReactComponent as MeditationIcon } from "../../assets/meditation-icon.svg";
import { ReactComponent as CyclingIcon } from "../../assets/cycling-icon.svg";
import { ReactComponent as DumbbellIcon } from "../../assets/dumbbell-icon.svg";
import "./style.css";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className='sideBar'>
      <nav className='sideBar_nav'>
        <Link to='/'>
          <MeditationIcon className='nav-icon' />
        </Link>
        <Link to='/'>
          <SwimmingIcon className='nav-icon' />
        </Link>
        <Link to='/'>
          <CyclingIcon className='nav-icon' />
        </Link>
        <Link to='/'>
          <DumbbellIcon className='nav-icon' />
        </Link>
      </nav>
      <p className='copiryght'>Copiryght, SportSee 2020</p>
    </div>
  );
}
export default SideBar;
