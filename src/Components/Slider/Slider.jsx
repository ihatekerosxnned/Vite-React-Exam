import React from "react";
import rv1 from "../../assets/Images/RV1.png";
import rv2 from "../../assets/Images/RV2.png";
import rv3 from "../../assets/Images/RV3.png";
import styles from "./Slider.module.css";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <>
    <div className={styles.sliderContainer}>
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000} className={styles.customSlider}>
    <div className={styles.container} data-src={rv1}>
      <p>Embark on Your Journey with RV Roadtrek Hub!</p>
      <button className={styles.sliderButton}>SHOP NOW</button>
    </div>
    <div className={styles.container} data-src={rv2}>
      <p>Find Your Perfect Road Companion at RV Roadtrek Hub</p>
      <button className={styles.sliderButton}>SHOP NOW</button>
    </div>
    <div className={styles.container} data-src={rv3}>
      <p>Discover the Road Less Traveled with RV Roadtrek Hub</p>
      <button className={styles.sliderButton}>SHOP NOW</button>
    </div>
    </AutoplaySlider>
    </div>
    </>
    
  );
};

export default Slider;
