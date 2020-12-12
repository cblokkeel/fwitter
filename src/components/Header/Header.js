import React from 'react'
import './header.css'

const Header = ({ handleLogout, username }) => {
    return (
        <header className='header'>
            <a href='#' className='header-title'>Fwitter</a>
            <nav className='navlinks'>
                <a href='#' className='navlink'>{username}</a>
                <a href='#' className='navlink' onClick={handleLogout}>Log Out</a>
            </nav>
        </header>
    );
};

export default Header;