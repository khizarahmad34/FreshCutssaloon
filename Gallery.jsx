import { useEffect, useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [isVisible, setIsVisible] = useState({});
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'dishes', name: 'Dishes' },
    { id: 'ambiance', name: 'Ambiance' },
    { id: 'events', name: 'Events' }
  ];

  const galleryItems = [
    { category: 'dishes', title: 'Wagyu Steak', icon: '🥩', color: '#c9a961' },
    { category: 'ambiance', title: 'Elegant Dining', icon: '🕯️', color: '#d4af37' },
    { category: 'dishes', title: 'Fresh Salmon', icon: '🐟', color: '#8b6f47' },
    { category: 'events', title: 'Private Events', icon: '🎉', color: '#c9a961' },
    { category: 'dishes', title: 'Lobster Risotto', icon: '🦞', color: '#d4af37' },
    { category: 'ambiance', title: 'Bar Area', icon: '🍸', color: '#8b6f47' },
    { category: 'dishes', title: 'Dessert Selection', icon: '🍰', color: '#c9a961' },
    { category: 'events', title: 'Wine Tasting', icon: '🍷', color: '#d4af37' },
    { category: 'ambiance', title: 'Outdoor Seating', icon: '🌿', color: '#8b6f47' },
    { category: 'dishes', title: 'Appetizers', icon: '🍞', color: '#c9a961' },
    { category: 'events', title: 'Chef\'s Table', icon: '👨‍🍳', color: '#d4af37' },
    { category: 'ambiance', title: 'Interior Design', icon: '✨', color: '#8b6f47' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="fade-in-up">Gallery</h1>
          <p className="fade-in-up delay-2">A visual journey through our culinary artistry</p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-filters fade-in-up">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={index}
                id={`animate-gallery-${index}`}
                className={`gallery-item ${isVisible[`animate-gallery-${index}`] ? 'scale-in' : ''}`}
                style={{ 
                  animationDelay: `${(index % 12) * 0.05}s`,
                  background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`
                }}
              >
                <div className="gallery-item-content">
                  <span className="gallery-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <div className="gallery-item-overlay">
                  <span className="view-text">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-cta">
        <div className="container">
          <div 
            id="animate-cta" 
            className={`cta-content ${isVisible['animate-cta'] ? 'scale-in' : ''}`}
          >
            <h2>Experience It Yourself</h2>
            <p>Visit us and create your own memorable moments</p>
            <a href="/contact" className="btn btn-primary">Reserve Your Table</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
