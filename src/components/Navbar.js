// Navbar.js
import React from 'react';
import {BiBell, BiChevronDown} from "react-icons/bi"; // Importing icons from react-icons

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left-section">
            </div>
            <div className="right-section">
                <BiBell size={32} style={{ marginRight: '15px' }} /> {/* Bell icon */}
                <img src="Ellipse.png" alt="Profile" className="profile-pic"/>
                <BiChevronDown size={24} /> {/* Chevron down icon */}
            </div>
        </div>
    );
};

export default Navbar;
