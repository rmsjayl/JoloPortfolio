import React from "react";
import FOOTERSTYLE from "@styles/components/footer.module.css";

const Footer = () => {
  return (
    <div className={FOOTERSTYLE.container}>
      <span>
        &copy;{new Date().getFullYear()} Committed in developing exceptional
        quality services — in all aspects.
      </span>
    </div>
  );
};

export default Footer;
