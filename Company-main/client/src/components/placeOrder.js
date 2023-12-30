import React, { useRef, useEffect, useState } from 'react';
import Axios from 'axios'
import emailjs from '@emailjs/browser';

export default function PlaceOrder() {

    const [loginStatus, setLoginStatus] = useState('')
    const [loginEmail, setLoginEmail] = useState('')

  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response)=> {
      if(response.data.loggedIn == true){
        setLoginStatus(response.data.user[0].username)
        setLoginEmail(response.data.user[0].email)
      }
      console.log(response)
    })
  }, [])

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5x57hag', 'template_ls3hs2s', form.current, '8J7X0leMa1qCv4sIw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" value={loginStatus} readOnly />
            <label>Email</label>
            <input type="email" name="from_email" value={loginEmail} readOnly />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}
