import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navigation/Navbar';
import Hero from './components/hotel/Hero';
import Welcome from './components/hotel/Welcome';
import FeaturedRooms from './components/hotel/FeaturedRooms';
import Restaurant from './components/hotel/Restaurant';
import FAQ from './components/hotel/FAQ';

import About from './pages/About';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import Reservations from './pages/Reservations';
import RoomDetails from './pages/RoomDetails';
import Rooms from './components/hotel/Rooms';
import RestaurantPage from './pages/Restaurant';

import Footer from './components/navigation/Footer';

// Homepage
const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedRooms />
      <Restaurant />
      <FAQ />
    </>
  );
};

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:roomId" element={<RoomDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;