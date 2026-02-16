import React, { useState } from 'react';
import { RiMailLine , RiLockLine , RiUserLine , RiArrowRightLine, RiGoogleFill  } from '@remixicon/react'; // Assuming lucide-react is installed
import './AuthPage.scss';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Toggle between Login and Signup
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    // Optional: Clear form errors here
  };

  // Mock Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(isLogin ? "Welcome back!" : "Account created successfully!");
    }, 1500);
  };

  return (
    <div className="auth-page">
      
      {/* 1. BRAND SIDE (Left Panel) */}
      <div className="brand-panel">
        <div className="overlay">
          <span className="brand-tag">INTERIOR & CO.</span>
          <h1 className="brand-heading">
            {isLogin ? "Welcome back to your curated space." : "Join our community of design lovers."}
          </h1>
          <p className="brand-subtext">
            Discover timeless furniture and artisan craft for your home.
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Minimal Interior" 
          className="brand-image"
        />
      </div>

      {/* 2. FORM SIDE (Right Panel) */}
      <div className="form-panel">
        <div className="form-container">
          
          <div className="auth-header">
            <h2 className="auth-title">{isLogin ? "Sign In" : "Create Account"}</h2>
            <p className="auth-subtitle">
              {isLogin ? "Enter your details to proceed." : "Fill in your details to get started."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            
            {/* Name Field (Sign Up Only) */}
            {!isLogin && (
              <div className="form-group fade-in">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <RiUserLine  size={18} className="input-icon" />
                  <input type="text" placeholder="John Doe" required />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <RiMailLine  size={18} className="input-icon" />
                <input type="email" placeholder="name@example.com" required />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <RiLockLine  size={18} className="input-icon" />
                <input type="password" placeholder="••••••••" required minLength={8} />
              </div>
            </div>

            {/* Login Extras */}
            {isLogin && (
              <div className="form-extras">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="#forgot" className="forgot-link">Forgot password?</a>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Processing..." : (
                <>
                  {isLogin ? "Log In" : "Sign Up"} <RiArrowRightLine  size={18} />
                </>
              )}
            </button>

          </form>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-auth">
            <button className="social-btn">
              <RiGoogleFill  size={20} /> Google
            </button>
          </div>

          <div className="auth-switch">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={toggleAuthMode} className="switch-btn">
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AuthPage;