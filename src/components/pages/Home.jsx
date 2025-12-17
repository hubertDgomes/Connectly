import { BiSolidMessageDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHashtag } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import Container from "../Container";
import Images from "../Images";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <div className=" w-full flex justify-between ">
            <div className="w-[25%]">
              <div className="w-full py-3 px-2 rounded-full hover:border-gray-300 hover:border hover:cursor-pointer hover:bg-[#eae8e0] hover:shadow-md ">
                <div className="w-full flex items-center">
                  <Images
                    src={"/src/assets/person.jpg"}
                    className={"w-11 h-11 rounded-full"}
                  />
                  <div className="ml-3 font-Arimo">
                    <h3 className="text-[16px] font-bold">Alex Designer</h3>
                    <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                      @alex_UI
                    </h5>
                  </div>
                  <HiDotsHorizontal className=" ml-[90px]" />
                </div>
              </div>
              <div className="">
                <button className="w-full mt-5 py-3 px-4 rounded-[10px] hover:border-gray-200 hover:cursor-pointer hover:bg-[#e0eae9] flex items-center gap-3 font-Arimo font-bold text-[18px] hover:text-sky-600">
                  <FiHome />
                  <span>Home</span>
                </button>
                <button className="w-full py-3 px-4 rounded-[10px] hover:border-gray-200 hover:cursor-pointer hover:bg-[#e0eae9] flex items-center gap-3 font-Arimo font-bold text-[18px] hover:text-sky-600">
                  <FaHashtag />
                  <span>Explore</span>
                </button>
                <button className="w-full py-3 px-4 rounded-[10px] hover:border-gray-200 hover:cursor-pointer hover:bg-[#e0eae9] flex items-center gap-3 font-Arimo font-bold text-[18px] hover:text-sky-600">
                  <MdOutlineNotifications />
                  <span>Notifications</span>
                </button>
                <button className="w-full py-3 px-4 rounded-[10px] hover:border-gray-200 hover:cursor-pointer hover:bg-[#e0eae9] flex items-center gap-3 font-Arimo font-bold text-[18px] hover:text-sky-600">
                  <BiSolidMessageDetail />
                  <span>Messages</span>
                </button>
                <button className="w-full py-3 px-4 rounded-[10px] hover:border-gray-200 hover:cursor-pointer hover:bg-[#e0eae9] flex items-center gap-3 font-Arimo font-bold text-[18px] hover:text-sky-600">
                  <PiBookmarkSimpleBold />
                  <span>Bookmarks</span>
                </button>
                <button className="w-full py-3 px-4 rounded-[10px] hover:border-gray-200 hover:cursor-pointer hover:bg-[#e0eae9] flex items-center gap-3 font-Arimo font-bold text-[18px] hover:text-sky-600">
                  <CgProfile />
                  <span>Profile</span>
                </button>
                <button className="w-full py-3 px-4 rounded-[10px] hover:border-gray-200 hover:cursor-pointer hover:bg-[#e0eae9] flex items-center gap-3 font-Arimo font-bold text-[18px] hover:text-sky-600">
                  <IoSettingsOutline />
                  <span>Settings</span>
                </button>
                <button className="w-full mt-5 bg-sky-600 hover:bg-sky-500 text-white font-Arimo font-bold text-[18px] py-3 px-4 rounded-full hover:cursor-pointer">
                  <span>Create Post</span>
                </button>
              </div>
            </div>

            {/* ############ */}
            <div className="w-[50%]">b</div>
            {/* ############ */}

            <div className="w-[25%] pb-20">
              <div className="w-full">
                <h3 className="text-[17px] font-Arimo font-extrabold">
                  Trends for you
                </h3>
                <div className="w-full flex  mt-5">
                  <div className=" font-Arimo leading-6">
                    <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                      Technology - Trending
                    </h5>
                    <h3 className="text-[15px] font-bold hover:text-[#00A6F4]">#ReactJS</h3>
                    <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                      24.5k Posts
                    </h5>
                  </div>
                  <HiDotsHorizontal className=" ml-[160px]" />
                </div>
                <div className="w-full flex  mt-5">
                  <div className=" font-Arimo leading-6">
                    <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                      Design - Trending
                    </h5>
                    <h3 className="text-[15px] font-bold hover:text-[#00A6F4]">Figma Config</h3>
                    <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                      18.2k Posts
                    </h5>
                  </div>
                  <HiDotsHorizontal className=" ml-[182px]" />
                </div>
                <div className="w-full flex  mt-5">
                  <div className=" font-Arimo leading-6">
                    <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                      Business - Trending
                    </h5>
                    <h3 className="text-[15px] font-bold hover:text-[#00A6F4]">Startup Life</h3>
                    <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                      12k Posts
                    </h5>
                  </div>
                  <HiDotsHorizontal className=" ml-[170px]" />
                </div>
                <div className="w-full flex  mt-5">
                  <div className=" font-Arimo leading-6">
                    <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                      Sports - Trending
                    </h5>
                    <h3 className="text-[15px] font-bold hover:text-[#00A6F4]">Championship</h3>
                    <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                      56k Posts
                    </h5>
                  </div>
                  <HiDotsHorizontal className=" ml-[174px]" />
                </div>
                <h6 className="hover:text-[#00A6F4] font-Arimo text-[13px] mt-5 ">
                  Show more
                </h6>
              </div>
              <h3 className="text-[17px] font-Arimo font-extrabold mt-5">
                Who to follow
              </h3>
              <div className="w-full flex items-center mt-6">
                <Images
                  src={"/src/assets/person.jpg"}
                  className={"w-11 h-11 rounded-full"}
                />
                <div className="ml-3 font-Arimo">
                  <h3 className="text-[14px] font-bold hover:text-[#00A6F4]">James Wilson</h3>
                  <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                    @j_wilson
                  </h5>
                </div>
                <button className="ml-[70px] bg-black hover:bg-sky-500 text-white font-Arimo font-bold text-[12px] py-1.5 px-3.5 rounded-full hover:cursor-pointer">
                  Follow
                </button>
              </div>
              <div className="w-full flex items-center mt-6">
                <Images
                  src={"/src/assets/person.jpg"}
                  className={"w-11 h-11 rounded-full"}
                />
                <div className="ml-3 font-Arimo">
                  <h3 className="text-[14px] font-bold hover:text-[#00A6F4]">Lisa Chen</h3>
                  <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                    @lisa_dev
                  </h5>
                </div>
                <button className="ml-[95px] bg-black hover:bg-sky-500 text-white font-Arimo font-bold text-[12px] py-1.5 px-3.5 rounded-full hover:cursor-pointer">
                  Follow
                </button>
              </div>
              <div className="w-full flex items-center mt-6">
                <Images
                  src={"/src/assets/person.jpg"}
                  className={"w-11 h-11 rounded-full"}
                />
                <div className="ml-3 font-Arimo">
                  <h3 className="text-[14px] font-bold hover:text-[#00A6F4]">Tech Daily</h3>
                  <h5 className="text-[12px] font-medium text-[#a4a5a6] ">
                    @tachdaily
                  </h5>
                </div>
                <button className="ml-[95px] bg-black hover:bg-sky-500 text-white font-Arimo font-bold text-[12px] py-1.5 px-3.5 rounded-full hover:cursor-pointer">
                  Follow
                </button>
              </div>
                <h6 className="hover:text-[#00A6F4] font-Arimo text-[13px] mt-5 ">
                  Show more
                </h6>
                <p className="mt-6 text-[12px] pr-7.5 font-Arimo text-[#a4a5a6] ">Terms of Service Privacy Policy Cookie Policy Accessibility Ads info @2024 MySocial, Inc. </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
