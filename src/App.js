import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import AllProduct from "./Pages/AllProduct/AllProduct";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AddProduct from "./SelarDashbord/AddProduct/AddProduct";

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
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
        loader: () => fetch("http://localhost:5000/category"),
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
