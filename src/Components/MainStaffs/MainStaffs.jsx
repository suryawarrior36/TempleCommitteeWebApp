import React, { useState } from 'react'
import './MainStaffs.css'
import Priest from '../../assets/IMG-20241219-WA0007.jpg';
import Staff from '../../assets/IMG-20241218-WA0024.jpg';
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
                <p className='staff-text'>The temple staff, including the priest and assistant workers, play a vital role in ensuring the smooth functioning of the temple and maintaining its sanctity. The priest performs daily rituals, poojas, and special ceremonies, offering spiritual guidance to devotees. The assistant workers diligently manage the temple’s cleanliness, decoration, and overall upkeep, creating a serene and welcoming environment for visitors.</p>
            </div>
            <div className='staff-bottom'>
            <CommitteeCard 
              imageUrl={Priest} 
              extraDesign="Sivagama Praveenar Sagitya Sironmani Samaskirutha Pandit, M.A, M.ed, HOD of Sanskrit"
              name="Thiru. S. Sridhra Sharma" 
              designation="Priest" 
            />
            <CommitteeCard 
              imageUrl={Staff} 
              name="Thirumathi. Bakkyam" 
              designation="Temple Assistant" 
            />
            </div>
            {/* <div className='staff-more'>
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
            </div> */}
            
        </div>
    </>
  )
}

export default MainStaffs