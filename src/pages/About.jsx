import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import '../styles/about.css';

const About = () => {
  return (
    <main className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <span>GET TO KNOW US</span>
            <h1>About Hilcreste</h1>
            <p>
              Hospitality, comfort and a welcoming experience
              in the heart of Port Harcourt.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="about-container">

          <div className="about-story-image">
            <img
              src="/images/hotel/hero-hotel.png"
              alt="Hilcreste Hotel"
            />
          </div>

          <div className="about-story-content">
            <span className="section-eyebrow">
              OUR STORY
            </span>

            <h2>A Place to Feel at Home.</h2>

            <p>
              At Hilcreste Hotel, we believe that a great hotel
              experience goes beyond providing a place to stay.
              It is about creating an environment where guests
              can relax, feel welcome and enjoy every moment.
            </p>

            <p>
              Located in Port Harcourt, Rivers State, Hilcreste
              is committed to providing comfortable accommodation
              and attentive hospitality for both business and
              leisure travellers.
            </p>

          </div>

        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="about-commitment">
        <div className="about-commitment-container">

          <span className="section-eyebrow">
            OUR COMMITMENT
          </span>

          <h2>Hospitality That Makes a Difference.</h2>

          <p>
            Every guest deserves a comfortable stay and a
            welcoming experience. Our focus is on delivering
            thoughtful service, maintaining comfortable spaces
            and making every visit worthwhile.
          </p>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-reasons">
        <div className="about-container">

          <div className="about-reasons-header">
            <span className="section-eyebrow">
              THE HILCRESTE EXPERIENCE
            </span>

            <h2>More Than Just a Stay.</h2>

            <p>
              Enjoy the convenience and comfort of a hotel
              designed around your stay.
            </p>
          </div>

          <div className="about-reasons-grid">

            <div className="about-reason">
              <h3>Comfortable Accommodation</h3>
              <p>
                Thoughtfully presented rooms designed to make
                your stay relaxing and enjoyable.
              </p>
            </div>

            <div className="about-reason">
              <h3>Dining & Lounge</h3>
              <p>
                A welcoming space to enjoy meals, unwind and
                spend time with friends and family.
              </p>
            </div>

            <div className="about-reason">
              <h3>Convenient Facilities</h3>
              <p>
                Enjoy access to facilities designed to make
                your hotel experience more convenient.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <div className="about-cta-content">
          <span>YOUR STAY STARTS HERE</span>

          <h2>We Look Forward to Welcoming You.</h2>

          <Link to="/rooms">
            EXPLORE OUR ROOMS
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default About;