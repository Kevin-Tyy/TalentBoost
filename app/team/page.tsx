import { teamMembers, teamMembersv2 } from "@/utils/constants";
import { ChevronDown, Menu, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function page() {
  return (
    <main className="text-cyan-blue">
      <section>
        <div className="relative !h-[80vh]">
          <div className="bg-[#000]/60 absolute inset-0 z-[1]" />
          <img src="/bg-teams.png" className="absolute h-[80vh] w-full object-cover filter grayscale contrast-[1.2]" />
          <div className="relative z-[2] h-full w-full flex flex-col">
            <div className="w-full">
              <Navbar isDark={true} />
            </div>
            <div className="flex-1 h-full flex justify-center items-center">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold text-white text-center">Our Team</h1>
                <p className="text-white text-center max-w-xl leading-loose">
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
          <div className="space-y-6">
            {teamMembersv2.map((member, index) => (
              <div key={index} className="shadow-2xl shadow-[#ececec] p-10 rounded-2xl ">
                <div className="relative flex gap-10">
                  <Image src={member.image} alt="member" width={1000} height={1000} className="rounded-2xl w-[265px] object-cover h-[380px]" />
                  <div className="">
                    <h1 className="text-2xl font-semibold">{member.names}</h1>
                    <p className="text-[#8993A0] text-base leading-[1.7]">{member.description}</p>
                    <div className="flex mt-6">
                      {member.industryExperience.length ? (
                        <div className="w-full">
                          <h1 className="text-xl font-semibold">Industry experience:</h1>
                          <ul className="list-disc translate-x-6 pr-6 mt-2 text-base space-y-0.5 text-[#8993A0]">
                            {member.industryExperience.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {member.functionalExperience.length ? (
                        <div className="w-full">
                          <h1 className="text-xl font-semibold">Functional experience:</h1>
                          <ul className="list-disc translate-x-6 pr-6 mt-2 text-base space-y-0.5 text-[#8993A0]">
                            {member.functionalExperience.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {member.keyStrengthAreas.length ? (
                        <div className="w-full">
                          <h1 className="text-xl font-semibold">Key strength areas:</h1>
                          <div className="flex ">
                            <ul className="w-full list-disc translate-x-6 pr-6 mt-2 text-base space-y-0.5 text-[#8993A0]">
                              {member.keyStrengthAreas.slice(0, 5).map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                            <ul className="w-full list-disc translate-x-6 pr-6 mt-2 text-base space-y-0.5 text-[#8993A0]">
                              {member.keyStrengthAreas.slice(5).map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
