import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="animate-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const packages = [
    {
      name: 'Lunch Special',
      price: '$45',
      period: 'per person',
      description: 'Perfect for a midday culinary escape',
      features: [
        'Choice of Appetizer',
        'Main Course Selection',
        'Dessert or Coffee',
        'Complimentary Bread Basket',
        'Available Mon-Fri 11AM-3PM'
      ],
      icon: '☀️',
      popular: false
    },
    {
      name: 'Dinner Experience',
      price: '$85',
      period: 'per person',
      description: 'Our signature dining experience',
      features: [
        'Amuse-Bouche',
        'Choice of Appetizer',
        'Main Course Selection',
        'Dessert Selection',
        'Coffee or Tea',
        'Complimentary Wine Pairing'
      ],
      icon: '🌙',
      popular: true
    },
    {
      name: 'Chef\'s Tasting Menu',
      price: '$150',
      period: 'per person',
      description: 'An unforgettable culinary journey',
      features: [
        '7-Course Tasting Menu',
        'Wine Pairing',
        'Amuse-Bouche & Palate Cleansers',
        'Chef\'s Special Creations',
        'Personalized Menu Card',
        'Meet the Chef Experience'
      ],
      icon: '⭐',
      popular: false
    }
  ];

  const specialOffers = [
    {
      title: 'Happy Hour',
      time: '4:00 PM - 7:00 PM',
      description: 'Enjoy 50% off on selected appetizers and cocktails',
      icon: '🍸'
    },
    {
      title: 'Weekend Brunch',
      time: 'Sat-Sun 10:00 AM - 2:00 PM',
      description: 'Unlimited brunch buffet with champagne for $55 per person',
      icon: '🥂'
    },
    {
      title: 'Wine Wednesday',
      time: 'Every Wednesday',
      description: 'Half price on all bottles of wine with dinner',
      icon: '🍷'
    },
    {
      title: 'Birthday Special',
      time: 'Any Day',
      description: 'Complimentary dessert for birthday celebrations',
      icon: '🎂'
    }
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="fade-in-up">Pricing & Packages</h1>
          <p className="fade-in-up delay-2">Exceptional value for an extraordinary experience</p>
        </div>
      </section>

      <section className="section packages-section">
        <div className="container">
          <h2 className="section-title">Dining Packages</h2>
          <p className="section-subtitle">Choose the perfect experience for your occasion</p>
          
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                id={`animate-package-${index}`}
                className={`package-card card ${pkg.popular ? 'popular' : ''} ${isVisible[`animate-package-${index}`] ? 'scale-in' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                <div className="package-icon">{pkg.icon}</div>
                <h3>{pkg.name}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="period">{pkg.period}</span>
                </div>
                <p className="package-description">{pkg.description}</p>
                <ul className="package-features">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary btn-full">
                  Reserve Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section offers-section">
        <div className="container">
          <h2 className="section-title">Special Offers</h2>
          <p className="section-subtitle">Exclusive deals and promotions</p>
          
          <div className="offers-grid grid grid-2">
            {specialOffers.map((offer, index) => (
              <div 
                key={index}
                id={`animate-offer-${index}`}
                className={`offer-card card ${isVisible[`animate-offer-${index}`] ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="offer-icon">{offer.icon}</div>
                <div className="offer-content">
                  <h3>{offer.title}</h3>
                  <p className="offer-time">{offer.time}</p>
                  <p className="offer-description">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section private-events">
        <div className="container">
          <div 
            id="animate-events" 
            className={`events-content ${isVisible['animate-events'] ? 'fade-in-up' : ''}`}
          >
            <h2 className="section-title">Private Events & Catering</h2>
            <p className="section-subtitle">
              Host your special occasion at Savoria. We offer customized menus and 
              exclusive venue options for weddings, corporate events, and celebrations.
            </p>
            <div className="events-features">
              <div className="event-feature">
                <span className="feature-icon">🎊</span>
                <h4>Private Dining Rooms</h4>
                <p>Intimate spaces for 10-50 guests</p>
              </div>
              <div className="event-feature">
                <span className="feature-icon">🍽️</span>
                <h4>Custom Menus</h4>
                <p>Tailored to your preferences</p>
              </div>
              <div className="event-feature">
                <span className="feature-icon">🎭</span>
                <h4>Full Venue Buyout</h4>
                <p>Exclusive access for 100+ guests</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Inquire About Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
