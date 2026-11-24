import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const RoomCard = ({ room }) => {
  const [activeImage, setActiveImage] = useState(0);

  const images = room.images?.slice(0, 4) || [];
  const imageCount = images.length;

  const formatPrice = (price) =>
    `₦${price.toLocaleString('en-NG')}`;

  const previousImage = (e) => {
    e.preventDefault();
    setActiveImage((current) =>
      current === 0 ? imageCount - 1 : current - 1
    );
  };

  const nextImage = (e) => {
    e.preventDefault();
    setActiveImage((current) =>
      current === imageCount - 1 ? 0 : current + 1
    );
  };

  return (
    <article className="room-card">

      {/* IMAGE GALLERY */}

      <div className="room-card-gallery">

        <Link to={`/rooms/${room.id}`} className="room-card-image-link">
          {images.length > 0 && (
            <img
              src={images[activeImage]}
              alt={`${room.name} - Image ${activeImage + 1}`}
              className="room-card-image"
              loading="lazy"
            />
          )}
        </Link>

        {/* PREVIOUS BUTTON */}

        {imageCount > 1 && (
          <>
            <button
              type="button"
              className="room-card-arrow room-card-arrow-prev"
              onClick={previousImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={19} />
            </button>

            {/* NEXT BUTTON */}

            <button
              type="button"
              className="room-card-arrow room-card-arrow-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={19} />
            </button>
          </>
        )}

        {/* IMAGE INDICATORS */}

        {imageCount > 1 && (
          <div className="room-card-indicators">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                className={activeImage === index ? 'active' : ''}
                onClick={() => setActiveImage(index)}
                aria-label={`View ${room.name} image ${index + 1}`}
                aria-pressed={activeImage === index}
              />
            ))}
          </div>
        )}

      </div>

      {/* ROOM INFORMATION */}

      <div className="room-card-content">

        <h3>{room.name}</h3>

        <p className="room-card-description">
          {room.description}
        </p>

        {/* ROOM CAPACITY */}

        <div className="room-card-meta">

          <span>
            <BedDouble size={15} />
            1 Room
          </span>

          <span>
            <Users size={15} />
            2 Guests
          </span>

        </div>

        {/* PRICE AND DISCOVER */}

        <div className="room-card-bottom">

          <span className="room-card-price">
            {formatPrice(room.price)} / Night
          </span>

          <Link
            to={`/rooms/${room.id}`}
            className="room-card-discover"
          >
            DISCOVER
          </Link>

        </div>

      </div>

    </article>
  );
};

export default RoomCard;