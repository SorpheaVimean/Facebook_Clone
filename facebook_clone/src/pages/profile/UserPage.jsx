// import cross from "../../assets/icons/radix-icons_cross-2.svg";
import cross from "../../assets/icons/radix-icons_cross-2.svg";
import search from "../../assets/icons/ion_search-outline.svg";

import { IoSettingsSharp } from "react-icons/io5";

const UserPage = () => {
  return (
    <div>
      <div className="bg-white w-[360px] h-[886px] px-4 flex flex-col justify-start shadow-xl  space-y-4">
        {/* --------------head------------- */}
        <div className="flex justify-between items-center py-2 ">
          <div className="text-[24px] font-semibold">User</div>

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
  );
};

export default UserPage;
