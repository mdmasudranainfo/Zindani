import React from "react";

const Qna = () => {
  return (
    <div data-aos="fade-up" className="lg:w-3/4 w-full mx-auto my-20">
      <h2 className="text-2xl text-center font-bold text-primary mb-5">QNA</h2>

      {/*  */}
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Delivery System
        </div>
        <div className="collapse-content">
          <p>
            Cash On Get safe and secure delivery of any product through this
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse mt-5 border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">Advatize</div>
        <div className="collapse-content">
          <p>Expand your business through Jindani! in notice</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse mt-5 border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">Member badge</div>
        <div className="collapse-content">
          <p>
            The member badge is visible on all member ads, making your ads stand
            out from the crowd of ads posted by private users! We offer special
            badges to make your ads more exclusive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qna;
