import { useEffect, useState } from 'react';
import './Stylists.css';

function Chefs() {
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

  const chefs = [
    {
      name: 'Chef Marcus Laurent',
      role: 'Executive Chef',
      specialty: 'French Cuisine',
      description: 'With over 20 years of experience in Michelin-starred restaurants across Paris and New York, Chef Marcus brings unparalleled expertise and creativity to every dish.',
      icon: '👨‍🍳',
      awards: ['3 Michelin Stars', 'James Beard Award', 'Best Chef 2022']
    },
    {
      name: 'Chef Sofia Chen',
      role: 'Head Pastry Chef',
      specialty: 'Desserts & Pastries',
      description: 'Trained at Le Cordon Bleu, Chef Sofia creates exquisite desserts that are both visually stunning and deliciously memorable.',
      icon: '👩‍🍳',
      awards: ['World Pastry Champion', 'Best Dessert 2023']
    },
    {
      name: 'Chef Antonio Rossi',
      role: 'Sous Chef',
      specialty: 'Italian Cuisine',
      description: 'Born in Tuscany, Chef Antonio brings authentic Italian flavors and traditional techniques to our kitchen with modern innovation.',
      icon: '👨‍🍳',
      awards: ['Rising Star Chef', 'Italian Culinary Excellence']
    },
    {
      name: 'Chef Yuki Tanaka',
      role: 'Sushi Master',
      specialty: 'Japanese Cuisine',
      description: 'A master of traditional Japanese culinary arts with 15 years of training in Tokyo, Chef Yuki creates authentic sushi experiences.',
      icon: '👨‍🍳',
      awards: ['Sushi Master Certification', 'Best Asian Chef']
    }
  ];

  return (
    <div className="chefs-page">
      <section className="chefs-hero">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="fade-in-up">Our Culinary Team</h1>
          <p className="fade-in-up delay-2">Masters of their craft, passionate about excellence</p>
        </div>
      </section>

      <section className="section chefs-intro">
        <div className="container">
          <div 
            id="animate-intro" 
            className={`intro-content ${isVisible['animate-intro'] ? 'fade-in-up' : ''}`}
          >
            <h2 className="section-title">Meet the Masters</h2>
            <p className="section-subtitle">
              Our award-winning culinary team brings together decades of experience from the world's 
              finest kitchens. Each chef contributes their unique expertise and passion, creating an 
              unforgettable dining experience that celebrates both tradition and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="section chefs-grid-section">
        <div className="container">
          <div className="chefs-grid">
            {chefs.map((chef, index) => (
              <div 
                key={index}
                id={`animate-chef-${index}`}
                className={`chef-card card ${isVisible[`animate-chef-${index}`] ? 'scale-in' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="chef-image">
                  <span className="chef-icon">{chef.icon}</span>
                  <div className="chef-overlay">
                    <span className="chef-specialty">{chef.specialty}</span>
                  </div>
                </div>
                <div className="chef-content">
                  <h3>{chef.name}</h3>
                  <p className="chef-role">{chef.role}</p>
                  <p className="chef-description">{chef.description}</p>
                  <div className="chef-awards">
                    {chef.awards.map((award, i) => (
                      <span key={i} className="award-badge">{award}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-values">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="values-grid grid grid-3">
            <div 
              id="animate-value-1" 
              className={`value-card card ${isVisible['animate-value-1'] ? 'fade-in-up' : ''}`}
            >
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>We pursue perfection in every dish, using only the finest ingredients and techniques.</p>
            </div>
            <div 
              id="animate-value-2" 
              className={`value-card card ${isVisible['animate-value-2'] ? 'fade-in-up delay-2' : ''}`}
            >
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Blending traditional methods with modern creativity to create unique culinary experiences.</p>
            </div>
            <div 
              id="animate-value-3" 
              className={`value-card card ${isVisible['animate-value-3'] ? 'fade-in-up delay-3' : ''}`}
            >
              <div className="value-icon">❤️</div>
              <h3>Passion</h3>
              <p>Every dish is crafted with love, dedication, and an unwavering commitment to quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chefs;
