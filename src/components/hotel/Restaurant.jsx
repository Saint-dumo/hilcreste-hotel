import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import '../../styles/restaurant.css';

const Restaurant = () => {
  return (
    <section className="restaurant-section">

      <div className="restaurant-background">
        <img
          src="/images/hotel/hero-restaurant.png"
          alt="Hilcreste Hotel restaurant and dining area"
          loading="lazy"
        />
      </div>

      <div className="restaurant-overlay"></div>

      <div className="restaurant-content">

        <span className="section-eyebrow">
          DINING AT HILCRESTE
        </span>

        <h2>
          Good Food.<br />
          Great Moments.
        </h2>

        <p>
          Enjoy good food and a welcoming atmosphere
          at Hilcreste Hotel.
        </p>

        <Link to="/restaurant" className="restaurant-primary-btn">
          EXPLORE OUR RESTAURANT
          <ArrowRight size={17} />
        </Link>

      </div>

    </section>
  );
};

export default Restaurant;