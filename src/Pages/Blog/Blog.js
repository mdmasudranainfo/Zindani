import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      <h1 className="text-3xl my-5 text-primary text-center font-bold">
        Blogs
      </h1>
      <div className="">
        {blogs.map((blog) => (
          <div
            key={blog?._id}
            className="card card-side bg-base-100 shadow-xl m-6"
          >
            <figure className="">
              <img className="w-[300px]" src={blog?.image} alt="Movie" />
            </figure>
            <div className="card-body w-3/4">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog?.description}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
