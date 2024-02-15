import { ArrowRight, ChevronDown, MailIcon, Menu, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { certificates } from "@/utils/constants";

export default function About() {
  return (
    <main className="text-cyan-blue">
      <section>
        <div className="relative !h-[80vh]">
          <div className="bg-[#000]/40 absolute inset-0 z-[1]" />
          <img src="/about-hero-bg.jpeg" className="absolute h-[80vh] w-full object-cover filter grayscale contrast-[1.2]" />
          <div className="relative z-[2] h-full w-full flex flex-col">
            <div className="w-full">
              <Navbar isDark={true} />
            </div>
            <div className="flex-1 h-full flex justify-center items-center">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-white text-center">About Us</h1>
                <p className=" text-white text-center max-w-3xl leading-relaxed">
                  Discover our story, mission, and commitment to unlocking talent and driving excellence in organizations worldwide.
                </p>
              </div>
            </div>
            <div className="bg-white h-[80px] w-[80px] grid place-content-center rounded-full mx-auto translate-y-10">
              <Image src="/svgs/long-arrow-down.svg" alt="arrow" width={20} height={30} />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1620px] mx-auto my-24 px-4 sm:px-10 ">
        <div className="flex flex-col gap-y-10">
          <div className="w-full text-[#505050] space-y-6 leading-[1.7]">
            <p className="">
              With a passion for lifelong learning and a commitment to excellence, we envision being the go-to partner for enterprise and government
              organizations seeking high-quality, impactful solutions for continued development.
            </p>
            <p className="">
              Our vision is to make a lasting impact and contribute to a world where talent at all levels is nutured, continuous learning is embraced and
              excellence is achieved. Our business mission is to be the trusted partner and catalyst for transformational success for organizations worldwide.
              We strive to provide innovative and customized solutions that empower businesses to overcome challenges, seize opportunities, and achieve
              sustainable growth.
            </p>
            <p className="">
              Together, let's embark on a journey of growth and development, transforming individuals into empowered professionals and organizations into
              thriving entities.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
