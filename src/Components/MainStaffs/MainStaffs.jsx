import React, { useState } from 'react'
import './MainStaffs.css'
import CommitteeCard from '../CommitteeCard/CommitteeCard'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const MainStaffs = () => {
    const [show, setShow] = useState(false);
  return (
    <>
    <div className='staff-el'>
            <div className='staff-top'>
                <h1 className='staff-head'>Temple Staffs</h1>
                <hr></hr>
                <p className='staff-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni ad sit consequatur a, eos eveniet necessitatibus excepturi, nisi praesentium commodi facilis placeat? Quisquam sint, eaque nulla magnam eligendi ipsum?</p>
            </div>
            <div className='staff-bottom'>
                <CommitteeCard/>
                <CommitteeCard/>
            </div>
            <div className='staff-more'>
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
            Staff Members
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
            </div>
            
        </div>
    </>
  )
}

export default MainStaffs