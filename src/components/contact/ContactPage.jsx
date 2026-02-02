import React from 'react';
import './ContactPage.scss';

const departments = [
  { name: 'General Inquiries', email: 'hello@brand.com', phone: '+1 800 123 4567' },
  { name: 'Retail & Showrooms', email: 'retail@brand.com', phone: '+1 800 123 4568' },
  { name: 'Kitchen & Bath', email: 'interiors@brand.com', phone: '+1 800 123 4569' },
  { name: 'Press & Media', email: 'press@brand.com', phone: '+1 800 123 4570' }
];

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      {/* Hero Section */}
      <header className="contact-hero">
        <p className="subtitle">Any inquiries? We're here to help.</p>
        <div className="page-title"><span>CONTACT</span> <span>INFORMATION</span></div>
      </header>

      {/* Contact Channels Section */}
      <section className="channels-section">
        <div className="channels-grid">
          {departments.map((dept, index) => (
            <div key={index} className="channel-item">
              <h3 className="dept-name">{dept.name}</h3>
              <a href={`mailto:${dept.email}`} className="contact-link">{dept.email}</a>
              <span className="contact-link">{dept.phone}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Story Section */}
      <section className="flagship-story">
        <div className="story-content">
          <h2 className="story-title">Our House is Yours</h2>
          <p className="story-text">
            Experience our craftsmanship in person. Our flagship showroom is a 
            curated environment designed to inspire and facilitate personal interaction.
          </p>
          <button className="btn-tour">SCHEDULE A TOUR</button>
        </div>
        <div className="story-image">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" alt="Showroom" />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;