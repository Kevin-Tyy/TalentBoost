import { ArrowRight, ChevronDown, MailIcon, Menu, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function page() {
  return (
    <main className="text-[#132742] overflow-x-hidden">
      <section className="bg-[#F8F3F0]">
        <Navbar />
      </section>
      <section className="bg-[#F8F3F0]">
        <div className="max-w-[1620px] mx-auto py-20 px-5 sm:px-10 flex flex-col lg:flex-row-reverse items-start gap-20">
          <div className="w-full space-y-10 mt-28">
            <h1 className="text-4xl font-semibold max-w-md leading-[1.4]">Training Solutions</h1>
            <div className="space-y-8 text-[#5A687B] max-w-3xl">
              <p className="leading-loose">
                <span className="font-bold">TalentBoost</span> is committed to provide comprehensive offerings designed to address the learning and development
                needs of individuals and organizations. These solutions encompass various strategies, methodologies, and resources aimed at enhancing skills,
                knowledge, and performance.
              </p>
              <p className="leading-loose">
                At our core, we believe that knowledge is power and that continuous learning is the key to success. With a focus on personal and professional
                development, we offer a wide range of training programs tailored to meet the unique needs of our clients. Whether it's enhancing leadership
                skills, improving communication, or mastering the latest industry trends, our engaging and interactive workshops are designed to empower
                individuals to reach their full potential.
              </p>
              <p className="leading-loose">
                Through our dynamic and interactive training programs, we aim to inspire lifelong learning, foster personal growth, and cultivate a culture of
                KAIZEN (continuous improvement). In addition to training, we offer comprehensive consulting services designed to enhance business performance,
                optimize processes, and maximize efficiency.
              </p>
              <p className="leading-loose">
                Our dedicated team of expert trainers and consultants are committed to delivering high-quality content and customized solutions tailored to the
                unique requirements. They are proficient in identifying specific business challenges and are equipped with the latest industry insights and best
                practices to provide strategic guidance and practical solutions that drive measurable results.
              </p>
            </div>
            {/* <button className="flex items-center gap-3 bg-red-orange py-3 px-6 text-white rounded-md uppercase">Get Started</button> */}
          </div>
          <div className="w-full select-none">
            <div className="flex flex-wrap justify-end gap-2 -translate-x-[38%] md:translate-y-[50px]">
              <div className="hexagon red relative">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Communication Trainings</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-start md:flex-nowrap gap-2">
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Emotional Intelligence</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Leadership Development Program</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Professional Development Training</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-2 -translate-x-[13%] md:-translate-y-12">
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">HRMS Tools</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Role Based Induction</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Statutory Compliance Training</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">New Hire Induction & Onboarding</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-start md:flex-nowrap gap-2 md:-translate-y-24">
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Harassment Prevention Training</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Diversity Equity Induction (DEI)</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Business Excellence & Properity</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-start md:flex-nowrap gap-2 -translate-x-[12%] md:-translate-y-36">
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Project Management (PMP)</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Microsoft Office Application Trainings</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">De-Escalation Techniques</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-end md:flex-nowrap gap-2 -translate-x-[25%] md:-translate-y-48">
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[180px]">Quality Trainings (Lean Six Sigma)</h1>
                </div>
              </div>
              <div className="hexagon red">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Design Thinking</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
