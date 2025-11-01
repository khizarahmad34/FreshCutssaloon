import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
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

  const features = [
    {
      title: 'Fresh Ingredients',
      description: 'Locally sourced, organic ingredients prepared daily for the finest quality.',
      icon: '🌿'
    },
    {
      title: 'Expert Chefs',
      description: 'Award-winning culinary masters crafting exceptional dining experiences.',
      icon: '👨‍🍳'
    },
    {
      title: 'Elegant Ambiance',
      description: 'Sophisticated atmosphere perfect for any special occasion.',
      icon: '✨'
    },
    {
      title: 'Premium Service',
      description: 'Attentive staff dedicated to making your visit unforgettable.',
      icon: '🎩'
    }
  ];

  const specialties = [
    {
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herb butter and seasonal vegetables',
      price: '$42',
      image: '🐟'
    },
    {
      name: 'Wagyu Steak',
      description: 'Premium Japanese beef with truffle mashed potatoes',
      price: '$68',
      image: '🥩'
    },
    {
      name: 'Lobster Risotto',
      description: 'Creamy arborio rice with fresh Maine lobster',
      price: '$55',
      image: '🦞'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Food Critic',
      text: 'An extraordinary culinary journey. Every dish is a masterpiece that delights the senses.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Regular Guest',
      text: 'The ambiance, service, and food quality are consistently exceptional. My favorite restaurant!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'Event Planner',
      text: 'Perfect venue for special occasions. The attention to detail is remarkable.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title fade-in-up">
              Experience Culinary
              <span className="hero-highlight"> Excellence</span>
            </h1>
            <p className="hero-subtitle fade-in-up delay-2">
              Where passion meets perfection in every dish
            </p>
            <div className="hero-buttons fade-in-up delay-3">
              <Link to="/menu" className="btn btn-primary">Explore Menu</Link>
              <Link to="/contact" className="btn btn-secondary">Reserve Table</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll Down</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-grid">
            <div 
              id="animate-welcome-content" 
              className={`welcome-content ${isVisible['animate-welcome-content'] ? 'fade-in-up' : ''}`}
            >
              <h2 className="section-title">Welcome to Savoria</h2>
              <div className="accent-line"></div>
              <p className="welcome-text">
                For over two decades, Savoria has been the pinnacle of fine dining, 
                offering an unparalleled gastronomic experience. Our commitment to 
                excellence, innovation, and tradition creates unforgettable moments 
                for every guest.
              </p>
              <p className="welcome-text">
                Led by our award-winning culinary team, we source the finest ingredients 
                from local farms and international markets to craft dishes that celebrate 
                both classic techniques and modern creativity.
              </p>
              <Link to="/about" className="btn btn-primary">Our Story</Link>
            </div>
            <div 
              id="animate-welcome-image" 
              className={`welcome-image ${isVisible['animate-welcome-image'] ? 'scale-in delay-2' : ''}`}
            >
              <div className="image-placeholder">
                <span className="placeholder-icon">🍽️</span>
                <p>Elegant Dining Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Savoria</h2>
          <p className="section-subtitle">Excellence in every detail</p>
          <div className="features-grid grid grid-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                id={`animate-feature-${index}`}
                className={`feature-card card ${isVisible[`animate-feature-${index}`] ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section specialties-section">
        <div className="container">
          <h2 className="section-title">Chef's Specialties</h2>
          <p className="section-subtitle">Signature dishes crafted with passion</p>
          <div className="specialties-grid grid grid-3">
            {specialties.map((dish, index) => (
              <div 
                key={index}
                id={`animate-specialty-${index}`}
                className={`specialty-card card ${isVisible[`animate-specialty-${index}`] ? 'scale-in' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="specialty-image">
                  <span className="specialty-emoji">{dish.image}</span>
                </div>
                <div className="specialty-content">
                  <div className="specialty-header">
                    <h3>{dish.name}</h3>
                    <span className="specialty-price">{dish.price}</span>
                  </div>
                  <p>{dish.description}</p>
                  <Link to="/menu" className="specialty-link">View Full Menu →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-subtitle">Experiences that speak for themselves</p>
          <div className="testimonials-grid grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                id={`animate-testimonial-${index}`}
                className={`testimonial-card card ${isVisible[`animate-testimonial-${index}`] ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div 
            id="animate-cta" 
            className={`cta-content ${isVisible['animate-cta'] ? 'scale-in' : ''}`}
          >
            <h2>Ready for an Unforgettable Experience?</h2>
            <p>Reserve your table today and discover why Savoria is the destination for fine dining.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Make a Reservation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
