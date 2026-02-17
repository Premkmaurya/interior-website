import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RiFileList3Line,
  RiShoppingBag3Line,
  RiUser3Line,
  RiAddLine,
  RiArrowRightLine,
  RiLogoutBoxRLine,
  RiCheckDoubleLine,
  RiTimeLine,
} from "@remixicon/react";
import { logout } from "../../store/slices/authSlice";
import "./DashboardPage.scss";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("requests");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // --- MOCK DATA (In real app, fetch from API) ---
  const [userData] = useState({
    firstName: "Oliver",
    lastName: "Smith",
    email: "oliver.smith@example.com",
    phone: "+1 (555) 019-2834",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  // Logout Handler
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Profile Form Submit Handler
  const onProfileSubmit = async (data) => {
    console.log("Profile Data:", data);
    alert("Profile updated successfully!");
  };

  const requests = [
    {
      id: "REQ-001",
      type: "Full Home Renovation",
      date: "Oct 24, 2025",
      status: "Quote Sent",
    },
    {
      id: "REQ-002",
      type: "Home Office Redesign",
      date: "Nov 02, 2025",
      status: "Pending",
    },
  ];

  const orders = [
    {
      id: "ORD-8821",
      project: "Lakeside Villa Living Room",
      status: "In Progress",
      startDate: "Jan 10, 2026",
      payment: "Paid (50%)",
    },
  ];

  // --- HELPER: Status Badge Color ---
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "status-pending";
      case "Quote Sent":
        return "status-success";
      case "In Progress":
        return "status-active";
      default:
        return "status-default";
    }
  };

  return (
    <div className="client-dashboard">
      {/* 1. HEADER (Welcome & Logout) */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="branding">
            <span className="eyebrow">CLIENT PORTAL</span>
            <h1>Welcome back, {userData.firstName}.</h1>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <RiLogoutBoxRLine size={18} /> <span>Log Out</span>
          </button>
        </div>
      </header>

      {/* 2. NAVIGATION TABS */}
      <nav className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === "requests" ? "active" : ""}`}
          onClick={() => setActiveTab("requests")}
        >
          <RiFileList3Line size={18} /> Price Requests
        </button>
        <button
          className={`tab-btn ${activeTab === "orders" ? "active" : ""}`}
          onClick={() => setActiveTab("orders")}
        >
          <RiShoppingBag3Line size={18} /> Active Orders
        </button>
        <button
          className={`tab-btn ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          <RiUser3Line size={18} /> My Data
        </button>
      </nav>

      {/* 3. MAIN CONTENT AREA */}
      <main className="dashboard-content">
        {/* --- SECTION 1: PRICE REQUESTS --- */}
        {activeTab === "requests" && (
          <div className="section-container fade-in">
            <div className="section-header">
              <h2>Your Inquiries</h2>
              <button className="primary-action-btn">
                <RiAddLine size={18} /> New Request
              </button>
            </div>

            <div className="card-list">
              {requests.map((req) => (
                <div key={req.id} className="data-card">
                  <div className="card-main">
                    <span className="card-id">#{req.id}</span>
                    <h3 className="card-title">{req.type}</h3>
                    <span className="card-date">
                      <RiTimeLine size={14} /> Submitted on {req.date}
                    </span>
                  </div>
                  <div className="card-meta">
                    <span
                      className={`status-badge ${getStatusColor(req.status)}`}
                    >
                      {req.status}
                    </span>
                    <button className="icon-btn">
                      <RiArrowRightLine size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- SECTION 2: ORDERS --- */}
        {activeTab === "orders" && (
          <div className="section-container fade-in">
            <div className="section-header">
              <h2>Current Projects</h2>
            </div>

            <div className="card-list">
              {orders.map((order) => (
                <div key={order.id} className="data-card order-card">
                  <div className="card-main">
                    <span className="card-id">#{order.id}</span>
                    <h3 className="card-title">{order.project}</h3>
                    <div className="meta-row">
                      <span>Started: {order.startDate}</span>
                      <span className="dot">•</span>
                      <span>Payment: {order.payment}</span>
                    </div>
                  </div>
                  <div className="card-meta">
                    <span
                      className={`status-badge ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                    <button className="text-link">View Progress</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- SECTION 3: MY DATA (PROFILE) --- */}
        {activeTab === "profile" && (
          <div className="section-container fade-in">
            <div className="section-header">
              <h2>Personal Information</h2>
            </div>

            <div className="profile-form-wrapper">
              <form
                onSubmit={handleSubmit(onProfileSubmit)}
                className="profile-form"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                        minLength: {
                          value: 2,
                          message: "First name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.firstName && (
                      <span className="error-text">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                        minLength: {
                          value: 2,
                          message: "Last name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.lastName && (
                      <span className="error-text">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    readOnly
                    className="readonly"
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value:
                          /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="error-text">{errors.phone.message}</span>
                  )}
                </div>

                <div className="divider"></div>

                <div className="form-row">
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      {...register("newPassword", {
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                    {errors.newPassword && (
                      <span className="error-text">
                        {errors.newPassword.message}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      {...register("confirmPassword", {
                        validate: (value) => {
                          if (newPassword && value !== newPassword) {
                            return "Passwords do not match";
                          }
                          return true;
                        },
                      })}
                    />
                    {errors.confirmPassword && (
                      <span className="error-text">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="save-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;