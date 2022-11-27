import React from "react";
import Advrtize from "../Advrtize/Advrtize";
import Qna from "../ExtraSection/Qna";
import SellYourProduct from "../ExtraSection/SellYourProduct";
import HomeCatagory from "../HomeCatagory/HomeCatagory";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HomeCatagory></HomeCatagory>
      <Advrtize></Advrtize>
      <SellYourProduct></SellYourProduct>
      <Qna></Qna>
    </div>
  );
};

export default Home;
