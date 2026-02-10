import React from "react";
import { RiArrowRightLine } from "@remixicon/react";
import "./HeroSection.scss";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CircularText from "../../react__bits__components/circular_text/CircularText";

const HeroSection = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger)

  let split = new SplitText(".hero__box-text", { type: "words,lines" });

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero__title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(
        ".hero__box",
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5",
      )
      .from(
        split.lines,
        {
          duration: 0.5,
          y: 100, // animate from 100px below
          autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
          stagger: 0.05,
        },
        "-=0.3",
      )
      .from(
        ".hero__box-button",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.3",
      );
  }, []);

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
            <span>View More</span> <RiArrowRightLine />
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
