import React from 'react';
import './header.css';
import {  Button, Dropdown  } from 'antd';
import {Link} from 'react-scroll'

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          About
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Services
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Features
        </a>
      ),
    },
    {
        key: '4',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Contact us
          </a>
        ),
      },
  ];

function Header(props) {
    return (
        <div className="header">
        <div className='s'></div>
            <h1 className='name'>Dvise</h1>
            <div className='header-items'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <Link activeClass="active" 
            to="offer" 
            spy={true} 
            smooth={true} 
            offset={1000} 
            duration={500} 
            href='#'>Services</Link>
            <a href='#'>Features</a>
            <a href='#'>Contact us</a>
            </div>
            <div className='sign'>
              <a href='#'>Sign in</a>
              <img className='user' src={require("../assets/user1.png")} />
            </div>
      </div>
    );
}

export default Header;