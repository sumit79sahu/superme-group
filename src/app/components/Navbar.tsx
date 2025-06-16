"use client";
import Image from "next/image";
import { Button, Flex } from "antd";
import { RiLinkedinFill } from "react-icons/ri";
import { BsTranslate } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import logo from "../assets/Group.png";
import { RiMenu3Line } from "react-icons/ri";
import NavbarDrawer from "./NavbarDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <nav
        className={`w-full px-6 mb-10 md:!px-[50px] lg:!px-[135px] py-4 flex justify-between items-center bg-white fixed right-0 left-0 z-[9998] transition-all duration-400 ${
          showNavbar ? "top-0" : "-top-24"
        }`}
      >
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="Supreme Group"
            className="h-[35px] w-auto"
            // priority
          />
        </div>

        <Flex align="center" gap={10} className="!hidden md:!flex">
          <Button className="!bg-[#5CD6FF] !py-[20px] !px-[25px] !rounded-full !border !border-[#00BFFF] !font-medium text-[14px]">
            Contact Us
          </Button>
          <Button
          aria-label="LinkedIn"
            icon={<RiLinkedinFill size={20} />}
            className="!py-[20px] !mt-1 !border-none !shadow-none bg-transparent"
          />
          <Button
          aria-label="ENG"
            icon={<BsTranslate size={20} />}
            className="!py-[20px] !mt-[3px] !border-none !shadow-none bg-transparent text-black !font-semibold text-[12px]"
          >
            ENG
          </Button>
        </Flex>

        <div className="md:hidden">
          <Button
aria-label="Mobile Menu"
            type="text"
            icon={ <RiMenu3Line size={22} />}
            onClick={() => setOpen(!open)}
          />
        </div>
      </nav>
      <NavbarDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
