import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const RoomImageCarousel = ({ images, roomName, compact = false }) => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className={`room-carousel ${compact ? 'compact' : ''}`}>

      <img
        src={images[activeImage]}
        alt={`${roomName} - View ${activeImage + 1}`}
        className="room-carousel-image"
      />

      {images.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-prev"
            onClick={previousImage}
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="carousel-arrow carousel-next"
            onClick={nextImage}
            aria-label="Next image"
            type="button"
          >
            <ChevronRight size={18} />
          </button>

          <div className="carousel-indicators">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                className={activeImage === index ? 'active' : ''}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
                aria-current={activeImage === index ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default RoomImageCarousel;