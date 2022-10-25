import React from "react";

const CoursesSummuryCard = ({ courses }) => {
  const { details, image_url, _id, title } = courses;

  return (
    <div className="">
      <div className="grid grid-cols-2 card w-96 bg-base-100 shadow-xl justify-center">
        <h2 className="card-title">Shoes!</h2>
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSummuryCard;
