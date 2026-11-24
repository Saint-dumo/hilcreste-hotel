import { Wifi, CigaretteOff, CarFront } from 'lucide-react';

import '../styles/facilities.css';

const facilities = [
  {
    id: 'pool',
    number: '01',
    name: 'Swimming Pool',
    description:
      'Take a refreshing break, relax by the water and enjoy a little time away from your daily routine.',
    image: '/images/hotel/hero-pool.png',
    imageAlt: 'Hilcreste Hotel swimming pool',
  },
  {
    id: 'gym',
    number: '02',
    name: 'Fitness Centre',
    description:
      'Keep up with your fitness routine during your stay in a space dedicated to exercise and wellness.',
    image: '/images/hotel/gym.jpeg',
    imageAlt: 'Hilcreste Hotel fitness centre',
  },
  {
    id: 'lounge',
    number: '03',
    name: 'Outdoor Lounge',
    description:
      'Enjoy the outdoors in a relaxed setting, ideal for unwinding and spending time with friends.',
    image: '/images/hotel/lounge.jpg',
    imageAlt: 'Hilcreste Hotel outdoor lounge',
  },
  {
    id: 'event-hall',
    number: '04',
    name: 'Event Hall',
    description:
      'A dedicated space for gatherings, celebrations and special occasions.',
    image: '/images/hotel/eventhall.jpg',
    imageAlt: 'Hilcreste Hotel event hall',
  },
  {
    id: 'laundry',
    number: '05',
    name: 'Laundry Services',
    description:
      'Enjoy added convenience with laundry services designed to help make your stay easier.',
    image: '/images/hotel/laundry.jpg',
    imageAlt: 'Hilcreste Hotel laundry services',
  },
  {
    id: 'restaurant',
    number: '06',
    name: 'Restaurant',
    description:
      'Enjoy satisfying meals and a welcoming dining atmosphere during your time at Hilcreste.',
    image: '/images/hotel/hero-restaurant.png',
    imageAlt: 'Hilcreste Hotel restaurant',
  },
];

const conveniences = [
  {
    name: 'Complimentary Wi-Fi',
    icon: Wifi,
  },
  {
    name: 'Non-Smoking Environment',
    icon: CigaretteOff,
  },
  {
    name: 'Free Parking',
    icon: CarFront,
  },
];

const Facilities = () => {
  return (
    <main className="facilities-page">

      {/* FACILITIES HEADING */}
      <section className="facilities-intro">
        <div className="facilities-container">
          <span className="section-eyebrow">
            OUR FACILITIES
          </span>

          <h1>
            Everything You Need for a Comfortable Stay.
          </h1>

          <p>
            Discover the spaces and conveniences designed to make
            your time at Hilcreste Hotel relaxing, enjoyable and
            comfortable.
          </p>
        </div>
      </section>

      {/* FACILITY CARDS */}
      <section className="facilities-showcase">
        <div className="facilities-container">

          <div className="facilities-grid">
            {facilities.map((facility) => (
              <article
                className="facility-card"
                key={facility.id}
              >
                <div className="facility-card-image">
                  <img
                    src={facility.image}
                    alt={facility.imageAlt}
                    loading="lazy"
                  />

                  <span className="facility-number">
                    {facility.number}
                  </span>
                </div>

                <div className="facility-card-content">
                  <span className="section-eyebrow">
                    HILCRESTE FACILITIES
                  </span>

                  <h2>{facility.name}</h2>

                  <p>{facility.description}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* GUEST CONVENIENCES */}
      <section className="additional-facilities">
        <div className="facilities-container">

          <div className="additional-facilities-grid">
            {conveniences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="convenience-item"
                  key={item.name}
                >
                  <Icon size={24} strokeWidth={1.7} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
};

export default Facilities;