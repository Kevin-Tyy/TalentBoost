"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
interface Props {
  isDark?: boolean;
}
export default function Navbar({ isDark }: Props) {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 40);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    // Set up scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  const [isExpanded, setIsExpanded] = useState(false);
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
    <div>
      <nav
        className={`${isDark && !isScrolled && "!text-white font-light"} px-4 py-5 md:px-10 mx-auto navbar transition-all duration-500 fixed right-0 left-0 ${
          visible ? `visible ${isScrolled && "bg-white shadow-2xl shadow-[#a5a5a53f]"}` : "hidden bg-white"
        }
      `}>
        <div className="max-w-[1620px] w-full mx-auto flex items-center justify-between">
          <div>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={120} height={100} draggable={false} />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <div className={clsx("flex gap-[10px] items-center cursor-pointer", pathname == link.href && "font-semibold")}>
                  <h1 className="whitespace-nowrap">{link.label}</h1>
                </div>
              </Link>
            ))}
          </div>
          <Menu className="block md:hidden cursor-pointer" onClick={() => setIsExpanded(true)} />
        </div>
      </nav>
      <Sidebar onClose={() => setIsExpanded(false)} isDark={isDark} isOpen={isExpanded} />
    </div>
  );
}
