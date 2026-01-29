import React from "react";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <div className="about__section">
      <div className="about__image_wrapper">
        <img src="/img/image-2.jpg" alt="" />
        <div className="about__image_overlay">
          <div className="highlighted_text">
            <button>georgeus interior</button>
          </div>
          <div className="about__image_overlay_content">
            <div className="about__image_overlay_text">
              <span className="first_text">Mordern</span>
              <span className="second_text">Minimilist</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
