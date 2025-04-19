import React from "react";
import { routes_arr } from "./allRoutes";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/mainlayout/MainLayout";

const index = () => {
  return (
    <>
      <Routes>
        {routes_arr.map((item: any, index: any) => {
          return (
            <Route key={index} path={item.path} element={<MainLayout>{item.element}</MainLayout>}></Route>
          );
        })}
      </Routes>
    </>
  );
};

export default index;
