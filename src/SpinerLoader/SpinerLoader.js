import React from "react";
import { Puff } from "react-loader-spinner";

const SpinerLoader = () => {
  return (
    <div>
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default SpinerLoader;
