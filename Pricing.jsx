import './Pricing.css';

const Pricing = () => {
  const services = [
    { name: 'Basic Haircut', price: '$25', duration: '20 min' },
    { name: 'Classic Haircut', price: '$35', duration: '30 min' },
    { name: 'Premium Cut & Style', price: '$50', duration: '45 min' },
    { name: 'Buzz Cut', price: '$20', duration: '15 min' },
    { name: 'Kids Haircut (Under 12)', price: '$22', duration: '25 min' },
    { name: 'Beard Trim', price: '$20', duration: '15 min' },
    { name: 'Beard Trim & Shape', price: '$25', duration: '20 min' },
    { name: 'Hot Towel Shave', price: '$40', duration: '30 min' },
    { name: 'Beard & Haircut Combo', price: '$55', duration: '50 min' },
    { name: 'Hair Coloring', price: '$75+', duration: '90 min' },
    { name: 'Highlights', price: '$85+', duration: '120 min' },
    { name: 'Scalp Treatment', price: '$30', duration: '25 min' },
    { name: 'Hair Styling', price: '$25', duration: '20 min' },
    { name: 'Eyebrow Trim', price: '$10', duration: '10 min' }
  ];

  const memberships = [
    {
      name: 'Bronze',
      price: '$79',
      period: '/month',
      benefits: [
        '2 Haircuts per month',
        '10% off all services',
        'Priority booking',
        'Birthday discount'
      ]
    },
    {
      name: 'Silver',
      price: '$129',
      period: '/month',
      benefits: [
        '4 Haircuts per month',
        '15% off all services',
        '1 Free beard trim',
        'Priority booking',
        'Free styling products',
        'Birthday gift'
      ],
      featured: true
    },
    {
      name: 'Gold',
      price: '$199',
      period: '/month',
      benefits: [
        'Unlimited haircuts',
        '20% off all services',
        'Free beard grooming',
        'VIP booking',
        'Premium products',
        'Complimentary drinks',
        'Exclusive events access'
      ]
    }
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <h1 className="page-title fade-in-up">Our Pricing</h1>
          <p className="page-subtitle fade-in-up">Transparent pricing for premium services</p>
        </div>
      </section>

      <section className="section services-pricing-section">
        <div className="container">
          <h2 className="section-title">Services Menu</h2>
          <div className="pricing-menu">
            {services.map((service, index) => (
              <div key={index} className="menu-item" style={{ animationDelay: `${index * 0.03}s` }}>
                <div className="menu-item-info">
                  <h4 className="menu-item-name">{service.name}</h4>
                  <span className="menu-item-duration">{service.duration}</span>
                </div>
                <div className="menu-item-line"></div>
                <div className="menu-item-price">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section memberships-section">
        <div className="container">
          <h2 className="section-title">Membership Plans</h2>
          <p className="memberships-subtitle">Save more with our exclusive membership options</p>
          <div className="memberships-grid">
            {memberships.map((plan, index) => (
              <div key={index} className={`membership-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="membership-ribbon">Most Popular</div>}
                <div className="membership-header">
                  <h3 className="membership-name">{plan.name}</h3>
                  <div className="membership-price">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                </div>
                <ul className="membership-benefits">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <button className="membership-button">Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">Do I need an appointment?</h4>
              <p className="faq-answer">
                While walk-ins are welcome, we recommend booking an appointment to ensure minimal wait time and secure your preferred stylist.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">What forms of payment do you accept?</h4>
              <p className="faq-answer">
                We accept cash, all major credit cards, debit cards, and mobile payment options like Apple Pay and Google Pay.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Can I cancel or reschedule my appointment?</h4>
              <p className="faq-answer">
                Yes, you can cancel or reschedule up to 24 hours before your appointment without any fees. Please contact us as soon as possible.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Are products used on my hair included?</h4>
              <p className="faq-answer">
                Yes, all premium styling products used during your service are included in the price. We also offer products for purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
