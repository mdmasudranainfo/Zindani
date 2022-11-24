import React from "react";

const AddProduct = () => {
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-m">
      <h2 class="text-lg font-semibold text-gray-700 capitalize ">
        Account settings
      </h2>

      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 " for="username">
              Product Name
            </label>
            <input
              name="productName"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 " for="emailAddress">
              Location
            </label>
            <input
              name="location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 " for="password">
              Oreginal Price
            </label>
            <input
              name="orginalPrice"
              type="number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 " for="passwordConfirmation">
              Resell Price
            </label>
            <input
              name="resellPrice"
              type="number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 " for="passwordConfirmation">
              Years Of Used
            </label>
            <input
              name="yearsOfUsed"
              type="number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
