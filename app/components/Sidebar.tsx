"use client";

import { ArrowRight, ChevronDown, MailIcon, SearchIcon, X } from "lucide-react";
import Link from "next/link";
interface Props {
  isDark?: boolean;
  onClose: () => void;
  isOpen?: boolean;
}
export default function Sidebar({ isDark, onClose, isOpen }: Props) {
  return (
    <nav
      className={`${
        isOpen ? "w-[300px]" : "w-0"
      } overflow-hidden text-[#132742] bg-white fixed right-0 top-0 bottom-0 h-full min-h-screen shadow-2xl z-[50] transition-[width]`}>
      <div className="pl-8 flex flex-col justify-between pt-5 pb-10 h-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl">Logo</h1>
          <X className="block md:hidden cursor-pointer mr-4" onClick={() => onClose()} />
        </div>
        <div className="flex flex-col gap-10">
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
          <button className="cursor-pointer flex items-center gap-2">
            <SearchIcon size={20}/>
            <p>Search..</p>
          </button>
        </div>
        <button className="border-[2px] border-[#FD7D4C] rounded-lg font-semibold h-[50px] w-[140px] hover:bg-[#fff]/10 transition duration-500">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
