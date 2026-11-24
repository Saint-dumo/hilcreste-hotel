import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import '../../styles/faq.css';

const faqItems = [
  {
    question: 'What time can I check in and check out?',
    answer:
      'Check-in begins at 1:00 PM, while check-out is at 12 noon.'
  },
  {
    question: 'Is early check-in possible?',
    answer:
      'Early check-in is not guaranteed and depends on room availability.'
  },
  {
    question: 'How far is the airport from the hotel?',
    answer:
      'The international airport is only 35 minutes away from Hilcreste Hotel.'
  },
  {
    question: 'Can guests use the swimming pool?',
    answer:
      'POOL ACCESS DETAILS TO BE CONFIRMED.'
  },
  {
    question: 'What time does the restaurant and bar close?',
    answer:
      'At Hilcreste, our room service and bar are available to you 24 hours a day!'
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We do not allow same-day cancellations. Adjustments to your booking must be made at least 24 hours before your arrival date.'
  },
  {
    question: 'Are pets allowed?',
    answer:
      'Unfortunately, we operate a strict no-pet policy at the hotel, as we take into consideration the comfort of other guests.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const toggleFAQ = (index) => {
    setActiveIndex((current) => current === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-content">

          <div className="faq-heading">
            <span className="faq-eyebrow">GOT QUESTIONS?</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Everything you need to know before your stay
              at Hilcreste Hotel.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  className={`faq-item ${isActive ? 'active' : ''}`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isActive}
                  >
                    <span>{item.question}</span>

                    <span className="faq-toggle">
                      {isActive ? (
                        <Eye size={19} />
                      ) : (
                        <EyeOff size={19} />
                      )}
                    </span>
                  </button>

                  <div className="faq-answer">
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        <div className="faq-image">
          <img
            src="/images/hotel/hero-hotel.png"
            alt="Hilcreste Hotel"
          />
        </div>

      </div>
    </section>
  );
};

export default FAQ;