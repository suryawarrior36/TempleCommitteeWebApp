import React from 'react';
import './CommitteeCard.css';

const CommitteeCard = ({ imageUrl, name, designation }) => {
  return (
    <>
      <div className='card-el'>
        <div className='card-top'>
          <img src={imageUrl} alt={name} />
        </div>
        <hr />
        <div className='card-bottom'>
          <h1>{name}</h1>
          <p>{designation}</p>
        </div>
      </div>
    </>
  );
};

export default CommitteeCard;
