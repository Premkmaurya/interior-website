import React from 'react';
import './ProductSection.scss';

const ProductSection = () => {
  // Data for the feature cards
  const features = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Placeholder: Replace with your actual image URL
      description: "Our cakes are handcrafted with love and the finest ingredients, ensuring every bite is a delight.",
      layout: "large-image" // Layout type 1
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Placeholder
      description: "From classic flavors to unique creations, we offer a wide variety of treats to satisfy every craving.",
      layout: "small-image" // Layout type 2
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Placeholder
      description: "We use only fresh, locally sourced produce to support our community and guarantee freshness.",
      layout: "large-image" // Layout type 1
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Placeholder
      description: "Celebrate your special moments with our custom-designed cakes, tailored to your theme and taste.",
      layout: "small-image" // Layout type 2
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className={`feature-card ${feature.layout}`}>
              <div className="image-wrapper">
                <img src={feature.image} alt="Feature" />
              </div>
              <div className="content-wrapper">
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;