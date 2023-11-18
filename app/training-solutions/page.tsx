import { ArrowRight, ChevronDown, MailIcon, Menu, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

export default function page() {
  return (
    <main className="text-[#132742]">
      <section className="bg-[#F8F3F0]">
        <nav className="flex items-center justify-between max-w-[1620px] px-4 pt-5 md:pt-10 md:px-10 mx-auto">
          <div>
            <h1 className="text-[#132742] text-3xl">Logo</h1>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <div className="cursor-pointer">
              <h1 className="text-[#132742]">About Us</h1>
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <h1 className="text-[#132742]">Enterprise Solution</h1>
              <ChevronDown className="text-[#132742] w-[20px]" />
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <h1 className="text-[#132742]">Training Solution</h1>
              <ChevronDown className="text-[#132742] w-[20px]" />
            </div>
            <div className="cursor-pointer">
              <h1 className="text-[#132742]">Enterprise Solution</h1>
            </div>
            <div className="cursor-pointer">
              <h1 className="text-[#132742]">Contact Us</h1>
            </div>
            <div className="w-[2px] bg-[#000000]/20 h-[28px]"></div>
            <button className="cursor-pointer">
              <SearchIcon className="text-[#132742]" />
            </button>
            <button className="border-[2px] border-[#FD7D4C] rounded-lg font-semibold h-[50px] w-[140px] hover:bg-neutral-100/60 transition duration-300">
              Sign Up
            </button>
          </div>
          <Menu className="block md:hidden" />
        </nav>
      </section>
      <section className="bg-[#F8F3F0]">
        <div className="max-w-[1620px] mx-auto py-16 px-5 sm:px-10 flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="w-full space-y-10">
            <h1 className="text-4xl font-semibold max-w-md leading-[1.4]">Data Governance Solutions</h1>
            <div className="space-y-8 text-[#5A687B] max-w-3xl">
              <p className="leading-[1.8]">
                <span className="font-bold">TalentBoost</span> is committed to provide comprehensive offerings designed to address the learning and development
                needs of individuals and organizations. These solutions encompass various strategies, methodologies, and resources aimed at enhancing skills,
                knowledge, and performance.
              </p>
              <p className="leading-[1.8]">
                At our core, we believe that knowledge is power and that continuous learning is the key to success. With a focus on personal and professional
                development, we offer a wide range of training programs tailored to meet the unique needs of our clients. Whether it's enhancing leadership
                skills, improving communication, or mastering the latest industry trends, our engaging and interactive workshops are designed to empower
                individuals to reach their full potential.
              </p>
              <p className="leading-[1.8]">
                Through our dynamic and interactive training programs, we aim to inspire lifelong learning, foster personal growth, and cultivate a culture of
                KAIZEN (continuous improvement). In addition to training, we offer comprehensive consulting services designed to enhance business performance,
                optimize processes, and maximize efficiency.
              </p>
              <p className="leading-[1.8]">
                Our dedicated team of expert trainers and consultants are committed to delivering high-quality content and customized solutions tailored to the
                unique requirements. They are proficient in identifying specific business challenges and are equipped with the latest industry insights and best
                practices to provide strategic guidance and practical solutions that drive measurable results.
              </p>
            </div>
            <button className="flex items-center gap-3 bg-red-orange py-3 px-6 text-white rounded-md uppercase">Get Started</button>
          </div>
          <div className="lg:w-4/5 select-none">
            <Image src="/enterprise-solutions.png" alt="solutions" width={1000} height={1000} draggable={false} />
          </div>
        </div>
      </section>
      <section className="max-w-[1620px] mx-auto my-28 px-5 sm:px-10 ">
        <h1 className="text-[#8893A0]">OUR TEAM</h1>
        <h1 className="text-[40px] max-w-lg font-semibold mt-2">Experience and integrity by our team</h1>
        <p className="text-[#8993A0] max-w-2xl leading-[1.8] mt-3">
          Meet our passionate and experienced team of experts dedicated to helping you achieve your talent development goals.{" "}
        </p>
        <button className="flex items-center gap-3 bg-red-orange py-3 px-6 text-white rounded-md mt-4">
          <span>MEET OUT TEAM</span>
          <span>
            <ArrowRight size={20} />
          </span>
        </button>
      </section>
      <section className="max-w-[1620px] mx-auto mb-28 px-5 sm:px-10 ">
        <div className="bg-[#FD7D4C] p-10 rounded-lg flex items-center justify-between">
          <div className="text-xl flex gap-3">
            <MailIcon className="text-white" />
            <h1 className="text-white">Subscribe to our newsletters</h1>
          </div>
          <button className="uppercase text-white border-[3px] font-semibold border-white px-8 py-3 rounded-md">Send</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
