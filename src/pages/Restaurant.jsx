import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import '../styles/restaurant-page.css';

const categories = [
  'All',
  'Local Dishes',
  'Rice Dishes',
  'Pepper Soup',
  'Grills & Snacks',
  'Drinks',
  'Water'
];

const menuItems = [
  {
    name: 'Yam and Egg Sauce',
    category: 'Local Dishes',
    price: 5000,
    image: '/images/hotel/menu/yam-egg.jpg',
    description: 'Yam served with freshly prepared egg sauce.'
  },
  {
    name: 'Garri and Egusi Soup',
    category: 'Local Dishes',
    price: 5000,
    image: '/images/hotel/menu/egusi.jpg',
    description: 'A Nigerian favourite served with egusi soup.'
  },
  {
    name: 'Garri and Okra Soup',
    category: 'Local Dishes',
    price: 5000,
    image: '/images/hotel/menu/okra.jpg',
    description: 'Garri served with traditional okra soup.'
  },
  {
    name: 'Garri and Vegetable Soup',
    category: 'Local Dishes',
    price: 5000,
    image: '/images/hotel/menu/vegetable-soup.jpg',
    description: 'Garri served with vegetable soup.'
  },
  {
    name: 'Pounded Yam and Egusi Soup',
    category: 'Local Dishes',
    price: 5000,
    image: '/images/hotel/menu/egusi.jpg',
    description: 'Soft pounded yam served with egusi soup.'
  },
  {
    name: 'Pounded Yam and Okra Soup',
    category: 'Local Dishes',
    price: 5000,
    image: '/images/hotel/menu/okra.jpg',
    description: 'Pounded yam served with okra soup.'
  },
  {
    name: 'Pounded Yam and Vegetable Soup',
    category: 'Local Dishes',
    price: 5000,
    image: '/images/hotel/menu/vegetable-soup.jpg',
    description: 'Pounded yam served with vegetable soup.'
  },
  {
    name: 'Jollof Rice and Fish',
    category: 'Rice Dishes',
    price: 7000,
    image: '/images/hotel/menu/jollof-fish.jpg',
    description: 'Flavourful Nigerian jollof rice with fish.'
  },
  {
    name: 'Jollof Rice and Chicken',
    category: 'Rice Dishes',
    price: 8000,
    image: '/images/hotel/menu/jollof-chicken.jpg',
    description: 'Nigerian jollof rice served with chicken.'
  },
  {
    name: 'Fried Rice and Chicken',
    category: 'Rice Dishes',
    price: 8000,
    image: '/images/hotel/menu/fried-rice.jpg',
    description: 'Fried rice served with chicken.'
  },
  {
    name: 'Pepper Soup',
    category: 'Pepper Soup',
    price: 5000,
    image: '/images/hotel/menu/pepper-soup.jpg',
    description: 'A warming Nigerian pepper soup.'
  },
  {
    name: 'Fish Barbecue',
    category: 'Grills & Snacks',
    price: 12000,
    image: '/images/hotel/menu/barbeque-fish.jpg',
    description: 'Barbecued fish prepared with rich seasoning.'
  },
  {
    name: 'Shawarma',
    category: 'Grills & Snacks',
    price: 4000,
    image: '/images/hotel/menu/shawarma.jpg',
    description: 'A freshly prepared shawarma wrap.'
  },
  {
    name: 'Soft Drinks',
    category: 'Drinks',
    price: 1000,
    image: '/images/hotel/menu/soft-drinks.jpg',
    description: 'Selection of assorted soft drinks.'
  },
  {
    name: 'Fruit Juice',
    category: 'Drinks',
    price: 2500,
    image: '/images/hotel/menu/fruit-juice.jpg',
    description: 'Refreshing fruit juice selections.'
  },
  {
    name: 'Malt Drinks',
    category: 'Drinks',
    price: 1500,
    image: '/images/hotel/menu/malt.jpg',
    description: 'A selection of malt beverages.'
  },
  {
    name: 'Bottled Water',
    category: 'Water',
    price: 700,
    image: '/images/hotel/menu/water.jpg',
    description: 'Chilled bottled drinking water.'
  }
];

