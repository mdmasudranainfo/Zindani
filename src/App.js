import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllSeller from "./AdminDashbord/AllSeller/AllSeller";
import AllUser from "./AdminDashbord/AllUser/AllUser";
import TotalProduct from "./AdminDashbord/TotalProduct/TotalProduct";
import "./App.css";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import Dashbord from "./Dashbord/Dashbord";
import WellComePage from "./Dashbord/wellComePage";
import DashbordLayout from "./Layout/DashbordLayout";
import Main from "./Layout/Main";
import AllProduct from "./Pages/AllProduct/AllProduct";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Route/PrivateRoute/PrivateRoute";
import AddProduct from "./SelarDashbord/AddProduct/AddProduct";
import MyProduct from "./SelarDashbord/MyProduct/MyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allproduct",
        element: <AllProduct></AllProduct>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "producs/:id",
        element: <CategoryProduct></CategoryProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/producs/${params.id}`),
      },
      {
        path: "myproduct",
        element: (
          <PrivateRoute>
            <MyProduct></MyProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashbord",
    element: <DashbordLayout></DashbordLayout>,
    children: [
      {
        path: "/dashbord",
        element: (
          <PrivateRoute>
            <Dashbord></Dashbord>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashbord/",
            element: <WellComePage></WellComePage>,
          },
          {
            path: "/dashbord/myproduct",
            element: (
              <PrivateRoute>
                <MyProduct></MyProduct>
              </PrivateRoute>
            ),
          },
          {
            path: "/dashbord/addproduct/",
            element: <AddProduct></AddProduct>,
            loader: () => fetch("http://localhost:5000/category"),
          },
          {
            path: "dashbord/alluser/",
            element: <AllUser></AllUser>,
          },
          {
            path: "dashbord/allseller/",
            element: <AllSeller></AllSeller>,
          },
          {
            path: "dashbord/allproduct/",
            element: <TotalProduct></TotalProduct>,
          },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
