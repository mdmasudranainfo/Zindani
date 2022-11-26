import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  // console.log(user);
  const LogOutHanler = () => {
    logout()
      .then((data) => {
        console.log(data);
        toast.success("Logout Success");
      })
      .catch((err) => console.log(err));
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/allproduct">Product</Link>
      </li>
      {user && (
        <li>
          <Link to="/myorders">My Orders</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-white sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-primary font-bold"
        >
          ZDN
        </Link>
        <label htmlFor="dashbord-drawer" className="btn btn-primary lg:hidden ">
          x
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      {/* <div className="navbar-end">
        {user ? (
          <Link className="btn border-0 bg-green-700">{user.displayName}</Link>
        ) : (
          <Link to="/login" className="btn border-0 bg-green-700">
            Login
          </Link>
        )}
      </div> */}

      <div className="dropdown dropdown-end ">
        {user ? (
          <>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="" src={user?.photoURL} />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user ? <></> : <Link to="/login"></Link>}
              <li>
                <Link className="justify-between">
                  {user?.displayName}
                  <span className="badge bg-primary">Seller</span>
                </Link>
              </li>
              <li>
                <Link to="/dashbord">Dashbord</Link>
              </li>

              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </>
        ) : (
          <Link to="/login" className="btn border-0 bg-green-700">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
