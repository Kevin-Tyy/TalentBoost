// import { courses, teamMembers } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import ContactForm from "./components/ContactForm";
// import { ChevronDown, Menu, SearchIcon } from "lucide-react";
import Footer from "./components/Footer";
// import Link from "next/link";
import Navbar from "./components/Navbar";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import Slider from "./components/CourseSlider";

export default function Home() {
  return (
    <main className="overflow-x-hidden text-[#132742]">
      <div className="bg-[#F8F3F0]">
        <section>
          <Navbar />
        </section>
        <section>
          <div className="max-w-[1620px] mx-auto px-4 pt-40 pb-20 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-y-10">
              <div className="md:max-w-[50%] space-y-8">
                <h1 className="text-5xl text-[#132742] font-bold leading-[1.4] flex flex-col max-w-2xl space-y-2">
                  <span className="block">
                    <span className="text-red-orange">Boosting</span> potential,
                  </span>
                  <span className="block self-end">
                    driving <span className="text-red-orange">excellence</span>!
                  </span>
                </h1>
                <h2 className="text-xl font-semibold">Your trusted training and consulting partner</h2>
                <h2 className="text-2xl text-red-orange font-semibold">What we bring to the table:</h2>
                <ul className="list-disc translate-x-6 pr-6 space-y-1.5 text-lg">
                  <li>Collective experience of 40+ years in Consulting, Training & Business Operation.</li>
                  <li>Tailored learning experiences for any group size, including delivery modalities</li>
                  <li>Panel of certified & experienced consultants and trainers</li>
                  <li>Flexible scheduling and pricing</li>
                </ul>

                <button className="bg-red-orange rounded-lg h-[50px] px-6 font-semibold text-white">GET STARTED</button>
              </div>
              <div className="">
                <Image src="/image-1.png" alt="image" width={1000} height={1000} className="max-w-[560px] w-full" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#fff2ed]/50 py-20 px-4 md:px-10">
        <div className="max-w-[1620px] mx-auto space-y-10">
          <div className="space-y-1">
            <h1 className="text-[36px] text-center text-cyan-blue">We'd love to hear from you</h1>
            <p className="text-[#505050] text-center max-w-3xl mx-auto leading-relaxed text-lg">
              Use this form to begin registering or inquire further about our products. Provide as much info as possible, so we’re prepared when we respond.
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
