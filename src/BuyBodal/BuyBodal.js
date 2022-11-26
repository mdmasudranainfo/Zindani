import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const BuyBodal = ({ pdc }) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box ">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{pdc?.productName}</h3>
          <div className="">
            <p className="text-xl font-semibold">Price: {pdc?.resellPrice}$</p>
            <p className="text-xl font-semibold ">
              Saller: {pdc?.SallerName}
              <span className=" ml-2 indicator-item badge badge-primary">
                verified
              </span>
            </p>
            <p className="text-xl font-semibold ">Phone: {pdc?.phone}</p>
            <p className="text-xl font-semibold ">Date : {pdc?.date}</p>
            <p className="text-xl font-semibold">
              Orginal Price: {pdc?.orginalPrice}$
            </p>
            <p className="text-xl font-semibold">Used: {pdc?.yearsOfUsed}</p>
            <p className="text-xl font-semibold">Location: {pdc?.location}</p>
            <div className="mt-3">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="modal-action">
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBodal;
