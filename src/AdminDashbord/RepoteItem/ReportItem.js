import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import SpinerLoader from "../../SpinerLoader/SpinerLoader";

const ReportItem = () => {
  const {
    data: producs = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products/reports"],
    queryFn: () =>
      fetch(`https://zindani-server.vercel.app/products/reports`)
        .then((res) => res.json())
        .catch((err) => console.log(err)),
  });

  //   delete products

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

  //

  //
  if (isLoading) {
    return <SpinerLoader></SpinerLoader>;
  }
  if (producs.length === 0) {
    return (
      <div>
        <h3 className="text-2xl text-error">No Reports Found</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Reporet Items {producs.length}</h2>

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
              <th>Seller</th>

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
                <td>{product?.SallerName}</td>

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

export default ReportItem;
