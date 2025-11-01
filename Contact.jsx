import { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="fade-in-up">Contact Us</h1>
          <p className="fade-in-up delay-2">We'd love to hear from you</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div 
              id="animate-form" 
              className={`contact-form-wrapper ${isVisible['animate-form'] ? 'fade-in-up' : ''}`}
            >
              <h2>Reserve a Table</h2>
              <p className="form-subtitle">Fill out the form below and we'll get back to you shortly</p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Time *</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests">Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+">9+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any dietary restrictions or special occasions?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Reserve Table
                </button>
              </form>
            </div>

            <div 
              id="animate-info" 
              className={`contact-info ${isVisible['animate-info'] ? 'fade-in-up delay-2' : ''}`}
            >
              <div className="info-card card">
                <div className="info-icon">📍</div>
                <h3>Location</h3>
                <p>123 Gourmet Street<br/>Culinary District<br/>New York, NY 10001</p>
              </div>

              <div className="info-card card">
                <div className="info-icon">📞</div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
              </div>

              <div className="info-card card">
                <div className="info-icon">✉️</div>
                <h3>Email</h3>
                <p>info@savoria.com<br/>reservations@savoria.com</p>
              </div>

              <div className="info-card card">
                <div className="info-icon">🕐</div>
                <h3>Hours</h3>
                <p>
                  <strong>Mon - Fri:</strong> 11:00 AM - 11:00 PM<br/>
                  <strong>Sat - Sun:</strong> 10:00 AM - 12:00 AM<br/>
                  <strong>Happy Hour:</strong> 4:00 PM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div 
            id="animate-map" 
            className={`map-placeholder ${isVisible['animate-map'] ? 'scale-in' : ''}`}
          >
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <h3>Find Us Here</h3>
              <p>123 Gourmet Street, Culinary District, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
