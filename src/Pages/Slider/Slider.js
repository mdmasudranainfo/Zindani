import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <div className="grid grid-cols-3">
      <div className=" relative mx-2">
        <div className=" absolute flex items-center top-0 left-0 h-full w-full BanarAd">
          <div className="text-[#4506CB] p-3 hidden sm:block">
            <h1 className="text-2xl font-bold">Wintter Offer</h1>
            <h2 className="text-3xl font-bold">30% Discount</h2>
            <button className="btn btn-primary mt-3 btn-sm">Buy Now</button>
          </div>
        </div>

        <div className="">
          <img
            className="w-full"
            src="https://i.ibb.co/ZgBYmc7/18-600x600.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-2">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className=" relative">
              <div className=" absolute sm:top-0 md:top-10 lg:top-16 sm:block hidden left-0 p-5 text-white ">
                <h1 className="text-3xl font-bold">
                  LG V30
                  <br />
                  Full Fresh
                </h1>
                <p>
                  Your Life , Throught <br />
                  Your Lens
                </p>
                <button className="btn btn-primary mt-3 btn-sm">Buy Now</button>
              </div>
              <img
                className="w-full"
                src="https://i.ibb.co/smV80ZQ/img1-top-store1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </div>
    </div>
    // <div className="carousel w-full h-[500px] rounded-md">
    //   <div id="slide1" className="carousel-item relative w-full">
    //     <img alt="" src="https://i.ibb.co/2jRw5cK/2.png" className="w-full" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide4" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide2" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide2" className="carousel-item relative w-full">
    //     <img alt="" src="https://i.ibb.co/q7QQC8T/3.png" className="w-full" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide1" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide3" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide3" className="carousel-item relative w-full">
    //     <img alt="" src="https://i.ibb.co/y5cXcJf/1.png" className="w-full" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide2" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide4" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide4" className="carousel-item relative w-full">
    //     <img alt="" src="https://i.ibb.co/q7QQC8T/3.png" className="w-full" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide3" className="btn btn-circle">
    //         ❮
    //       </a>
    //       <a href="#slide1" className="btn btn-circle">
    //         ❯
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Slider;
