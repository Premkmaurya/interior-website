import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiMailLine , RiLockLine , RiUserLine , RiArrowRightLine, RiGoogleFill  } from '@remixicon/react';
import { login } from '../../store/slices/authSlice';
import './AuthPage.scss';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Include credentials for cookies
});

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    mode: 'onBlur',
    defaultValues: {
      fullName: user?.fullName || '',
      email: user?.email || '',
      password: '',
      confirmPassword: '',
      rememberMe: false
    }
  });

  const password = watch('password');

  // Toggle between Login and Signup
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    reset();
  };

  // Form Submit Handler
  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      if (isLogin) {
        // Login API call
        const response = await axiosInstance.post('/auth/login', {
          email: data.email,
          password: data.password,
        });

        // Store user data in Redux
        const userData = {
          fullName: response.data.fullName,
          email: response.data.email
        };
        dispatch(login(userData));
        navigate('/');
        alert("Welcome back!");
      } else {
        // Signup API call
        const response = await axiosInstance.post('/auth/register', {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        });

        // Store user data in Redux
        const newUser = {
          fullName: data.fullName,
          email: data.email
        };
        dispatch(login(newUser));
        navigate('/');
        alert("Account created successfully!");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
      alert(`Error: ${errorMessage}`);
      console.error('Auth error:', errorMessage);
    } finally {
      setIsLoading(false);
    }
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

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            
            {/* Name Field (Sign Up Only) */}
            {!isLogin && (
              <div className="form-group fade-in">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <RiUserLine  size={18} className="input-icon" />
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    {...register('fullName', {
                      required: isLogin ? false : 'Full name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    })}
                  />
                </div>
                {errors.fullName && <span className="error-text">{errors.fullName.message}</span>}
              </div>
            )}

            {/* Email Field */}
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <RiMailLine  size={18} className="input-icon" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address'
                    }
                  })}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email.message}</span>}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <RiLockLine  size={18} className="input-icon" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    }
                  })}
                />
              </div>
              {errors.password && <span className="error-text">{errors.password.message}</span>}
            </div>

            {/* Confirm Password Field (Sign Up Only) */}
            {!isLogin && (
              <div className="form-group">
                <label>Confirm Password</label>
                <div className="input-wrapper">
                  <RiLockLine  size={18} className="input-icon" />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) => value === password || 'Passwords do not match'
                    })}
                  />
                </div>
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword.message}</span>}
              </div>
            )}

            {/* Login Extras */}
            {isLogin && (
              <div className="form-extras">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    {...register('rememberMe')}
                  />
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