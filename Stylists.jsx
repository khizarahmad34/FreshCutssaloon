import './Stylists.css';

const Stylists = () => {
  const stylists = [
    {
      name: 'Marcus Steel',
      title: 'Master Barber',
      specialty: 'Classic Cuts & Fades',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marcus brings precision and artistry to every cut. Specializes in traditional barbering techniques with a modern twist.'
    },
    {
      name: 'Jason Rivera',
      title: 'Senior Stylist',
      specialty: 'Modern Styles & Color',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in contemporary styling and color treatments. Known for creating bold, fashion-forward looks.'
    },
    {
      name: 'Tyler Brooks',
      title: 'Beard Specialist',
      specialty: 'Beard Grooming & Shaves',
      experience: '10 years',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Master of the straight razor and beard sculpting. Creates perfectly groomed beards and smooth shaves.'
    },
    {
      name: 'Chris Morgan',
      title: 'Style Director',
      specialty: 'Premium Cuts & Styling',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning stylist with expertise in luxury grooming. Delivers exceptional results for discerning clients.'
    }
  ];

  return (
    <div className="stylists-page">
      <section className="stylists-hero">
        <div className="container">
          <h1 className="page-title fade-in-up">Meet Our Stylists</h1>
          <p className="page-subtitle fade-in-up">Expert craftsmen dedicated to perfecting your look</p>
        </div>
      </section>

      <section className="section stylists-section">
        <div className="container">
          <div className="stylists-grid">
            {stylists.map((stylist, index) => (
              <div key={index} className="stylist-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stylist-image-wrapper">
                  <div className="stylist-image" style={{ backgroundImage: `url(${stylist.image})` }}>
                    <div className="stylist-overlay">
                      <button className="book-stylist-button">Book with {stylist.name.split(' ')[0]}</button>
                    </div>
                  </div>
                  <div className="experience-badge">{stylist.experience}</div>
                </div>
                <div className="stylist-content">
                  <h3 className="stylist-name">{stylist.name}</h3>
                  <p className="stylist-title">{stylist.title}</p>
                  <div className="specialty-tag">{stylist.specialty}</div>
                  <p className="stylist-bio">{stylist.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-info-section">
        <div className="container">
          <div className="team-info-content">
            <div className="team-info-text">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'calc(var(--spacing-unit) * 3)' }}>
                Why Our Team Stands Out
              </h2>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">✂️</div>
                  <div>
                    <h4>Certified Professionals</h4>
                    <p>All stylists are licensed and continuously trained in the latest techniques</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🎓</div>
                  <div>
                    <h4>Ongoing Education</h4>
                    <p>Regular workshops and training to stay ahead of trends</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">💼</div>
                  <div>
                    <h4>Personalized Service</h4>
                    <p>Each stylist takes time to understand your unique style and preferences</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">⭐</div>
                  <div>
                    <h4>Award-Winning Excellence</h4>
                    <p>Our team has received multiple industry awards and recognition</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-stats">
              <div className="stat-card">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">45+</div>
                <div className="stat-label">Years Combined Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stylists;
