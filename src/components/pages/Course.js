import { Button } from "@material-tailwind/react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const course = useLoaderData();
  const { title, details, image_url, category_id } = course;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="card-title my-3 mx-auto">{title}</h2>
        <figure>
          <img src={image_url} alt="" />
        </figure>
        <div className="card-body">
          <p>{details}</p>
          <div className="card-actions justify-end">
            <Link to={`/category/${category_id}`}>
              <Button variant="primary">All courses in this category</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
