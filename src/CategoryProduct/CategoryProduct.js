import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BuyBodal from "../BuyBodal/BuyBodal";
import CategoryProductSingle from "./CategoryProductSingle";

const CategoryProduct = () => {
  const products = useLoaderData();
  const [pdc, setPdc] = useState(null);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-6">
        {products?.map((product) => (
          <CategoryProductSingle
            key={product?._id}
            setPdc={setPdc}
            product={product}
          ></CategoryProductSingle>
        ))}
      </div>
      {pdc && <BuyBodal setPdc={setPdc} pdc={pdc}></BuyBodal>}
    </div>
  );
};

export default CategoryProduct;
