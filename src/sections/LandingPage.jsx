import STYLE from "@styles/components/home.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import JOLOTWO from "@assets/img/jolordss.png";
import JOLOTRY from "@assets/img/jolo.png";

const LandingPage = () => {
  return (
    <>
      <div className={STYLE.container} id="Home">
        <div className={STYLE.utilities}>
          <div className={STYLE.box}>
            <div className={STYLE.name}>
              <div className={STYLE.textHeader}>
                <span className={STYLE.givenName}> JAY LORD</span>
                <span className={STYLE.surname}> RAMOS </span>
              </div>
            </div>
          </div>
        </div>
        <div className={STYLE.jolopic}>
          <div className={STYLE.imageJolo}>
            <LazyLoadImage
              className={STYLE.imageProperties}
              src={JOLOTRY}
              alt="Jolo"
            />
          </div>
        </div>
        <div className={STYLE.boxTwo}>
          <div className={STYLE.row}>
            <div className={STYLE.columnOne}>
              <span id={STYLE.intSpan}>int</span>
              <span>str</span>
              <span id={STYLE.boolSpan}>bool</span>
              <span>float</span>
              <span id={STYLE.voidSpan}>void</span>
              <span>double</span>
              <span id={STYLE.staticSpan}>static</span>
              <span>args</span>
            </div>
            <div className={STYLE.columnTwo}>
              <span>char</span>
              <span id={STYLE.enumSpan}>enum</span>
              <span>arr</span>
              <span id={STYLE.longSpan}>long</span>
              <span>public</span>
              <span id={STYLE.privateSpan}>private</span>
              <span>params</span>
              <span id={STYLE.mainSpan}>main</span>
            </div>
          </div>
        </div>
        <div className={STYLE.introductory}>
          <div className={STYLE.fullstackText}>
            <div className={STYLE.textHeader}>
              <span className={STYLE.textFull}> FULL</span>
              <span className={STYLE.textStack}> STACK </span>
              <span className={STYLE.developer}> DEV </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
