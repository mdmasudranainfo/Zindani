import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import BuyBodal from "../BuyBodal/BuyBodal";
import { AuthContext } from "../Context/UserContext";

const CategoryProductSingle = ({ product, setPdc }) => {
  const [verifyUser, setVerifyUser] = useState({});
  useEffect(() => {
    fetch(`https://zindani-server.vercel.app/user/${product.SallerEmail}`)
      .then((res) => res.json())
      .then((data) => setVerifyUser(data))
      .catch((err) => console.log(err));
  }, [product.SallerEmail]);

  // report items
  const reportHanler = (id) => {
    const agree = window.confirm(
      "Are you sure you want to report this product"
    );
    if (agree) {
      fetch(`https://zindani-server.vercel.app/reports/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Report Success");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={product?.productImage} alt="Shoes" />
      </figure>
      <div className="card-body mt-[-50px] bg-slate-100 text-neutral">
        <h2 className="card-title text-3xl">{product?.productName} </h2>
        <div className="">
          <p className="text-xl font-semibold">Price: {product.resellPrice}$</p>
          <p className="text-xl font-semibold ">
            Saller: {product?.SallerName}
            {verifyUser?.verify && (
              <span className=" ml-2 indicator-item badge badge-primary">
                verified
              </span>
            )}
          </p>
          <p className="text-xl font-semibold ">Phone: {product?.phone}</p>
          <p className="text-xl font-semibold ">Date : {product?.date}</p>
          <p className="text-xl font-semibold">
            Orginal Price: {product?.orginalPrice}$
          </p>
          <p className="text-xl font-semibold">Used: {product?.yearsOfUsed}</p>
          <p className="text-xl font-semibold">Location: {product?.location}</p>
        </div>
        <div className="card-actions justify-between">
          <button
            onClick={() => reportHanler(product?._id)}
            className="btn btn-secondary "
          >
            Report
          </button>
          {/* <button
            htmlFor="my-modal-3"
            className="btn btn-outline border-0 text-white bg-green-600"
          >
            Buy Now
          </button> */}
          <label
            htmlFor="my-modal-3"
            onClick={() => setPdc(product)}
            className="btn btn-primary "
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductSingle;
