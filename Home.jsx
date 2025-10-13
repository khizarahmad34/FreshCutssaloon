import { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const scissorsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scissorsRef.current) {
        scissorsRef.current.style.transform = `translateY(${scrolled * 0.5}px) rotate(${scrolled * 0.1}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="scissors-animation" ref={scissorsRef}>
            <svg className="scissors-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <g className="scissor-left">
                <circle cx="40" cy="60" r="15" fill="var(--electric-blue)" opacity="0.8"/>
                <path d="M 40 60 L 100 100" stroke="var(--electric-blue)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M 30 50 L 50 70" stroke="var(--electric-blue)" strokeWidth="3" strokeLinecap="round"/>
              </g>
              <g className="scissor-right">
                <circle cx="160" cy="60" r="15" fill="var(--electric-blue)" opacity="0.8"/>
                <path d="M 160 60 L 100 100" stroke="var(--electric-blue)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M 150 50 L 170 70" stroke="var(--electric-blue)" strokeWidth="3" strokeLinecap="round"/>
              </g>
              <line x1="90" y1="90" x2="110" y2="110" stroke="var(--electric-blue)" strokeWidth="5" strokeLinecap="round"/>
              <path className="cutting-line" d="M 100 120 L 100 180" stroke="var(--electric-blue)" strokeWidth="2" strokeDasharray="5,5"/>
            </svg>
          </div>

          <h1 className="hero-title">
            <span className="hero-line">Look Sharp.</span>
            <span className="hero-line glow-text">Feel Confident.</span>
          </h1>
          <p className="hero-subtitle">Premium cuts for the modern gentleman</p>
          <button className="cta-button">Book Appointment</button>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Choose FreshCuts</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✂️</div>
              <h3>Expert Stylists</h3>
              <p>Trained professionals with years of experience in modern hairstyling</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Premium Service</h3>
              <p>Top-tier grooming experience with attention to every detail</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Modern Styles</h3>
              <p>Latest trends and timeless classics for every personality</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Products</h3>
              <p>Only the finest grooming products for optimal results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section showcase">
        <div className="container">
          <h2 className="section-title">Our Signature Services</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-image" style={{
                backgroundImage: `url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800')`
              }}>
                <div className="showcase-overlay">
                  <h3>Premium Haircut</h3>
                  <p>Precision cuts tailored to your style</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-image" style={{
                backgroundImage: `url('https://t4.ftcdn.net/jpg/16/26/82/87/360_F_1626828739_fQF8aiPus7dyyXaKyDVeTl5jjlvnWJhC.jpg')`
              }}>
                <div className="showcase-overlay">
                  <h3>Beard Grooming</h3>
                  <p>Expert shaping and styling</p>
                </div>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-image" style={{
                backgroundImage: `url('https://t3.ftcdn.net/jpg/15/43/42/28/360_F_1543422854_YoIEZJcx7TiFr7RrYU5kJifTTiZXLyM1.jpg')`
              }}>
                <div className="showcase-overlay">
                  <h3>Hot Towel Shave</h3>
                  <p>Traditional luxury experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready for Your Transformation?</h2>
            <p className="cta-text">Join thousands of satisfied clients who trust FreshCuts</p>
            <button className="cta-button-large">Schedule Your Appointment</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
