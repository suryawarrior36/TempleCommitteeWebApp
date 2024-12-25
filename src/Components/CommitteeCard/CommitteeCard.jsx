import React from 'react';
import './CommitteeCard.css';

const CommitteeCard = ({ imageUrl, name, designation, extraDesign, sideDesign }) => {
  return (
    <>
      <div className='card-el'>
        <div className='card-top'>
          <img src={imageUrl} alt={name} />
        </div>
        <hr />
        <div className='card-bottom'>
          <p>{extraDesign}</p>
          <div className='name-ctn'>
          <h1 className='name-h1'>{name}</h1>
          <p>{sideDesign}</p>
          </div>
          <p>{designation}</p>
        </div>
      </div>
    </>
  );
};

export default CommitteeCard;
