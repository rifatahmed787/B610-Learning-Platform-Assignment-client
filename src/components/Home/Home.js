import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesSummuryCard from "../pages/CoursesSummuryCard";

const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      {allCourses.map((courses) => (
        <CoursesSummuryCard
          key={courses._id}
          courses={courses}
        ></CoursesSummuryCard>
      ))}
    </div>
  );
};

export default Home;
