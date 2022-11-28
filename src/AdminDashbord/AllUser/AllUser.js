import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUser = () => {
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: () =>
      fetch("https://zindani-server.vercel.app/alluer").then((res) =>
        res.json()
      ),
  });

  // delete User
  const deleteHanler = (id) => {
    const agree = window.confirm("are you sure you want to delete User?");
    if (agree) {
      fetch(`https://zindani-server.vercel.app/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h1>Totall User: {allUser.length}</h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="text-center">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" disabled />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser?.map((usr) => (
              <tr key={usr._id}>
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
                          src={usr?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{usr?.name}</div>
                      <div className="text-sm opacity-50">{usr?.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {usr?.email}
                  <br />
                </td>

                <td>
                  <button
                    onClick={() => deleteHanler(usr?._id)}
                    className="btn btn-xs "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
