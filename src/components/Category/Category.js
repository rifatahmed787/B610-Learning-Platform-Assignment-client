import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesSummuryCard from "../pages/CoursesSummuryCard";

const Category = () => {
  const categoryCourses = useLoaderData();
  console.log(categoryCourses);
  return (
    <div>
      {categoryCourses.map((courses) => (
        <CoursesSummuryCard
          key={courses._id}
          courses={courses}
        ></CoursesSummuryCard>
      ))}
    </div>
  );
};

export default Category;
