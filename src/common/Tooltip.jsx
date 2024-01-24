import React from "react";
import STYLE from "@styles/components/tooltip.module.css";

const Tooltip = ({ title, tooltipText, children }) => {
  return (
    <>
      <div className={STYLE.tooltip}>
        {children}
        {title}
        <span className={STYLE.tooltiptext}>{tooltipText}</span>
      </div>
    </>
  );
};

export default Tooltip;
