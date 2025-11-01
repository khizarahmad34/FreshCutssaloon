import { useEffect, useState } from 'react';
import './About.css';

function About() {
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

  const timeline = [
    { year: '2000', title: 'The Beginning', description: 'Savoria opened its doors with a vision to redefine fine dining.' },
    { year: '2005', title: 'First Michelin Star', description: 'Recognized for culinary excellence with our first Michelin star.' },
    { year: '2012', title: 'Expansion', description: 'Opened our second location and introduced the chef\'s table experience.' },
    { year: '2018', title: 'Three Stars', description: 'Achieved the prestigious three Michelin star rating.' },
    { year: '2023', title: 'Innovation', description: 'Launched our sustainable dining initiative and farm partnerships.' }
  ];

  const stats = [
    { number: '20+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Guests' },
    { number: '15+', label: 'Awards Won' },
    { number: '100+', label: 'Signature Dishes' }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="fade-in-up">Our Story</h1>
          <p className="fade-in-up delay-2">A journey of passion, excellence, and culinary innovation</p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container">
          <div className="about-grid">
            <div 
              id="animate-intro-content" 
              className={`about-content ${isVisible['animate-intro-content'] ? 'fade-in-up' : ''}`}
            >
              <h2 className="section-title">Welcome to Savoria</h2>
              <div className="accent-line"></div>
              <p>
                Founded in 2000, Savoria has been at the forefront of fine dining, combining 
                traditional culinary techniques with modern innovation. Our commitment to excellence 
                has earned us recognition from critics and diners alike.
              </p>
              <p>
                Every dish we create tells a story—of carefully sourced ingredients, masterful 
                preparation, and an unwavering dedication to providing an unforgettable dining 
                experience. We believe that great food brings people together and creates lasting memories.
              </p>
              <p>
                Our team of award-winning chefs works tirelessly to push the boundaries of culinary 
                art while honoring the traditions that make dining special. From farm to table, 
                we ensure every element meets our exacting standards.
              </p>
            </div>
            <div 
              id="animate-intro-image" 
              className={`about-image ${isVisible['animate-intro-image'] ? 'scale-in delay-2' : ''}`}
            >
              <div className="image-placeholder">
                <span className="placeholder-icon">🏛️</span>
                <p>Our Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid grid grid-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                id={`animate-stat-${index}`}
                className={`stat-card ${isVisible[`animate-stat-${index}`] ? 'scale-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Milestones that shaped our legacy</p>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index}
                id={`animate-timeline-${index}`}
                className={`timeline-item ${isVisible[`animate-timeline-${index}`] ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid grid grid-3">
            <div 
              id="animate-mission-1" 
              className={`mission-card card ${isVisible['animate-mission-1'] ? 'fade-in-up' : ''}`}
            >
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To create exceptional dining experiences that celebrate culinary artistry, 
                quality ingredients, and impeccable service.
              </p>
            </div>
            <div 
              id="animate-mission-2" 
              className={`mission-card card ${isVisible['animate-mission-2'] ? 'fade-in-up delay-2' : ''}`}
            >
              <div className="mission-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the world's most celebrated restaurant, setting new standards in 
                fine dining and culinary innovation.
              </p>
            </div>
            <div 
              id="animate-mission-3" 
              className={`mission-card card ${isVisible['animate-mission-3'] ? 'fade-in-up delay-3' : ''}`}
            >
              <div className="mission-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Excellence, integrity, sustainability, and a passion for creating 
                memorable moments for every guest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
