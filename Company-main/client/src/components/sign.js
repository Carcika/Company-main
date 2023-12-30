import React, {useEffect, useState} from 'react';
import './sign.css'
import Axios from 'axios'

export default function Sign() {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState('')
  const [active, setActive] = useState(false)

  const Login = () => {
    Axios.post("http://localhost:3001/login",
    {email: loginEmail, password: loginPassword})
    .then((response) =>{
      if(response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus('')
        setActive(true)
      }
    })
  }

  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=> {
      if(response.data.loggedIn == true){
      setLoginStatus(response.data.user[0].username)
      }
    })
  }, [])

  return (
    <div className='signIn'>
      <h1 className='signText'>Sign in</h1>
      <div className='inputs'>
        <div className='input' style={{display: 'flex', flexDirection: 'column'}}>
          <label>Email</label>
          <input type='text' placeholder='example@gmail.com' onChange={(e) => {setLoginEmail(e.target.value)}} />
        </div>
        <div className='input' style={{display: 'flex', flexDirection: 'column'}}>
          <label>Password</label>
          <input type='password' placeholder='password' onKeyUp={Login} onChange={(e) => {setLoginPassword(e.target.value)}} />
        </div>
      </div>
      <div className='buttons'>
      <button className='signInButton' onClick={Login}><a href={active == true ? '/' : null}>Sign in</a></button>
      <button className='signUp'><a href='/signup'>Sign up</a></button>
      </div>
    </div>
  )
}
