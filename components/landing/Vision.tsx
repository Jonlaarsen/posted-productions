import React from "react";

const Vision = () => {
  return (
    <div className="flex flex-col bg-linear-to-b from-transparent via-50% size-full via-black to-black z-100 items-center text-center justify-center space-y-5 min-h-120">
      <h1 className="text-2xl md:text-5xl font-black italic">
        "Where Vision Meets Storytelling"
      </h1>
      <h2 className="text-lg md:text-3xl font-extralight">
        Production & Services in Seoul and Worldwide
      </h2>
      <a
        className="text-zinc-500 hover:text-zinc-50 pb-10"
        href="mailto:contact@posted-productions.com"
      >
        contact@posted-productions.com
      </a>
      <div className=" w-20 md:w-30">
        <img
          src="https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/7dcfb365-6ff7-417b-9a68-566e5ef07ecc/PngItem_506629.png?format=500w"
          className="object-cover object-center"
          alt="peabody award winner logo"
        />
      </div>
    </div>
  );
};

export default Vision;
