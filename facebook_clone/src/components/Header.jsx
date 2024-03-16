import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown, Tooltip } from "antd";
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
import chatlink from "../assets/icons/chatFillLink.svg";
import chatblack from "../assets/icons/chatFill.svg";
import notification from "../assets/icons/ion_notifcations.svg";
import notificationLink from "../assets/icons/ion_notifcationsLink.svg";
import plus from "../assets/icons/ic_round-plus.svg";
import search from "../assets/icons/ion_search-outline.svg";
import edit from "../assets/icons/bx_edit.svg";
import dots from "../assets/icons/tabler_dots.svg";
import seemess from "../assets/icons/icons8_resize-four-directions.svg";

const Header = () => {
  const [activeNav, setActiveNav] = useState("home");
  const handleLinkClick = (link) => {
    setActiveNav(link);
  };
  const [visible, setVisible] = useState(false);
  const [visibleNoti, setVisibleNoti] = useState(false);

  const handleVisibleChange = (visibility) => {
    setVisible(visibility);
  };
  const handleVisibleChangeNoti = (visibility) => {
    setVisibleNoti(visibility);
  };
  const overlayInnerStyle = {
    marginTop: "6px",
  };

  const chatItems = [
    {
      key: "0",
      label: "Bessie Cooper",
      message:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
      image: profile,
    },
    {
      key: "1",
      label: "Jerome Bell",
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
      image: profile,
    },
    {
      key: "2",
      label: "Devon Lane",
      message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      image: profile,
    },
    {
      key: "3",
      label: "Esther Howard",
      message:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu",
      image: profile,
    },
    {
      key: "4",
      label: "Courtney Henry",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      image: profile,
    },
    {
      key: "5",
      label: "Kathryn Murphy",
      message:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu",
      image: profile,
    },
    {
      key: "6",
      label: "Jerome Bell",
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
      image: profile,
    },
    {
      key: "7",
      label: "Esther Howard",
      message:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu",
      image: profile,
    },
    {
      key: "8",
      label: "Courtney Henry",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      image: profile,
    },
    {
      key: "8",
      label: "Kathryn Murphy",
      message:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu",
      image: profile,
    },
  ];
  const renderDropdownChat = () => (
    <div className="bg-white p-4 rounded-xl border shadow-xl ">
      <div className="min-h-10 max-h-[800px] overflow-y-auto space-y-4">
        {/* --------------head------------- */}
        <div className="flex justify-between items-center ">
          <div className="text-[24px] font-semibold">Chats</div>
          <div className="flex justify-center items-center gap-2">
            <Tooltip title="Options" arrow={false} placement="bottomRight">
              <div className=" p-[7px] rounded-full cursor-pointer hover:bg-BgIcon duration-200 ">
                <img src={dots} alt="search" />
              </div>
            </Tooltip>
            <Tooltip
              title="See all in message"
              arrow={false}
              placement="bottomRight"
            >
              <div className=" p-[7px] rounded-full cursor-pointer hover:bg-BgIcon duration-200 ">
                <img src={seemess} alt="search" />
              </div>
            </Tooltip>
            <Tooltip title="New message" arrow={false} placement="bottom">
              <div className=" p-[7px] rounded-full cursor-pointer hover:bg-BgIcon duration-200 ">
                <img src={edit} alt="option" />
              </div>
            </Tooltip>
          </div>
        </div>
        {/* ---------search---------------- */}
        <div className="bg-BgIcon flex justify-start items-center p-1 rounded-full  ">
          <div className="flex justify-start items-center gap-2 ml-2 w-full ">
            <div className="w[20px]">
              <img src={search} alt="search" />
            </div>
            <input
              className="bg-transparent focus:outline-none w-full mx-1 "
              type="text"
              placeholder="Search Messager"
            />
          </div>
        </div>
        {/* ---------search---------------- */}
        <div className="flex justify-start items-center gap-4">
          <div className="text-4 text-sky-500 font-semibold bg-sky-500 bg-opacity-10 rounded-full px-5 py-2 flex justify-center items-center cursor-pointer hover:bg-opacity-20 duration-300 ">
            Inbox
          </div>
          <div className="flex justify-center items-center text-4 font-semibold px-5 py-2 rounded-full hover:bg-BgIcon cursor-pointer duration-300 ">
            Communities
          </div>
        </div>
        <ul className="flex flex-col justify-start items-start gap-5 w-[379px] ">
          {chatItems.map((item, index) => (
            <div key={index} className="relative group ">
              <div className="flex justify-center items-center gap-1 hover:bg-BgIcon rounded-lg cursor-pointer duration-300">
                <img src={item.image} alt="profile" className="w-[56px]" />

                <div className="flex flex-col justify-start items-start p-2">
                  <div className="font-medium">{item.label}</div>
                  <div className=" text-TextTitle line-clamp-1">
                    {item.message}
                  </div>
                </div>
              </div>

              <div className=" absolute hidden group-hover:block top-2.5 right-2 p-[7px] rounded-full cursor-pointer bg-white hover:bg-BgHover border duration-300 ">
                <img src={dots} alt="search" />
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div className="text-Link font-medium text-4 flex justify-center items-center cursor-pointer hover:underline py-2 border-t ">
        See all in messenger
      </div>
    </div>
  );
  const renderDropdownNotification = () => (
    <div className="bg-white p-4 rounded-xl border shadow-xl ">
      <div className="min-h-10 max-h-[800px] overflow-y-auto  hidden-scrollbar space-y-4">
        {/* --------------head------------- */}
        <div className="flex justify-between items-center ">
          <div className="text-[24px] font-semibold">Notifications</div>

          <Tooltip title="Options" arrow={false} placement="bottomRight">
            <div className=" p-[7px] rounded-full cursor-pointer hover:bg-BgIcon duration-200 ">
              <img src={dots} alt="search" />
            </div>
          </Tooltip>
        </div>

        {/* ---------Unread---------------- */}
        <div className="flex justify-start items-center gap-4">
          <div className="text-4 text-sky-500 font-semibold bg-sky-500 bg-opacity-10 rounded-full px-5 py-2 flex justify-center items-center cursor-pointer hover:bg-opacity-20 duration-300 ">
            All
          </div>
          <div className="flex justify-center items-center text-4 font-semibold px-5 py-2 rounded-full hover:bg-BgIcon cursor-pointer duration-300 ">
            Unread
          </div>
        </div>
        {/* ---------See all---------------- */}
        <div className="flex justify-between items-center">
          <div className="text-4 font-medium">New</div>
          <div className="text-Link text-4 hover:bg-BgIcon rounded-lg p-2 cursor-pointer duration-300">
            See all
          </div>
        </div>
        <ul className="flex flex-col justify-start items-start gap-5 w-[379px] ">
          {chatItems.map((item, index) => (
            <div key={index} className="relative group ">
              <div className="flex justify-start items-start gap-1 hover:bg-BgIcon rounded-lg cursor-pointer duration-300">
                <img src={item.image} alt="profile" className="w-[56px]" />

                <div className="flex flex-col justify-start items-start p-2">
                  <div className="font-medium">{item.label}</div>
                  <div className=" text-TextTitle ">{item.message}</div>
                  <div className="text-Link">32 minutes ago</div>
                </div>
              </div>

              <div className=" absolute hidden group-hover:block top-2.5 right-2 p-[7px] rounded-full cursor-pointer bg-white hover:bg-BgHover border duration-300 ">
                <img src={dots} alt="search" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );

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
            <span className="hidden lg:block">
              <input
                className="bg-transparent focus:outline-none mx-2"
                type="text"
                placeholder="Search Facebook"
              />
            </span>
          </div>
        </div>

        {/* ==================Nav======================== */}
        <div className=" w-[12%]  md:w-[35%]  mr-14 ">
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
                    <LuMenu className="text-4xl text-TextTitle" />
                  </div>
                </div>

                <div
                  className={` mb-[-9px] rounded-t-xl transition duration-200 ease-in-out ${
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
            <div className="bg-BgIcon p-[8px] rounded-full cursor-pointer hover:bg-BgHover duration-200 ">
              <span className="hidden lg:block">
                <img src={menu} alt="menu" />
              </span>
              <span className="block lg:hidden">
                <img src={plus} alt="plus" />
              </span>
            </div>
          </Tooltip>
          <Badge count={7} offset={[-6, 4]} size="small">
            <Tooltip
              title="Messenger"
              arrow={false}
              overlayInnerStyle={overlayInnerStyle}
            >
              <Dropdown
                menu={{
                  chatItems,
                }}
                trigger={["click"]}
                placement="bottom"
                overlayStyle={{ position: "fixed", width: "max-content" }}
                dropdownRender={renderDropdownChat}
                onOpenChange={handleVisibleChange}
              >
                <div className="bg-BgIcon p-[8px] rounded-full cursor-pointer hover:bg-BgHover duration-200">
                  {visible ? (
                    <img src={chatblack} alt="chatblack" />
                  ) : (
                    <img src={chatlink} alt="chatwhite" />
                  )}
                </div>
              </Dropdown>
            </Tooltip>
          </Badge>
          <Badge count={5} offset={[-6, 4]} size="small">
            <Tooltip
              title="Notifications"
              arrow={false}
              overlayInnerStyle={overlayInnerStyle}
            >
              <Dropdown
                menu={{
                  chatItems,
                }}
                trigger={["click"]}
                placement="bottom"
                overlayStyle={{ position: "fixed", width: "max-content" }}
                dropdownRender={renderDropdownNotification}
                onOpenChange={handleVisibleChangeNoti}
              >
                <div className="bg-BgIcon p-[8px] rounded-full cursor-pointer hover:bg-BgHover duration-200">
                  {visibleNoti ? (
                    <img src={notificationLink} alt="chatblack" />
                  ) : (
                    <img src={notification} alt="chatwhite" />
                  )}
                </div>
              </Dropdown>
            </Tooltip>
          </Badge>

          <Tooltip
            title="Create"
            arrow={false}
            overlayInnerStyle={overlayInnerStyle}
          >
            <div className="bg-BgIcon  rounded-full cursor-pointer hover:bg-BgHover duration-200">
              <img src={profile} alt="profile" className="w-[40px]" />
            </div>
          </Tooltip>
        </div>
      </header>
    </>
  );
};

export default Header;
