import React, { useState } from 'react'
import './AboutUs.css'
import NagathammanKovil from '../../assets/NagathammanKovil.png';
import SampleTemple2 from '../../assets/about-amman.jpg';
import SampleTempleB2 from '../../assets/sampletemple-b2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const AboutUs = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <div className='about-el'>
        <div className='about-left'>
        <div className='c-edit'>
        <Carousel>
        <Carousel.Item>
    <img
      className="d-block w-100"
      src={NagathammanKovil}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SampleTemple2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SampleTempleB2}
      alt="Third slide"
    />
  </Carousel.Item>
          </Carousel>
          </div>
        </div>
        <div className='about-right'>
            <h1 className='about-head'>About Us</h1>
            <hr></hr>
            <p className='about-text'>Sri Nagathamman Kovil in Gerugambakkam, Bhoomadevi Nagar, is a sacred place where devotion and community come together. Built on a site once revered for a sacred snake burrow, the temple has grown into a symbol of faith for the local residents and visitors alike. Dedicated to Goddess Nagathamman, it stands as a peaceful haven for spiritual seekers, fostering a sense of unity and devotion among all who come to offer prayers.</p>
            <p className='about-text'>The temple features a serene ambiance, with the divine Nagathamman statue as the main deity, alongside sanctums for Vinayagar and Murugar, and a special mandapam marking the original sacred site. Its towering gopuram with a kalasam on top adds to its grandeur, making it a cherished spiritual landmark where devotees gather to seek blessings and celebrate religious occasions.</p>
            {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='para-l'>
              <h3>In the peaceful area of Gerugambakkam, Bhoomadevi Nagar, our temple stands as a symbol of faith and devotion. About fifty years ago, a snake burrow was formed at this spot, surrounded by lush green fields. The people living nearby believed the snake burrow was sacred and started worshiping it with great respect.</h3>
          </div>
        </Modal.Body>
      </Modal> */}
        </div>
        </div>
        
      
    </>
  )
}
export default AboutUs