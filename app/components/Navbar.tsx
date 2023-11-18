"use client"

import React, { useState } from "react";
import { ArrowRight, ChevronDown, MailIcon, Menu, SearchIcon } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
interface Props {
  isDark?: boolean;
}
export default function Navbar({ isDark }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav className={`${isDark && "!text-white"} flex items-center justify-between max-w-[1620px] px-4 pt-5 md:pt-10 md:px-10 mx-auto`}>
      <div>
        <h1 className="text-3xl">Logo</h1>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <Link href="/about">
          <div className="cursor-pointer">
            <h1>About Us</h1>
          </div>
        </Link>
        <Link href="/enterprise-solutions">
          <div className="flex gap-[10px] items-center cursor-pointer">
            <h1>Enterprise Solution</h1>
            <ChevronDown className="w-[20px]" />
          </div>
        </Link>
        <Link href="/training-solutions">
          <div className="flex gap-[10px] items-center cursor-pointer">
            <h1>Training Solution</h1>
            <ChevronDown className="w-[20px]" />
          </div>
        </Link>
        <Link href="/team">
          <div className="cursor-pointer">
            <h1>Our team</h1>
          </div>
        </Link>
        <Link href="/contact">
          <div className="cursor-pointer">
            <h1>Contact Us</h1>
          </div>
        </Link>
        <div className={`${isDark ? "bg-[#fff]/20" : "bg-[#000000]/20"} w-[2px] h-[28px]`}></div>
        <button className="cursor-pointer">
          <SearchIcon />
        </button>
        <button className="border-[2px] border-[#FD7D4C] rounded-lg font-semibold h-[50px] w-[140px] hover:bg-[#fff]/10 transition duration-300 ">
          Sign Up
        </button>
      </div>
      <Menu className="block md:hidden cursor-pointer" onClick={() => setIsExpanded(true)}/>
      <Sidebar onClose={() => setIsExpanded(false)} isDark={isDark} isOpen={isExpanded}/>
    </nav>
  );
}
