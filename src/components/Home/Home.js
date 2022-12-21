import React from "react";
import { useLoaderData } from "react-router-dom";
import TitleHooks from "../../TitleHooks/TitleHooks";
import CoursesSummuryCard from "../pages/CoursesSummuryCard";
import "./Home.css";

const Home = () => {
  const allCourses = useLoaderData();
  TitleHooks("Home");
  return (
    <div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-10 gap-y-10 mx-auto card-padding pb-32">
        {allCourses.map((courses) => (
          <CoursesSummuryCard
            key={courses._id}
            courses={courses}
          ></CoursesSummuryCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
