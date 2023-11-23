"use client";

import clsx from "clsx";
import { ArrowRight, ChevronDown, MailIcon, SearchIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
interface Props {
  isDark?: boolean;
  onClose: () => void;
  isOpen?: boolean;
}
export default function Sidebar({ isDark, onClose, isOpen }: Props) {
  const mainRef = useRef<HTMLElement | null>(null);
  const handleClickOutside = (event: any) => {
    if (mainRef.current && !mainRef.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const navLinks = [
    {
      href: "/about",
      label: "About Us",
    },
    {
      href: "/data-governance-solutions",
      label: "Data Governance Solutions",
    },
    {
      href: "/training-solutions",
      label: "Training Solutions",
    },
    {
      href: "/team",
      label: "Our team",
    },
    {
      href: "/contact",
      label: "Contact Us",
    },
  ];
  const pathname = usePathname();

  return (
    <nav
      ref={mainRef}
      className={`${
        isOpen ? "w-[300px]" : "w-0"
      } overflow-hidden text-[#132742] bg-white fixed right-0 top-0 bottom-0 h-full min-h-screen shadow-2xl z-[9999999] transition-[width]`}>
      <div className="pl-8 flex flex-col justify-between pt-5 pb-10 h-full">
        <div className="flex items-center justify-between w-full">
          <div>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={120} height={100} draggable={false} />
            </Link>
          </div>
          <X className="block md:hidden cursor-pointer mr-4" onClick={() => onClose()} />
        </div>

        <div className="flex flex-col gap-10">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <div className={clsx("flex gap-[10px] items-center cursor-pointer", pathname == link.href && "font-semibold")}>
                <h1 className="whitespace-nowrap">{link.label}</h1>
              </div>
            </Link>
          ))}
        </div>

        <button className="border-[2px] border-[#FD7D4C] rounded-lg font-semibold h-[50px] w-[140px] hover:bg-[#fff]/10 transition duration-500">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
