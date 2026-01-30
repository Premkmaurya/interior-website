import React from "react";
import "./AboutSection.scss";

import { RiArrowLeftUpLine } from "@remixicon/react";

const AboutSection = () => {
  return (
    <div className="about__section">
      <div className="about__image_left_wrapper">
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
      <div className="about__text_right_wrapper">
        <div className="about__text_right_content">
          <button className="about__text_right_button">Aesthetic</button>
          <div className="about__text_right_heading">
            Aesthetic furtniture where every <br />
            place tells a sotry of style
          </div>
          <div className="about__text_right_paragraph">
            Into a gallary <br /> of elegance
          </div>
        </div>
        <div className="about__text_right_bottom">
          <img src="/img/image-3.jpg" alt="About Section Bottom Image" />
          <div className="link">
            <RiArrowLeftUpLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
