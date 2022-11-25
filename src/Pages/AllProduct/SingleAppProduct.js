import React from "react";

const SingleAppProduct = ({ product }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={product.productImage} alt="Shoes" />
      </figure>
      <div className="card-body mt-[-50px] bg-green-200 ">
        <h2 className="card-title text-3xl">{product.productName} </h2>
        <div className="">
          <p className="text-xl font-semibold">Price: {product.resellPrice}$</p>
          <p className="text-xl font-semibold ">Saller: Seller Name</p>
          <p className="text-xl font-semibold">
            Orginal Price: {product.orginalPrice}$
          </p>
          <p className="text-xl font-semibold">Used: {product.yearsOfUsed}</p>
          <p className="text-xl font-semibold">Location: {product.location}</p>
        </div>
        <div className="card-actions justify-between">
          <button className="btn btn-error ">Report</button>
          <button className="btn btn-primary border-0 text-whit">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAppProduct;
