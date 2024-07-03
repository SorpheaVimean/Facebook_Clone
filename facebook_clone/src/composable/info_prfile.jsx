import React from 'react';

const InfoItem = ({ logo, name }) => {
  return (
    <div
      className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer"
    >
      <img src={logo} alt={name} className="w-[30px]" />
      <div className="font-bold">{name}</div>
    </div>
  );
};

export default InfoItem;
