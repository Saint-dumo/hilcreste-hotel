import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import rooms from '../../data/rooms';
import RoomCard from './RoomCard';

import '../../styles/rooms.css';

const FeaturedRooms = () => {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <section className="rooms-section featured-rooms-section">
      <div className="rooms-container">

        <div className="rooms-header">
          <div className="rooms-header-content">
            <span className="section-eyebrow">
              ACCOMMODATION
            </span>

            <h2>Find Your Comfort</h2>

            <p>
              Explore a selection of our thoughtfully designed
              rooms, created to make every stay comfortable
              and enjoyable.
            </p>
          </div>
        </div>

        <div className="rooms-grid">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="rooms-footer">
          <Link to="/rooms" className="rooms-view-all">
            View All Rooms
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedRooms;