import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Classic Haircut',
      description: 'Precision cutting and styling for a timeless look',
      price: '$35',
      duration: '30 min',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Premium Cut & Style',
      description: 'Complete haircut with premium styling products',
      price: '$50',
      duration: '45 min',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Beard Trim & Shape',
      description: 'Expert beard grooming and shaping',
      price: '$25',
      duration: '20 min',
      image: 'https://images.pexels.com/photos/5853395/pexels-photo-5853395.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Hot Towel Shave',
      description: 'Traditional straight razor shave with hot towel treatment',
      price: '$40',
      duration: '30 min',
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Hair Coloring',
      description: 'Professional hair coloring and highlights',
      price: '$75',
      duration: '90 min',
      image: 'https://t3.ftcdn.net/jpg/04/86/70/98/360_F_486709876_REbUj7ZkLqUOzEVmQ00SoHeboS44PJSU.jpg'
    },
    {
      title: 'Scalp Treatment',
      description: 'Relaxing scalp massage and treatment',
      price: '$30',
      duration: '25 min',
      image: 'https://images.pexels.com/photos/7447128/pexels-photo-7447128.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title fade-in-up">Our Services</h1>
          <p className="page-subtitle fade-in-up">Premium grooming experiences tailored for you</p>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="service-badge">{service.duration}</div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <span className="service-price">{service.price}</span>
                    <button className="service-button">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section packages-section">
        <div className="container">
          <h2 className="section-title">Package Deals</h2>
          <div className="packages-grid">
            <div className="package-card">
              <div className="package-header">
                <h3>Essential</h3>
                <div className="package-price">$85</div>
              </div>
              <ul className="package-features">
                <li>Premium Haircut</li>
                <li>Beard Trim</li>
                <li>Hot Towel Treatment</li>
                <li>Styling Products</li>
              </ul>
              <button className="package-button">Select Package</button>
            </div>

            <div className="package-card featured">
              <div className="package-ribbon">Popular</div>
              <div className="package-header">
                <h3>Deluxe</h3>
                <div className="package-price">$120</div>
              </div>
              <ul className="package-features">
                <li>Premium Haircut & Style</li>
                <li>Hot Towel Shave</li>
                <li>Scalp Treatment</li>
                <li>Beard Grooming</li>
                <li>Premium Products</li>
              </ul>
              <button className="package-button">Select Package</button>
            </div>

            <div className="package-card">
              <div className="package-header">
                <h3>Ultimate</h3>
                <div className="package-price">$180</div>
              </div>
              <ul className="package-features">
                <li>Premium Cut & Style</li>
                <li>Hair Coloring</li>
                <li>Hot Towel Shave</li>
                <li>Scalp Treatment</li>
                <li>Beard Grooming</li>
                <li>Complimentary Drink</li>
              </ul>
              <button className="package-button">Select Package</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
