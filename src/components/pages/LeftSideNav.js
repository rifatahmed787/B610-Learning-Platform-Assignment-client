import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://react-assignment-three-server.vercel.app/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-10 grid justify-items-center bg-sky-500/75 border rounded-lg py-10 mx-5">
      <h1 className="text-2xl text-black">
        All {categories.length}(six) Categories is here!!
      </h1>
      {categories.map((category) => (
        <p className="mt-5" key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
