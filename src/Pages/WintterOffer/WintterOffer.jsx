import React from "react";

const WintterOffer = () => {
  return (
    <div className="mt-4 " data-aos="fade-up">
      <div className=" grid grid-cols-2 bg-violet-200 rounded-md">
        <div className="flex justify-center">
          <img
            className="w-[300px]"
            src="https://i.ibb.co/SVXN02P/58096-O967-AC-117-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="flex h-full justify-center items-start flex-col ">
          <p className="text-primary">New season trends!</p>
          <h2 className="text-3xl font-bold py-1">Best Summer Collection</h2>
          <h3>Sale Get up to 50% Off</h3>
          <button className="btn btn-primary my-2">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default WintterOffer;
