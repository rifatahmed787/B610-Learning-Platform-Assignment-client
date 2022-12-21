import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LeftSideNav from "../components/pages/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <div className="lg:grid grid-cols-3 gap-4">
        <div className="col-span-1 hidden lg:block">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 ">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
