import React from "react";
import "./AboutSection.scss";

import { RiArrowLeftUpLine } from "@remixicon/react";

const styleMap = {
  svg: {
    base: {
      xmlns: "http://www.w3.org/2000/svg",
      xmlSpace: "preserve",
      version: "1.1",
      viewBox: "0 0 784.11 815.53",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      style: {
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      },
    },
    path: {
      d: "M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z",
    },
  },
  stars: [
    { name: "star-1", className: "star-1" },
    { name: "star-2", className: "star-2" },
    { name: "star-3", className: "star-3" },
    { name: "star-5", className: "star-5" },
    { name: "star-6", className: "star-6" },
  ],
};

const SVGStar = ({ className }) => (
  <div className={className}>
    <svg
      xmlns={styleMap.svg.base.xmlns}
      xmlSpace={styleMap.svg.base.xmlSpace}
      version={styleMap.svg.base.version}
      style={styleMap.svg.base.style}
      viewBox={styleMap.svg.base.viewBox}
      xmlnsXlink={styleMap.svg.base.xmlnsXlink}
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          className="fil0"
          d={styleMap.svg.path.d}
        ></path>
      </g>
    </svg>
  </div>
);

const AboutSection = () => {
  return (
    <div className="about__section">
      <div className="about__image_left_wrapper">
        <img src="/img/image-2.jpg" alt="" />
        <div className="about__image_overlay">
          <div className="highlighted_text">
            <button>
              <span>georgeus interior</span>
            </button>
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
          <button>
            Aesthetic
            {styleMap.stars.map((star) => (
              <SVGStar key={star.name} className={star.className} />
            ))}
          </button>

          <div className="about__text_right_heading">
            Aesthetic furtniture where every
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
