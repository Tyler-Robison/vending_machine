import React from "react";
import { NavLink } from "react-router-dom"
import './Navbar.css'

const NavBar = () => {
    return (
        <nav className="Navbar">
            <NavLink to='/pop-tart'>Pop-Tarts</NavLink>
            <NavLink to='/candy'>Candy</NavLink>
            <NavLink to='/gum'>Gum</NavLink>
        </nav>
    );
}

export default NavBar;