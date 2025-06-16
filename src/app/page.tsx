"use client";
import AnimationSection from "./components/AnimationSection";
import Footer from "./components/Footer";
import GetInTouchForm from "./components/GetInTouchForm";
import "@ant-design/v5-patch-for-react-19";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { message } from "antd";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AnimationSection />
      <GetInTouchForm />
      <Footer />
    </>
  );
}

message.config({
  top: 0,
});
