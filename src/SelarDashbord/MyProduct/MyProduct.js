import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import image from "../../Assets/loader.gif";
import SpinerLoader from "../../SpinerLoader/SpinerLoader";
import toast from "react-hot-toast";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  // const url = `http://localhost:5000/myproducts?email=${user?.email}`;
  const {
    data: producs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myproducts"],
    queryFn: () =>
      fetch(`http://localhost:5000/myproducts?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });
  //  deleteHanler

  const deleteHanler = (id) => {
    const agree = window.confirm("Are you sure you want to delete");
    console.log(id);

    if (agree) {
      fetch(`http://localhost:5000/delete/${id}`, {
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
  const advataize = (id) => {};

  //
  if (isLoading && user) {
    return <SpinerLoader></SpinerLoader>;
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {producs?.map((product) => (
              <tr key={product._id}>
                <th>
                  <button onClick={() => deleteHanler(product._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </button>
                </th>
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
                <td>
                  {product?.date}/<br /> {product?.time}
                </td>
                <th>
                  <button
                    onClick={() => advataize(product?._id)}
                    className="btn btn-ghost bg-green-600 btn-xs"
                  >
                    Advatize
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
