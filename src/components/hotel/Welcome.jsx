import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import '../../styles/welcome.css';

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container container">

        <div className="welcome-content">

          <span className="section-eyebrow">
            ABOUT HILCRESTE
          </span>

          <h2>
            Welcome to Hilcreste Hotel.
          </h2>

          <p>
            Experience comfort, convenience and warm
            hospitality at Hilcreste Hotel, Port Harcourt.
            Whether you're visiting for business or leisure,
            we're committed to making your stay comfortable
            and enjoyable.
          </p>

          <p>
            From our accommodation and dining facilities
            to the thoughtful services we provide, every
            detail is designed around your comfort.
          </p>

          <Link to="/about" className="welcome-link">
            Learn More
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="welcome-image">
          <img
            src="/images/hotel/hero-pool.png"
            alt="Hotel swimming pool and surroundings"
          />
        </div>

      </div>
    </section>
  );
};

export default Welcome;