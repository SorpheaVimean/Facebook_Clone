// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import myprofile from "../../assets/image/Rectangle 7.png";
import bgswip from "../../assets/image/Frame 39.png";
import user from "../../assets/image/Ellipse 3.png";
import plus from "../../assets/icons/ic_round-plus.svg";
import arrow from "../../assets/icons/arrow.svg";
import create from "../../assets/icons/iconoir_page-edit.svg";
import announce from "../../assets/icons/grommet-icons_announce.svg";
import dots from "../../assets/icons/tabler_dots.svg";
import search from "../../assets/icons/ion_search-outline.svg";
import camera from "../../assets/icons/Vector.png";
import photo from "../../assets/icons/basil_image-solid.svg";
import smile from "../../assets/icons/fa-solid_smile.svg";
import globe from "../../assets/icons/mdi_globe.svg";
import cross from "../../assets/icons/radix-icons_cross-2.svg";
import like from "../../assets/icons/bx_like.svg";
import commment from "../../assets/icons/iconamoon_comment-light.svg";
import share from "../../assets/icons/uil_share.svg";
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

// Center post
import ac from "../../assets/postimage/Ellipse 6.png";
import postac from "../../assets/postimage/image 1.png";

// Right side
import marvin from "../../assets/profileRightSide/Ellipse 1.png";
import camer from "../../assets/profileRightSide/Ellipse 2-4.png";
import cour from "../../assets/profileRightSide/Ellipse 7.png";
import alber from "../../assets/profileRightSide/Ellipse 5.png";
import ral from "../../assets/profileRightSide/Ellipse 1.png";
import jenny from "../../assets/profileRightSide/Ellipse 6.png";

