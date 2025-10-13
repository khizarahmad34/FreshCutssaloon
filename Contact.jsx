import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title fade-in-up">Get In Touch</h1>
          <p className="page-subtitle fade-in-up">We'd love to hear from you. Book an appointment or ask us anything!</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-container">
              <h2 className="form-title">Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Interested Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="beard">Beard Grooming</option>
                    <option value="shave">Hot Towel Shave</option>
                    <option value="color">Hair Coloring</option>
                    <option value="package">Package Deal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-container">
              <div className="contact-info-card">
                <div className="info-icon">📍</div>
                <h3>Visit Us</h3>
                <p>123 Barber Street<br/>New York, NY 10001</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">📞</div>
                <h3>Call Us</h3>
                <p>(555) 123-4567</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">📧</div>
                <h3>Email Us</h3>
                <p>info@freshcuts.com</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">🕐</div>
                <h3>Opening Hours</h3>
                <p>
                  Mon - Fri: 9am - 8pm<br/>
                  Saturday: 9am - 9pm<br/>
                  Sunday: 10am - 6pm
                </p>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">📘</a>
                  <a href="#" className="social-icon">📷</a>
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">💼</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section booking-cta-section">
        <div className="container">
          <div className="booking-cta-content">
            <h2 className="booking-cta-title">Ready to Look Your Best?</h2>
            <p className="booking-cta-text">Book your appointment today and experience the FreshCuts difference</p>
            <button className="booking-cta-button">Book Appointment Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
