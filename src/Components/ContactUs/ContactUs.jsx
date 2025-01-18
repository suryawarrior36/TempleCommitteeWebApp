import React, { useRef, useState } from 'react';
import './ContactUs.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const fileInput = formData.get('user_image'); // Access the uploaded file

    if (fileInput) {
      const reader = new FileReader();
      reader.readAsDataURL(fileInput); // Convert the image file to Base64

      reader.onload = () => {
        const base64Image = reader.result; // Base64 string of the image

        // Append the Base64 string to formData
        formData.set('user_image', base64Image);

        emailjs
          .sendForm('service_yys863h', 'template_v1dhyns', formData, {
            publicKey: 'Dnv20BzFdSaAvvbf2',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setSuccessMessage('Your query has been forwarded.');
              form.current.reset(); // Clear the form
            },
            (error) => {
              console.log('FAILED...', error.text);
              setSuccessMessage('Failed to send your query. Please try again.');
            }
          );
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        setSuccessMessage('Failed to process the uploaded image.');
      };
    } else {
      // If no file is uploaded, proceed without the image
      emailjs
        .sendForm('service_yys863h', 'template_v1dhyns', form.current, {
          publicKey: 'Dnv20BzFdSaAvvbf2',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSuccessMessage('Your query has been forwarded.');
            form.current.reset(); // Clear the form
          },
          (error) => {
            console.log('FAILED...', error.text);
            setSuccessMessage('Failed to send your query. Please try again.');
          }
        );
    }
  };

  return (
    <>
      <div className="contact-el">
        <div className="contact-head">
          <h1>Contact Us</h1>
          <hr />
        </div>
        <div className="contact-content">
          <div className="map-el">
            <iframe
              className="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.51670240781536!2d80.14308120125617!3d13.016580558522747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f626895ca9%3A0x32528d9dd1139e2!2sNagathamman%20Temple!5e1!3m2!1sen!2sin!4v1730490630473!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Temple Location"
            ></iframe>
          </div>
          <div className="contact-form">
            <h2 className="ask-us">"Ask Us Your Queries"</h2>
            <hr />
            <form ref={form} onSubmit={sendEmail}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  First and Last Name
                </InputGroup.Text>
                <Form.Control name="first_name" aria-label="First name" />
                <Form.Control name="last_name" aria-label="Last name" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Phone Number</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="94xxxxx345"
                  aria-label="Phone number"
                  aria-describedby="basic-addon1"
                  name="mob_num"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">E-Mail</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="xyz@email.com"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  name="email_id"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Queries</InputGroup.Text>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  name="message"
                />
              </InputGroup>
              {/* New Image Upload Field */}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Upload Image</InputGroup.Text>
                <Form.Control
                  type="file"
                  name="user_image"
                  accept="image/*"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Button
                className="btn-submit"
                as="input"
                type="submit"
                value="Submit"
              />
            </form>
            {/* Display success message */}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
