import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const { data: producs = [] } = useQuery({
    queryKey: ["buyproduct"],
    queryFn: () =>
      fetch(`http://localhost:5000/buyproduct?email=${user.email}`).then(
        (res) => res.json()
      ),
  });

  return (
    <div>
      <h1>MY ordres</h1>

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
              <th>Meeting Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {producs?.map((product) => (
              <tr key={product._id}>
                <th>
                  <button>
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
                          src={product?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.product}</div>
                      <div className="text-sm opacity-50">
                        {product?.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Price:{product?.price}
                  <br />
                </td>
                <td>{product?.meetingLocation}</td>
                <th>
                  <button className="btn btn-ghost bg-green-600 btn-xs">
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

export default MyOrder;
