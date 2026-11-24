import { useState } from 'react';

const RoomGallery = ({ images = [], roomName }) => {
  const galleryImages = images.slice(0, 4);
  const [activeImage, setActiveImage] = useState(0);

  if (!galleryImages.length) return null;

  return (
    <div className="room-gallery">
      <div className="room-gallery-main">
        <img
          src={galleryImages[activeImage]}
          alt={`${roomName} - Image ${activeImage + 1}`}
        />
      </div>

      {galleryImages.length > 1 && (
        <div className="room-gallery-thumbnails">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              type="button"
              className={`room-gallery-thumbnail ${
                activeImage === index ? 'active' : ''
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`View ${roomName} image ${index + 1}`}
              aria-pressed={activeImage === index}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomGallery;