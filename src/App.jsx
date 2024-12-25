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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutModal from './Components/AboutModal/AboutModal';
import Donation from './Components/Donation/Donation';

function App() {
  return (
    <BrowserRouter>

      {/* Only show AboutModal for the /knowMore path */}
      <Routes>
        <Route path="/knowMore" element={<AboutModal />} />
      </Routes>

      {/* Default route for '/' displaying all components */}
      <Routes>
        <Route path="/" element={
          <>
            <NavBarComponent />
            <LandingPage />
            <AboutUs />
            <MainCommittee />
            <MainStaffs />
            <Gallery />
            <EventsComponent />
            <Donation/>
            <ContactUs />
            <FooterComponent />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
