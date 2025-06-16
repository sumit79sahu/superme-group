"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section data-testid="stats-section" className="relative lg:h-[100svh] min-h-[450px] oveflow-hidden bg-[rgba(0,106,188,1)]">
      <div className="absolute inset-0">
        <video
          data-testid="hero-video"

          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center"
        >
          <source src="/automotive.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>

      <div className="absolute inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:5 lg:pt-10 gap-2 text-center w-11/12 mx-auto">
        <p className="font-normal pt-2 pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem] text-[rgb(255,255,255,1)] block">
          Performance in motion
        </p>
        <h2 className=" text-[rgb(255,255,255,1)] font-extralight leading-tight pb-2 text-[30px] md:text-[40px] lg:text-[48px]">
          <span className="font-semibold  ">
            Soft trims and <span className="text-[#5CD6FF]">NVH solutions</span>
          </span>
          <br className="hidden md:block " /> for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
