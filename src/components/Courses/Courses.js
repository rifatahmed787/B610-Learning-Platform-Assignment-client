import React from "react";
import { useLoaderData } from "react-router-dom";
import TitleHooks from "../../TitleHooks/TitleHooks";
import CoursesSummuryCard from "../pages/CoursesSummuryCard";

const Courses = () => {
  TitleHooks("Courses");
  const allCourses = useLoaderData();
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-10 gap-y-10 mb-20 mx-auto">
      {allCourses.map((courses) => (
        <CoursesSummuryCard
          key={courses._id}
          courses={courses}
        ></CoursesSummuryCard>
      ))}
    </div>
  );
};

export default Courses;
