import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import image from "../../Assets/loader.gif";
import SpinerLoader from "../../SpinerLoader/SpinerLoader";
import toast from "react-hot-toast";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  // const url = `https://zindani-server.vercel.app/myproducts?email=${user?.email}`;
  const {
    data: producs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myproducts"],
    queryFn: () =>
      fetch(
        `https://zindani-server.vercel.app/myproducts?email=${user?.email}`
      ).then((res) => res.json()),
  });
  //  deleteHanler

  const deleteHanler = (id) => {
    const agree = window.confirm("Are you sure you want to delete");
    console.log(id);

    if (agree) {
      fetch(`https://zindani-server.vercel.app/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Deleted successfully");
            refetch();
          }
        })
        .then((data) => console.log(data));
    }
  };

  // advataize
  const advataize = (id) => {
    const agree = window.confirm("Are you sure you want to advise?");
    if (agree) {
      fetch(`https://zindani-server.vercel.app/product/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("advataize success");
            refetch();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //
  if (isLoading && user) {
    return <SpinerLoader></SpinerLoader>;
  }

  if (producs.length === 0) {
    return <h2 className="text-xl text-error text-center">NO DATA</h2>;
  }
  return (
    <div className="mt-5">
      <h1>My Product</h1>
      <div className="">{isLoading && user && <img src={image} alt="" />}</div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" disabled />
                </label>
              </th>
              <th>Product</th>
              <th>Price</th>
              <th>Favorite Color</th>
              <th>Advatize</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {producs?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product?.productImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.productName}</div>
                      <div className="text-sm opacity-50">
                        {product?.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Price:{product?.resellPrice}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Orginal Price:{product?.orginalPrice}
                  </span>
                </td>
                <td>{product?.date}</td>
                <th>
                  {product?.advrtized ? (
                    <button className="btn btn-success btn-xs">success</button>
                  ) : (
                    <button
                      onClick={() => advataize(product?._id)}
                      className="btn btn-primary  btn-xs"
                    >
                      Advrtize
                    </button>
                  )}
                </th>
                <th>
                  <button
                    className="btn btn-xs"
                    onClick={() => deleteHanler(product._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
