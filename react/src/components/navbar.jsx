import React from "react";
import './navbar.css';
 const Navbar = () => {
    return (
        <div>
            <nav>
                <link to='/' classname='nav-link'>Home</link>
                <link to='/about' classname='nav-link'>About</link> 
                <link to='/skills' classname='nav-link'>Skills</link>
                <link to='/contact' classname='nav-link'>Contact</link>
                
            </nav>
        </div>
    )
}