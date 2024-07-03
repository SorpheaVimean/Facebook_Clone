import React from "react";

const InfoIcon = ({ icon: Icon, name }) => {
  return (
    <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
      <div className="flex justify-center items-center gap-2">
        <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
          <Icon className="text-2xl" />
        </div>
        <div className="font-medium">{name}</div>
      </div>
    </div>
  );
};

export default InfoIcon;
