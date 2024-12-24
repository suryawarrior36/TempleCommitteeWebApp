import React, { useRef } from 'react';
import './ContactUs.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yys863h', 'template_v1dhyns', form.current, {
        publicKey: 'Dnv20BzFdSaAvvbf2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <div className='contact-el'>
        <div className='contact-head'>
          <h1>Contact Us</h1>
          <hr></hr>
        </div>
        <div className='contact-content'>
        <div className='map-el'>
        <iframe
    className="map-frame" 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.51670240781536!2d80.14308120125617!3d13.016580558522747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f626895ca9%3A0x32528d9dd1139e2!2sNagathamman%20Temple!5e1!3m2!1sen!2sin!4v1730490630473!5m2!1sen!2sin"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Temple Location"
  ></iframe>
        </div>
        <div className='contact-form'>
          <h2 className='ask-us'>"Ask Us Your Queries"</h2>
          <hr></hr>
          <form ref={form} onSubmit={sendEmail}>
          <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">First and last name</InputGroup.Text>
      <Form.Control name='first_name' aria-label="First name" />
      <Form.Control name='last_name' aria-label="Last name" />
    </InputGroup>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Phone Number</InputGroup.Text>
        <Form.Control
        type='number'
          placeholder="94xxxxx345"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name='mob_num'
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">E-Mail</InputGroup.Text>
        <Form.Control
        type='email'
          placeholder="xyz@email.com"
          aria-label="number"
          aria-describedby="basic-addon1"
          name='email_id'
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Queries</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" name='message' />
      </InputGroup>

      <Button className='btn-submit' as="input" type="submit" value="Submit" onClick={sendEmail} />
          </form>
        
        </div>
        </div>
        
      </div>
    </>
  );
}

export default ContactUs;
