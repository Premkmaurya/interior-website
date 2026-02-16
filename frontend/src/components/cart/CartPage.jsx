import React, { useState } from 'react';
import { RiDeleteBinLine, RiArrowRightLine, RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './CartPage.scss';

const CartPage = () => {
  // Mock Data: Replace with your Context or Redux state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Oak Minimalist Chair",
      variant: "Natural Wood",
      price: 2450.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Artisan Sourdough Basket",
      variant: "Set of 3 • Organic",
      price: 450.00,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
    }
  ]);

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 150.00; // Flat rate example
  const total = subtotal + shipping;

  // Handlers
  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // --- EMPTY STATE ---
  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty">
        <div className="empty-content">
          <h1>Your cart is currently empty.</h1>
          <p>Discover our latest collection of timeless essentials.</p>
          <Link to="/shop" className="btn-link">
            Start Shopping <RiArrowRightLine />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        
        <div className="cart-header">
          <h1>Your Selection</h1>
          <span className="count">({cartItems.length} items)</span>
        </div>

        <div className="cart-layout">
          
          {/* LEFT: Cart Items List */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="item-details">
                  <div className="info-top">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-variant">{item.variant}</p>
                  </div>

                  <div className="info-bottom">
                    <div className="quantity-wrapper">
                      <button onClick={() => updateQuantity(item.id, -1)}><RiSubtractLine /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}><RiAddLine /></button>
                    </div>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>

                <div className="item-price">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT: Summary Panel */}
          <div className="cart-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>₹{shipping.toLocaleString()}</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <p className="shipping-note">
                Taxes and shipping calculated at checkout.
              </p>

              <button className="checkout-btn">
                Proceed to Checkout <RiArrowRightLine />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;