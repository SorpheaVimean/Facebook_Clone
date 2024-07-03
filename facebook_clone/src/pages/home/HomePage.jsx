// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";

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
import likes from "../../assets/icons/bxs_like.svg";
import love from "../../assets/icons/mdi_heart.svg";
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

// Center post
import ac from "../../assets/postimage/Ellipse 6.png";
import postac from "../../assets/postimage/image 1.png";
import decathlon from "../../assets/postimage/Ellipse 8.png";
import blur from "../../assets/postimage/Rectangle 9.png";
import stand from "../../assets/postimage/Rectangle 10.png";
import full from "../../assets/postimage/Rectangle 11.png";
import behind from "../../assets/postimage/Rectangle 12.png";
import metlogo from "../../assets/postimage/Ellipse 6-1.png";
import met1 from "../../assets/postimage/Rectangle 13.png";
import met2 from "../../assets/postimage/Rectangle 14.png";
import met3 from "../../assets/postimage/Rectangle 15.png";
import met4 from "../../assets/postimage/Rectangle 16.png";
import stor1 from "../../assets/postimage/Frame 42.png";
import stor2 from "../../assets/postimage/Frame 43.png";

// Right side
import marvin from "../../assets/profileRightSide/Ellipse 1.png";
import camer from "../../assets/profileRightSide/Ellipse 2-4.png";
import cour from "../../assets/profileRightSide/Ellipse 7.png";
import alber from "../../assets/profileRightSide/Ellipse 5.png";
import ral from "../../assets/profileRightSide/Ellipse 1.png";
import jenny from "../../assets/profileRightSide/Ellipse 6.png";

