import React from "react";
import Advrtize from "../Advrtize/Advrtize";
import Qna from "../ExtraSection/Qna";
import SellYourProduct from "../ExtraSection/SellYourProduct";
import HomeCatagory from "../HomeCatagory/HomeCatagory";
import Servic from "../Service/Servic";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";
import WintterOffer from "../WintterOffer/WintterOffer";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HomeCatagory></HomeCatagory>
      <Advrtize></Advrtize>

      <WintterOffer></WintterOffer>
      <Testimonial></Testimonial>
      <SellYourProduct></SellYourProduct>
      <Servic></Servic>
      <Qna></Qna>
    </div>
  );
};

export default Home;
