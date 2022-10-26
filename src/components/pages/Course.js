import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const course = useLoaderData();
  const { title, details, image_url, category_id } = course;
  return (
    <div>
      <div className="card w-96 bg-base-100 my-5 shadow-xl">
        <h2 className="card-title my-3 mx-auto">{title}</h2>
        <figure>
          <img src={image_url} alt="" />
        </figure>
        <div className="card-body">
          <p>{details}</p>
          <div className="card-actions justify-end">
            <Link to={`/category/${category_id}`}>
              <button className="btn btn-wide ">
                All courses in this category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
