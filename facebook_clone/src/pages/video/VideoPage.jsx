// import cross from "../../assets/icons/radix-icons_cross-2.svg";
import cross from "../../assets/icons/radix-icons_cross-2.svg";
import search from "../../assets/icons/ion_search-outline.svg";
import like from "../../assets/icons/bxs_like.svg";
import love from "../../assets/icons/mdi_heart.svg";
import globe from "../../assets/icons/mdi_globe.svg";
import dots from "../../assets/icons/tabler_dots.svg";
import likes from "../../assets/icons/bxs_like.svg";
import comment from "../../assets/icons/iconamoon_comment-light.svg";
import share from "../../assets/icons/uil_share.svg";

import ac from "../../assets/postimage/Ellipse 6.png";
import postac from "../../assets/postimage/image 1.png";
import profile from "../../assets/iconLeftSide/Frame 9.png";

import { IoSettingsSharp } from "react-icons/io5";
import { Avatar, Divider } from "antd";

const VideoPage = () => {
  return (
    <div>
      <div className="flex items-start ">
        <div className="hidden md:block w-[650px] h-[886px] ">
          <div className=" fixed bg-white h-full w-[360px] px-4 flex flex-col justify-start shadow-xl  space-y-4">
            {/* --------------head------------- */}
            <div className="flex justify-between items-center py-2 ">
              <div className="text-[24px] font-semibold">Video</div>

              <div className=" p-[7px] rounded-full cursor-pointer bg-BgIcon hover:bg-BgHover duration-200 ">
                <IoSettingsSharp className="text-2xl" />
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

            <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <IoSettingsSharp className="text-2xl" />
                </div>
                <div className="font-medium">Settings & privacy</div>
              </div>
            </div>
            <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <IoSettingsSharp className="text-2xl" />
                </div>
                <div className="font-medium">Settings & privacy</div>
              </div>
            </div>
            <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <IoSettingsSharp className="text-2xl" />
                </div>
                <div className="font-medium">Settings & privacy</div>
              </div>
            </div>
            <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <IoSettingsSharp className="text-2xl" />
                </div>
                <div className="font-medium">Settings & privacy</div>
              </div>
            </div>
            <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <IoSettingsSharp className="text-2xl" />
                </div>
                <div className="font-medium">Settings & privacy</div>
              </div>
            </div>
            <div className="flex justify-between items-center  p-2 rounded-xl cursor-pointer hover:bg-BgIcon">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-BgHover p-2 rounded-full cursor-pointer  duration-200">
                  <IoSettingsSharp className="text-2xl" />
                </div>
                <div className="font-medium">Settings & privacy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-5 flex-col flex justify-center items-center">
          <div className=" mt-5 max-w-[680px]">
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
                Shuumatsu no Harem eps 3 sub indo Shuumatsu no Harem subindo…
                See more
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
                    <img src={comment} alt="camer" />
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
          <div className=" mt-5 max-w-[680px]">
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
                Shuumatsu no Harem eps 3 sub indo Shuumatsu no Harem subindo…
                See more
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
                    <img src={comment} alt="camer" />
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
      </div>
    </div>
  );
};

export default VideoPage;
