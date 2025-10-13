import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    { url: 'https://t3.ftcdn.net/jpg/05/06/74/32/240_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg', category: 'haircuts' },
    { url: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'haircuts' },
    { url: 'https://t4.ftcdn.net/jpg/06/33/49/61/240_F_633496108_MIw6cNitWmeQ5yquQ8MT5eUOfkIHn80n.jpg', category: 'beards' },
    { url: 'https://t3.ftcdn.net/jpg/02/55/82/18/240_F_255821857_qp4mqZsi0iPs8YtfDBCAyda6p9OK3cKk.jpg', category: 'shaves' },
    { url: 'https://t3.ftcdn.net/jpg/02/20/42/04/240_F_220420494_lUoekkrbqjp4ZZRFrCBJEQ2h2K2ERvJ2.jpg', category: 'styling' },
    { url: 'https://t4.ftcdn.net/jpg/04/69/68/17/240_F_469681744_FZWt6LKXLoCU4XVv8Cjx6ZFmwNlNLm7x.jpg', category: 'haircuts' },
    { url: 'https://t3.ftcdn.net/jpg/02/68/41/00/240_F_268410070_ZXKvJFXNH8TisPaDna19SqFaoJ4sshxH.jpg', category: 'beards' },
    { url: 'https://t4.ftcdn.net/jpg/06/72/98/93/240_F_672989351_Xt1qOnx7YsC7k4yOp76aNRQ968cRJ5Vk.jpg', category: 'styling' },
    { url: 'https://t3.ftcdn.net/jpg/01/35/35/32/240_F_135353252_KrrqfRsbhgSggJXwu6APWUaXKhO8jYFu.jpg', category: 'haircuts' },
    { url: 'https://t4.ftcdn.net/jpg/02/25/23/97/240_F_225239767_9yR1wKHuj7dgWNg4GzT4peIxMva14DY4.jpg', category: 'shaves' },
    { url: 'https://t3.ftcdn.net/jpg/11/36/14/40/240_F_1136144072_OPmo46myEzyxZlp1IwUwwGQS2zkpy1Dk.jpg', category: 'styling' },
    { url: 'https://t4.ftcdn.net/jpg/12/77/87/03/240_F_1277870380_OcFYBaKMnGEUs341HFwRMUkmVGlJH29x.jpg', category: 'beards' }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'haircuts', label: 'Haircuts' },
    { id: 'beards', label: 'Beards' },
    { id: 'shaves', label: 'Shaves' },
    { id: 'styling', label: 'Styling' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1 className="page-title fade-in-up">Our Gallery</h1>
          <p className="page-subtitle fade-in-up">Showcasing our finest work and transformations</p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-button ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div key={index} className="gallery-item" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="gallery-image" style={{ backgroundImage: `url(${image.url})` }}>
                  <div className="gallery-overlay">
                    <div className="gallery-icon">+</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Best haircut I've ever had! The attention to detail is incredible. Highly recommend FreshCuts!"
              </p>
              <div className="testimonial-author">
                <strong>Mike Johnson</strong>
                <span>Regular Client</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Professional service, modern atmosphere, and skilled barbers. Worth every penny!"
              </p>
              <div className="testimonial-author">
                <strong>David Chen</strong>
                <span>VIP Member</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Been coming here for 2 years. Consistently excellent cuts and great vibes!"
              </p>
              <div className="testimonial-author">
                <strong>Ryan Miller</strong>
                <span>Loyal Customer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
