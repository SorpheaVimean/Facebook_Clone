import { useState } from "react";
import { Divider } from 'antd';

import arrow from "../../assets/icons/arrow.svg";
import profile from "../../assets/iconLeftSide/Frame 9.png";

// left side
import friend from "../../assets/iconLeftSide/logos_npm-icon.png";
import group from "../../assets/iconLeftSide/logos_msw-icon.png";
import memories from "../../assets/iconLeftSide/logos_pm2-icon.png";
import save from "../../assets/iconLeftSide/logos_cube-icon.png";
import video from "../../assets/iconLeftSide/logos_rome-icon.png";
import itJob from "../../assets/iconLeftSide/Rectangle 2.png";
import itMedia from "../../assets/iconLeftSide/Rectangle 3.png";
import itTech from "../../assets/iconLeftSide/Rectangle 4.png";
import itShare from "../../assets/iconLeftSide/Rectangle 5.png";
import itCam from "../../assets/iconLeftSide/Rectangle 6.png";
import messager from "../../assets/iconLeftSide/messager.jpg";
import gaming from "../../assets/iconLeftSide/gaming.png";

const SettingPage = () => {

  const [showAll, setShowAll] = useState(false);
  const [seeall, setSeeAll] = useState(false);

  const info = [
    {
      id: 1,
      name: "TITB Group",
      logo: profile,
    },
    {
      id: 2,
      name: "Find Friends",
      logo: friend,
    },
    {
      id: 3,
      name: "Group",
      logo: group,
    },
    {
      id: 4,
      name: "Memories",
      logo: memories,
    },
    {
      id: 5,
      name: "Save",
      logo: save,
    },
    {
      id: 6,
      name: "Video",
      logo: video,
    },
    {
      id: 7,
      name: "Feed",
      logo: memories,
    },
    {
      id: 8,
      name: "Messager",
      logo: messager,
    },
    {
      id: 9,
      name: "Gaming",
      logo: gaming,
    },
    {
      id: 10,
      name: "add manager",
      logo: video,
    },
    {
      id: 11,
      name: "Feed",
      logo: memories,
    },
  ];
  const shortcut = [
    {
      id: 1,
      name: "IT Job in Cambodia",
      logo: itJob,
    },
    {
      id: 2,
      name: "IT & MEDIA CAMBODIA",
      logo: itMedia,
    },
    {
      id: 3,
      name: "IT Job & Technology",
      logo: itTech,
    },
    {
      id: 4,
      name: "IT- Share",
      logo: itShare,
    },
    {
      id: 5,
      name: "(Job Cambodia) ",
      logo: itCam,
    },
    {
      id: 6,
      name: "Video",
      logo: itMedia,
    },
    {
      id: 7,
      name: "Feed",
      logo: itTech,
    },
  ];
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleSeeAll = () => {
    setSeeAll(!seeall);
  };
  return (
    <div className="bg-Background">
       {/* ==================Left Side======================== */}
       <div className=" max-h-[870px] sticky top-[80px] overflow-y-scroll hidden-scrollbar">
          {/* ----------Infor---------- */}
          <div className="flex flex-col justify-start items-start gap-1 ">
            {info.slice(0, showAll ? info.length : 6).map((infoItem) => (
              <div
                key={infoItem.id}
                className="w-full flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer"
              >
                <img src={infoItem.logo} alt="" className="w-[30px]" />
                <div className="font-bold">{infoItem.name}</div>
              </div>
            ))}
            <div
              className="w-full flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer"
              onClick={toggleShowAll}
            >
              <div
                className={`bg-BgHover p-[5px] rounded-full cursor-pointer duration-300 ${
                  showAll ? "rotate-180 duration-300" : ""
                }`}
              >
                <img src={arrow} alt="menu" />
              </div>
              <div className="font-bold">
                {showAll ? "See Less" : "See More"}
              </div>
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-1" />

          {/* ----------Shortcut---------- */}
          <div className="group">
            <div className="flex justify-between items-center mb-2">
              <div className="text-TextTitle font-semibold">
                Your Shortcuts{" "}
              </div>
              <div className="p-3 rounded-lg text-transparent group-hover:text-Link hover:bg-BgIcon cursor-pointer">
                Edit
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1 ">
              {shortcut.slice(0, seeall ? info.length : 5).map((infoItem) => (
                <div
                  key={infoItem.id}
                  className="w-full flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer"
                >
                  <img src={infoItem.logo} alt="" />
                  <div className="font-bold">{infoItem.name}</div>
                </div>
              ))}
              <div
                className="w-full flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-3 rounded-xl cursor-pointer"
                onClick={toggleSeeAll}
              >
                <div
                  className={`bg-BgHover p-[5px] rounded-full cursor-pointer duration-200 ${
                    seeall ? "rotate-180 duration-300" : ""
                  }`}
                >
                  <img src={arrow} alt="menu" />
                </div>
                <div className="font-bold">
                  {seeall ? "See Less" : "See More"}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-start items-center mt-2">
            <div className="text-TextTitle text-[10px] hover:underline cursor-pointer">
              <a
                target="_blank"
                href="https://free.facebook.com/privacy/policy/#"
                rel="noreferrer"
              >
                Privacy .
              </a>
            </div>
            <div className="text-TextTitle text-[12px] hover:underline cursor-pointer">
              <a
                target="_blank"
                href="https://web.facebook.com/policies_center/"
                rel="noreferrer"
              >
                {" "}
                Teams .
              </a>
            </div>
            <div className="text-TextTitle text-[12px] hover:underline cursor-pointer">
              <a
                target="_blank"
                href="https://web.facebook.com/business"
                rel="noreferrer"
              >
                {" "}
                Advertising .
              </a>{" "}
            </div>
            <div className="text-TextTitle text-[12px] hover:underline cursor-pointer">
              <a
                target="_blank"
                href="https://web.facebook.com/help/568137493302217"
                rel="noreferrer"
              >
                {" "}
                Ad Choices .
              </a>
            </div>
            <div className="text-TextTitle text-[12px] hover:underline cursor-pointer">
              <a
                target="_blank"
                href=" https://web.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
                rel="noreferrer"
              >
                {" "}
                Cookies .
              </a>
            </div>
            <div className="text-TextTitle text-[12px]  cursor-pointer">
              More .
            </div>
            <div className="text-TextTitle text-[12px]  ">Meta © 2024</div>
          </div>
        </div>
    </div>
  )
}

export default SettingPage