import React from "react";

const Calling = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 mt-[200px]">
      <img
        src="/img/calling.png"
        alt=""
        className="w-[180px] h-[180px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-[6px] items-center">
        <h2 className="text-xl font-medium">Amanda Shayna</h2>
        <span className="text-[#82868E] text-base font-light">
          13 : 30 minutes
        </span>
      </div>
      <div className="bg-[#FF5B5B] p-3 rounded-full">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.34171 7.34171C6.8861 7.79732 6.8861 8.53601 7.34171 8.99162L19.0084 20.6583C19.464 21.1139 20.2027 21.1139 20.6583 20.6583C21.1139 20.2027 21.1139 19.464 20.6583 19.0084L8.99162 7.34171C8.53601 6.8861 7.79732 6.8861 7.34171 7.34171Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.6583 7.34171C21.1139 7.79732 21.1139 8.53601 20.6583 8.99162L8.99162 20.6583C8.53601 21.1139 7.79732 21.1139 7.34171 20.6583C6.8861 20.2027 6.8861 19.464 7.34171 19.0084L19.0084 7.34171C19.464 6.8861 20.2027 6.8861 20.6583 7.34171Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Calling;
