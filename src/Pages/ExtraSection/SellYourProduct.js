import React from "react";
import { Link } from "react-router-dom";

const SellYourProduct = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-200 shadow-xl my-5">
        <figure className=" lg:w-6/12 md:w-full">
          <img
            className="w-3/4"
            src="https://i.ibb.co/7Y0j7jq/bright-sale-presentation-slide-template-1262-19198.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Start making money!</h2>
          <p>
            Do you have something to sell? Post your first ad and earn money!
          </p>
          <div className="card-actions justify-end">
            <Link to="/dashbord/addproduct" className="btn btn-primary">
              Sale Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourProduct;
