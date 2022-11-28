import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/userSeller";

const Dashbord = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  // console.log(isSeller);
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
              <p>{user?.email}</p>
            </li>
            {user && (
              <li>
                <Link to="/myorders">My Orders</Link>
              </li>
            )}

            {isSeller && (
              <li>
                <Link to="/dashbord/myproduct">My Product</Link>
              </li>
            )}

            {isSeller && (
              <li>
                <Link to="/dashbord/addproduct/">Add Product</Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link to="/dashbord/alluser/">All User</Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link to="/dashbord/allseller/">All Seller</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/dashbord/allproduct/">All Product</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/dashbord/report/">Report Items</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
