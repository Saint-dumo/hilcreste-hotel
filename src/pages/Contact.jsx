import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

import '../styles/contact.css';

const PHONE = '+2347080488829';
const WHATSAPP = '2347080488829';
const EMAIL = 'support@hilcreste.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>WE'RE HERE TO HELP</span>
          <h1>Contact Us</h1>
          <p>
            Have a question or need assistance with your stay?
            We'd be happy to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="contact-container">

          {/* CONTACT INFORMATION */}
          <div className="contact-information">

            <span className="section-eyebrow">
              GET IN TOUCH
            </span>

            <h2>We'd Love to Hear From You.</h2>

            <p className="contact-description">
              Whether you're making an enquiry, planning a visit
              or need assistance, our team is available to help.
            </p>

            <div className="contact-info-list">

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <h3>Our Location</h3>
                  <p>
                    22 Peter Odili Road,
                    <br />
                    Port Harcourt, Rivers State.
                  </p>

                  <a
                    href="https://maps.app.goo.gl/V2GKyaxMfZCRjAaW7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <h3>Call Reception</h3>
                  <a href={`tel:${PHONE}`}>
                    070 8048 8829
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon whatsapp-icon">
                  <svg viewBox="0 0 32 32" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3.2 29l6.4-1.7a13 13 0 0 0 6.4 1.6c7.2 0 13-5.8 13-13S23.2 3 16 3Zm0 23.7c-2 0-3.9-.5-5.5-1.5l-.4-.2-3.8 1 1-3.7-.3-.4a10.7 10.7 0 1 1 9 4.8Zm5.9-8c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4Z"
                    />
                  </svg>
                </div>

                <div>
                  <h3>WhatsApp</h3>

                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-contact-link"
                  >
                    070 8048 8829
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <h3>Email Us</h3>
                  <a href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-card">

            <h2>Send Us a Message</h2>

            <p>
              Fill in the form below and we'll be happy to assist.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">
                <div className="contact-form-field">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What is your enquiry about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                SEND MESSAGE
                <Send size={16} />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="contact-map-section">
        <div className="contact-map-heading">
          <span className="section-eyebrow">FIND US</span>
          <h2>Visit Hilcreste Hotel</h2>
          <p>22 Peter Odili Road, Port Harcourt, Rivers State.</p>
        </div>

        <iframe
          title="Hilcreste Hotel Location"
          src="https://maps.google.com/maps?q=22%20Peter%20Odili%20Road%2C%20Port%20Harcourt%2C%20Rivers%20State&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

    </main>
  );
};

export default Contact;