import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import "./SingleProductPage.scss";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
} from "@remixicon/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const categories = [
  {
    id: 1,
    name: "Wardrobe",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Kitchen & Bath",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3c30?auto=format&fit=crop&q=80&w=800",
  },
];

const SingleProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useScrollToTop();

  // Track window resize to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Default product data if no product is passed
  const displayProduct = product || {
    name: "NORDIC OAK CHAIR",
    image:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1000",
    description:
      "Hand-finished with natural oils to preserve the organic grain and texture of sustainable European oak.",
    price: 850.0,
    sku: "4087-FC",
    category: "CARE PRODUCTS",
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="pdp-wrapper">
      <main className="product-hero">
        {/* Left: Product Image [cite: 30] */}
        <div className="image-container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={displayProduct.image}
                alt={displayProduct.name}
                onClick={() => handleImageClick(displayProduct.image)}
                className="swiper-image-clickable"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={displayProduct.image}
                alt={displayProduct.name}
                onClick={() => handleImageClick(displayProduct.image)}
                className="swiper-image-clickable"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={displayProduct.image}
                alt={displayProduct.name}
                onClick={() => handleImageClick(displayProduct.image)}
                className="swiper-image-clickable"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={displayProduct.image}
                alt={displayProduct.name}
                onClick={() => handleImageClick(displayProduct.image)}
                className="swiper-image-clickable"
              />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-btn-next">
            <RiArrowRightSLine />
          </div>
          <div className="swiper-btn-prev">
            <RiArrowLeftSLine />
          </div>
        </div>

        {/* Right: Product Information [cite: 31] */}
        <section className="product-info">
          <span className="category-label">
            {displayProduct.category || "CARE PRODUCTS"}
          </span>
          <h1 className="product-title">{displayProduct.name}</h1>
          <p className="product-description">{displayProduct.description}</p>

          <div className="product-meta">
            <span className="price">
              ${displayProduct.price?.toFixed(2) || "$850.00"}
            </span>
            <span className="sku">SKU: {displayProduct.sku || "4087-FC"}</span>
          </div>

          <div className="cta-group">
            <button className="btn-primary">ADD TO CART</button>
            <button className="btn-secondary">WHERE TO BUY</button>
          </div>

          <div className="documentation">
            <a href="#download" className="doc-link">
              <i className="icon-pdf"></i> Download Maintenance Guide (PDF)
            </a>
          </div>
        </section>
      </main>
      <section className="suggested-section">
        <div className="section-header">
          <h2 className="section-title">More for Your Home</h2>
          <p className="section-subtitle">
            Explore our curated collections for every room.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="image-wrapper">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <div className="overlay">
                  <span className="view-label">VIEW COLLECTION</span>
                </div>
              </div>
              <h3 className="category-name">{cat.name}</h3>
            </div>
          ))}
        </div>
        <div className="swiper-category">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <div className="category-card">
                    <div className="image-wrapper">
                      <img src={cat.image} alt={cat.name} loading="lazy" />
                      <div className="overlay">
                        <span className="view-label">VIEW COLLECTION</span>
                      </div>
                    </div>
                    <h3 className="category-name">{cat.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="swiper-btn-next">
            <RiArrowRightSLine />
          </div>
          <div className="swiper-btn-prev">
            <RiArrowLeftSLine />
          </div>
        </div>
      </section>


      {/* Image Modal */}
      {isModalOpen && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeModal}>
              <RiCloseLine />
            </button>
            <img src={selectedImage} alt="fullscreen" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
