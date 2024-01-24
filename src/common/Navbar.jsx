import { useState, useEffect } from "react";
import NAVSTYLE from "@styles/common/navbar.module.css";
import moment from "moment";
import Tooltip from "@common/Tooltip";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Projects",
    },
    {
      id: 4,
      name: "Contact",
    },
  ];

  const [date, setDate] = useState(moment().format("MMM DD, YYYY — h:mm:ss a"));

  useEffect(() => {
    const interval = () => {
      const interval = setInterval(() => {
        setDate(moment().format("MMM DD, YYYY — h:mm:ss a"));
      }, 1000);

      return () => clearInterval(interval);
    };

    interval();
  }, []);

  const handleNavClick = (name) => {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <div className={NAVSTYLE.container}>
          <div className={NAVSTYLE.clockandjapaneseText}>
            <div className={NAVSTYLE.date}>{date.toUpperCase()}</div>
            <div className={NAVSTYLE.text}>
              <Tooltip
                tooltipText={"'Hello world' when translated in English "}
              >
                <span className={NAVSTYLE.japaneseText}>こんにちは世界</span>
              </Tooltip>
            </div>
          </div>
          <div className={NAVSTYLE.menu}>
            <ul className={NAVSTYLE.menuItem}>
              {navLinks.map((navLink, id) => {
                return (
                  <li
                    key={id}
                    className={NAVSTYLE.navlinkActive}
                    onClick={() => handleNavClick(navLink.name)}
                  >
                    {navLink.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
