import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="py-6">
        <div className="px-6">
          <h1 className="text-2xl font-medium">Explore Now</h1>
          <p className="text-base text-[#82868E] font-light mt-[2px]">
            Mencari kosan yang cozy
          </p>
        </div>
        <div className="pl-6 pt-7">
          <h2 className="text-base">Popular Cities</h2>
          <div className="flex mt-4 gap-5 overflow-x-auto">
            <div className="flex-shrink-0 bg-[#F6F7F8] w-[120px] h-[150px] rounded-2xl flex flex-col items-center gap-3">
              <img
                src="/img/popular-city-1.png"
                alt=""
                className="rounded-t-2xl object-cover w-[120px] h-[102px]"
              />
              <span className="text-base font-medium">Jakarta</span>
            </div>
            <div className="flex-shrink-0 bg-[#F6F7F8] w-[120px] h-[150px] rounded-2xl flex flex-col items-center gap-3">
              <img
                src="/img/popular-city-2.png"
                alt=""
                className="rounded-t-2xl object-cover w-[120px] h-[102px]"
              />
              <span className="text-base font-medium">Bandung</span>
            </div>
            <div className="flex-shrink-0 bg-[#F6F7F8] w-[120px] h-[150px] rounded-2xl flex flex-col items-center gap-3">
              <img
                src="/img/popular-city-3.png"
                alt=""
                className="rounded-t-2xl object-cover w-[120px] h-[102px]"
              />
              <span className="text-base font-medium">Surabaya</span>
            </div>
          </div>
        </div>
        <div className="mt-7 pl-6 pt-6">
          <h2 className="text-base">Recommended Space</h2>
          <div className="flex flex-col gap-7 mt-4">
            <div className="flex items-center gap-5 w-[329px] h-[110px]">
              <img
                src="/img/recommended-1.png"
                alt=""
                className="w-[130px] h-[110px] object-cover"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-medium">Kuretakeso Hott</h2>
                <span className="text-[#7A7E86] font-light mt-[2px]">
                  <span className="text-[#5843BE] font-medium">$52</span> /
                  month
                </span>
                <span className="text-sm text-[#7A7E86] font-light mt-4">
                  Bandung, Germany
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 w-[329px] h-[110px]">
              <img
                src="/img/recommended-2.png"
                alt=""
                className="w-[130px] h-[110px] object-cover"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-medium">Roemah Nenek</h2>
                <span className="text-[#7A7E86] font-light mt-[2px]">
                  <span className="text-[#5843BE] font-medium">$11</span> /
                  month
                </span>
                <span className="text-sm text-[#7A7E86] font-light mt-4">
                  Seattle, Bogor
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 w-[329px] h-[110px]">
              <img
                src="/img/recommended-3.png"
                alt=""
                className="w-[130px] h-[110px] object-cover"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-medium">Darrling How</h2>
                <span className="text-[#7A7E86] font-light mt-[2px]">
                  <span className="text-[#5843BE] font-medium">$20</span> /
                  month
                </span>
                <span className="text-sm text-[#7A7E86] font-light mt-4">
                  Jakarta, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 pl-6 pt-7">
          <h2 className="textbase font-medium">Tips & Guidance</h2>
          <div className="flex flex-col gap-5 mt-4">
            <div className="flex justify-between items-center w-[321px] h-[80px]">
              <div className="flex items-center gap-4">
                <img
                  src="/img/guidance-1.png"
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg">City Guidelines</h2>
                  <span className="text-sm text-[#7A7E86]">Updated 20 Apr</span>
                </div>
              </div>
              <img
                src="/img/icon_right_outline.png"
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div className="flex justify-between items-center w-[321px] h-[80px]">
              <div className="flex items-center gap-4">
                <img
                  src="/img/guidance-2.png"
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg">Jakarta Fairship</h2>
                  <span className="text-sm text-[#7A7E86]">Updated 11 Dec</span>
                </div>
              </div>
              <img
                src="/img/icon_right_outline.png"
                alt=""
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
        <div className="p-6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
