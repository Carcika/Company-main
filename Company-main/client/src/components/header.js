import React, {useEffect, useState} from 'react';
import './header.css';
import {  Button, Dropdown  } from 'antd';
import {Link} from 'react-scroll'
import Axios from 'axios'

function Header(props) {

  const [loginStatus, setLoginStatus] = useState('Sign in')

  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=> {
      if(response.data.loggedIn == true){
        setLoginStatus(response.data.user[0].username)
      }
      console.log(response)
    })
  }, [])

    return (
        <div className="header">
        <div className='s'></div>
            <h1 className='name'>Dvise</h1>
            <div className='header-items'>
            <Link activeClass="active" 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={800} 
            href='#'>Home</Link>
            <Link activeClass="active" 
            to="offer" 
            spy={true} 
            smooth={true} 
            offset={10} 
            duration={800} 
            href='#'>Services</Link>
            <Link activeClass="active" 
            to="aboutUs" 
            spy={true} 
            smooth={true} 
            offset={10} 
            duration={1000} 
            href='#'>About</Link>
            <a href='#'>Reviews</a>
            <a href='#'>Contact us</a>
            </div>
            <div className='sign'>
              <a href='/sign' className={loginStatus == 'Sign in' ? 'active' : 'inactive'}>{loginStatus}</a>
              <a style={{right: '20%', position: 'relative', color: "#083E9E"}} className={loginStatus == 'Sign in' ? 'inactive' : 'active'}>{loginStatus}</a>
              <img className='user' src={require("../assets/user1.png")} />
            </div>
      </div>
    );
}

export default Header;