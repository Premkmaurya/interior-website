import React from "react";
import "./FooterCard.scss";

const FooterCard = () => {
  return (
    <div className="footer__top">
      <div className="footer__engagement">
        <div className="footer__engagement-content">
          <h2>Engage with Us in Conversation.</h2>
          <p>
            In a global world based on communication, a brand must look beyond
            its borders, open us to new experiences, and dare to be different.
            Meeting the brightest minds of one's time is the most effective way
            to nurture creativity
          </p>
        </div>
        <div className="footer__engagement-image">
          <img src="/img/image-3.jpg" alt="Engage with us" />
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
