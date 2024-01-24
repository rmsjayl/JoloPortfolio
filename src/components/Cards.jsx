import React from "react";
import CARDSSTYLE from "@styles/common/cards.module.css";

const Cards = ({ title, src, description, toolUsed, href }) => {
  return (
    <div className={CARDSSTYLE.card} data-aos="fade-up">
      <div className={CARDSSTYLE.cardWrapper}>
        <a href={href} target="_blank">
          <img className={CARDSSTYLE.cardImgProperties} src={src} alt="img" />
          <div className={CARDSSTYLE.cardContent}>
            <span className={CARDSSTYLE.title}>{title}</span>
            <p className={CARDSSTYLE.description}>{description}</p>
            <span className={CARDSSTYLE.toolUsed}>{toolUsed}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cards;
