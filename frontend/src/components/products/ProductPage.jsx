import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import "./ProductPage.scss";

import { RiTruckLine, RiLoopLeftLine, RiAddLargeLine } from "@remixicon/react";
import { LuPackageOpen } from "react-icons/lu";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/single-product/${product.id}`, { state: { product } });
  };

  return (
    <div
      className="product-card"
      onClick={handleViewProduct}
      style={{ cursor: "pointer" }}
    >
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <div className="text-content">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
        {/* Quick Add Shopping Bag Icon [cite: 144] */}
        <button className="bag-button" onClick={(e) => e.stopPropagation()}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const ProductPage = () => {
  useScrollToTop();

  const products = [
    {
      id: 1,
      name: "Oak Wood Chair",
      price: 129.99,
      description:
        "A beautifully crafted oak wood chair that combines comfort and style.",
      image: "/products/image-1.jpeg",
    },
    {
      id: 2,
      name: "Scandinavian Sofa",
      price: 499.99,
      description:
        "A sleek Scandinavian sofa that blends modern design with comfort.",
      image: "/products/image-2.jpeg",
    },
    {
      id: 3,
      name: "Minimalist Coffee Table",
      price: 199.99,
      description: "A minimalist coffee table made from sustainable materials.",
      image: "/products/image-3.jpeg",
    },
    {
      id: 4,
      name: "Modern Bookshelf",
      price: 299.99,
      description: "A modern bookshelf that adds elegance to any living space.",
      image: "/products/image-4.jpeg",
    },
    // Add more products as needed
  ];

  const faqData = [
    {
      question: "Placeholder question goes here?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
    },
    {
      question: "Placeholder question goes here?",
      answer: "Answer for the second question.",
    },
    {
      question: "Placeholder question goes here?",
      answer: "Answer for the third question.",
    },
    {
      question: "Placeholder question goes here?",
      answer: "Answer for the fourth question.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1); // Set first item open by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="product-showcase">
      {/* 5.1 Hero Section - Focus on Action [cite: 133, 139] */}
      <section className="product-hero">
        <div className="hero-content">
          <h1>Modern Comfort for Every Room</h1>
          <p>Discover our new sustainable collection.</p>
          <button className="btn-primary">Shop All Collections</button>
        </div>
        <div className="hero-bottom">
          <button class="button">
            <div class="button-box">
              <span class="button-elem">
                <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
              <span class="button-elem">
                <svg viewBox="0 0 46 40">
                  <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                </svg>
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* 5.2 & 5.3 Grid System [cite: 129, 140] */}
      <section className="grid-container">
        <div className="section-header">
          <h2>New Collections</h2>
          <p>Handcrafted pieces, delivered to your door.</p>
        </div>

        <div className="product-grid">
          {/* Mapping through your product data */}
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* 5.4 Service Highlights [cite: 152, 155] */}
      <section className="service-highlights">
        <div className="highlight-item">
          <span>
            <LuPackageOpen size={30} />
          </span>
          <h2>Make your Order</h2>
          <p>
            Customize and order your <br /> favorite pieces.
          </p>
        </div>
        <div className="highlight-item">
          <span>
            <RiTruckLine size={30} />
          </span>
          <h2>Free Delivery</h2>
          <p>On orders over $100</p>
        </div>
        <div className="highlight-item">
          <span>
            <RiLoopLeftLine size={30} />
          </span>
          <h2>Easy Returns</h2>
          <p>30-day return policy</p>
        </div>
      </section>

      <section className="faq-container">
        <span className="trusted-by">TRUSTED BY</span>
        <h2 className="faq-title">
          Frequently
          <br />
          Asked Questions
        </h2>

        <div className="accordion">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.question}</h3>
                <div className="icon-wrapper">
                  <span className="icon">
                    <RiAddLargeLine />
                  </span>
                </div>
              </div>

              <div className="accordion-content">
                <div className="inner-text">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="footer__top">
        <div className="footer__engagement">
          <div className="footer__engagement-content">
            <h2>
              Build Your Home With A Comfortable Room By Using Our Interior
            </h2>
            <p>
              Looking for quality design furniture? then your choice is right
              have visited our website. We have furniture with several quality
              ready to be sent to you.
            </p>
          </div>
          <div className="footer__engagement-image">
            <img src="/img/image-3.jpg" alt="Engage with us" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
