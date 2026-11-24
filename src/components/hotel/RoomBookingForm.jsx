import { useState } from 'react';
import { CalendarDays, Users } from 'lucide-react';

const RoomBookingForm = ({ room }) => {
  const today = new Date().toISOString().split('T')[0];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(
    tomorrow.toISOString().split('T')[0]
  );
  const [guests, setGuests] = useState(1);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
  });

  const [message, setMessage] = useState('');

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(`${checkIn}T00:00:00`);
    const end = new Date(`${checkOut}T00:00:00`);

    const difference = end - start;

    return difference > 0
      ? difference / (1000 * 60 * 60 * 24)
      : 0;
  };

  const nights = calculateNights();
  const subtotal = room.price * nights;
  const discount = 0;
  const total = subtotal - discount;

  const formatPrice = (amount) =>
    `₦${amount.toLocaleString('en-NG')}`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nights <= 0) {
      setMessage('Please select a valid check-out date.');
      return;
    }

    setMessage(
      'Booking form completed. Reservation processing will be available soon.'
    );
  };

  return (
    <aside className="room-booking-card">

      <div className="booking-price">
        <span>ROOM RATE</span>

        <h2>{formatPrice(room.price)}</h2>

        <p>Per night</p>
      </div>

      <p className="room-booking-note">
        Displayed rates are provisional and subject to confirmation
        by hotel management.
      </p>

      <form onSubmit={handleSubmit}>

        {/* DATES */}

        <div className="booking-field">
          <label htmlFor="checkIn">
            <CalendarDays size={15} />
            Check-in
          </label>

          <input
            type="date"
            id="checkIn"
            value={checkIn}
            min={today}
            onChange={(e) => {
              setCheckIn(e.target.value);

              if (e.target.value >= checkOut) {
                const nextDay = new Date(
                  `${e.target.value}T00:00:00`
                );

                nextDay.setDate(nextDay.getDate() + 1);

                setCheckOut(
                  nextDay.toISOString().split('T')[0]
                );
              }
            }}
            required
          />
        </div>

        <div className="booking-field">
          <label htmlFor="checkOut">
            <CalendarDays size={15} />
            Check-out
          </label>

          <input
            type="date"
            id="checkOut"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>

        {/* GUESTS */}

        <div className="booking-field">
          <label htmlFor="guests">
            <Users size={15} />
            Number of Guests
          </label>

          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <option key={number} value={number}>
                {number} {number === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        {/* GUEST INFORMATION */}

        <div className="booking-divider" />

        <h3>Guest Information</h3>

        <div className="booking-field">
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

        <div className="booking-field">
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

        <div className="booking-field">
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

        {/* PRICE SUMMARY */}

        <div className="booking-divider" />

        <h3>Booking Summary</h3>

        <div className="booking-summary-row">
          <span>Room Rate</span>
          <strong>{formatPrice(room.price)}</strong>
        </div>

        <div className="booking-summary-row">
          <span>Number of Nights</span>
          <strong>{nights}</strong>
        </div>

        <div className="booking-summary-row">
          <span>Subtotal</span>
          <strong>{formatPrice(subtotal)}</strong>
        </div>

        <div className="booking-summary-row">
          <span>Discount</span>
          <strong>{formatPrice(discount)}</strong>
        </div>

        <div className="booking-total">
          <span>Total Amount</span>
          <strong>{formatPrice(total)}</strong>
        </div>

        <button type="submit" className="room-book-now">
          Book Now
        </button>

        {message && (
          <p className="booking-message" role="status">
            {message}
          </p>
        )}

      </form>
    </aside>
  );
};

export default RoomBookingForm;