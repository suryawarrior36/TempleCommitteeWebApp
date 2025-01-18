import React from 'react';
import './EventsComponent.css';
const EventsComponent = () => {
  return (
    <>
    <div className='events-el'>
    <div className='events-top'>
                <h1 className='events-head'>Events</h1>
                <hr></hr>
                <p className='events-text'>Our temple hosts a variety of spiritual and cultural events throughout the year, fostering devotion and community engagement. From vibrant festivals and traditional poojas to charity drives and special rituals, these events bring together devotees from near and far to celebrate faith and unity. Stay updated and join us in experiencing the divine blessings and shared joy that these occasions bring.</p>
            </div>
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=srinagathammankovil07%40gmail.com&ctz=Asia%2FKolkata"
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