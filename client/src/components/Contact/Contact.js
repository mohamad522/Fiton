import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import '../../css/contactus.css'

const Contact = () => {
  const [sender_name, set_sender_name] = useState('');
  const [sender_email, set_sender_email] = useState('');
  const [message, set_message] = useState('');
  const handleName = (e) =>{
    set_sender_name(e.target.value)
  }
  const handleEmail=(e) =>{
    set_sender_email(e.target.value)
  }
  const handlemessage = (e) => {
    set_message(e.target.value)
  }
  const sendMail = (e) => {
    e.preventDefault();
    send(
      'service_kgggipf',
      'template_x2yfl4d',
      {sender_name, sender_email, message},
      '2RnBU3GtDCb3svKcY'
    )
    .then((response) => {
      console.log('Message sent successfully', response.status, response.text)
    })
    .catch((err) => {
      console.log('Failed', err)
    })
  }
  return (
    <>
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={sendMail}>
        <input type="text" name="sender_name" value={sender_name} onChange={handleName} required placeholder="your name"/>
        <br/>
        <input type="email" name="sender_email" value={sender_email} onChange={handleEmail} required placeholder="your email id"/>
        <br/>
        <textarea name="message" value={message} onChange={handlemessage} required placeholder="your message"/>
        <br/>
        <button type="submit">Send mail</button>
      </form>
    </div>
    </>
  )
}

export default Contact