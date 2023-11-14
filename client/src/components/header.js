import React from 'react';
import './header.css'

function Header(props) {
    return (
        <div className="header">
            <h1 className='name'>Dvise</h1>
            <div className='header-items'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Services</a>
                <a href='#'>Features</a>
                <a href='#'>Contact us</a>
                <button>Get a guide</button>
            </div>
      </div>
    );
}

export default Header;