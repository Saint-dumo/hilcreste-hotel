import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

import rooms from '../data/rooms';
import RoomGallery from '../components/hotel/RoomGallery';
import RoomBookingForm from '../components/hotel/RoomBookingForm';

import '../styles/room-details.css';

const RoomDetails = () => {
  const { roomId } = useParams();

  const room = rooms.find((item) => item.id === roomId);

  if (!room) {
    return (
      <div className="room-not-found">
        <h2>Room not found</h2>
        <Link to="/rooms">Return to Rooms</Link>
      </div>
    );
  }

  return (
    <section className="room-details-page">
      <div className="room-details-container">

        <Link to="/rooms" className="back-to-rooms">
          <ArrowLeft size={16} />
          Back to Rooms
        </Link>

        <div className="room-details-layout">

          {/* ROOM INFORMATION */}
          <div className="room-details-main">

            <h1>{room.name}</h1>

            <p>{room.description}</p>

            <RoomGallery
              images={room.images}
              roomName={room.name}
            />

            {/* ROOM DETAILS */}
            <div className="room-description-full">
              <h2>Room Details</h2>

              <p>{room.description}</p>

              <div className="room-specifications">
                {room.details.map((detail, index) => (
                  <div className="room-specification" key={index}>
                    <span>{detail.label}</span>
                    <strong>{detail.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* AMENITIES */}
            <div className="room-amenities">
              <h2>Room Amenities</h2>

              <div className="room-amenities-list">
                {room.amenities.map((amenity, index) => (
                  <div className="room-amenity" key={index}>
                    <Check size={17} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* BOOKING FORM */}
          <RoomBookingForm room={room} />

        </div>

      </div>
    </section>
  );
};

export default RoomDetails;