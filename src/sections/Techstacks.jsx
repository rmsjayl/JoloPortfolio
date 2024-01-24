import { Fragment } from "react";
import Tooltip from "@common/Tooltip";
import ICONS from "@assets/techstacks-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TECHSTACKSSTYLE from "@styles/components/techstacks.module.css";

const Techstacks = () => {
  return (
    <>
      <div className={TECHSTACKSSTYLE.techstacks} id="Tech Stacks">
        <div className={TECHSTACKSSTYLE.container}>
          <div className={TECHSTACKSSTYLE.header}>
            <span>tech stacks</span> utilized
          </div>
          <div className={TECHSTACKSSTYLE.techStacksIconContainer}>
            <div className={TECHSTACKSSTYLE.iconWrapper}>
              {ICONS.map((icon, id) => {
                return (
                  <Fragment key={id}>
                    <div className={TECHSTACKSSTYLE.icons} data-aos="fade-up">
                      <Tooltip tooltipText={icon.name}>
                        <LazyLoadImage
                          key={id}
                          src={icon.image}
                          alt={icon.name}
                        />
                      </Tooltip>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstacks;
