import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import '../../styles/hero.css';

const slides = [
  {
    eyebrow: 'WELCOME TO HILCRESTE',
    title: 'Experience Comfort.',
    highlight: 'Discover Elegance.',
    description:
      'Discover a refined hospitality experience where comfort, thoughtful service and memorable moments come together.',
    button: 'EXPLORE OUR ROOMS',
    link: '/rooms',
    image: '/images/hotel/hero-hotel.png',
    position: 'center'
  },

  {
    eyebrow: 'YOUR PERFECT RETREAT',
    title: 'A Place to Unwind.',
    highlight: 'A Stay to Remember.',
    description:
      'Find your perfect space to relax, recharge and enjoy warm, exceptional hospitality.',
    button: 'DISCOVER OUR ROOMS',
    link: '/rooms',
    image: '/images/hotel/hero-room.png',
    position: 'center'
  },

  {
    eyebrow: 'DINING AT HILCRESTE',
    title: 'Savour Every Moment.',
    highlight: 'Enjoy Every Flavour.',
    description:
      'Discover welcoming dining experiences and thoughtfully prepared meals at our restaurant and lounge.',
    button: 'EXPLORE OUR RESTAURANT',
    link: '/restaurant',
    image: '/images/hotel/hero-restaurant.png',
    position: 'center'
  },

  {
    eyebrow: 'MORE THAN A STAY',
    title: 'Comfort Meets',
    highlight: 'Exceptional Hospitality.',
    description:
      'Enjoy thoughtful amenities and a welcoming atmosphere throughout your stay.',
    button: 'DISCOVER HILCRESTE',
    link: '/facilities',
    image: '/images/hotel/hero-pool.png',
    position: 'center'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      prev => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="hero-section">

      {/* BACKGROUND IMAGE */}

      <div
        className="hero-background"
        key={currentSlide}
        style={{
          backgroundImage: `url("${slide.image}")`,
          backgroundPosition: slide.position
        }}
      />

      <div className="hero-overlay" />

      {/* HERO CONTENT */}

      <div className="hero-container container">

        <div className="hero-text" key={`text-${currentSlide}`}>

          <span className="hero-eyebrow">
            {slide.eyebrow}
          </span>

          <h1>
            {slide.title}
            <br />
            <span>{slide.highlight}</span>
          </h1>

          <p className="hero-description">
            {slide.description}
          </p>

          <div className="hero-actions">

            <Link to={slide.link} className="hero-primary-btn">
              {slide.button}
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

        {/* SLIDER CONTROLS */}

        <div className="hero-controls">

          <button
            onClick={previousSlide}
            aria-label="Previous slide"
            className="hero-arrow"
          >
            <ChevronLeft size={23} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="hero-arrow"
          >
            <ChevronRight size={23} />
          </button>

        </div>

        {/* SLIDE INDICATORS */}

        <div className="hero-indicators">

          {slides.map((item, index) => (
            <button
              key={index}
              className={
                currentSlide === index ? 'active' : ''
              }
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={
                currentSlide === index ? 'true' : undefined
              }
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Hero;