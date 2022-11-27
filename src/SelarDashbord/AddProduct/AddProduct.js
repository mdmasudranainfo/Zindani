import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

import SpinerLoader from "../../SpinerLoader/SpinerLoader";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const [loader, setLoader] = useState(false);

  const category = useLoaderData();
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const adProHanler = (event) => {
    event.preventDefault();
    setLoader(true);
    const from = event.target;
    const productName = from.productName.value;
    const location = from.location.value;
    const orginalPrice = from.orginalPrice.value;
    const resellPrice = from.resellPrice.value;
    const yearsOfUsed = from.yearsOfUsed.value;
    const phone = from.phone.value;
    const picture = from.picture.files[0];
    const category = from.category.value;

    //
    const formData = new FormData();
    formData.append("image", picture);

    const url =
      "https://api.imgbb.com/1/upload?key=fd31eb1b7eccf01a95d0b1949fe0e46a";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const productImage = imageData.data.url;
        // console.log(imageData.data.url);
        const productInfo = {
          productName,
          location,
          orginalPrice,
          resellPrice,
          yearsOfUsed,
          productImage,
          category,
          date,
          time,
          phone,
          SallerName: user.displayName,
          SallerEmail: user.email,
        };
        console.log(category);

        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            from.reset();
            setLoader(false);
            toast.success("Product Added successfully");
          })
          .catch((err) => console(err));

        // post products

        //
      });

    //

    console.log(formData);
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-m">
      <div className="flex justify-center"></div>
      <h2 className="text-lg font-semibold text-gray-700 capitalize ">
        Add Product
      </h2>

      <form onSubmit={adProHanler}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 " for="username">
              Product Name
            </label>
            <input
              name="productName"
              type="text"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " for="emailAddress">
              Location
            </label>
            <input
              name="location"
              type="text"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " for="phone">
              Phone Number
            </label>
            <input
              name="phone"
              type="number"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 " for="password">
              Oreginal Price
            </label>
            <input
              name="orginalPrice"
              type="number"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 ">Resell Price</label>
            <input
              name="resellPrice"
              type="number"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 ">Years Of Used</label>
            <input
              name="yearsOfUsed"
              type="text"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 ">Product Picture</label>
            <input
              name="picture"
              type="file"
              required
              className="file-input file-input-bordered file-input-success w-full max-w-xs"
            />
          </div>

          <div>
            <label className="text-gray-700 ">Product Picture</label>
            <select name="category" className="select select-bordered w-full">
              {category?.map((cat) => (
                <option key={cat?._id} value={cat?.name}>
                  {cat?.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          {loader ? (
            <SpinerLoader></SpinerLoader>
          ) : (
            <button className="px-8 py-2.5 leading-5 text-white bg-green-700 transition-colors duration-300 transform rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add Product
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