const Restaurant = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  const formatPrice = (price) => {
    if (price === null) return 'Price to be confirmed';

    return `₦${price.toLocaleString('en-NG')}`;
  };

  return (
    <main className="restaurant-page">

      {/* HERO */}
      <section className="restaurant-hero">
        <div className="restaurant-hero-image">
          <img
            src="/images/hotel/restauranthero.png"
            alt="Dining at Hilcreste Hotel"
          />
        </div>

        <div className="restaurant-hero-overlay"></div>

        <div className="restaurant-hero-content">
          <span>DINING AT HILCRESTE</span>

          <h1>
            Good Food.<br />
            Memorable Moments.
          </h1>

          <p>
            Discover a welcoming dining experience at Hilcreste Hotel,
            where great food and warm hospitality come together.
          </p>

          <div className="restaurant-hero-actions">
            <a href="#restaurant-menu" className="restaurant-primary-btn">
              Explore Our Menu <ArrowRight size={17} />
            </a>

            {/* <a href="#restaurant-intro" className="restaurant-secondary-btn">
              Discover Our Restaurant
            </a> */}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="restaurant-intro" id="restaurant-intro">
        <div className="restaurant-intro-container">

          {/* <div className="restaurant-intro-image">
            <img
              src="/images/hotel/restaurant-interior.jpg"
              alt="Hilcreste Hotel restaurant"
            />
          </div> */}

          <div className="restaurant-intro-content">
            {/* <span className="restaurant-eyebrow">A TASTE OF HILCRESTE</span> */}

            <h2>
              Good food is part of a
              <span> good stay.</span>
            </h2>

            <p>
              Whether you're joining us for a satisfying local meal,
              a relaxed lunch or a late-night craving, Hilcreste
              offers a welcoming dining experience for every guest.
            </p>

            <p>
              Enjoy a selection of Nigerian favourites, rice dishes,
              grills, refreshing drinks and more.
            </p>

            <a href="#restaurant-menu" className="restaurant-text-link">
              Explore the menu <ArrowRight size={17} />
            </a>
          </div>

        </div>
      </section>

      {/* MENU */}
      <section className="restaurant-menu" id="restaurant-menu">
        <div className="restaurant-menu-container">

          <div className="restaurant-menu-heading">
            {/* <span className="restaurant-eyebrow">FRESHLY PREPARED</span> */}
            <h2>FRESHLY PREPARED</h2>
            <p>
              From local classics to delicious grills and refreshing
              drinks, find something you'll enjoy.
            </p>
            {/* <small>*All displayed food prices are provisional.</small> */}
          </div>

          {/* CATEGORY FILTERS */}
          <div className="menu-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? 'active' : ''
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* MENU CARDS */}
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <article className="menu-card" key={item.name}>

                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="menu-card-content">
                  <span className="menu-card-category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <div className="menu-card-bottom">
                    <span className="menu-price">
                      {formatPrice(item.price)}
                    </span>

                    <Link
                      to="/order-food"
                      className="menu-add-button"
                      aria-label={`Order ${item.name}`}
                    >
                      <ShoppingBag size={17} />
                    </Link>
                  </div>
                </div>

              </article>
            ))}
          </div>

          <div className="restaurant-menu-cta">
            <p>Found something you love?</p>
            <Link to="/order-food" className="restaurant-primary-btn">
              Order Your Meal <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* ROOM SERVICE */}
      <section className="restaurant-room-service">
        <div className="room-service-content">
          <span className="restaurant-eyebrow">AT YOUR CONVENIENCE</span>
          <h2>Enjoy your favourite meals, wherever you are.</h2>
          <p>
            Staying with us? Our room service and bar are available
            24 hours a day. Enjoy the convenience of having your
            meals and refreshments brought to you.
          </p>

          <Link to="/order-food" className="restaurant-primary-btn">
            Order Food <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Restaurant;