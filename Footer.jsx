import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">FRESHCUTS</h3>
            <p className="footer-description">
              Premium boys salon delivering sharp cuts and confident looks since 2020.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/services">Services</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/stylists">Stylists</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>123 Barber Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@freshcuts.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Hours</h4>
            <ul className="footer-links">
              <li>Mon - Fri: 9am - 8pm</li>
              <li>Saturday: 9am - 9pm</li>
              <li>Sunday: 10am - 6pm</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 FreshCuts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
