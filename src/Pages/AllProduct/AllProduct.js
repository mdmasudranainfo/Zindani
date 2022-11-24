import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleAppProduct from "./SingleAppProduct";

const AllProduct = () => {
  const products = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-6">
      {products?.map((product) => (
        <SingleAppProduct
          key={product._id}
          product={product}
        ></SingleAppProduct>
      ))}
    </div>
  );
};

export default AllProduct;
