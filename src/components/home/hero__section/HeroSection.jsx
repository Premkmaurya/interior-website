import React from "react";
import { RiArrowRightLine } from "@remixicon/react";
import "./HeroSection.scss";

import CircularText from "../../react__bits__components/circular_text/CircularText";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Contemporary</h1>
      </div>
      <div className="bottom__section">
        <div className="hero__box">
          <p className="hero__box-text">
            Crafting spaces that harmonize modern aesthetics with timeless
            elegance, our contemporary interior designs breathe life into every
            room, redefining the essence of chic living.
          </p>
          <button className="hero__box-button">
            View More <RiArrowRightLine />
          </button>
        </div>
        {/* <div className="hero__circular-text">
          <CircularText
            text="MORDEN*MINIMILISTIC*MORDEN*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
