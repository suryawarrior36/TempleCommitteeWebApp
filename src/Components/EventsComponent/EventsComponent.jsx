import React from 'react';
import './EventsComponent.css';
const EventsComponent = () => {
  return (
    <>
    <div className='events-el'>
    <div className='events-top'>
                <h1 className='events-head'>Events</h1>
                <hr></hr>
                <p className='events-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni ad sit consequatur a, eos eveniet necessitatibus excepturi, nisi praesentium commodi facilis placeat? Quisquam sint, eaque nulla magnam eligendi ipsum?</p>
            </div>
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=ssuryanarayanan301%40gmail.com&ctz=Asia%2FKolkata"
        style={{ border: 0 }}
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
    </div>
    </>
  )
}

export default EventsComponent