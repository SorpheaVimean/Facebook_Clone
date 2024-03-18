import { Card } from "antd";
// import cross from "../../assets/icons/radix-icons_cross-2.svg";
import cross from "../../assets/icons/radix-icons_cross-2.svg";
import search from "../../assets/icons/ion_search-outline.svg";

import { IoSettingsSharp } from "react-icons/io5";

const MarketPlacePage = () => {
  const { Meta } = Card;

  const shopitems = [
    {
      id: 1,
      price: "$4,500",
      description:
        "ដីលក់​ ផ្ទះ ជួល នៅភ្នំពេញ house warehouse for Rent in Phnom Penh",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      price: "$350",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, cupiditate ea! Dolore impedit, itaque hic rerum consequuntur voluptate amet est.",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 4,
      price: "R45000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolore? Molestias eaque aspernatur repellendus delectus a id alias magni rem iste ad vel voluptatum tenetur, doloribus dolor perspiciatis ea quos.",
      image: "https://picsum.photos/200/300?grayscale",
    },

    {
      id: 5,
      price: "R45000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, saepe.",
      image: "https://source.unsplash.com/random/900×800/?walk",
    },
    {
      id: 6,
      price: "R45000",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolorum quibusdam voluptates recusandae, accusantium deserunt quam molestiae, dicta, delectus dignissimos odit. Id ea molestiae amet officia iste accusantium fuga tenetur.",
      image: "https://source.unsplash.com/random/900×800/?fire",
    },
    {
      id: 7,
      price: "R45000",
      description: "lorem595 consectetur adipisicing elit",
      image: "https://source.unsplash.com/random/900×800/?phone",
    },
    {
      id: 8,
      price: "R45000",
      description: "Lorem ipsum dolor sit amet.",
      image: "https://source.unsplash.com/random/?thing",
    },
    {
      id: 9,
      price: "R45000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellat alias.",
      image: "https://source.unsplash.com/random/?fruit",
    },
    {
      id: 6,
      price: "R45000",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolorum quibusdam voluptates recusandae, accusantium deserunt quam molestiae, dicta, delectus dignissimos odit. Id ea molestiae amet officia iste accusantium fuga tenetur.",
      image: "https://source.unsplash.com/random/900×800/?fire",
    },
    {
      id: 7,
      price: "R45000",
      description: "lorem595 consectetur adipisicing elit",
      image: "https://source.unsplash.com/random/900×800/?phone",
    },
    {
      id: 8,
      price: "R45000",
      description: "Lorem ipsum dolor sit amet.",
      image: "https://source.unsplash.com/random/?thing",
    },
    {
      id: 9,
      price: "R45000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellat alias.",
      image: "https://source.unsplash.com/random/?fruit",
    },
  ];
  return (
    <div>
      <div className="flex items-start ">
        <div className="hidden md:block w-[400px] h-[886px] bg-black">
          <div className=" fixed bg-white w-[360px] h-[886px] px-4 flex flex-col justify-start shadow-xl  space-y-4">
            {/* --------------head------------- */}
            <div className="flex justify-between items-center py-2 ">
              <div className="text-[24px] font-semibold">Market Place</div>

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
        <div className="w-full mx-5 mt-5 ml-0 md:ml-[200px] flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {shopitems.map((item, index) => (
              <Card
                key={index}
                hoverable
                style={{
                  width: 250,
                }}
                cover={
                  <div style={{ height: 200, overflow: "hidden" }}>
                    <img
                      alt="example"
                      src={item.image}
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  </div>
                }
              >
                <div className="line-clamp-3">{item.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlacePage;
