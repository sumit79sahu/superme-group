import { Button, Drawer, Flex } from "antd";

import { BsTranslate } from "react-icons/bs";
import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Group.png";
import { RiCloseFill, RiLinkedinFill } from "react-icons/ri";
const NavbarDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer
      zIndex={9999}
      closable={false}
      // onClose={onClose}
      open={open}
    >
      <header className="border border-b border-gray-200 flex items-center justify-between px-[22px] py-[15.5px]">
        <div className="">
          <Image
            src={logo}
            alt="Supreme Group"
            className="h-[35px] w-auto"
            priority
          />
        </div>
        <Button
          type="text"
          icon={<RiCloseFill size={22} />}
          onClick={onClose}
        />
      </header>
      <Flex className="!p-[24px]" align="center" gap={10} vertical>
        <Button className="!bg-[#5CD6FF] w-full !py-[20px] !px-[25px] !rounded-full !border !border-[#00BFFF] !font-medium text-[14px]">
          Contact Us
        </Button>
        <Button
          icon={<RiLinkedinFill size={20} />}
          className="!bg-[#5CD6FF] w-full !py-[20px] !px-[25px] !rounded-full !border !border-[#00BFFF] !font-medium text-[14px]"
        >
          LinkedIn
        </Button>
        <Button
          icon={<BsTranslate size={20} />}
          className="!bg-[#5CD6FF] w-full !py-[20px] !px-[25px] !rounded-full !border !border-[#00BFFF] !font-medium text-[14px]"
        >
          ENG
        </Button>
      </Flex>
    </Drawer>
  );
};

export default NavbarDrawer;
