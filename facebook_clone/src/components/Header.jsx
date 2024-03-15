import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Tooltip } from "antd";

import { LuMenu } from "react-icons/lu";

import profile from "../assets/image/profile.png";
import homeline from "../assets/icons/homeOutline.svg";
import homefill from "../assets/icons/solar_home-smile-bold.svg";
import groupline from "../assets/icons/solar_users-group-rounded-outline.svg";
import groupfill from "../assets/icons/solar_users-group-rounded-bold.svg";
import videolin from "../assets/icons/solar_tv-linear.svg";
import videofill from "../assets/icons/solar_tv-bold.svg";
import shopline from "../assets/icons/solar_shop-outline.svg";
import shopfill from "../assets/icons/solar_shop-bold.svg";
import userline from "../assets/icons/solar_user-circle-outline.svg";
import userfill from "../assets/icons/solar_users-group-rounded-bold.svg";
import menu from "../assets/icons/menu.svg";
import plus from "../assets/icons/ic_round-plus.svg";

const Header = () => {
  const [activeNav, setActiveNav] = useState("home");
  const handleLinkClick = (link) => {
    setActiveNav(link);
  };
  const overlayInnerStyle = {
    marginTop: "6px",
  };
  return (
    <>
      <header className="bg-white  flex justify-between items-end shadow-md sticky top-0 w-full  z-40">

        {/* ==================logo======================== */}
        <div className="flex justify-center items-center ml-4 gap-2 my-2 cursor-pointer">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_325)">
              <path
                d="M40 20C40 8.95438 31.0456 0 20 0C8.95437 0 0 8.95438 0 20C0 29.9825 7.31375 38.2567 16.875 39.757V25.7813H11.7969V20H16.875V15.5938C16.875 10.5813 19.8609 7.8125 24.4294 7.8125C26.6175 7.8125 28.9062 8.20313 28.9062 8.20313V13.125H26.3844C23.8998 13.125 23.125 14.6667 23.125 16.2484V20H28.6719L27.7852 25.7813H23.125V39.757C32.6862 38.2567 40 29.9827 40 20Z"
                fill="#1877F2"
              />
              <path
                d="M27.7852 25.7812L28.6719 20H23.125V16.2484C23.125 14.6666 23.8998 13.125 26.3844 13.125H28.9062V8.20312C28.9062 8.20312 26.6175 7.8125 24.4292 7.8125C19.8609 7.8125 16.875 10.5813 16.875 15.5938V20H11.7969V25.7812H16.875V39.757C17.9088 39.919 18.9536 40.0003 20 40C21.0464 40.0003 22.0912 39.9191 23.125 39.757V25.7812H27.7852Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_325">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="bg-BgIcon flex justify-center items-center p-2 rounded-full text-green-600 ">
            <svg
              className="stroke-TextTitle"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M15.8574 15.8573L21.0001 21"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <span className="hidden lg:block"><input className="bg-transparent focus:outline-none mx-2" type="text" placeholder="Search Facebook" /></span>
          </div>
        </div>

        {/* ==================Nav======================== */}
        <div className=" w-[12%]  md:w-[35%] bg-black mr-10 ">
          <div className="flex justify-start md:justify-between items-center gap-2 py-1 ">
            <Tooltip
              title="Home"
              arrow={false}
              className=" tooltip-with-margin hidden md:block "
              overlayInnerStyle={overlayInnerStyle}
            >
              <Link
                to=""
                onClick={() => handleLinkClick("home")}
                className={` flex-grow w-[80%]  ${
                  activeNav == "home"
                    ? " "
                    : "hover:bg-BgIcon rounded-xl duration-300"
                } `}
              >
                <div className=" flex justify-center items-center py-2">
                  <div className={` p-2 rounded-xl cursor-pointer  `}>
                    <img
                      src={activeNav === "home" ? homefill : homeline}
                      alt="home"
                      className="w-8"
                    />
                  </div>
                </div>

                <div
                  className={` mb-[-4px] rounded-t-xl transition duration-200 ease-in-out ${
                    activeNav === "home"
                      ? "border-b-4 border-Link opacity-100 translate-y-0"
                      : "border-b-4 opacity-0 translate-y-1"
                  }`}
                ></div>
              </Link>
            </Tooltip>
            <Tooltip
              title="Group"
              arrow={false}
              className="hidden md:block"
              overlayInnerStyle={overlayInnerStyle}
            >
              <Link
                to=""
                onClick={() => handleLinkClick("group")}
                className={` flex-grow w-[80%]  ${
                  activeNav == "group"
                    ? " "
                    : "hover:bg-BgIcon rounded-xl duration-300"
                } `}
              >
                <div className=" flex justify-center items-center py-2">
                  <div className={` p-2 rounded-xl cursor-pointer  `}>
                    <img
                      src={activeNav === "group" ? groupfill : groupline}
                      alt="group"
                      className="w-8"
                    />
                  </div>
                </div>

                <div
                  className={` mb-[-4px] rounded-t-xl transition duration-200 ease-in-out ${
                    activeNav === "group"
                      ? "border-b-4 border-Link opacity-100 translate-y-0"
                      : "border-b-4 opacity-0 translate-y-1"
                  }`}
                ></div>
              </Link>
            </Tooltip>
            <Tooltip
              title="Video"
              arrow={false}
              className="hidden md:block"
              overlayInnerStyle={overlayInnerStyle}
            >
              <Link
                to=""
                onClick={() => handleLinkClick("video")}
                className={` flex-grow w-[80%]  ${
                  activeNav == "video"
                    ? " "
                    : "hover:bg-BgIcon rounded-xl duration-300"
                } `}
              >
                <div className=" flex justify-center items-center py-2">
                  <div className={` p-2 rounded-xl cursor-pointer  `}>
                    <img
                      src={activeNav === "video" ? videofill : videolin}
                      alt="video"
                      className="w-8"
                    />
                  </div>
                </div>

                <div
                  className={` mb-[-4px] rounded-t-xl transition duration-200 ease-in-out ${
                    activeNav === "video"
                      ? "border-b-4 border-Link opacity-100 translate-y-0"
                      : "border-b-4 opacity-0 translate-y-1"
                  }`}
                ></div>
              </Link>
            </Tooltip>
            <Tooltip
              title="Marketplace"
              arrow={false}
              className="hidden md:block"
              overlayInnerStyle={overlayInnerStyle}
            >
              <Link
                to=""
                onClick={() => handleLinkClick("marketplace")}
                className={` flex-grow w-[80%]  ${
                  activeNav == "marketplace"
                    ? " "
                    : "hover:bg-BgIcon rounded-xl duration-300"
                } `}
              >
                <div className=" flex justify-center items-center py-2">
                  <div className={` p-2 rounded-xl cursor-pointer  `}>
                    <img
                      src={activeNav === "marketplace" ? shopfill : shopline}
                      alt="marketplace"
                      className="w-8"
                    />
                  </div>
                </div>

                <div
                  className={` mb-[-4px] rounded-t-xl transition duration-200 ease-in-out ${
                    activeNav === "marketplace"
                      ? "border-b-4 border-Link opacity-100 translate-y-0"
                      : "border-b-4 opacity-0 translate-y-1"
                  }`}
                ></div>
              </Link>
            </Tooltip>

            <Tooltip
              title="User"
              arrow={false}
              className="hidden lg:block"
              overlayInnerStyle={overlayInnerStyle}
            >
              <Link
                to=""
                onClick={() => handleLinkClick("user")}
                className={` flex-grow w-[80%]  ${
                  activeNav == "user"
                    ? " "
                    : "hover:bg-BgIcon rounded-xl duration-300"
                } `}
              >
                <div className=" flex justify-center items-center py-2">
                  <div className={` p-2 rounded-xl cursor-pointer  `}>
                    <img
                      src={activeNav === "user" ? userfill : userline}
                      alt="user"
                      className="w-8"
                    />
                  </div>
                </div>

                <div
                  className={` mb-[-4px] rounded-t-xl transition duration-200 ease-in-out ${
                    activeNav === "user"
                      ? "border-b-4 border-Link opacity-100 translate-y-0"
                      : "border-b-4 opacity-0 translate-y-1"
                  }`}
                ></div>
              </Link>
            </Tooltip>
            <Tooltip
              title="More"
              arrow={false}
              className="block lg:hidden"
              overlayInnerStyle={overlayInnerStyle}
            >
              <Link
                to=""
                onClick={() => handleLinkClick("more")}
                className={` flex-grow w-[80%]  ${
                  activeNav == "more"
                    ? " "
                    : "hover:bg-BgIcon rounded-xl duration-300"
                } `}
              >
                <div className=" flex justify-center items-center py-2">
                  <div className={`  rounded-xl cursor-pointer  `}>
                    <LuMenu className="text-5xl text-TextTitle" />
                  </div>
                </div>

                <div
                  className={` mb-[-4px] rounded-t-xl transition duration-200 ease-in-out ${
                    activeNav === "more"
                      ? "border-b-4 border-Link opacity-100 translate-y-0"
                      : "border-b-4 opacity-0 translate-y-1"
                  }`}
                ></div>
              </Link>
            </Tooltip>
          </div>
        </div>

        {/* ==================Chat======================== */}
        <div className="flex justify-end items-center gap-2 mx-5 my-2 w-full md:w-auto  ">
          <Tooltip
            title="Create"
            arrow={false}
            overlayInnerStyle={overlayInnerStyle}
          >
            <div className="bg-BgIcon p-[11px] rounded-full cursor-pointer hover:bg-BgHover duration-200 ">
              <span className="hidden lg:block">
                <img src={menu} alt="menu" />
              </span>
              <span className="block lg:hidden">
                <img src={plus} alt="plus" />
              </span>
            </div>
          </Tooltip>
          <Badge count={5} offset={[-9, 3]}>
            <Tooltip
              title="Messenger"
              arrow={false}
              overlayInnerStyle={overlayInnerStyle}
            >
              <div className="bg-BgIcon p-[11px] rounded-full cursor-pointer hover:bg-BgHover duration-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_437)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.298 22.0025 8.62369 21.5687 7.13701 20.74L6.83201 20.562L3.80001 21.454C3.63501 21.5026 3.46033 21.5083 3.29252 21.4705C3.12472 21.4327 2.96935 21.3526 2.84115 21.238C2.71294 21.1233 2.61615 20.9778 2.55995 20.8152C2.50375 20.6526 2.49 20.4784 2.52001 20.309L2.54601 20.2L3.43801 17.168C2.49497 15.6093 1.99759 13.8218 2.00001 12C2.00001 6.477 6.47701 2 12 2ZM9.79301 9.793L6.79301 12.793C6.6975 12.8852 6.62132 12.9956 6.56891 13.1176C6.5165 13.2396 6.48891 13.3708 6.48776 13.5036C6.4866 13.6364 6.51191 13.7681 6.56219 13.891C6.61247 14.0139 6.68672 14.1255 6.78061 14.2194C6.87451 14.3133 6.98616 14.3875 7.10905 14.4378C7.23195 14.4881 7.36363 14.5134 7.49641 14.5123C7.62919 14.5111 7.76041 14.4835 7.88241 14.4311C8.00442 14.3787 8.11476 14.3025 8.20701 14.207L10.5 11.914L12.793 14.207C12.9805 14.3945 13.2348 14.4998 13.5 14.4998C13.7652 14.4998 14.0195 14.3945 14.207 14.207L17.207 11.207C17.3892 11.0184 17.49 10.7658 17.4877 10.5036C17.4854 10.2414 17.3802 9.99059 17.1948 9.80518C17.0094 9.61977 16.7586 9.5146 16.4964 9.51233C16.2342 9.51005 15.9816 9.61084 15.793 9.793L13.5 12.086L11.207 9.793C11.0195 9.60553 10.7652 9.50021 10.5 9.50021C10.2348 9.50021 9.98054 9.60553 9.79301 9.793Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_437">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Tooltip>
          </Badge>
          <Badge count={5} offset={[-9, 3]}>
            <Tooltip
              title="Notifications"
              arrow={false}
              overlayInnerStyle={overlayInnerStyle}
            >
              <div className="bg-BgIcon p-[11px] rounded-full cursor-pointer hover:bg-BgHover duration-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6288 15.9989C20.551 15.9052 20.4745 15.8114 20.3995 15.7209C19.3683 14.4736 18.7444 13.7208 18.7444 10.1897C18.7444 8.36156 18.307 6.86156 17.445 5.73656C16.8094 4.90547 15.9502 4.275 14.8177 3.80906C14.8031 3.80096 14.7901 3.79032 14.7792 3.77766C14.3719 2.41359 13.2572 1.5 12 1.5C10.7428 1.5 9.62861 2.41359 9.22127 3.77625C9.2104 3.78845 9.19756 3.79875 9.1833 3.80672C6.54049 4.89469 5.25611 6.98203 5.25611 10.1883C5.25611 13.7208 4.63314 14.4736 3.60095 15.7195C3.52595 15.81 3.44955 15.9019 3.37174 15.9975C3.17074 16.2399 3.04339 16.5348 3.00476 16.8473C2.96613 17.1598 3.01784 17.4769 3.15377 17.7609C3.44299 18.3703 4.05939 18.7486 4.76299 18.7486H19.2422C19.9425 18.7486 20.5547 18.3708 20.8449 17.7642C20.9814 17.4801 21.0336 17.1628 20.9953 16.8499C20.957 16.537 20.8298 16.2417 20.6288 15.9989ZM12 22.5C12.6774 22.4995 13.342 22.3156 13.9233 21.9679C14.5046 21.6202 14.981 21.1217 15.3019 20.5252C15.317 20.4966 15.3245 20.4646 15.3236 20.4322C15.3227 20.3999 15.3134 20.3684 15.2967 20.3407C15.28 20.313 15.2564 20.2901 15.2283 20.2742C15.2001 20.2583 15.1683 20.25 15.136 20.25H8.86502C8.83264 20.2499 8.80078 20.2582 8.77255 20.274C8.74432 20.2899 8.72067 20.3128 8.70392 20.3405C8.68716 20.3682 8.67787 20.3997 8.67694 20.4321C8.67601 20.4645 8.68347 20.4965 8.69861 20.5252C9.01949 21.1216 9.49579 21.6201 10.077 21.9678C10.6582 22.3155 11.3227 22.4994 12 22.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Tooltip>
          </Badge>

          <Tooltip
            title="Create"
            arrow={false}
            overlayInnerStyle={overlayInnerStyle}
          >
            <div className="bg-BgIcon  rounded-full cursor-pointer hover:bg-BgHover duration-200">
              <img src={profile} alt="profile" className="w-[45px]" />
            </div>
          </Tooltip>
        </div>
      </header>
    </>
  );
};

export default Header;
