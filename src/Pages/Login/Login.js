import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { login, googleLog } = useContext(AuthContext);
  //   googleLogin start
  const googleHandler = () => {
    googleLog()
      .then((result) => {
        const user = result.user;
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   googleLog end

  const loginHandler = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    login(email, password)
      .then((data) => {
        console.log(data.user);
        navigate("/");
        toast.success("Login successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    console.log(email, password);
  };
  return (
    <div className="xl:ml-20 xl:w-5/12 mx-auto mt-5 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 p-5">
      {/* <h1 className="text-2xl font-semibold text-center my-3">Register</h1> */}
      <form onSubmit={loginHandler}>
        <div className="flex flex-row items-center justify-center lg:justify-center">
          {/* <p className="text-lg mb-0 mr-4">Sign in with</p> */}
          <button
            onClick={googleHandler}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
          >
            <FaGoogle></FaGoogle>
          </button>
        </div>

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">Or</p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
            name="email"
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
            name="password"
            required
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check"></div>
          {/* <a href="#!" className="text-gray-800">
              Forgot password?
            </a> */}
        </div>

        <div className="text-center lg:text-left">
          <input
            type="submit"
            value=" Login"
            className=" inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          />

          <p className="text-sm font-semibold mt-2 pt-1 mb-0">
            have an account?
            <Link
              to="/register"
              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
