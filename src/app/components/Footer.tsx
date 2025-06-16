"use client";
import React from "react";
import { Flex } from "antd";
import Image from "next/image";
import logo from "@/app/assets/Group.png";
import mask from "@/app/assets/bg.png";

const footerItems = {
  application: [
    { name: "Apparel", path: "/" },
    { name: "Automotive", path: "/" },
    { name: "Filtration", path: "/" },
    { name: "Customised Solutions", path: "/" },
  ],
  company: [
    { name: "Innovation", path: "/" },
    { name: "Global Competency", path: "/" },
    { name: "About Us", path: "/" },
    { name: "Contact Us", path: "/" },
  ],
  more: [
    { name: "Careers", path: "/" },
    { name: "Privacy Policy", path: "/" },
    { name: "Terms and Conditions", path: "/" },
  ],
  follow: [
    { name: "Twitter", path: "/" },
    { name: "LinkedIn", path: "/" },
    { name: "Instagram", path: "/" },
    { name: "Medium", path: "/" },
  ],
};

const Footer = () => {
  return (
    <footer
      className="relative bg-white px-6 py-14 md:py-30 flex justify-center"
      style={{
        backgroundImage: `url(${mask.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "300px auto", // Adjust size as needed
      }}
    >
      <div className=" flex flex-col gap-10">
        {/* Logo */}
        <div>
          <Image
            src={logo}
            alt="Supreme Group"
            className="h-[63px] w-auto"
            priority
          />
        </div>

        {/* Link Sections */}
        <Flex
          wrap="wrap"
          justify="space-between"
          className="gap-10 lg:gap-28"
        >
          {Object.entries(footerItems).map(([key, links]) => (
            <ul key={key} className="space-y-3 min-w-[142px] ">
              <li className="font-bold uppercase text-[16px]">
                {key === "application"
                  ? "Applications"
                  : key === "company"
                  ? "Company"
                  : key === "more"
                  ? "More"
                  : "Follow Us"}
              </li>
              <Flex vertical className="gap-0">
                {links.map(({ name, path }) => (
                  <li key={name}>
                    <a
                      href={path}
                      className="hover:!underline !font-medium !text-[14px] !leading-[30px] !text-[rgba(0,0,0,0.7)]"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </Flex>
            </ul>
          ))}
        </Flex>

        {/* Footer Bottom */}
        <Flex
          wrap="wrap"
          justify="space-between"
          align="center"
          className="!text-[rgba(0,0,0,0.7)] text-sm  pt-6 mt-6 gap-y-2"
        >
          <span>©2024. All Rights Reserved.</span>
          <span>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</span>
        </Flex>
      </div>
    </footer>
  );
};

export default Footer;
