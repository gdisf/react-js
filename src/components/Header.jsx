import React from 'react';

// Exercise 2: Set It Up
// write a functional component
// make it a ul with a class name of Header
// make four li: GDInsta, Home, About, Profile
// Put class name of Logo on the li element with GDInsta
// export the component!

const Header = () => {
    return (
        <ul className="Header">
            <li className="Logo">
                GDInsta
            </li>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Profile
            </li>
        </ul>
    );
};

export default Header;
