import React from 'react'
import './Donation.css'
import qrcode from '../../assets/qrcode.jpg'

const Donation = () => {
  return (
    <>
    <div className='don-el'>
    <div className='don-top'>
                <h1 className='don-head'>Donations</h1>
                <hr></hr>
            </div>
    <div className="don-container">
    <p className='don-text'>Your generous donations help sustain the temple’s operations, maintain its sacred spaces, and support community outreach programs. With your support, we are able to continue providing a place for spiritual growth, cultural enrichment, and social welfare. Every contribution, big or small, plays a vital role in preserving the temple’s legacy and ensuring that it remains a beacon of peace and devotion for generations to come. We invite you to donate today and be a part of this divine journey. Your kindness is a blessing to the temple and to all who seek solace and guidance within its walls.</p>
    <img src={qrcode}></img>
    </div>
    </div>
    </>
  )
}

export default Donation