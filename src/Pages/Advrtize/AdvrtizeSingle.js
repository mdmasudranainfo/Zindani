import React from "react";

const AdvrtizeSingle = ({ product, setPdc }) => {
  return (
    <div
      data-aos="fade-up"
      className="card productCard lg:card-side md:card-side sm:card-side bg-base-100 shadow-xl"
    >
      <figure className="w-6/12">
        <img className="w-full" src={product?.productImage} alt="Album" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{product?.productName}</h2>
        <div className="">
          <p className=" font-semibold">Price: {product?.resellPrice}</p>
          <p className=" font-semibold">New Price: {product?.orginalPrice}</p>
          <p className=" font-semibold">Saller: {product?.SallerName}</p>
          <p className=" font-semibold">Location: {product?.location}</p>
          <p className=" font-semibold">Used: {product?.yearsOfUsed}</p>
          <p className=" font-semibold">Phone: {product?.phone}</p>
        </div>
        <div className="card-actions justify-start mt-5">
          <label
            onClick={() => setPdc(product)}
            htmlFor="my-modal-3"
            className="btn btn-primary"
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdvrtizeSingle;
