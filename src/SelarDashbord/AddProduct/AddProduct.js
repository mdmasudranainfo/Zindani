import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const category = useLoaderData();

  const adProHanler = (event) => {
    event.preventDefault();
    const from = event.target;
    const productName = from.productName.value;
    const location = from.location.value;
    const orginalPrice = from.orginalPrice.value;
    const resellPrice = from.resellPrice.value;
    const yearsOfUsed = from.yearsOfUsed.value;
    const picture = from.picture.files[0];

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
        };
        fetch("http://localhost:5000/products")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 ">Resell Price</label>
            <input
              name="resellPrice"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 ">Years Of Used</label>
            <input
              name="yearsOfUsed"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 ">Product Picture</label>
            <input
              name="picture"
              type="file"
              className=" file-input w-full mt-2 file-input-bordered"
            />
          </div>

          <div>
            <label className="text-gray-700 ">Product Picture</label>
            <select className="select select-bordered w-full">
              {category?.map((cat) => (
                <option key={cat?._id}>{cat?.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
