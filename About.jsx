import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title fade-in-up">About FreshCuts</h1>
          <p className="page-subtitle fade-in-up">Where tradition meets modern style</p>
        </div>
      </section>

      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'calc(var(--spacing-unit) * 3)' }}>
                Our Story
              </h2>
              <p className="story-paragraph">
                Founded in 2020, FreshCuts emerged from a simple vision: to create a premium grooming destination where modern men could experience exceptional service in a sophisticated yet welcoming environment.
              </p>
              <p className="story-paragraph">
                What started as a single chair operation has grown into a full-service salon with a team of award-winning stylists. We've stayed true to our core values of precision, professionalism, and personalized attention to every client who walks through our doors.
              </p>
              <p className="story-paragraph">
                Today, FreshCuts stands as a beacon of excellence in men's grooming, combining traditional barbering techniques with contemporary styling to deliver looks that make our clients feel confident and sharp.
              </p>
            </div>
            <div className="story-image" style={{
              backgroundImage: `url('https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800')`
            }}></div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Excellence</h3>
              <p>We never compromise on quality. Every cut, every style, every service is executed with meticulous attention to detail.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>Honest advice, transparent pricing, and genuine care for our clients' satisfaction guide everything we do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Innovation</h3>
              <p>We stay ahead of trends while honoring classic techniques, ensuring our clients always look their best.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Community</h3>
              <p>More than a salon, we're a community hub where lasting relationships are built one haircut at a time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image" style={{
              backgroundImage: `url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800')`
            }}></div>
            <div className="mission-text">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-description">
                To empower men to look and feel their absolute best through expert grooming services, premium products, and an unmatched customer experience.
              </p>
              <div className="mission-stats">
                <div className="mission-stat">
                  <div className="mission-stat-number">5000+</div>
                  <div className="mission-stat-label">Satisfied Clients</div>
                </div>
                <div className="mission-stat">
                  <div className="mission-stat-number">10K+</div>
                  <div className="mission-stat-label">Haircuts Delivered</div>
                </div>
                <div className="mission-stat">
                  <div className="mission-stat-number">4.9</div>
                  <div className="mission-stat-label">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <div className="location-content">
            <div className="location-info">
              <div className="location-item">
                <div className="location-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>123 Barber Street<br/>New York, NY 10001</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@freshcuts.com</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">🕐</div>
                <div>
                  <h4>Hours</h4>
                  <p>
                    Mon - Fri: 9am - 8pm<br/>
                    Saturday: 9am - 9pm<br/>
                    Sunday: 10am - 6pm
                  </p>
                </div>
              </div>
            </div>
            <div className="location-map">
              <div className="map-placeholder">
                <div className="map-text">
                  <span className="map-pin">📍</span>
                  <p>FreshCuts Salon</p>
                  <span className="map-address">123 Barber Street, New York</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
