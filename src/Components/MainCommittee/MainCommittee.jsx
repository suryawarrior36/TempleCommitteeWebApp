import React, { useState } from 'react'
import CommitteeCard from '../CommitteeCard/CommitteeCard'
import './MainCommittee.css'
import Secretary from '../../assets/secretary.jpg';
import Tresurer from '../../assets/IMG-20241218-WA0004.jpg';
import President from '../../assets/WhatsApp Image 2024-12-19 at 21.35.25_170d7a73.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const MainCommittee = () => {
    const [show, setShow] = useState(false);
  return (
    <>
        <div className='committee-el'>
            <div className='comm-top'>
                <h1 className='comm-head'>Temple Committee</h1>
                <hr></hr>
                <p className='comm-text'>The Sri Nagathamman Temple Committee is dedicated to preserving the rich history and traditions of the temple while ensuring its smooth functioning and upkeep. The committee oversees the temple's maintenance, organizes spiritual and cultural events, and facilitates the active involvement of devotees. By managing bookings for special poojas, coordinating temple services, and maintaining transparency, the committee strives to create a welcoming and divine space for worshippers and uphold the temple's legacy for generations to come.</p>
            </div>
            <div className='comm-bottom'>
            <CommitteeCard 
              imageUrl={President} 
              name="Thiru. K. Annamalai" 
              designation="President" 
            />
            <CommitteeCard 
              imageUrl={Secretary} 
              name="Thiru. A. Raju" 
              designation="Secretary" 
            />
            <CommitteeCard 
              imageUrl={Tresurer} 
              name="Thiru. M. Arul"
              designation="Treasurer"
              sideDesign="(M.Com)"
            />
            </div>
            {/* <div className='comm-more'>
            <Button variant="primary" onClick={() => setShow(true)}>
        Know More
      </Button>
            <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Committee Members
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='model-body'>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
          <CommitteeCard/>
          <CommitteeCard/>
          <CommitteeCard/>
          <CommitteeCard/>
          <CommitteeCard/>
          <CommitteeCard/>
          <CommitteeCard/>
          <CommitteeCard/>
          <CommitteeCard/>
        </Modal.Body>
      </Modal>
            </div> */}
            
        </div>
    </>
  )
}

export default MainCommittee