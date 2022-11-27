import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BuyBodal from "../../BuyBodal/BuyBodal";
import SpinerLoader from "../../SpinerLoader/SpinerLoader";
import AdvrtizeSingle from "./AdvrtizeSingle";

const Advrtize = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["advataized"],
    queryFn: () =>
      fetch("http://localhost:5000/advrtized").then((res) => res.json()),
  });

  //
  //
  const [pdc, setPdc] = useState(null);

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-primary text-center uppercase">
        Advrtized Products
      </h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {products.map((product) => (
          <AdvrtizeSingle
            setPdc={setPdc}
            product={product}
            key={product?._id}
          ></AdvrtizeSingle>
        ))}
      </div>
      <BuyBodal pdc={pdc} setPdc={setPdc}></BuyBodal>
    </div>
  );
};

export default Advrtize;
