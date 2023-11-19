import { ChevronDown, Instagram, Linkedin, Locate, Mail, MapPin, Menu, PhoneCall, SearchIcon, Twitter } from "lucide-react";
import React from "react";
import Form from "./Form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function page() {
  return (
    <main className="text-[#132742]">
      <section>
        <Navbar />
      </section>
      <section>
        <div className="max-w-[1620px] mx-auto px-4 pt-28 mb-28 md:px-10 relative z-[1]">
          <div className="space-y-1">
            <h1 className="text-[40px] text-[#132742] font-bold leading-[1.4] text-center">Get in Touch</h1>
            <p className="text-[#8993A0] text-center md:max-w-2xl mx-auto leading-relaxed">
              Reach out to us today and let's discuss how TalentBoost can empower your organization and boost your team's potential.{" "}
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl mx-auto shadow-2xl rounded-3xl mt-16">
            <div className="bg-[#132742] md:w-4/5 rounded-b-3xl md:rounded-l-3xl p-10 flex flex-col justify-between min-h-[700px] relative overflow-hidden">
              <div className="space-y-2">
                <h1 className="text-white text-3xl font-semibold">Contact Information</h1>
                <p className="text-[#C9C9C9]">Say something to start a live chat!</p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-white">
                  <PhoneCall size={20} />
                  <p>+1012 3456 789</p>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Mail size={20} />
                  <p>demo@gmail.com</p>
                </div>
                <div className="flex gap-3 text-white">
                  <MapPin size={23} />
                  <p className="max-w-xs leading-loose">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-black rounded-full h-[40px] w-[40px] grid place-content-center group hover:bg-white transition duration-200 cursor-pointer">
                  <Twitter className="text-white group-hover:text-black transition duration-200" size={20} />
                </div>
                <div className="bg-black rounded-full h-[40px] w-[40px] grid place-content-center group hover:bg-white transition duration-200 cursor-pointer">
                  <Instagram className="text-white group-hover:text-black transition duration-200" size={20} />
                </div>
                <div className="bg-black rounded-full h-[40px] w-[40px] grid place-content-center group hover:bg-white transition duration-200 cursor-pointer">
                  <Linkedin className="text-white group-hover:text-black transition duration-200" size={20} />
                </div>
              </div>
              <div className="h-32 w-32 bg-[#8f8f8f24] absolute right-14 bottom-14 rounded-full z-[1]" />
              <div className="h-64 w-64 bg-[#163D72] absolute -right-24 -bottom-24 rounded-full" />
            </div>
            <div className="w-full p-6 md:p-10">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
