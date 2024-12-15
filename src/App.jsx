import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutUs from './Components/AboutUs/AboutUs';
import MainCommittee from './Components/MainCommittee/MainCommittee';
import MainStaffs from './Components/MainStaffs/MainStaffs';
import ContactUs from './Components/ContactUs/ContactUs';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import Gallery from './Components/Gallery/Gallery';
import EventsComponent from './Components/EventsComponent/EventsComponent';
function App() {

  return (
    <>
    <div id='nav-part'>
    <NavBarComponent/>
    </div>
    <div id='land-part'>
    <LandingPage/>
    </div>
    <div id='about-part'>
    <AboutUs/>
    </div>
    <div id='committee-part'>
    <MainCommittee/>
    </div>
    <div className='staff-part'>
    <MainStaffs/>
    </div>
    <div id='gallery'>
      <Gallery/>
    </div>
    <div id='events'>
      <EventsComponent/>
    </div>
    <div id='contact-us'>
      <ContactUs/>
    </div>
    <div>
      <FooterComponent/>
    </div>
    </>
  )
}

export default App
