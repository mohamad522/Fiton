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
    <section className="mb-4" style={{paddingLeft: '20px'}}>
      <h2 className="h1-responsive font-weight-bold text-center my-4" style={{}}>
        Any suggestions or complaints ? Leave your comments here!
      </h2>
      <div className="row">
        <div class="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" onSubmit={sendMail}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                <label for="sender_name" style={{fontSize: 18, fontWeight: 500}}>Name</label>
                  <input type="text" id="sender_name" name="sender_name"
                    className="form-control" placeholder='First' 
                    style={{ backgroundColor: '#ededed', width: 160, borderRadius:'1px'}}
                    value={sender_name} onChange={handleName} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                <label for="sender_email" style={{fontSize: 18, fontWeight: 500}}>Email</label>
                  <input type="email" id="sender_email" name="sender_email" className="form-control"
                   style={{ backgroundColor: '#ededed', width: 320, borderRadius:'1px'}}
                   value={sender_email} onChange={handleEmail} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                <label for="message" style={{fontSize: 18, fontWeight: 500}}>Comment</label>
                <textarea type="text" id="message" name="message" rows="8"
                 className="form-control md-textarea" style={{ backgroundColor: '#ededed',
                  width: 320, borderRadius:'1px'}} value={message} onChange={handlemessage}
                   ></textarea>
                </div>
              </div>
            </div>
            <div style={{paddingLeft: '120px', paddingTop: '10px'}}>
              <button className="btn btn-primary" type='submit' 
               style={{borderRadius:'1px'}}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact