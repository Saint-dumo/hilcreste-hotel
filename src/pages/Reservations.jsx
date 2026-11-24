import { useState } from 'react';
import { CalendarDays, Users, ArrowRight } from 'lucide-react';

import rooms from '../data/rooms';
import '../styles/reservations.css';

const Reservations = () => {
  const today = new Date().toISOString().split('T')[0];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [formData, setFormData] = useState({
    roomId: '',
    checkIn: today,
    checkOut: tomorrow.toISOString().split('T')[0],
    guests: '1',
    fullName: '',
    phone: '',
    email: '',
    requests: '',
  });

  const selectedRoom = rooms.find(
    (room) => room.id === formData.roomId
  );

  const calculateNights = () => {
    const start = new Date(`${formData.checkIn}T00:00:00`);
    const end = new Date(`${formData.checkOut}T00:00:00`);

    const difference = end - start;

    return difference > 0
      ? difference / (1000 * 60 * 60 * 24)
      : 0;
  };

  const nights = calculateNights();
  const total = selectedRoom ? selectedRoom.price * nights : 0;

  const formatPrice = (price) =>
    `₦${price.toLocaleString('en-NG')}`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedRoom) {
      alert('Please select a room category.');
      return;
    }

    if (nights <= 0) {
      alert('Please select valid check-in and check-out dates.');
      return;
    }

    const subject = encodeURIComponent('Hilcreste Reservation Request');

    const body = encodeURIComponent(`
NEW RESERVATION REQUEST

Guest Information
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}

Booking Information
Room: ${selectedRoom.name}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Number of nights: ${nights}
Guests: ${formData.guests}

Estimated Amount: ${formatPrice(total)}

Additional Requests:
${formData.requests || 'None'}

Please confirm room availability and reservation details.
    `);

    window.location.href =
      `mailto:support@hilcreste.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="reservations-page">

      {/* HERO */}
      <section className="reservations-hero">
        <div className="reservations-hero-content">
          <span>PLAN YOUR STAY</span>
          <h1>Reservations</h1>
          <p>
            Your stay at Hilcreste begins with a simple reservation request.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="reservation-intro">
        <span className="section-eyebrow">BOOK YOUR STAY</span>
        <h2>We Look Forward to Welcoming You.</h2>
        <p>
          Tell us when you would like to stay and your preferred
          accommodation. Our reception team will review your request
          and get back to you with availability and confirmation.
        </p>
      </section>

      {/* RESERVATION FORM */}
      <section className="reservation-form-section">
        <div className="reservation-form-container">

          <form
            className="reservation-form"
            onSubmit={handleSubmit}
          >

            {/* ROOM SELECTION */}
            <div className="reservation-form-heading">
              <span>01</span>
              <div>
                <h2>Choose Your Accommodation</h2>
                <p>Select your preferred room category.</p>
              </div>
            </div>

            <div className="reservation-field">
              <label htmlFor="roomId">Room Category</label>

              <select
                id="roomId"
                name="roomId"
                value={formData.roomId}
                onChange={handleChange}
                required
              >
                <option value="">Select a room</option>

                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} — {formatPrice(room.price)} / Night
                  </option>
                ))}
              </select>
            </div>

            {/* BOOKING DATES */}
            <div className="reservation-form-heading">
              <span>02</span>
              <div>
                <h2>Booking Details</h2>
                <p>When would you like to stay?</p>
              </div>
            </div>

            <div className="reservation-fields-grid">

              <div className="reservation-field">
                <label htmlFor="checkIn">
                  <CalendarDays size={15} />
                  Check-in Date
                </label>

                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  min={today}
                  value={formData.checkIn}
                  onChange={(e) => {
                    const value = e.target.value;

                    setFormData((previous) => {
                      const next = { ...previous, checkIn: value };

                      if (value >= previous.checkOut) {
                        const nextDay = new Date(`${value}T00:00:00`);
                        nextDay.setDate(nextDay.getDate() + 1);

                        next.checkOut = nextDay
                          .toISOString()
                          .split('T')[0];
                      }

                      return next;
                    });
                  }}
                  required
                />
              </div>

              <div className="reservation-field">
                <label htmlFor="checkOut">
                  <CalendarDays size={15} />
                  Check-out Date
                </label>

                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  min={formData.checkIn}
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="reservation-field">
                <label htmlFor="guests">
                  <Users size={15} />
                  Number of Guests
                </label>

                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6].map((number) => (
                    <option key={number} value={number}>
                      {number} {number === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* GUEST INFORMATION */}
            <div className="reservation-form-heading">
              <span>03</span>
              <div>
                <h2>Guest Information</h2>
                <p>Provide your contact information.</p>
              </div>
            </div>

            <div className="reservation-fields-grid">

              <div className="reservation-field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="reservation-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="reservation-field full-width">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="reservation-field full-width">
                <label htmlFor="requests">
                  Special Requests (Optional)
                </label>

                <textarea
                  id="requests"
                  name="requests"
                  rows="4"
                  placeholder="Any additional information you'd like us to know?"
                  value={formData.requests}
                  onChange={handleChange}
                />
              </div>

            </div>

            <button type="submit" className="reservation-submit">
              SUBMIT RESERVATION REQUEST
              <ArrowRight size={17} />
            </button>

            <p className="reservation-disclaimer">
              Submitting this request does not guarantee a reservation.
              Availability and final room allocation will be confirmed
              by hotel management.
            </p>

          </form>

          {/* BOOKING SUMMARY */}
          <aside className="reservation-summary">

            <h3>Your Booking Summary</h3>

            {selectedRoom ? (
              <>
                <div className="reservation-summary-room">
                  <span>SELECTED ROOM</span>
                  <h2>{selectedRoom.name}</h2>
                  <p>{formatPrice(selectedRoom.price)} / Night</p>
                </div>

                <div className="reservation-summary-row">
                  <span>Check-in</span>
                  <strong>{formData.checkIn}</strong>
                </div>

                <div className="reservation-summary-row">
                  <span>Check-out</span>
                  <strong>{formData.checkOut}</strong>
                </div>

                <div className="reservation-summary-row">
                  <span>Number of Nights</span>
                  <strong>{nights}</strong>
                </div>

                <div className="reservation-summary-row">
                  <span>Guests</span>
                  <strong>{formData.guests}</strong>
                </div>

                <div className="reservation-summary-total">
                  <span>Estimated Total</span>
                  <strong>{formatPrice(total)}</strong>
                </div>

              </>
            ) : (
              <p className="reservation-summary-empty">
                Your booking summary will appear here once you select
                an accommodation category.
              </p>
            )}

            <p className="reservation-summary-note">
              Displayed room rates are provisional and subject to
              confirmation by hotel management.
            </p>

          </aside>

        </div>
      </section>

    </main>
  );
};

export default Reservations;