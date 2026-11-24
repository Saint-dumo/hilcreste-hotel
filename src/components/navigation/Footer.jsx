import { Link } from 'react-router-dom';
import '../../styles/footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">

      <div className="footer-brand">
        <Link to="/" className="footer-logo">
          HILCRESTE
          <span>HOTEL & HOSPITALITY</span>
        </Link>

        <p className="footer-description">
          At Hilcreste Hotel, we believe hospitality is about more than
          accommodation. It is about comfort, convenience and making every
          stay worthwhile.
        </p>

        <div className="footer-socials">

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M13.5 21v-8h2.8l.4-3.1h-3.2V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2347080488829"
            aria-label="WhatsApp"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M8.2 7.7c-.3.3-.7.9-.7 1.7s.6 1.8.7 2c.1.2 1.2 2 3 2.8 1.5.7 1.8.6 2.1.5.3-.1 1.1-.5 1.3-.9.2-.4.2-.8.1-.9-.1-.1-.3-.2-.6-.3l-1.4-.7c-.2-.1-.4-.1-.5.1l-.6.7c-.1.2-.3.2-.5.1-.3-.1-1-.4-1.6-1-.5-.5-.9-1.1-1-1.4-.1-.2 0-.3.1-.4l.4-.5c.1-.2.2-.3.2-.4 0-.1 0-.3-.1-.4l-.6-1.5c-.1-.3-.3-.4-.5-.4h-.4Z"
                fill="currentColor"
              />
            </svg>
          </a>

        </div>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>

        <div className="footer-links-grid">

          <div className="footer-link-column">
            <Link to="/about">About Us</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/rooms">Rooms & Suites</Link>
            <Link to="/restaurant">Restaurant</Link>
            <Link to="/reservations">Book a Room</Link>
          </div>

          <div className="footer-link-column">
            <Link to="/contact">Contact Us</Link>
            <Link to="/facilities">Our Services</Link>
            <Link to="/order-food">Order Food</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>

        </div>
      </div>

    </div>

    <div className="footer-bottom">
      <p>
        Copyright © {new Date().getFullYear()} Hilcreste Hotel.
        All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;