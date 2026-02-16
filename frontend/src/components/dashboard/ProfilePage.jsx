import React from 'react';
import { 
  RiPencilLine, 
  RiMapPinLine, 
  RiMailLine, 
  RiPhoneLine, 
  RiLayoutMasonryLine, 
  RiHomeSmileLine,
  RiLogoutBoxRLine,
  RiSettings4Line,
  RiFolder3Line,
  RiChat1Line
} from '@remixicon/react';
import { Link, useLocation } from 'react-router-dom';
import './ProfilePage.scss'; // We will put all dashboard styles here for now

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { icon: <RiHomeSmileLine size={20} />, label: "Overview", path: "/dashboard" },
    { icon: <RiFolder3Line size={20} />, label: "My Projects", path: "/dashboard/projects" },
    { icon: <RiLayoutMasonryLine size={20} />, label: "Inspirations", path: "/dashboard/inspirations" },
    { icon: <RiChat1Line size={20} />, label: "Messages", path: "/dashboard/chat" },
    { icon: <RiSettings4Line size={20} />, label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <aside className="dashboard-sidebar">
      <div className="logo-area">
        <span className="brand">INTERIOR & CO.</span>
      </div>
      
      <nav className="nav-menu">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
          >
            {item.icon}
            <span className="label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">
          <RiLogoutBoxRLine size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

const ProfilePage = () => {
  // Mock User Data (Based on PRD)
  const user = {
    name: "Eleanor Pneelope",
    role: "Private Client",
    email: "eleanor.p@example.com",
    phone: "+1 (555) 012-3456",
    location: "Hamptons, New York",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
    stylePreferences: ["Scandinavian Modern", "Warm Minimalism", "Organic Textures"],
    activeProject: "Lakeside Villa Renovation"
  };

  return (
    <div className="dashboard-layout">
      {/* 1. SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* 2. MAIN CONTENT AREA */}
      <main className="dashboard-content">
        
        {/* Top Bar / Breadcrumb area (optional) */}
        <header className="content-header">
          <h1 className="page-title">My Profile</h1>
          <span className="date">Monday, 16 Feb</span>
        </header>

        <div className="profile-container">
          
          {/* A. VISUAL HEADER CARD */}
          <div className="profile-header-card fade-in">
            <div className="profile-cover">
              {/* Abstract decorative background */}
            </div>
            
            <div className="profile-info-row">
              <div className="avatar-wrapper">
                <img src={user.image} alt={user.name} />
              </div>
              
              <div className="identity-block">
                <h2 className="user-name">{user.name}</h2>
                <span className="user-role">{user.role} • {user.activeProject}</span>
              </div>

              <button className="edit-btn">
                <RiPencilLine size={18} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* B. DETAILS GRID */}
          <div className="details-grid">
            
            {/* Contact Info */}
            <div className="info-card fade-in-delay-1">
              <h3>Contact Information</h3>
              <div className="info-list">
                <div className="info-item">
                  <div className="icon-box"><RiMailLine size={18} /></div>
                  <div className="text">
                    <span className="label">Email Address</span>
                    <span className="value">{user.email}</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><RiPhoneLine size={18} /></div>
                  <div className="text">
                    <span className="label">Phone Number</span>
                    <span className="value">{user.phone}</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><RiMapPinLine size={18} /></div>
                  <div className="text">
                    <span className="label">Location</span>
                    <span className="value">{user.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design DNA / Preferences */}
            <div className="info-card fade-in-delay-2">
              <h3>Design DNA</h3>
              <p className="card-subtitle">Your stylistic preferences for the current project.</p>
              
              <div className="tags-wrapper">
                {user.stylePreferences.map((style, i) => (
                  <span key={i} className="style-tag">{style}</span>
                ))}
              </div>

              <div className="palette-preview">
                <span className="label">Project Palette</span>
                <div className="colors">
                  <div className="swatch" style={{background: '#D9D9D9'}}></div>
                  <div className="swatch" style={{background: '#CBBCAE'}}></div>
                  <div className="swatch" style={{background: '#8C8C8C'}}></div>
                  <div className="swatch" style={{background: '#2C2C2C'}}></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default ProfilePage;