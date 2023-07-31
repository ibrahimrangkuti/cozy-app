import React from "react";

const SplashScreen = () => {
  return (
    <>
      <div className="px-8 py-12">
        <img src="/img/logo.png" alt="" className="w-[50px] h-[50px]" />
        <h1 className="text-2xl font-medium w-[225px] mt-8">
          Find Cozy House to Stay and Happy
        </h1>
        <p className="text-[#82868E] text-base font-light mt-3 w-[276px] mb-10">
          Stop membuang banyak waktu pada tempat yang tidak habitable
        </p>
        <a
          href="/home"
          className="px-12 py-3 bg-[#5843BE] text-white rounded-2xl"
        >
          Explore Now
        </a>
      </div>
      <img src="/img/splash-bottom.png" alt="" />
    </>
  );
};

export default SplashScreen;
