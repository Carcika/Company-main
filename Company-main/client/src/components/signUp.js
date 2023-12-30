import React, {useState} from 'react';
import './signUp.css'
import Axios from 'axios'


export default function SignUp() {

  const [emailReg, setEmail] = useState('')
  const [passwordReg, setPassword] = useState('')
  const [usernameReg, setUsername] = useState('')

  const Register = () => {
    Axios.post("http://localhost:3001/register", {username: usernameReg, email: emailReg, password: passwordReg}).then((response) => {console.log(response)})
  }

  return (
    <div className='signIn'>
      <h1 className='signText'>Sign Up</h1>
      <div className='signUpInputs'>
      <div className='input' style={{display: 'flex', flexDirection: 'column'}}>
          <label>Username</label>
          <input type='text' placeholder='username' onChange={(e) => {setUsername(e.target.value)}} />
        </div>
        <div className='input' style={{display: 'flex', flexDirection: 'column'}}>
          <label>Email</label>
          <input type='text' placeholder='example@gmail.com' onChange={(e) => {setEmail(e.target.value)}} />
        </div>
        <div className='input' style={{display: 'flex', flexDirection: 'column'}}>
          <label>Password</label>
          <input type='password' placeholder='password' onChange={(e) => {setPassword(e.target.value)}} />
        </div>
        <div className='input' style={{display: 'flex', flexDirection: 'column'}}>
          <label>Repeat password</label>
          <input type='password' placeholder='Repeat password' />
        </div>
      </div>
      <div className='buttons' style={{top: "82%"}}>
      <button className='signInButton' style={{width: "65%"}} onClick={Register}>Sign Up</button>
      </div>
    </div>
  )
}
