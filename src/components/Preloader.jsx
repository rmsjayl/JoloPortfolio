import STYLE from "@styles/components/preloader.module.css";

const Preloader = () => {
  return (
    <div className={STYLE.preloader}>
      <div className={STYLE.loading}>Rendering Portfolio Please wait</div>
    </div>
  );
};

export default Preloader;
