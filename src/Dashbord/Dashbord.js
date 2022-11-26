import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useAdmin from "../hooks/useAdmin";

const Dashbord = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin.isAdmin);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* content */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
                <h2 className="text-xl">{user?.displayName}</h2>
              </div>
            </li>
            <li>
              <Link to="/dashbord/myproduct">My Product</Link>
            </li>
            <li>
              <Link to="dashbord/addproduct/">Add Product</Link>
            </li>
            {isAdmin.isAdmin && (
              <li>
                <Link to="dashbord/alluser/">All User</Link>
              </li>
            )}

            {isAdmin.isAdmin && (
              <li>
                <Link to="dashbord/allseller/">All Seller</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
