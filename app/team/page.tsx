import { teamMembers } from "@/utils/constants";
import { ChevronDown, Menu, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

export default function page() {
  return (
    <main className="text-cyan-blue">
      <section>
        <div className="relative !h-[80vh]">
          <div className="bg-[#000]/40 absolute inset-0 z-[1]" />
          <img src="/about-hero-bg.jpeg" className="absolute h-[80vh] w-full object-cover filter grayscale contrast-[1.2]" />
          <div className="relative z-[2] h-full w-full flex flex-col">
            <nav className="flex w-full items-center justify-between max-w-[1620px] px-4 pt-5 md:pt-10 md:px-10 mx-auto">
              <div>
                <h1 className="text-[#fff] text-3xl">Logo</h1>
              </div>
              <div className="hidden md:flex items-center gap-10">
                <div className="cursor-pointer">
                  <h1 className=" text-[#fff]">About Us</h1>
                </div>
                <div className="flex gap-[10px] items-center cursor-pointer">
                  <h1 className=" text-[#fff]">Enterprise Solution</h1>
                  <ChevronDown className="text-white w-[20px]" />
                </div>
                <div className="flex gap-[10px] items-center cursor-pointer">
                  <h1 className=" text-[#fff]">Training Solution</h1>
                  <ChevronDown className="text-white w-[20px]" />
                </div>
                <div className="cursor-pointer">
                  <h1 className=" text-[#fff]">Enterprise Solution</h1>
                </div>
                <div className="cursor-pointer">
                  <h1 className=" text-[#fff]">Contact Us</h1>
                </div>
                <div className="w-[2px] bg-[#fff]/20 h-[28px]"></div>
                <button className="cursor-pointer">
                  <SearchIcon className="text-white" />
                </button>
                <button className="border-[2px] border-[#FD7D4C] rounded-lg font-semibold h-[50px] w-[140px] hover:bg-[#fff]/10 transition duration-300 text-white">
                  Sign Up
                </button>
              </div>
              <Menu className="block md:hidden" />
            </nav>
            <div className="flex-1 h-full flex justify-center items-center">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-white text-center">Our Team</h1>
                <p className="text-white text-center max-w-xl leading-relaxed">
                  Meet our passionate and experienced team of experts dedicated to helping you achieve your talent development goals.
                </p>
              </div>
            </div>
            <div className="bg-white h-[80px] w-[80px] grid place-content-center rounded-full mx-auto translate-y-10">
              <Image src="/svgs/long-arrow-down.svg" alt="arrow" width={20} height={30} />
            </div>
          </div>
        </div>
      </section>
      <section className="my-28">
        <div className="max-w-[1620px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member w-[200px] min-h-[300px] relative overflow-hidden rounded-t-2xl">
                <Image src={member.image} alt="member" width={1000} height={1000} className="h-full object-cover" />
                <div className="absolute bottom-0 h-24 left-0 right-0 backdrop-blur-lg bg-black/30 z-[1] flex flex-col justify-center items-center">
                  <h1 className="text-xl text-white">{member.names}</h1>
                  <p className="text-white text-lg">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
