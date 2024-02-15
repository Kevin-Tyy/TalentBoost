import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-[#132742] pt-10 pb-4 px-5 md:px-10 ">
      <footer className="max-w-[1620px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row justify-between gap-y-14">
          <div className="w-full">
            <div>
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={140} height={100} draggable={false} />
              </Link>
            </div>{" "}
            <p className="text-[#8993A0] leading-loose max-w-2xl mt-6">
              Boosting potential,driving excellence!
              Your trusted training and consulting partner.{" "}
            </p>
          </div>
          <div className="space-y-6 md:w-1/3">
            <h1 className="font-semibold text-white text-lg">Links</h1>
            <ul className="space-y-6">
              <li className="text-[#D0D4D9]">Account</li>
              <li className="text-[#D0D4D9]">Contact Us</li>
            </ul>
          </div>
          <div className="space-y-6 md:w-1/3">
            <h1 className="font-semibold text-white text-lg whitespace-nowrap">Reach Us Anytime</h1>
            <div className="flex gap-2 items-center text-[#D0D4D9]">
              <img src="/svgs/phone.svg" className="w-6" />
              <p>+1 713 832 4366</p>
            </div>
            <div className="flex gap-2 items-center text-[#D0D4D9]">
              <img src="/svgs/mail.svg" className="w-6" />
              <p>support@talentboostusa.com</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-6">
          <h1 className="text-white">Follow Us</h1>
          <div className="flex gap-5">
            <img src="/svgs/twitter.svg" className="w-7" />
            <img src="/svgs/instagram.svg" className="w-7" />
            <img src="/svgs/facebook.svg" className="w-7" />
            <img src="/svgs/google.svg" className="w-7" />
            <img src="/svgs/linkedin.svg" className="w-7" />
          </div>
        </div>
        <p className="text-center text-[#fff]/40">© TalentBoost Consulting 2023. All Rights Reserved.</p>
      </footer>
    </section>
  );
}
