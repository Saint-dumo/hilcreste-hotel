import rooms from '../../data/rooms';
import RoomCard from './RoomCard';

import '../../styles/rooms.css';

const Rooms = () => {
  return (
    <section className="rooms-section full-rooms-section">
      <div className="rooms-container">

        <div className="rooms-header">
          <div className="rooms-header-content">
            <span className="section-eyebrow">
              ACCOMMODATION
            </span>

            <h2>Rooms & Suites</h2>

            <p>
              Discover our range of accommodation options,
              thoughtfully designed to provide comfort,
              convenience and a relaxing stay.
            </p>
          </div>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <p className="room-price-note">
          All displayed rates are provisional and subject
          to confirmation by hotel management.
        </p>

      </div>
    </section>
  );
};

export default Rooms;