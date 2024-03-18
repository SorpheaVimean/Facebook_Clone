import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Divider, Dropdown, Tooltip } from "antd";
import { LuMenu } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoMoon } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

import profile from "../assets/iconLeftSide/Frame 9.png";
import facebook from "../assets/icons/logos_facebook.svg";
import replace from "../assets/icons/replace.png";
import change from "../assets/icons/exchange.png";
import cross from "../assets/icons/radix-icons_cross-2.svg";
import homeline from "../assets/icons/homeOutline.svg";
import homefill from "../assets/icons/solar_home-smile-bold.svg";
import groupline from "../assets/icons/solar_users-group-rounded-outline.svg";
import groupfill from "../assets/icons/solar_users-group-rounded-bold.svg";
import videolin from "../assets/icons/solar_tv-linear.svg";
import videofill from "../assets/icons/solar_tv-bold.svg";
import shopline from "../assets/icons/solar_shop-outline.svg";
import shopfill from "../assets/icons/solar_shop-bold.svg";
import userline from "../assets/icons/solar_user-circle-outline.svg";
import arrow from "../assets/icons/arrow.svg";
import userfill from "../assets/icons/solar_users-group-rounded-bold.svg";
import menu from "../assets/icons/menu.svg";
import menulink from "../assets/icons/menuLink.svg";
import chatlink from "../assets/icons/chatFillLink.svg";
import chatblack from "../assets/icons/chatFill.svg";
import notification from "../assets/icons/ion_notifcations.svg";
import notificationLink from "../assets/icons/ion_notifcationsLink.svg";
import plus from "../assets/icons/ic_round-plus.svg";
import plusLink from "../assets/icons/ic_round-plusLink.svg";
import search from "../assets/icons/ion_search-outline.svg";
import edit from "../assets/icons/bx_edit.svg";
import dots from "../assets/icons/tabler_dots.svg";
import seemess from "../assets/icons/icons8_resize-four-directions.svg";

// Chat icon
import ava6 from "../assets/chat/Ellipse 11-5.png";
import ava5 from "../assets/chat/Ellipse 11-4.png";
import ava4 from "../assets/chat/Ellipse 11-3.png";
import ava3 from "../assets/chat/Ellipse 11-2.png";
import ava2 from "../assets/chat/Ellipse 11-1.png";
import ava1 from "../assets/chat/Ellipse 11.png";

// Search icon
import pro1 from "../assets/searchProfile/Ellipse 9.png";
import pro2 from "../assets/searchProfile/Ellipse 9-1.png";
import pro3 from "../assets/searchProfile/Ellipse 9-2.png";
import pro4 from "../assets/searchProfile/Ellipse 9-3.png";
import pro5 from "../assets/searchProfile/Ellipse 9-4.png";
import pro6 from "../assets/searchProfile/Ellipse 9-5.png";
import pro7 from "../assets/searchProfile/Ellipse 9-6.png";
import pro8 from "../assets/searchProfile/Ellipse 9-7.png";

