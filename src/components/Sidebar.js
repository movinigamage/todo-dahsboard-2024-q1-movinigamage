// // Sidebar.js
// import React, { useState } from 'react';
// import { FiMenu, FiHome } from 'react-icons/fi';
//
// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(true); // Ensures sidebar starts collapsed
//
//     const toggleSidebar = () => {
//         setIsOpen(!isOpen); // Toggle the isOpen state
//     };
//
//     return (
//         <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
//             <div className="menu-icon" onClick={toggleSidebar}>
//                 <FiMenu size={24} />
//             </div>
//             <div className="sidebar-header">Acmy Solutions</div>
//             <div className="sidebar-content">
//                 <FiHome size={20} /><span>Dashboard</span>
//             </div>
//         </div>
//     );
// };
//
// export default Sidebar;

// Sidebar.js
import React from 'react';
import { FiMenu, FiHome } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
            <div className="menu-icon" onClick={toggleSidebar}>
                <FiMenu size={24} />
            </div>
            <div className="sidebar-header">Acmy Solutions</div>
            <div className="sidebar-content">
                <FiHome size={20} /><span>Dashboard</span>
            </div>
        </div>
    );
};

export default Sidebar;
