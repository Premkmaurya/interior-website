import React from "react";
import "./ProductSection.scss";

const ProductSection = () => {
  // Data for the feature cards
  const features = [
    {
      id: 1,
      image: "/products/image-1.jpeg",
    },
    {
      id: 2,
      image: "/products/image-2.jpeg",
    },
    {
      id: 3,
      image: "/products/image-3.jpeg",
    },
    {
      id: 4,
      image: "/products/image-4.jpeg",
    },
    {
      id: 5,
      image: "/products/image-5.jpeg",
    },
    {
      id: 6,
      image: "/products/image-6.jpeg",
    },
    {
      id: 7,
      image: "/products/image-7.jpeg",
    },
    {
      id: 8,
      image: "/products/image-8.jpeg",
    },
  ];

  return (
    <>
      <div className="explore-section">
        <div className="explore-content">
          <h2>Explore Our <br /> Proudly Collection</h2>
          <div className="para">
            <button className="view-more-button">View More →</button>
            <p>
              Poliform will showcase its vision of contemporary architecture,
              interior design trends, and innovative living at Salone del
              Mobile.Milano 2024.
            </p>
          </div>
        </div>
      </div>

      {/* Existing project section */}
      <div className="project__section-container">
        {features.map((feature) => (
          <img
            width="100px"
            src={feature.image}
            alt={`Feature ${feature.id}`}
            className="feature-image"
          />
        ))}
      </div>
    </>
  );
};

export default ProductSection;
