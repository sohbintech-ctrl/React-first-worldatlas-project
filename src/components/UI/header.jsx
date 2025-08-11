import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
export const Header=()=>{
    const[show,setShow]=useState(false)
    const handleButtonToggle=()=>{
    return setShow(!show);
    }
    return(
        <header>
        <div className="container">
        <div className="grid navbar-grid">
        <div className="logo">
        <NavLink to="/">
        <h1 className="header-mobile">WorldAtlas</h1>
        </NavLink>
        </div>
        <nav className={`navbar ${show?"menu-mobile":"menu-web"}`}>
            <ul className="nav-bar" onClick={handleButtonToggle}>
             <li>
                 <NavLink to="/">Home</NavLink>
            </li>
             <li>
                 <NavLink to="/about">About</NavLink>
             </li>
             <li>
                <NavLink to="/country">Country</NavLink>
             </li>
             <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            </ul>
        </nav>
        <div className="ham-menu">
            <button className="ham-mobile" onClick={handleButtonToggle}>
                <GiHamburgerMenu/>
            </button>
        </div>
        </div>
        </div>
        </header>
    )
};