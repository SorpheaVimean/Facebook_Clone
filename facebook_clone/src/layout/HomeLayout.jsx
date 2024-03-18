// import React from 'react'

import newmess from "../assets/icons/bx_edit.svg";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Tooltip } from "antd";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="relative">
        <Outlet />
        <Tooltip title="New message" placement="right" arrow={false}>
          <div className=" fixed bottom-6 right-7 flex justify-center items-center p-4 rounded-full cursor-pointer bg-white hover:bg-BgIcon duration-200 shadow-4xl z-50">
        <img src={newmess} alt="newmess" />
      </div>
        </Tooltip>
         
      </div>
      
     
    </>
  );
};

export default HomeLayout;
