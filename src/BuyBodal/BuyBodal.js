import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/UserContext";

const BuyBodal = ({ pdc, setPdc }) => {
  const { user } = useContext(AuthContext);

  //   post buying setPdc
  const submitHanlar = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const meetingLocation = form.meetLocation.value;
    console.log(phone, meetingLocation);

    const userName = user.displayName;
    const email = user.email;
    const product = pdc.productName;
    const price = pdc.resellPrice;
    const image = pdc.productImage;
    const orderInfo = {
      userName,
      email,
      product,
      price,
      phone,
      meetingLocation,
      image,
    };
    // console.log(price);

    //
    fetch("https://zindani-server.vercel.app/buyproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setPdc(null);
          toast.success("Order Success");
        }
      })
      .catch((err) => console.log(err));

    //
  };

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
            <p className="text-xl font-semibold ">Saller: {pdc?.SallerName}</p>
          </div>
          <form onSubmit={submitHanlar}>
            <div className="mt-3">
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder=""
                className="input input-bordered w-full"
                disabled
              />
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder=""
                className="input input-bordered w-full mt-2"
                disabled
              />
              <input
                type="number"
                name="phone"
                placeholder="your phone number"
                className="input input-bordered w-full mt-2"
                required
              />
              <input
                type="text"
                name="meetLocation"
                placeholder="Meeting Location"
                className="input input-bordered w-full mt-2"
                required
              />
            </div>
            <div className="modal-action flex justify-center">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyBodal;
