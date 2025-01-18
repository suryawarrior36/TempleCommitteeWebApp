import React from 'react';
import './CommitteeCard.css';

const CommitteeCard = ({ imageUrl, name, designation, extraDesign, sideDesign, contactNo }) => {
  return (
    <>
      <div className='card-el'>
        <div className='card-top'>
          <img src={imageUrl} alt={name} />
        </div>
        <hr />
        <div className='card-bottom'>
          <p className='extra'>{extraDesign}</p>
          <div className='name-ctn'>
          <h1 className='name-h1'>{name}</h1>
          {/* <p>{sideDesign}</p> */}
          </div>
          <p className='dtls'>{designation}</p>
          <p className='dtls'>{contactNo}</p>
        </div>
      </div>
    </>
  );
};

export default CommitteeCard;
