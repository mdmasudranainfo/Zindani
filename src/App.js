import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllSeller from "./AdminDashbord/AllSeller/AllSeller";
import AllUser from "./AdminDashbord/AllUser/AllUser";
import ReportItem from "./AdminDashbord/RepoteItem/ReportItem";
import TotalProduct from "./AdminDashbord/TotalProduct/TotalProduct";
import "./App.css";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import Dashbord from "./Dashbord/Dashbord";
import WellComePage from "./Dashbord/wellComePage";
import DashbordLayout from "./Layout/DashbordLayout";
import Main from "./Layout/Main";
import AllProduct from "./Pages/AllProduct/AllProduct";
import Blog from "./Pages/Blog/Blog";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Register from "./Pages/Register/Register";
import AdminRoute from "./Route/AdminRoute/AdminRoute";
import PrivateRoute from "./Route/PrivateRoute/PrivateRoute";
import SallerRoute from "./Route/SallerRoute/SallerRoute";
import AddProduct from "./SelarDashbord/AddProduct/AddProduct";
import MyProduct from "./SelarDashbord/MyProduct/MyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("Blog.json"),
      },
      {
        path: "producs/:id",
        element: (
          <PrivateRoute>
            <CategoryProduct></CategoryProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://zindani-server.vercel.app/producs/${params.id}`),
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
              <SallerRoute>
                {" "}
                <MyProduct></MyProduct>
              </SallerRoute>
            ),
          },
          {
            path: "/dashbord/addproduct/",
            element: (
              <SallerRoute>
                <AddProduct></AddProduct>
              </SallerRoute>
            ),
            loader: () => fetch("https://zindani-server.vercel.app/category"),
          },
          {
            path: "/dashbord/alluser/",
            element: (
              <AdminRoute>
                <AllUser></AllUser>
              </AdminRoute>
            ),
          },
          {
            path: "/dashbord/allseller/",
            element: (
              <AdminRoute>
                <AllSeller></AllSeller>
              </AdminRoute>
            ),
          },
          {
            path: "/dashbord/allproduct/",
            element: (
              <AdminRoute>
                <TotalProduct></TotalProduct>
              </AdminRoute>
            ),
          },
          {
            path: "/dashbord/report/",
            element: (
              <AdminRoute>
                <ReportItem></ReportItem>
              </AdminRoute>
            ),
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
