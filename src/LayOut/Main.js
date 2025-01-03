import React from "react";
import NavigationBar from "../component/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
