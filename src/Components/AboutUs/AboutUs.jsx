import React, { useState } from 'react'
import './AboutUs.css'
import NagathammanKovil from '../../assets/NagathammanKovil.png';
import SampleTemple2 from '../../assets/sampletemple2.jpg';
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
            <div className='abt-btn'>
            <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>
            </div>
            

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            About Us & History
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='abt-list'>
          <li>Nestled in the serene locality of Gerugambakkam, Bhoomadevi Nagar, our temple stands as a testament to the deep-rooted faith and spiritual history of the area. Over fifty years ago, a humble snake burrow was discovered in this very spot, surrounded by lush crop fields. The locals, deeply connected to the land and its natural sanctity, began worshipping this burrow, believing it to be a sacred symbol of divine presence.</li>

          <li>Over time, the fields around the burrow were divided into plots, and the area became a neighborhood as people built homes and moved in. Despite the changes, the snake burrow remained special to the residents. To honor it, they built a small temple dedicated to Nagathamman and began worshiping there.</li>

          <li>Fast forward to today, and the temple has undergone a magnificent transformation, thanks to the tireless efforts of the temple committee. The temple now features a stunning seated statue of Nagathamman as the Moolavar, beautifully crafted and placed in the main sanctum. Outside the temple, devotees are greeted by statues of Lord Vinayagar, Lord Murugar, and a Mandapam dedicated to the revered snake burrow, which continues to be a place of reverence and blessing.</li>

          <li>One of the most striking features of the temple is the 21-foot tall Rajagopuram, a beacon of divinity, which towers above the temple complex. On top of the Gopuram stands a gleaming Kalasam, symbolizing the protection and blessings of the divine powers.</li>

          <li>In line with sacred traditions, the Kumbabishekam ceremony, following the meticulous Agama Vithi, was conducted on [month], [date], [year]. The ceremony was a grand celebration, marking the completion of the temple’s reconstruction. Today, Sri Nagathamman Kovil stands as a place of solace, worship, and community. Devotees from various corners of the city and beyond visit our temple to seek blessings, peace, and prosperity.</li>

          <li>As we continue to nurture the temple’s growth and the vibrant community that surrounds it, we invite you to join us in this sacred journey. Whether you come for the divine grace or the sense of belonging, Sri Nagathamman Kovil welcomes you with open arms and a heart full of blessings.</li>

          </ul>
                  </Modal.Body>
      </Modal>
        </div>
        </div>
    </>
  )
}

export default AboutUs