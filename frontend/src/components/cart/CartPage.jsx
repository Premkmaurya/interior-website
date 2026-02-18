import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBinLine, RiArrowRightLine, RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import './CartPage.scss';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 150.00; // Flat rate example
  const total = subtotal + shipping;

  // Handlers
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
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
                      <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}><RiSubtractLine /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}><RiAddLine /></button>
                    </div>
                    <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
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