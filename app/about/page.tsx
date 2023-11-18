import { ArrowRight, ChevronDown, MailIcon, Menu, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

export default function About() {
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
          <div className="w-full space-y-6">
            <h1 className="text-[40px] font-semibold text-cyan-blue max-w-2xl">Get to Know About Our Company</h1>
            <button className="flex items-center gap-3 bg-red-orange py-4 px-6 text-white rounded-lg">
              <span>Contact us</span>
              <span>
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
          <div className="w-full text-[#8993A0] space-y-6 leading-[1.7]">
            <p>
              With a passion for lifelong learning and a commitment to excellence, we envision being the go-to partner for enterprise and government
              organizations seeking high-quality, impactful solutions for continued development. Our vision is to provide customized solutions that address
              specific goals and challenges, equipping individuals and organizations with the skills and knowledge necessary to achieve sustainable success.
            </p>
            <p>
              Together, let's embark on a journey of growth and development, transforming individuals into empowered professionals and organizations into
              thriving entities. Our vision is to make a lasting impact and contribute to a world where continuous learning is embraced and excellence is
              achieved.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[url('/about-people.jpeg')] h-[50vh] flex items-center grayscale relative bg-cover">
        <div className="bg-[#000]/60 absolute inset-0 z-[1]" />
        <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto relative z-[1] px-4 sm:px-10">
          <div className="space-y-4 text-white">
            <h1 className="text-[40px] font-semibold max-w-lg">Dream Until Your Dreams Come True</h1>
            <p className="max-w-xl leading-loose">
              Our consultants help address your most challenging issues by providing strategic, financial, operational, and IT services.
            </p>
          </div>
          <button>
            <Image src="/svgs/play-button.svg" alt="playbutton" width={80} height={80} draggable={false} />
          </button>
        </div>
      </section>
      <section className="max-w-[1620px] mx-auto md:-translate-y-16 relative z-[1] px-4 sm:px-10">
        <div className="flex flex-col md:flex-row items-center gap-y-3">
          <div className="w-full flex flex-col items-center space-y-6 p-16 shadow-xl shadow-[#e4e4e4] rounded-l-2xl bg-white">
            <Image src="/svgs/training-bag.svg" alt="playbutton" width={50} height={50} draggable={false} />
            <h1 className="text-3xl font-bold text-center">
              Customized <br />
              Training Programs
            </h1>
            <p className="text-[#8993A0] text-center max-w-sm leading-relaxed">Elit eget gravida cum sociis natoque penatibus, amet aliquam id diam.</p>
          </div>
          <div className="w-full flex flex-col items-center space-y-6 p-16 md:p-24 shadow-xl shadow-[#e4e4e4] rounded-2xl z-[2] bg-white">
            <Image src="/svgs/traning-comp.svg" alt="playbutton" width={50} height={50} draggable={false} />
            <h1 className="text-3xl font-bold max-w-md text-center">Compliance & Regulatory Training</h1>
            <p className="text-[#8993A0] text-center max-w-sm leading-relaxed">Dignissim suspendisse in est ante, habitasse platea dictumst purus.</p>
          </div>
          <div className="w-full flex flex-col items-center space-y-6 p-16 shadow-xl shadow-[#e4e4e4] rounded-r-2xl bg-white">
            <Image src="/svgs/performance-metrics.svg" alt="playbutton" width={50} height={50} draggable={false} />
            <h1 className="text-3xl font-bold max-w-sm text-center">Performance Metrics</h1>
            <p className="text-[#8993A0] text-center max-w-sm leading-relaxed">Scelerisque eu ultrices vitae auctor, velit scelerisque in dict.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1620px] mx-auto px-4 md:px-10 mt-14">
          <div className="space-y-2">
            <h1 className="text-[#5A687B] text-center">TRUSTED GLOBALLY</h1>
            <p className="text-xl font-semibold text-cyan-blue text-center">12,000 people trained in 86 countries</p>
          </div>
          <div className="flex flex-wrap gap-y-10 items-center mt-10 justify-between">
            <div>
              <Image src="/time-warner.png" alt="time-warner" width={140} height={90} />
            </div>
            <div>
              <Image src="/lg.png" alt="lg" width={120} height={90} />
            </div>
            <div>
              <Image src="/bic.png" alt="bic" width={120} height={90} />
            </div>
            <div>
              <Image src="/samsung.png" alt="samsung" width={170} height={90} />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1620px] mx-auto mt-28">
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold text-center">Our core values</h1>
          <p className="text-center text-[#8993A0] max-w-6xl mx-auto leading-[1.7]">
            Our vision is to be the trusted partner and catalyst for transformational success for organizations worldwide. We strive to provide innovative and
            customized solutions that empower businesses to overcome challenges, seize opportunities, and achieve sustainable growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20">
          <div className="flex flex-col items-center space-y-4">
            <Image src="/svgs/collaboration-ico.svg" alt="ico" width={80} height={80} draggable={false} />
            <h1 className="text-2xl font-semibold">Collaboration</h1>
            <p className="text-center text-[#8993A0] max-w-xl mx-auto leading-[1.8]">
              Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/svgs/collaboration-ico.svg" alt="ico" width={80} height={80} draggable={false} />
            <h1 className="text-2xl font-semibold">Collaboration</h1>
            <p className="text-center text-[#8993A0] max-w-xl mx-auto leading-[1.8]">
              Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/svgs/collaboration-ico.svg" alt="ico" width={80} height={80} draggable={false} />
            <h1 className="text-2xl font-semibold">Collaboration</h1>
            <p className="text-center text-[#8993A0] max-w-xl mx-auto leading-[1.8]">
              Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/svgs/collaboration-ico.svg" alt="ico" width={80} height={80} draggable={false} />
            <h1 className="text-2xl font-semibold">Collaboration</h1>
            <p className="text-center text-[#8993A0] max-w-xl mx-auto leading-[1.8]">
              Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1620px] mx-auto my-28 px-4 sm:px-10">
        <h1 className="text-[#8893A0]">OUR TEAM</h1>
        <h1 className="text-[40px] max-w-lg font-semibold mt-2">Experience and integrity by our team</h1>
        <p className="text-[#8993A0] max-w-2xl leading-[1.8] mt-3">
          Meet our passionate and experienced team of experts dedicated to helping you achieve your talent development goals.{" "}
        </p>
        <button className="flex items-center gap-3 bg-red-orange py-4 px-6 text-white rounded-lg mt-4">
          <span>MEET OUT TEAM</span>
          <span>
            <ArrowRight size={20} />
          </span>
        </button>
      </section>
      <section className="max-w-[1620px] mx-auto mb-28 px-4 sm:px-10">
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
