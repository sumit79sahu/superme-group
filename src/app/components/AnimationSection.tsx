"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  easeIn, easeOut } from "framer-motion";
import complete from "@/app/assets/complete.png";
import cabin from "@/app/assets/cabin.png";
import exterior from "@/app/assets/exterior.png";
import front from "@/app/assets/front.png";
import trunk from "@/app/assets/trunk.png";
import Image from "next/image";

const slide1 = [
  {
    video: "/passenger.mp4",
    image: complete,
    name: "Complete Body",
  },
  {
    video: "/front.mp4",
    image: front,
    name: "Front",
  },
  {
    video: "/cabin.mp4",
    image: cabin,
    name: "Cabin",
  },
  {
    video: "/trunk.mp4",
    image: trunk,
    name: "Trunk",
  },
  {
    video: "/exterior.mp4",
    image: exterior,
    name: "Exterior",
  },
];

const slide2 = [
  {
    video: "/commercial.mp4",
    image: complete,
    name: "Complete Body",
  },
  {
    video: "/commercialcabin.mp4",
    image: front,
    name: "Cabin",
  },
  {
    video: "/commercialengine.mp4",
    image: cabin,
    name: "Engine",
  },
];
const vehicleData = [
  {
    title: "Passenger vehicles",
    description: "Revving up innovation </br> from interior to exterior.",
  },
  {
    title: "Commercial vehicles",
    description: "Advancing engineering </br> for heavy-duty vehicles.",
  },
];

const AnimationSection = () => {
  const [slide1Video, setSlide1Video] = useState(slide1[0].video);
  const [slide2Video, setSlide2Video] = useState(slide2[0].video);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.4, ease: easeIn },
    },
  };

  const itemRefs = useRef<HTMLButtonElement[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [segmentTop, setSegmentTop] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  useEffect(() => {
    const ref = itemRefs.current[activeIndex];
    if (ref) {
      setSegmentTop(ref.offsetTop);
    }
  }, [activeIndex]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsetTop = container.offsetTop;
      const height = container.offsetHeight;

      const scrollProgress = (scrollY - offsetTop) / height;

      if (scrollProgress > 0.4 && activeIndex === 0) {
        setSlide1Video(slide1?.[0]?.video)
        setActiveIndex(1); // Show Slide 2
      } else if (scrollProgress < 0.4 && activeIndex === 1) {
         setSlide2Video(slide2?.[0]?.video)
        setActiveIndex(0); // Show Slide 1
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section
      className="relative w-full bg-black text-white    snap-y snap-mandatory"
      ref={scrollRef}
    >
      <div className="h-[100svh] flex items-center justify-center snap-start px-5 md:!px-10 lg:!px-20 xl:!px-30 ">
        <motion.h2
          className="sticky top-24 z-30 text-[rgb(255,255,255,1)] !text-center font-extralight leading-tight text-[30px] md:text-[40px] lg:text-[48px]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Evolving the drive with <span className="font-bold">360-degree</span>
          <br className="hidden md:block" /> comprehensive solutions
        </motion.h2>
      </div>

      <motion.div
        className=" flex px-5 md:!px-10 lg:!px-20 xl:!px-30 justify-center snap-start flex-col"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-20 md:gap-0 md:flex-row items-start justify-between  !py-20 md:!py-30 lg:!py-20 ">
          <div className="relative flex j md:flex-col  w-full md:max-w-md md:pl-6 ">
            <div className="absolute left-0 top-0 !hidden md:!block  !h-full w-[2px] bg-[#333]" />

            {isMobile ? (
              <></>
            ) : (
              <motion.div
                layout
                layoutId="activeLine"
                className="absolute left-0 w-[2px] bg-white"
                initial={false}
                animate={{
                  top: segmentTop,
                  height: 165,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Buttons */}
            {vehicleData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el!;
                  }}
                  onClick={() => {
                    setActiveIndex(index)
                    if(index==0)
                         setSlide1Video(slide1?.[0]?.video)
                    else
                        setSlide2Video(slide2?.[0]?.video)
                }}
                  className="md:py-8 w-full md:w-auto"
                >
                  <div className=" text-center md:text-left md:pl-6">
                    <h3
                      className={`text-[16px] md:text-[22px] lg:text-[28px] font-semibold transition-colors ${
                        isActive ? "text-white" : "text-[#333333]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-1 text-[10px] md:text-[16px] lg:text-[18px] transition-colors ${
                        isActive ? "text-white" : "text-[#333333]"
                      }`}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            {activeIndex === 0 ? (
              <motion.div
                key="slide1"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slideVariants}
                className=""
              >
                {/* <div className=""> */}
                <AnimatePresence mode="wait">
                  <motion.video
                    key={slide1Video}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-[800px] h-full object-contain object-center"
                  >
                    <source src={slide1Video} type="video/mp4" />
                  </motion.video>
                </AnimatePresence>
                {/* </div> */}
                <div className="flex justify-center gap-5 lg:gap-10 py-5">
                  {slide1.map(({ video, image, name }) => (
                    <button
                      key={video}
                      onClick={() => setSlide1Video(video)}
                      className={`cursor-pointer flex flex-col items-center ${
                        video === slide1Video ? "text-white" : "text-[#333]"
                      }  hover:text-white`}
                    >
                      <Image
                        src={image}
                        alt="complete"
                        className="w-[40px] h-[40px]  md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px]"
                      />
                      <span className="font-medium text-[12px] md:text-[14px] lg:text-[16px]">
                        {name}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="slide2"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slideVariants}
                className=""
              >
                {/* h-[10\50px] xl:h-[300px] */}
                <AnimatePresence mode="wait">
                  <motion.video
                    key={slide2Video}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-[800px] h-[10\50px] xl:h-[300px] object-contain object-center"
                  >
                    <source src={slide2Video} type="video/mp4" />
                  </motion.video>
                </AnimatePresence>
                <div className="flex justify-center gap-10 py-5">
                  {slide2.map(({ video, image, name }) => (
                    <button
                      key={video}
                      onClick={() => setSlide2Video(video)}
                      className={`cursor-pointer flex flex-col items-center ${
                        video === slide2Video ? "text-white" : "text-[#333]"
                      } hover:text-white `}
                    >
                      <Image
                        src={image}
                        alt="complete"
                        className="w-[40px] h-[40px]  md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px]"
                      />
                      <span className="font-medium text-[12px] md:text-[14px] lg:text-[16px]">
                        {name}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default AnimationSection;
