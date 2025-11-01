import { useState, useEffect } from 'react';
import './Services.css';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
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

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = [
    {
      category: 'appetizers',
      name: 'Truffle Bruschetta',
      description: 'Toasted artisan bread with truffle oil, fresh tomatoes, and basil',
      price: '$18',
      icon: '🍞'
    },
    {
      category: 'appetizers',
      name: 'Seared Scallops',
      description: 'Pan-seared scallops with cauliflower puree and microgreens',
      price: '$24',
      icon: '🦪'
    },
    {
      category: 'appetizers',
      name: 'Caesar Salad',
      description: 'Classic Caesar with parmesan crisps and house-made dressing',
      price: '$16',
      icon: '🥗'
    },
    {
      category: 'mains',
      name: 'Wagyu Beef Steak',
      description: 'Premium Japanese beef with truffle mashed potatoes and asparagus',
      price: '$68',
      icon: '🥩'
    },
    {
      category: 'mains',
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herb butter and seasonal vegetables',
      price: '$42',
      icon: '🐟'
    },
    {
      category: 'mains',
      name: 'Lobster Risotto',
      description: 'Creamy arborio rice with fresh Maine lobster and saffron',
      price: '$55',
      icon: '🦞'
    },
    {
      category: 'mains',
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with orange glaze and roasted root vegetables',
      price: '$48',
      icon: '🦆'
    },
    {
      category: 'mains',
      name: 'Mushroom Risotto',
      description: 'Wild mushroom risotto with truffle oil and parmesan (Vegetarian)',
      price: '$38',
      icon: '🍄'
    },
    {
      category: 'desserts',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      price: '$14',
      icon: '🍫'
    },
    {
      category: 'desserts',
      name: 'Crème Brûlée',
      description: 'Classic French custard with caramelized sugar and fresh berries',
      price: '$12',
      icon: '🍮'
    },
    {
      category: 'desserts',
      name: 'Tiramisu',
      description: 'Traditional Italian dessert with espresso and mascarpone',
      price: '$13',
      icon: '🍰'
    },
    {
      category: 'beverages',
      name: 'House Wine Selection',
      description: 'Curated selection of red and white wines from around the world',
      price: '$12-45',
      icon: '🍷'
    },
    {
      category: 'beverages',
      name: 'Craft Cocktails',
      description: 'Signature cocktails crafted by our expert mixologists',
      price: '$16-22',
      icon: '🍸'
    },
    {
      category: 'beverages',
      name: 'Artisan Coffee',
      description: 'Freshly brewed specialty coffee and espresso drinks',
      price: '$5-8',
      icon: '☕'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="fade-in-up">Our Menu</h1>
          <p className="fade-in-up delay-2">Culinary masterpieces crafted with passion</p>
        </div>
      </section>

      <section className="section menu-section">
        <div className="container">
          <div className="menu-categories fade-in-up">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="menu-grid grid grid-2">
            {filteredItems.map((item, index) => (
              <div 
                key={index}
                id={`animate-menu-${index}`}
                className={`menu-item card ${isVisible[`animate-menu-${index}`] ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${(index % 6) * 0.1}s` }}
              >
                <div className="menu-item-icon">{item.icon}</div>
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section menu-cta">
        <div className="container">
          <div className="cta-content scale-in">
            <h2>Ready to Experience Our Cuisine?</h2>
            <p>Reserve your table and let us take you on a culinary journey</p>
            <a href="/contact" className="btn btn-primary">Make a Reservation</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
