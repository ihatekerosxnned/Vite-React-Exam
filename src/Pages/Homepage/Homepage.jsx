import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider/Slider";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Content />
      <Footer />
    </>
  );
};

export default Homepage;
