import React from 'react'
import './AboutModal.css'
import NavBarComponent from '../NavBarComponent/NavBarComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const AboutModal = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='about-history'>
        <div className='abt-header'>
            <h1>About Us and History</h1>
            <hr className='abt-hr'></hr>
        </div>
        <div className='abt-content'>
            <div className='para-l'>
              <h3>In the peaceful area of Gerugambakkam, Bhoomadevi Nagar, our temple stands as a symbol of faith and devotion. About fifty years ago, a snake burrow was formed at this spot, surrounded by lush green fields. The people living nearby believed the snake burrow was sacred and started worshiping it with great respect.</h3>
              <img src='https://via.placeholder.com/300'></img>
            </div>
            <div className='para-r'>
                <h3>Over time, the fields around the burrow were divided into plots, and the area became a neighborhood as people built homes and moved in. Despite the changes, the snake burrow remained special to the residents. To honor it, they built a small temple dedicated to Nagathamman and began worshiping there.</h3>
                <img src='https://via.placeholder.com/300'></img>
            </div>
            <div className='para-l'>
                <h3>Today, the temple has been rebuilt with the help of the temple committee, making it a beautiful place of worship. The main sanctum now houses a seated statue of Nagathamman as the Moolavar (main deity). Outside, there are statues of Lord Vinayagar, Lord Murugar, and a Mandapam (pavilion) for the snake burrow, which is still seen as sacred by all.</h3>
                <img src='https://via.placeholder.com/300'></img>
            </div>
            <div className='para-r'>
                <h3>The temple’s most impressive feature is the 21-foot tall Rajagopuram (tower), which stands proudly with a shining Kalasam (metal pot) at the top, symbolizing divine blessings and protection.</h3>
                <img src='https://via.placeholder.com/300'></img>
            </div>
            <div className='para-l'>
                <h3>A grand ceremony, called the Kumbabishekam, was performed on [month], [date], [year], following traditional Agama Vithi rituals. This event marked the temple’s rebirth, drawing people from many places to witness and celebrate the occasion.</h3>
                <img src='https://via.placeholder.com/300'></img>
            </div>
            <div className='para-r'>
                <h3>Today, Sri Nagathamman Kovil is not just a temple but also a place where people find peace, hope, and a sense of community. Devotees from near and far visit to offer prayers and seek the blessings of the goddess.</h3>
                <img src='https://via.placeholder.com/300'></img>
            </div>
            <div className='para-l'>
                <h3>We warmly welcome you to visit the temple, feel the divine presence, and be part of our growing community. Whether you come for spiritual peace or to experience the temple’s rich history, Sri Nagathamman Kovil is here to welcome you with open arms.</h3>
                <img src='https://via.placeholder.com/300'></img>
            </div>
        </div>
        <Button variant="primary" onClick={()=>navigate(-1)}>Go Back</Button>
    </div>
    </>
  )
}

export default AboutModal