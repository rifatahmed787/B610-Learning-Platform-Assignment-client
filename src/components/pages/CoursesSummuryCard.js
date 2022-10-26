import React from "react";
import { Link } from "react-router-dom";

const CoursesSummuryCard = ({ courses }) => {
  const { details, image_url, _id, title } = courses;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-10">
        <h2 className="card-title my-3 mx-auto">{title}</h2>
        <figure>
          <img src={image_url} alt="" />
        </figure>
        <div className="card-body">
          {details.length > 250 ? (
            <>
              {details.slice(0, 200) + "..."}
              <Link to={`/courses/${_id}`} className="text-purple-700">
                <button className="btn btn-active btn-accent">
                  Get premium access
                </button>
              </Link>
            </>
          ) : (
            <> {details}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesSummuryCard;
