import React from "react";
import SellYourProduct from "../ExtraSection/SellYourProduct";
import HomeCatagory from "../HomeCatagory/HomeCatagory";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HomeCatagory></HomeCatagory>
      <SellYourProduct></SellYourProduct>
    </div>
  );
};

export default Home;