import { useState } from "react";
import { Divider, Tooltip } from "antd";
const HomePage = () => {
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
  const contacts = [
    {
      id: 1,
      name: "Marvin McKinney",
      logo: marvin,
    },
    {
      id: 2,
      name: "Cameron Williamson",
      logo: camer,
    },
    {
      id: 3,
      name: "Dianne Russell",
      logo: jenny,
    },
    {
      id: 4,
      name: "Courtney henry",
      logo: cour,
    },
    {
      id: 5,
      name: "Albert Flores",
      logo: alber,
    },
    {
      id: 6,
      name: "Ralph Edwards",
      logo: ral,
    },
    {
      id: 7,
      name: "Jenny Wilson",
      logo: jenny,
    },
  ];
  const conversation = [
    {
      id: 1,
      name: "Robert Fox",
      logo: marvin,
    },
    {
      id: 2,
      name: "Cody Fisher",
      logo: cour,
    },
    {
      id: 3,
      name: "Darrell Steward",
      logo: alber,
    },
    {
      id: 4,
      name: "Jenny Wilson",
      logo: jenny,
    },
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleSeeAll = () => {
    setSeeAll(!seeall);
  };
  return (
    <>
      <div className="flex justify-center  md:justify-between items-start mt-5 mx-4  ">
        {/* ==================Left Side======================== */}
        <div className="hidden lg:block h-[100vh] sticky top-0 bg-black ">
          {/* ----------Infor---------- */}
          <div className="flex flex-col justify-start items-start gap-1 ">
            {info.slice(0, showAll ? info.length : 6).map((infoItem) => (
              <div
                key={infoItem.id}
                className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer"
              >
                <img src={infoItem.logo} alt="" />
                <div className="font-bold">{infoItem.name}</div>
              </div>
            ))}
            <div
              className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer"
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
                  className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer"
                >
                  <img src={infoItem.logo} alt="" />
                  <div className="font-bold">{infoItem.name}</div>
                </div>
              ))}
              <div
                className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-3 rounded-xl cursor-pointer"
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

          <div className="flex justify-start items-center mt-2">
            <div className="text-TextTitle text-[10px] hover:underline cursor-pointer">
              Privacy .
            </div>
            <div className="text-TextTitle text-[10px] hover:underline cursor-pointer">
              Teams .
            </div>
            <div className="text-TextTitle text-[10px] hover:underline cursor-pointer">
              Advertising .
            </div>
            <div className="text-TextTitle text-[10px] hover:underline cursor-pointer">
              Ad Choices .
            </div>
            <div className="text-TextTitle text-[10px] hover:underline cursor-pointer">
              Cookies .
            </div>
            <div className="text-TextTitle text-[10px]  cursor-pointer">
              More .
            </div>
            <div className="text-TextTitle text-[10px] hover:underline cursor-pointer">
              Meta © 2024
            </div>
          </div>
        </div>

        {/* ==================middle======================== */}
        <div className=" lg:w-[36%] min-w-[483px] md:w-[642px]  ">
          <div className="  ">
            <div className="w-full mb-4 ">
              <Swiper
                slidesPerView={4}
                className="flex justify-center items-center gap-5"
              >
                <SwiperSlide className="flex flex-col group  ">
                  <div className="w-[140px] h-[250px] bg-white hover:bg-BgIcon felx flex-col justify-center items-center group rounded-xl cursor-pointer overflow-hidden">
                    <div className="overflow-hidden bg-black ">
                      <img
                        src={myprofile}
                        alt=""
                        className=" group-hover:scale-105 group-hover:opacity-80 duration-300"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="z-10 mt-[-25px] bg-Link border-4 border-white p-2 rounded-full flex justify-center items-center ">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1033 5.73478 10.998 6 10.998H11V5.99799C11 5.73277 11.1054 5.47842 11.2929 5.29088C11.4804 5.10334 11.7348 4.99799 12 4.99799C12.2652 4.99799 12.5196 5.10334 12.7071 5.29088C12.8946 5.47842 13 5.73277 13 5.99799V10.998H18C18.2652 10.998 18.5196 11.1033 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="text-center py-3">Create Story</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="flex flex-col group  ">
                  <div className="relative w-[140px] h-[250px] rounded-xl overflow-hidden cursor-pointer group">
                    <div className="bg-black">
                      <img
                        src={bgswip}
                        alt=""
                        className="object-cover h-full opacity-80 group-hover:scale-105 group-hover:opacity-65 duration-300"
                      />
                      <div className="absolute top-3 left-3 flex w-12">
                        <div className="border-2 rounded-full border-Link flex justify-center items-center cursor-pointer">
                          <img
                            src={user}
                            alt=""
                            className="object-cover h-full"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 text-white text-[12px]">
                        Savannah nguyen
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col group  ">
                  <div className="relative w-[140px] h-[250px] rounded-xl overflow-hidden cursor-pointer group">
                    <div className="bg-black">
                      <img
                        src={bgswip}
                        alt=""
                        className="object-cover h-full opacity-80 group-hover:scale-105 group-hover:opacity-65 duration-300"
                      />
                      <div className="absolute top-3 left-3 flex w-12">
                        <div className="border-2 rounded-full border-Link flex justify-center items-center cursor-pointer">
                          <img
                            src={user}
                            alt=""
                            className="object-cover h-full"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 text-white text-[12px]">
                        Savannah nguyen
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col group  ">
                  <div className="relative w-[140px] h-[250px] rounded-xl overflow-hidden cursor-pointer group">
                    <div className="bg-black">
                      <img
                        src={bgswip}
                        alt=""
                        className="object-cover h-full opacity-80 group-hover:scale-105 group-hover:opacity-65 duration-300"
                      />
                      <div className="absolute top-3 left-3 flex w-12">
                        <div className="border-2 rounded-full border-Link flex justify-center items-center cursor-pointer">
                          <img
                            src={user}
                            alt=""
                            className="object-cover h-full"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 text-white text-[12px]">
                        Savannah nguyen
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col group  ">
                  <div className="relative w-[140px] h-[250px] rounded-xl overflow-hidden cursor-pointer group">
                    <div className="bg-black">
                      <img
                        src={bgswip}
                        alt=""
                        className="object-cover h-full opacity-80 group-hover:scale-105 group-hover:opacity-65 duration-300"
                      />
                      <div className="absolute top-3 left-3 flex w-12">
                        <div className="border-2 rounded-full border-Link flex justify-center items-center cursor-pointer">
                          <img
                            src={user}
                            alt=""
                            className="object-cover h-full"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 text-white text-[12px]">
                        Savannah nguyen
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* ------------------post----------------------- */}
            <div className="bg-white  rounded-xl mb-4">
              <div className="mx-4 ">
                <div className="flex justify-center items-center gap-2 pt-4">
                  <img src={profile} alt="" className="w-[40px]" />
                  <div className="text-TextTitle bg-BgIcon hover:bg-BgHover duration-300 w-full rounded-full pl-4 py-3 hover:bg cursor-pointer">
                    What's on your mind, TITB Group?
                  </div>
                </div>
                <Divider className="border-[0.5] border-slate-300 mt-4" />
                <div className="flex justify-around items-center gap-2 ">
                  <div className="flex justify-center  items-center w-full hover:bg-BgIcon gap-2 cursor-pointer p-3 my-2 rounded-xl duration-300">
                    <img src={camera} alt="camer" />
                    <div className="text-TextTitle font-semibold">Live</div>
                  </div>
                  <div className="flex justify-center  items-center w-full hover:bg-BgIcon gap-2 cursor-pointer p-3 rounded-xl duration-300">
                    <img src={photo} alt="camer" />
                    <div className="text-TextTitle font-semibold">
                      Photo/Video
                    </div>
                  </div>
                  <div className="flex justify-center  items-center w-full hover:bg-BgIcon gap-2 cursor-pointer p-3 rounded-xl duration-300">
                    <img src={smile} alt="camer" />
                    <div className="text-TextTitle font-semibold">
                      Feeling/activity
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white  rounded-xl">
              {/*------ Headed post ------ */}
              <div className="flex justify-between items-center p-3">
                <div className="flex justify-start items-start gap-2">
                  <img src={ac} alt="" />

                  <div className="">
                    <div className="cursor-pointer hover:underline">
                      ACLEDA Bank Plc.
                    </div>
                    <div className="flex justify-start items-start">
                      <div className="text-sm cursor-pointer hover:underline">
                        7h .
                      </div>
                      <img src={globe} alt="" className="w-5" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <div className=" p-[7px] rounded-full cursor-pointer hover:bg-BgIcon duration-200 ">
                    <img src={dots} alt="option" />
                  </div>
                  <div className=" p-[7px] rounded-full cursor-pointer hover:bg-BgIcon duration-200 ">
                    <img src={cross} alt="option" />
                  </div>
                </div>
              </div>

              {/*------ Descriptions ------ */}
              <div className="p-3">
                ជម្រាបជូនអតិថិជនជាទីគោរព ថ្មីៗនេះមានការផ្ញើសារក្លែងបន្លំ
                ទៅក្នុងទូរសព្ទ (SMS) ឬអុីម៉ែល
                ដើម្បីប៉ុនប៉ងចូលយកព័ត៌មានគណនីរបស់លោកអ្នក។ ដូច្នេះប្រសិនបើលោកអ្នក
                បានទទួលការស្នើសុំជាបន្ទាន់នូវព័ត៌មានផ្ទាល់ខ្លួន
                ដើម្បីចូលទៅកាន់គណនីធនាគារ ការស្នើសុំលេខអត្តសញ្ញាណ
                ឬក៏ដើម្បីបញ្ជាក់នូវព័ត៌មានគណនីធនាគាររបស់លោកអ្នក
                សូមកុំចុចទៅលើតំណភ្ជាប់ (Link) ដែលទទួលបាននោះ ឬកុំឆ្លើយតប
                និងផ្ដល់នូវព័ត៌មានផ្ទាល់ខ្លួន ឬព័ត៌មានគណនី ជាដាច់ខាត។
                សូមបញ្ជាក់ថា បុគ្គលិករបស់ធនាគារ អេស៊ីលីដា
                នឹងមិនទាក់ទងលោកអ្នកសួរអំពីលេ… See more
              </div>

              {/*------ image ------ */}
              <img src={postac} alt="" className=" w-full" />

              {/*------ like section ------ */}
              <div className="flex justify-between items-center m-4">
                <div className=""></div>
                <div className="flex justify-center items-center gap-2">
                  <div className="text-TextTitle cursor-pointer hover:underline duration-300">
                    144 comments{" "}
                  </div>
                  <div className="text-TextTitle cursor-pointer hover:underline duration-300">
                    {" "}
                    2.2k shares
                  </div>
                </div>
              </div>
              <Divider className="border-[0.5] border-slate-300 my-4" />
              {/*------ like botton ------ */}
              <div className="flex justify-around items-center mx-3">
                <div className="flex justify-center  items-center w-full hover:bg-BgIcon gap-2 cursor-pointer p-3 rounded-xl duration-300">
                  <img src={like} alt="camer" />
                  <div className="text-TextTitle font-semibold">Like</div>
                </div>
                <div className="flex justify-center  items-center w-full hover:bg-BgIcon gap-2 cursor-pointer p-3 rounded-xl duration-300">
                  <img src={commment} alt="camer" />
                  <div className="text-TextTitle font-semibold">
                    Live comment
                  </div>
                </div>
                <div className="flex justify-center  items-center w-full hover:bg-BgIcon gap-2 cursor-pointer p-3 rounded-xl duration-300">
                  <img src={share} alt="camer" />
                  <div className="text-TextTitle font-semibold">Live Share</div>
                </div>
                <img src={profile} alt="profile" className="w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* ==================Right Side======================== */}
        <div className="z-20 hidden md:block w-[300px]">
          <div className="group">
            <div className="flex justify-between items-center mb-2">
              <div className="text-TextTitle font-semibold ">
                Your Pages and profiles
              </div>
              <div className="p-3 rounded-lg text-transparent group-hover:text-Link hover:bg-BgIcon cursor-pointer">
                Edit
              </div>
            </div>
            <div className="flex flex-col justify-start items-start  ">
              <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
                <img src={profile} alt="" />
                <div className="font-bold">Switch to Page</div>
              </div>
              <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
                <img src={announce} alt="" />
                <div className="font-bold">Create promotion</div>
              </div>
              <div className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
                <img src={create} alt="" />
                <div className="font-bold">TITB Group</div>
              </div>
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-1" />
          <div className="group">
            <div className="flex justify-between items-center mb-2">
              <div className="text-TextTitle font-semibold">Contact </div>
              <div className="flex justify-center items-center gap-4">
                <Tooltip
                  title="Search by name or group"
                  arrow={false}
                  placement="bottomRight"
                >
                  <div className=" p-[7px] rounded-full cursor-pointer hover:bg-BgIcon duration-200 ">
                    <img src={search} alt="search" />
                  </div>
                </Tooltip>
                <Tooltip title="Options" arrow={false} placement="bottom">
                  <div className=" p-[7px] rounded-full cursor-pointer hover:bg-BgIcon duration-200 ">
                    <img src={dots} alt="option" />
                  </div>
                </Tooltip>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start  ">
              {contacts.map((infoItem) => (
                <div
                  key={infoItem.id}
                  className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer"
                >
                  <div className="relative">
                    <img src={infoItem.logo} alt="" />
                    <div className=" absolute bottom-1 right-0 border bg-green-500 w-[8px] h-[8px] rounded-full"></div>
                  </div>

                  <div className="font-bold">{infoItem.name}</div>
                </div>
              ))}
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-1" />
          <div className="group">
            <div className="text-TextTitle font-semibold">Conversations </div>

            <div className="flex flex-col justify-start items-start  ">
              {conversation
                .slice(0, seeall ? info.length : 5)
                .map((infoItem) => (
                  <div
                    key={infoItem.id}
                    className="w-[318px] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer"
                  >
                    <div className="relative">
                      <img src={infoItem.logo} alt="" />
                      <div className=" absolute bottom-0 right-0 bg-green-500 w-[8px] h-[8px] rounded-full"></div>
                    </div>
                    <div className="font-bold">{infoItem.name}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