import { useState } from "react";
import { Avatar, Divider, Tooltip, Modal } from "antd";
import InfoItem from "../../composable/info_prfile";
import ProfileIconActive from "../../composable/ProfileIconActive";
function HomePage() {
  const [showAll, setShowAll] = useState(false);
  const [seeall, setSeeAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
    {
      id: 5,
      name: "Robert Fox",
      logo: marvin,
    },
    {
      id: 6,
      name: "Cody Fisher",
      logo: cour,
    },
    {
      id: 7,
      name: "Darrell Steward",
      logo: alber,
    },
    {
      id: 8,
      name: "Jenny Wilson",
      logo: jenny,
    },
  ];
  const story = [
    {
      id: 1,
      name: "Kristin Watson",
      profile: marvin,
      story: bgswip,
    },
    {
      id: 2,
      name: "Jenny Wilson",
      profile: jenny,
      story: stor1,
    },
    {
      id: 3,
      name: "Savannah Nguyen",
      profile: cour,
      story: stor2,
    },
    {
      id: 4,
      name: "Cody Fisher",
      profile: cour,
      story: stor1,
    },
    {
      id: 5,
      name: "Darrell Steward",
      profile: cour,
      story: bgswip,
    },
    {
      id: 6,
      name: "Jenny Wilson",
      profile: cour,
      story: stor2,
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
        <div className="hidden lg:block max-h-[870px] sticky top-[80px] overflow-y-scroll hidden-scrollbar">
          {/* ----------Infor---------- */}
          <div className="flex flex-col justify-start items-start gap-1 ">
            {info.slice(0, showAll ? info.length : 6).map((infoItem) => (
              <InfoItem
                key={infoItem.id}
                logo={infoItem.logo}
                name={infoItem.name}
              />
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
                <InfoItem
                  key={infoItem.id}
                  logo={infoItem.logo}
                  name={infoItem.name}
                />
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

        {/* ==================middle======================== */}
        <div className=" lg:w-[36%] min-w-[330px] md:w-[642px] overflow-hidden  ">
          <div className=" space-y-4 ">
            <div className="w-full  ">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                slidesPerView={2}
                spaceBetween={5}
                className=" mySwiper2 md:w-[600px] lg:w-[642px] "
                breakpoints={{
                  640: {
                    slidesPerView: 2, // Adjust slidesPerView for smaller screens
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide className="flex flex-col group  ">
                  <div className="w-[120px] md:w-[140px] h-[250px] bg-white hover:bg-BgIcon felx flex-col justify-center items-center group rounded-xl cursor-pointer overflow-hidden">
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
                {story.map((items, index) => (
                  <SwiperSlide key={index} className="flex flex-col group  ">
                    <div className="relative w-[130px] h-[250px] rounded-xl overflow-hidden cursor-pointer group">
                      <div className="bg-black">
                        <img
                          src={items.story}
                          alt=""
                          className="object-cover h-full opacity-80 group-hover:scale-105 group-hover:opacity-65 duration-300"
                        />
                        <div className="absolute top-3 left-3 flex w-12">
                          <div className="border-2 rounded-full border-Link flex justify-center items-center cursor-pointer">
                            <img
                              src={items.profile}
                              alt=""
                              className="object-cover h-full"
                            />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 text-white text-[12px]">
                          {items.name}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev text-TextTitle  ml-5 "></div>
                <div className="swiper-button-next mr-5"></div>
              </Swiper>
            </div>

            {/* ------------------post----------------------- */}
            <div onClick={showModal} className="bg-white  rounded-xl  border">
              <div className="mx-4 ">
                <div className="flex justify-center items-center gap-2 pt-4">
                  <img src={profile} alt="" className="w-[40px]" />
                  <div className="text-TextTitle bg-BgIcon hover:bg-BgHover duration-300 w-full rounded-full pl-4 py-3 hover:bg cursor-pointer">
                    What's on your mind, TITB Group?
                  </div>
                </div>
                <Divider className="border-[0.5] border-slate-300 mt-4 " />
                <div className="flex justify-around items-center gap-2 ">
                  <div className="flex justify-center  items-center w-full hover:bg-BgIcon gap-2 cursor-pointer p-3 my-2 rounded-xl duration-300">
                    <img src={camera} alt="camer" />
                    <div className="text-TextTitle font-semibold">
                      Live video
                    </div>
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
            {/* --------popup post------------ */}
            <Modal
              centered
              footer={false}
              title="Crate post"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>

            {/* ------------------ACELDA-------------------- */}
            <div className="bg-white  rounded-xl  border">
              {/*------ Headed post ------ */}
              <div className="flex justify-between items-center p-3">
                <div className="flex justify-start items-start gap-2">
                  <img src={ac} alt="" />

                  <div className="">
                    <div className="cursor-pointer hover:underline font-medium text-[16px]">
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
              <div className="p-3 ">
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
              <div className="">
                <img src={postac} alt="" className=" w-full" />
              </div>
              <div className=" mx-4">
                {/*------ like section ------ */}
                <div className="flex justify-between items-center my-4">
                  <div className="flex justify-center items-center gap-2">
                    <Avatar.Group size={"small"}>
                      <Avatar className="bg-Link border z-10">
                        <img src={likes} alt="" />
                      </Avatar>
                      <Avatar
                        maxPopoverPlacement="top"
                        className="bg-red-500 border"
                      >
                        <img src={love} alt="" />
                      </Avatar>
                    </Avatar.Group>
                    <div className="text-TextTitle cursor-pointer hover:underline">
                      2.1k
                    </div>
                  </div>
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
                <div className="flex justify-around items-center gap-2 my-1">
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
                    <div className="text-TextTitle font-semibold"> Share</div>
                  </div>
                  <img src={profile} alt="profile" className="w-[24px]" />
                </div>
              </div>
            </div>

            {/* ------------------Decathlon-------------------- */}
            <div className="bg-white  rounded-xl   border">
              {/*------ Headed post ------ */}
              <div className="flex justify-between items-center p-3">
                <div className="flex justify-start items-start gap-2">
                  <img src={decathlon} alt="" />

                  <div className="">
                    <div className="cursor-pointer hover:underline font-medium text-[16px]">
                      Decathlon Cambodia
                    </div>
                    <div className="flex justify-start items-start">
                      <div className="text-sm cursor-pointer hover:underline">
                        3d .
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
              <div className="p-3 ">
                <p>
                  កំពុងតែស្វែងរកស្បែកជើងរត់ដែលមានគុណភាពល្អនិងមានការផ្តល់ជូននៅការធានាម៉ែនទេ?
                  នៅ Decathlon
                  យើងមានជម្រើសស្បែកជើងកីឡាជាច្រើនសម្រាប់បងប្អូនជ្រើសរើស។
                  ជាពិេសេសគឺមានការផ្តល់ជូនការធានាទៅលើកាវ (របក​ឬរបើកកាវ)
                  និងថ្នេរទៀតផងសម្រាប់ស្បែកជើងរត់។
                </p>
                <p>Ref: 8558959 </p>
                <p className="text-Link space-x-2">
                  <span className="hover:underline cursor-pointer duration-300">
                    #decathloncambodia{" "}
                  </span>
                  <span className="hover:underline cursor-pointer duration-300">
                    {" "}
                    #runningshoes{" "}
                  </span>
                  <span className="hover:underline cursor-pointer duration-300">
                    {" "}
                    #warranty{" "}
                  </span>
                </p>
              </div>

              {/*------ image ------ */}
              <div className="grid grid-cols-2 gap-1 ">
                <img src={blur} alt="" className=" w-full row-span-3" />
                <img src={stand} alt="" className=" w-full" />
                <img src={full} alt="" className=" w-full" />
                <img src={behind} alt="" className=" w-full" />
              </div>
              <div className="mx-4">
                {/*------ like section ------ */}
                <div className="flex justify-between items-center my-4">
                  <div className="flex justify-center items-center gap-2">
                    <Avatar.Group size={"small"}>
                      <Avatar className="bg-Link border z-10">
                        <img src={likes} alt="" />
                      </Avatar>
                      <Avatar
                        maxPopoverPlacement="top"
                        className="bg-red-500 border"
                      >
                        <img src={love} alt="" />
                      </Avatar>
                    </Avatar.Group>
                    <div className="text-TextTitle cursor-pointer hover:underline">
                      182
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <div className="text-TextTitle cursor-pointer hover:underline duration-300">
                      27 comments{" "}
                    </div>
                    <div className="text-TextTitle cursor-pointer hover:underline duration-300">
                      {" "}
                      19 shares
                    </div>
                  </div>
                </div>
                <Divider className="border-[0.5] border-slate-300 my-4" />
                {/*------ like botton ------ */}
                <div className="flex justify-around items-center gap-2 my-1">
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
                    <div className="text-TextTitle font-semibold"> Share</div>
                  </div>
                  <img src={profile} alt="profile" className="w-[24px]" />
                </div>
              </div>
            </div>

            {/* ------------------Metfone-------------------- */}
            <div className="bg-white  rounded-xl   border">
              {/*------ Headed post ------ */}
              <div className="flex justify-between items-center p-3">
                <div className="flex justify-start items-start gap-2">
                  <img src={metlogo} alt="" />

                  <div className="">
                    <div className="cursor-pointer hover:underline font-medium text-[16px]">
                      Metfone
                    </div>
                    <div className="flex justify-start items-start">
                      <div className="text-sm cursor-pointer hover:underline">
                        Sponsored .
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
              <div className="p-3 ">
                <p>
                  ថ្ងៃមុនហ្វេនៗបានដឹងពីរបៀបសន្សំសំចៃទិន្នន័យអ៉ីនធឺណិត
                  នៅលើប្រព័ន្ធប្រតិបត្តិ Android ហើយៗ ដូច្នេះថ្ងៃនេះ
                  អេតមីនសូមបង្ហាញពីរបៀបសន្សំសំចៃទិន្នន័យអ៉ីនធឺណិត
                  សម្រាប់កម្មវិធីមួយចំនួននៅលើប្រព័ន្ធប្រតិបត្តិ IOS វិញម្តង!
                  តស់! អនុវត្តន៍ជាមួយអេតមីនទាំងអស់គ្នាណា៎!
                </p>
                <p>Ref: 8558959 </p>
                <p className="text-Link space-x-2">
                  <span className="hover:underline cursor-pointer duration-300">
                    #Metfone
                  </span>
                </p>
              </div>

              {/*------ image ------ */}
              <div className="grid grid-cols-2 gap-1 ">
                <img src={met1} alt="" className=" w-full " />
                <img src={met2} alt="" className=" w-full" />
                <img src={met3} alt="" className=" w-full" />
                <img src={met4} alt="" className=" w-full" />
              </div>
              <div className="mx-4">
                {/*------ like section ------ */}
                <div className="flex justify-between items-center my-4">
                  <div className="flex justify-center items-center gap-2">
                    <Avatar.Group size={"small"}>
                      <Avatar className="bg-Link border z-10">
                        <img src={likes} alt="" />
                      </Avatar>
                      <Avatar
                        maxPopoverPlacement="top"
                        className="bg-red-500 border"
                      >
                        <img src={love} alt="" />
                      </Avatar>
                    </Avatar.Group>
                    <div className="text-TextTitle cursor-pointer hover:underline">
                      3.6k
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <div className="text-TextTitle cursor-pointer hover:underline duration-300">
                      44 comments{" "}
                    </div>
                    <div className="text-TextTitle cursor-pointer hover:underline duration-300">
                      {" "}
                      91 shares
                    </div>
                  </div>
                </div>
                <Divider className="border-[0.5] border-slate-300 my-4" />
                {/*------ like botton ------ */}
                <div className="flex justify-around items-center gap-2 my-1">
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
                    <div className="text-TextTitle font-semibold"> Share</div>
                  </div>
                  <img src={profile} alt="profile" className="w-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================Right Side======================== */}
        <div className="z-20 hidden md:block w-[318px] max-h-[870px] ml-5 sticky top-[80px] overflow-y-scroll hidden-scrollbar">
          <div className="group">
            <div className="flex justify-between items-center mb-2">
              <div className="text-TextTitle font-semibold ">
                Your Pages and profiles
              </div>
              <div className="p-3 rounded-lg text-transparent group-hover:text-Link hover:bg-BgIcon cursor-pointer">
                Edit
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full ">
              <div className=" w-full flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer">
                <img src={profile} alt="" />
                <div className="font-bold">TITB Group</div>
              </div>
              <div className=" w-[95%] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer ml-4">
                <img src={announce} alt="" />
                <div className="font-bold">Switch to Page</div>
              </div>
              <div className=" w-[95%] flex justify-start items-center gap-5 hover:bg-BgIcon duration-300 p-2 rounded-xl cursor-pointer ml-4">
                <img src={create} alt="" />
                <div className="font-bold">Create promotion</div>
              </div>
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-4" />
          <div className="group ">
            <div className="flex justify-between items-center mb-2">
              <div className="text-TextTitle font-semibold">Contacts </div>
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
                <ProfileIconActive
                  key={infoItem.id}
                  logo={infoItem.logo}
                  name={infoItem.name}
                />
              ))}
            </div>
          </div>
          <Divider className="border-[0.5] border-slate-300 my-4" />
          <div className="group mt-4">
            <div className="text-TextTitle font-semibold">Conversations </div>

            <div className="flex flex-col justify-start items-start  ">
              {conversation.map((infoItem) => (
                <ProfileIconActive
                  key={infoItem.id}
                  logo={infoItem.logo}
                  name={infoItem.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
