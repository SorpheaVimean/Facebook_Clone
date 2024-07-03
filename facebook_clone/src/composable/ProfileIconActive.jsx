import React from "react";

const ProfileIconActive = ({ logo, name }) => {
  return (
    <div className="w-full flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
      <div className="relative">
        <img src={logo} alt="" />
        <div className=" absolute bottom-1 right-0 border bg-green-500 w-[8px] h-[8px] rounded-full"></div>
      </div>

      <div className="font-bold">{name}</div>
    </div>
  );
};

export default ProfileIconActive;
