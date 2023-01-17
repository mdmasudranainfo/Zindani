import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function Testimonial() {
  return (
    <div className="my-10 bg-violet-200 py-20 rounded-md">
      <h2 className="text-3xl mb-3 font-bold text-center">Our Client Say!</h2>
      <Swiper
        loop
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center w-[500px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              obcaecati impedit totam? Facere excepturi esse quo doloremque iste
              optio mollitia, id quisquam necessitatibus eos amet repudiandae
              eveniet voluptatum et beatae neque rerum error nemo.
            </h1>
            <div className="flex justify-center gap-1 mt-2 items-center">
              <img
                className="w-[50px] rounded-full"
                src="https://i.pinimg.com/736x/bd/a3/52/bda352697edbf4dd6fb768807f899a60.jpg"
                alt=""
              />
              <h1 className="text-lg font-semibold">Johan deo</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center w-[500px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              obcaecati impedit totam? Facere excepturi esse quo doloremque iste
              optio mollitia, id quisquam necessitatibus eos amet repudiandae
              eveniet voluptatum et beatae neque rerum error nemo.
            </h1>
            <div className="flex justify-center gap-1 mt-2 items-center">
              <img
                className="w-[50px] rounded-full"
                src="https://i.pinimg.com/736x/bd/a3/52/bda352697edbf4dd6fb768807f899a60.jpg"
                alt=""
              />
              <h1 className="text-lg font-semibold">Johan deo</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center w-[500px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              obcaecati impedit totam? Facere excepturi esse quo doloremque iste
              optio mollitia, id quisquam necessitatibus eos amet repudiandae
              eveniet voluptatum et beatae neque rerum error nemo.
            </h1>
            <div className="flex justify-center gap-1 mt-2 items-center">
              <img
                className="w-[50px] rounded-full"
                src="https://i.pinimg.com/736x/bd/a3/52/bda352697edbf4dd6fb768807f899a60.jpg"
                alt=""
              />
              <h1 className="text-lg font-semibold">Johan deo</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center w-[500px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              obcaecati impedit totam? Facere excepturi esse quo doloremque iste
              optio mollitia, id quisquam necessitatibus eos amet repudiandae
              eveniet voluptatum et beatae neque rerum error nemo.
            </h1>
            <div className="flex justify-center gap-1 mt-2 items-center">
              <img
                className="w-[50px] rounded-full"
                src="https://i.pinimg.com/736x/bd/a3/52/bda352697edbf4dd6fb768807f899a60.jpg"
                alt=""
              />
              <h1 className="text-lg font-semibold">Johan deo</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center w-[500px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              obcaecati impedit totam? Facere excepturi esse quo doloremque iste
              optio mollitia, id quisquam necessitatibus eos amet repudiandae
              eveniet voluptatum et beatae neque rerum error nemo.
            </h1>
            <div className="flex justify-center gap-1 mt-2 items-center">
              <img
                className="w-[50px] rounded-full"
                src="https://i.pinimg.com/736x/bd/a3/52/bda352697edbf4dd6fb768807f899a60.jpg"
                alt=""
              />
              <h1 className="text-lg font-semibold">Johan deo</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center w-[500px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              obcaecati impedit totam? Facere excepturi esse quo doloremque iste
              optio mollitia, id quisquam necessitatibus eos amet repudiandae
              eveniet voluptatum et beatae neque rerum error nemo.
            </h1>
            <div className="flex justify-center gap-1 mt-2 items-center">
              <img
                className="w-[50px] rounded-full"
                src="https://i.pinimg.com/736x/bd/a3/52/bda352697edbf4dd6fb768807f899a60.jpg"
                alt=""
              />
              <h1 className="text-lg font-semibold">Johan deo</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