// Menu
import post from "../assets/icons/bx_editBlack.svg";
import shop from "../assets/icons/solar_shop-bold.svg";
import { IoBookSharp } from "react-icons/io5";
import { PiVideoFill } from "react-icons/pi";
import { BiSolidCalendarStar } from "react-icons/bi";
import fleg from "../assets/icons/flag.png";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import game from "../assets/iconLeftSide/gaming.png";
import message from "../assets/iconLeftSide/messager.jpg";
import { GiSwipeCard } from "react-icons/gi";
import { IoMdPhotos } from "react-icons/io";
import { LuTimerReset } from "react-icons/lu";
import { FcBookmark } from "react-icons/fc";
import { MdBloodtype } from "react-icons/md";
import { GiRoyalLove } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
const Header = () => {
  const [activeNav, setActiveNav] = useState("home");

  const handleLinkClick = (link) => {
    if (activeNav === "more" && link === "more") {
      setActiveNav("home");
    } else {
      setActiveNav(link);
    }
  };

  const [visiblemenu, setVisiblemenu] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleNoti, setVisibleNoti] = useState(false);

  const handleVisibleChangeMenu = (visibility) => {
    setVisiblemenu(visibility);
  };
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
      image: ava1,
      min: 18,
    },
    {
      key: "1",
      label: "Jerome Bell",
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
      image: ava2,
      min: 20,
    },
    {
      key: "2",
      label: "Devon Lane",
      message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      image: ava3,
      min: 32,
    },
    {
      key: "3",
      label: "Esther Howard",
      message:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu",
      image: ava4,
      min: 40,
    },
    {
      key: "4",
      label: "Courtney Henry",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      image: ava5,
      min: 55,
    },
    {
      key: "5",
      label: "Kathryn Murphy",
      message:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu",
      image: ava6,
      min: 36,
    },
    {
      key: "6",
      label: "Jerome Bell",
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
      image: ava1,
      min: 18,
    },
    {
      key: "7",
      label: "Esther Howard",
      message:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu",
      image: ava2,
      min: 20,
    },
    {
      key: "8",
      label: "Courtney Henry",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      image: ava3,
      min: 36,
    },
    {
      key: "8",
      label: "Kathryn Murphy",
      message:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu",
      image: ava4,
      min: 23,
    },
  ];
  const searchItems = [
    {
      key: "0",
      label: "Jane Cooper",
      new: 2,
      image: pro1,
    },
    {
      key: "1",
      label: "Darrell Steward",
      new: 3,
      image: pro2,
    },
    {
      key: "2",
      label: "Floyd Miles",
      new: 4,
      image: pro3,
    },
    {
      key: "3",
      label: "Cameron Williamson",
      new: 7,
      image: pro4,
    },
    {
      key: "4",
      label: "Leslie Alexander",
      new: 2,
      image: pro5,
    },
    {
      key: "5",
      label: "Wade Warren",
      new: 1,
      image: pro6,
    },
    {
      key: "6",
      label: "Savannah Nguyen",
      new: 8,
      image: pro7,
    },
    {
      key: "7",
      label: "Jenny Wilson",
      new: 6,
      image: pro8,
    },
  ];
  const renderDropdownMenu = () => (
    <div className="bg-[#f7f8fa] p-5 rounded-xl border shadow-xl mx-10 ">
      {/* --------------head------------- */}
      <div className="text-[24px] font-bold my-2 hidden lg:block">Menu</div>

      <div className="flex justify-between items-start gap-3 min-h-10 max-h-[800px] overflow-y-scroll hidden-scrollbar">
        {/* =========Menu Section========== */}
        <div className=" hidden lg:block w-[354px] bg-white p-4 rounded-xl border space-y-4">
          {/* ---------search---------------- */}
          <div className="bg-BgIcon flex justify-start items-center p-1 rounded-full  ">
            <div className="flex justify-start items-center gap-2 ml-2 w-full ">
              <div className="w[20px]">
                <img src={search} alt="search" />
              </div>
              <input
                className="bg-transparent focus:outline-none w-full mx-1 p-1 "
                type="text"
                placeholder="Search Menu"
              />
            </div>
          </div>
          {/* ---------Professional---------------- */}
          <div className="text-xl font-medium">Professional</div>
          <div className="">
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <IoBookSharp className="text-4xl text-blue-600" />
              <div className="">
                <div className="font-medium">Ads Manager</div>
                <p className="text-sm">
                  Create, manamge and track the performance of ads.
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <PiVideoFill className="text-6xl text-green-600" />
              <div className="">
                <div className="font-medium">Professional dashboard</div>
                <p className="text-sm">
                  Get insights, ads and explore management tools to help reach
                  your audience.
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <HiMiniUserGroup className="text-5xl text-red-600" />
              <div className="">
                <div className="font-medium">Ad Center</div>
                <p className="text-sm">
                  Marage all the ads you create in Pages, with streamlined
                  features,
                </p>
              </div>
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-3" />
          {/* ---------Social---------------- */}
          <div className="text-xl font-medium">Social</div>
          <div className="">
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <BsCalendarEventFill className="text-5xl text-purple-600" />
              <div className="">
                <div className="font-medium">Events</div>
                <p className="text-sm">
                  Orgarrze or find events and other things to do orlire and
                  nearby.
                </p>
              </div>
            </div>

            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <HiMiniUserGroup className="text-4xl text-green-300" />
              <div className="">
                <div className="font-medium">Friends</div>
                <p className="text-sm">
                  Search for with people who share your interests.
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <BsCalendarEventFill className="text-4xl text-blue-400" />
              <div className="">
                <div className="font-medium">New Feed</div>
                <p className="text-sm">
                  See relevent post from people and pages you follow.
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <BsCalendarEventFill className="text-5xl text-fuchsia-500" />
              <div className="">
                <div className="font-medium">Feeds</div>
                <p className="text-sm">
                  See the most recent posts from your friends, groups, Pages and
                  more.
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <HiMiniUserGroup className="text-4xl text-red-600" />
              <div className="">
                <div className="font-medium">Pages</div>
                <p className="text-sm">
                  Discover and connect with nusinessen on Facebook.
                </p>
              </div>
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-3" />
          {/* ---------Entertainment---------------- */}
          <div className="text-xl font-medium">Entertainment</div>
          <div className="">
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <img src={game} alt="" className="w-[30px]" />
              <div className="">
                <div className="font-medium">Gaming Video</div>
                <p className="text-sm">
                  Watch and connect with your favorite games and streamers.
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <GrAnnounce className="text-4xl text-amber-700" />
              <div className="">
                <div className="font-medium">Play games</div>
                <p className="text-sm">Play your favorite games.</p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <PiVideoFill className="text-5xl text-rose-500" />
              <div className="">
                <div className="font-medium">Video </div>
                <p className="text-sm">
                  A video destination personalized to your interests and
                  connections.
                </p>
              </div>
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-3" />
          {/* ---------Shopping---------------- */}
          <div className="text-xl font-medium">Shopping</div>
          <div className="">
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <GiSwipeCard className="text-4xl text-gray-900" />
              <div className="">
                <div className="font-medium">Orders and payments</div>
                <p className="text-sm">
                  A seamless, secure way to pay on the apps you already use.
                </p>
              </div>
            </div>

            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <img src={shop} alt="" className="w-[30px]" />
              <div className="">
                <div className="font-medium">Marketplace</div>
                <p className="text-sm">Buy and sell in your community.</p>
              </div>
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-3" />
          {/* ---------Personal---------------- */}
          <div className="text-xl font-medium">Personal</div>
          <div className="">
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <IoMdPhotos className="text-4xl text-green-900" />
              <div className="">
                <div className="font-medium">Recent ad activity</div>
                <p className="text-sm">
                  See all the ads you interacted with on Facebook.
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <LuTimerReset className="text-4xl text-red-600" />
              <div className="">
                <div className="font-medium">Memories</div>
                <p className="text-sm">
                  Browse your old photos, videos and posts on Facebook
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <FcBookmark className="text-4xl " />
              <div className="">
                <div className="font-medium">Saved</div>
                <p className="text-sm">
                  Find posts, photos and videos that you saved for later.
                </p>
              </div>
            </div>
          </div>

          <Divider className="border-[0.5] border-slate-300 my-3" />

          {/* ---------Community Resources---------------- */}
          <div className="text-xl font-medium">Community Resources</div>
          <div className="">
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <MdBloodtype className="text-4xl text-red-500" />

              <div className="">
                <div className="font-medium">Blood Donations</div>
                <p className="text-sm">
                  Get ipdates about donating blood near you.
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <GrAnnounce className="text-4xl text-green-900" />

              <div className="">
                <div className="font-medium">Climate Scoence Center</div>
                <p className="text-sm">
                  Learn about climate change and its effects.
                </p>
              </div>
            </div>
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <GiRoyalLove className="text-4xl text-orange-400" />

              <div className="">
                <div className="font-medium">Fundraisers</div>
                <p className="text-sm">
                  Donate and raise money for nonprofits and personal causes.
                </p>
              </div>
            </div>
          </div>

          <Divider className="border-[0.5] border-slate-300 my-3" />

          {/* ---------More from Meta---------------- */}
          <div className="text-xl font-medium">More from Meta</div>
          <div className="">
            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <img src={message} alt="" className="w-[30px]" />
              <div className="">
                <div className="font-medium">Messenge kids</div>
                <p className="text-sm">
                  Let kids message with close friends and family.
                </p>
              </div>
            </div>

            <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
              <IoLogoWhatsapp className="text-4xl text-green-500" />
              <div className="">
                <div className="font-medium">WhatApp</div>
                <p className="text-sm">
                  {" "}
                  Message and call people privately on your computer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========create Section========== */}
        <div className=" w-[360px] lg:w-auto sticky top-0 bg-none lg:bg-white p-0 lg:p-4 rounded-xl border-none lg:border">
          <div className="text-2xl lg:text-xl font-bold py-3">Create</div>
          {/* create top */}
          <div className="space-y-2">
            <div className="flex  justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <img src={post} alt="post" />
                </div>
                <div className="">
                  <div className="font-medium">Post</div>
                  <p className="block lg:hidden">Share a post on News Feed.</p>
                </div>
              </div>
            </div>
            <div className="flex  justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <IoBookSharp className="text-2xl" />
                </div>
                <div className="">
                  <div className="font-medium">Story</div>
                  <p className="block lg:hidden">
                    Share a photo or write something
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <PiVideoFill className="text-2xl" />
                </div>
                <div className="">
                  <div className="font-medium">Reel</div>
                  <p className="block lg:hidden">Share a reel.</p>
                </div>
              </div>
            </div>
            <div className="flex  justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <BiSolidCalendarStar className="text-2xl" />
                </div>
                <div className="">
                  <div className="font-medium">Life event</div>
                  <p className="block lg:hidden">
                    Add a life event to your profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-3" />
          {/* create bottom*/}
          <div className=" space-y-2">
            <div className="flex  justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <img src={fleg} alt="flag" className="w-[24px]" />
                </div>
                <div className="">
                  <div className="font-medium">Page</div>
                  <p className="block lg:hidden">
                    Connect and share with customers or fans.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <GrAnnounce className="text-2xl" />
                </div>
                <div className="">
                  <div className="font-medium">Ad</div>
                  <p className="block lg:hidden">
                    Advertise your business, brand or orgganization.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <HiMiniUserGroup className="text-2xl" />
                </div>
                <div className="">
                  <div className="font-medium">Group</div>
                  <p className="block lg:hidden">
                    Connect with people who share your interests.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <BsCalendarEventFill className="text-2xl" />
                </div>
                <div className="">
                  <div className="font-medium">Event</div>
                  <p className="block lg:hidden">
                    Bring people together with a public or privat event
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <FaShoppingBag className="text-2xl" />
                </div>
                <div className="">
                  <div className="font-medium">Marketplace listing</div>
                  <p className="block lg:hidden">
                    {" "}
                    Sell items to people in your community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
              className="bg-transparent focus:outline-none w-full mx-1 p-1 "
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
        <ul className="flex flex-col justify-start items-start gap-2 w-[379px] ">
          {chatItems.map((item, index) => (
            <div key={index} className="relative group ">
              <div className="flex justify-center items-center gap-1 p-2 hover:bg-BgIcon rounded-lg cursor-pointer duration-300">
                <img src={item.image} alt="profile" className="w-[56px]" />

                <div className="flex flex-col justify-start items-start p-2">
                  <div className="font-medium">{item.label}</div>
                  <div className=" text-TextTitle line-clamp-1">
                    {item.message}
                  </div>
                </div>
              </div>

              <div className=" absolute hidden group-hover:block top-[22%] right-2 p-[7px] rounded-full cursor-pointer bg-white hover:bg-BgHover border duration-300 ">
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
        <ul className="flex flex-col justify-start items-start gap-2 w-[379px] ">
          {chatItems.map((item, index) => (
            <div key={index} className="relative group ">
              <div className="flex justify-start items-start gap-1 p-2 hover:bg-BgIcon rounded-lg cursor-pointer duration-300">
                <img src={item.image} alt="profile" className="w-[56px]" />

                <div className="flex flex-col justify-start items-start p-2">
                  <div className="font-medium">{item.label}</div>
                  <div className=" text-TextTitle ">{item.message}</div>
                  <div className="text-Link">{item.min} minutes ago</div>
                </div>
              </div>

              <div className=" absolute hidden group-hover:block top-[35%] right-2 p-[7px] rounded-full cursor-pointer bg-white hover:bg-BgHover border duration-300 ">
                <img src={dots} alt="search" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
  const renderDropdownSearch = () => (
    // <div className=" bg-white pl-3 py-3  px-3 rounded-b-xl border shadow-xl w-[330px] mt-[-55px] space-y-4 ">
    <div className=" ml-[-60px] bg-white pl-3 py-3  px-3 rounded-b-xl border shadow-xl w-[330px] mt-[-48px] md:mt-[-55px]  space-y-4 ">
      <div className="flex justify-start  items-center gap-2 ">
        <img src={facebook} alt="menu" />

        <div className="bg-BgIcon flex justify-center items-center p-2 rounded-full w-full   ">
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="w-full bg-transparent focus:outline-none mx-2"
          />
        </div>
      </div>

      {/* ---------See all---------------- */}
      <div className="flex justify-between items-center">
        <div className="text-4 font-medium">Recent</div>
        <div className="text-Link text-4 hover:bg-BgIcon rounded-lg p-2 cursor-pointer duration-300">
          Edit
        </div>
      </div>
      <ul className="flex flex-col justify-start items-start gap-5 ] ">
        {searchItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center hover:bg-BgIcon rounded-lg w-full px-2 cursor-pointer"
          >
            <div className="flex justify-center items-center gap-1   cursor-pointer duration-300">
              <img src={item.image} alt="profile" className="w-[36px]" />

              <div className="flex flex-col justify-start items-start p-1">
                <div className="font-medium text-[12px]">{item.label}</div>
                <div className=" text-TextTitle flex justify-center items-center gap-2">
                  <div className="w-2 h-2  rounded-full bg-Link"></div>
                  <div className="">{item.new} new</div>
                </div>
              </div>
            </div>

            <div className="   p-1 rounded-full cursor-pointer  hover:bg-BgHover  duration-300 ">
              <img src={cross} alt="search" />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
  const profileDropdown = () => (
    <div className="bg-white p-4 rounded-xl border shadow-xl w-[360px] h-[580px] ">
      {/* ---profile---- */}
      <div className=" shadow-xl p-4 rounded-xl">
        <div className=" w-full flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
          <img src={profile} alt="" />
          <div className="font-bold">TITB Group</div>
        </div>
        <Divider className="border-[0.5] border-slate-300 my-2" />
        <div className=" group w-full flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
          <div className="relative">
            <img
              src={change}
              alt=""
              className="w-9 group-hover:rotate-180 duration-500"
            />
            <img
              src={profile}
              alt=""
              className="absolute bottom-[6px] left-[5px] w-6 "
            />
          </div>
          <div className="font-bold">TITB Page1</div>
        </div>
        <div className=" group w-full flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
          <div className="relative">
            <img
              src={change}
              alt=""
              className="w-9 group-hover:rotate-180 duration-500"
            />
            <img
              src={facebook}
              alt=""
              className="absolute bottom-[6px] left-[5px] w-6 "
            />
          </div>
          <div className="font-bold">TITB Page2</div>
        </div>
        <Divider className="border-[0.5] border-slate-300 my-2" />
        <div className=" bg-BgIcon hover:bg-BgHover duration-300 p-3 rounded-xl cursor-pointer ">
          <div className="flex justify-center items-center gap-2">
            <img src={replace} alt="replace" className="w-5" />
            <p> See all profiles</p>
          </div>
        </div>
      </div>

      {/* ---Setting---- */}
      <div className=" mt-5">
        <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
              <IoSettingsSharp className="text-2xl" />
            </div>
            <div className="font-medium">Settings & privacy</div>
          </div>
          <div className="">
            <img src={arrow} alt="arrow" className="-rotate-90" />
          </div>
        </div>

        <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
              <AiFillQuestionCircle className="text-2xl" />
            </div>
            <div className="font-medium">Settings & privacy</div>
          </div>
          <div className="">
            <img src={arrow} alt="arrow" className="-rotate-90" />
          </div>
        </div>

        <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
              <IoMoon className="text-2xl" />
            </div>
            <div className="font-medium">Settings & privacy</div>
          </div>
          <div className="">
            <img src={arrow} alt="arrow" className="-rotate-90" />
          </div>
        </div>

        <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
              <RiErrorWarningFill className="text-2xl" />
            </div>
            <div className="font-medium">Settings & privacy</div>
          </div>
        </div>

        <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
              <IoLogOut className="text-2xl" />
            </div>
            <div className="font-medium">Settings & privacy</div>
          </div>
        </div>

        {/*----- Privacy teach------ */}
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
  );
  return (
    <>
      <header className="bg-white pl-4 flex justify-between items-end shadow-md sticky top-0 w-full  z-40">
        {/* ==================logo======================== */}
        <div className="flex justify-between items-center   gap-2 my-2 cursor-pointer">
          <img src={facebook} alt="search" />
          <Dropdown
            menu={{
              searchItems,
            }}
            trigger={["click"]}
            placement="bottomRight"
            overlayStyle={{
              position: "fixed",
              width: "max-content",
            }}
            dropdownRender={renderDropdownSearch}
          >
            <div className="bg-BgIcon flex justify-start items-center p-2 mr-12 rounded-full lg:w-[270px] ">
              <div className="w-6">
                <img src={search} alt="search" />
              </div>
              <span className="hidden lg:block">
                <span className="text-TextTitle">Search Facebook</span>
              </span>
            </div>
          </Dropdown>
        </div>

        {/* ==================Nav======================== */}
        <div className=" w-[12%]  md:w-[35%]  md:mr-32 ">
          <div className="flex justify-start md:justify-between items-center gap-2 py-1 ">
            <Tooltip
              title="Home"
              arrow={false}
              className=" tooltip-with-margin hidden md:block "
              overlayInnerStyle={overlayInnerStyle}
            >
              <Link
                to={"/"}
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
                to={"/group"}
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
                to={"/video"}
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
                to={"/marketplace"}
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
                to={"/user"}
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
                to={activeNav === "more" ? "/" : "/setting"}
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
                  className={`mb-[-4px] md:mb-[-9px] rounded-t-xl transition duration-200 ease-in-out ${
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
            title="Menu"
            arrow={false}
            overlayInnerStyle={overlayInnerStyle}
          >
            <Dropdown
              menu={{
                chatItems,
              }}
              trigger={["click"]}
              placement="bottom"
              overlayStyle={{
                position: "fixed",
                width: "max-content",
              }}
              dropdownRender={renderDropdownMenu}
              onOpenChange={handleVisibleChangeMenu}
            >
              <div className="bg-BgIcon p-[8px] rounded-full cursor-pointer hover:bg-BgHover duration-200 ">
                <span className="hidden lg:block">
                  {visiblemenu ? (
                    <img src={menulink} alt="chatblack" />
                  ) : (
                    <img src={menu} alt="menu" />
                  )}
                </span>
                <span className="block lg:hidden">
                  {visiblemenu ? (
                    <img src={plusLink} alt="plus" />
                  ) : (
                    <img src={plus} alt="plus" />
                  )}
                </span>
              </div>
            </Dropdown>
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
                overlayStyle={{
                  position: "fixed",
                  width: "max-content",
                }}
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
            title="Account"
            arrow={false}
            overlayInnerStyle={overlayInnerStyle}
          >
            <Dropdown
              menu={{
                chatItems,
              }}
              trigger={["click"]}
              placement="bottomRight"
              overlayStyle={{ position: "fixed", width: "max-content" }}
              dropdownRender={profileDropdown}
            >
              <div className="">
                <div className=" relative bg-BgIcon  rounded-full cursor-pointer  duration-200">
                  <img
                    src={profile}
                    alt="profile"
                    className="w-[40px] hover:opacity-80 "
                  />
                </div>
                <div className="absolute bottom-1 right-5">
                  <img
                    src={arrow}
                    alt=""
                    className="w-5 border-2 border-white bg-BgIcon rounded-full"
                  />
                </div>
              </div>
            </Dropdown>
          </Tooltip>
        </div>
      </header>
    </>
  );
};

export default Header;
