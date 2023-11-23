import { ArrowRight, ChevronDown, MailIcon, Menu, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function page() {
  return (
    <main className="text-[#132742] overflow-x-hidden">
      <section className="bg-[#F3F7F9]">
        <Navbar />
      </section>
      <section className="bg-[#F3F7F9]">
        <div className="max-w-[1620px] mx-auto py-20 px-5 md:px-10 flex flex-col lg:flex-row items-start gap-20">
          <div className="w-full space-y-10 mt-28">
            <h1 className="text-4xl font-semibold max-w-md leading-[1.4]">Data Governance Solutions</h1>
            <div className="space-y-8 text-[#5A687B] max-w-4xl">
              <p className="leading-loose">
                <span className="font-bold">TalentBoost</span> embraces a data-centric approach to drive informed decision-making and deliver impactful results.
                We understand that data is a powerful asset that can unlock valuable insights and drive effective strategies.
              </p>
              <p className="leading-loose">
                With our data-centric approach, we help our clients harness the power of data to gain a deeper understanding of their business landscape,
                identify trends, and make data-driven decisions. Our experts are skilled in collecting, analyzing, and interpreting data to provide actionable
                recommendations that lead to measurable outcomes.
              </p>
              <p className="leading-loose">
                Using advanced analytics tools and methodologies, we transform raw data into meaningful information that enables our clients to optimize
                processes, identify opportunities, and mitigate risks. Whether it's customer segmentation, market analysis, or performance measurement, our
                data-centric approach ensures that decisions are grounded in evidence and aligned with your goals.
              </p>
              <p className="leading-loose">
                By leveraging the power of data, we empower organizations to make informed choices, improve operational efficiency, and gain a competitive edge.
                With our expertise and commitment to data-driven insights, we help you navigate the complexities of today's data-driven world and unlock the
                true potential of your organization.
              </p>
            </div>
            {/* <button className="flex items-center gap-3 bg-red-orange py-3 px-6 text-white rounded-md uppercase">Get Started</button> */}
          </div>
          <div className="w-full select-none">
            <div className="flex flex-wrap justify-end gap-2 -translate-x-[12%] md:translate-y-[50px]">
              <div className="hexagon relative">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Management Information System</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-end md:flex-nowrap gap-2">
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Data Automation</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Data Transformation</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Data Driven Decision Making</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-2 translate-x-[13%] md:-translate-y-12">
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Data Modeling</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Data Strategy</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Trends Analytics & Forecasting</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Data Visualization</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-end md:flex-nowrap gap-2 md:-translate-y-24">
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Data Analytics</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Sales Analytics</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Market Analytics</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-end md:flex-nowrap gap-2 -translate-x-[12%] md:-translate-y-36">
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Predictive Analytics</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Business Intelligence</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">BI Tools, Power BI, Tableau, QlikView</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-end md:flex-nowrap gap-2 translate-x-2 md:-translate-y-48">
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Data Science</h1>
                </div>
              </div>
              <div className="hexagon">
                <div className="text absolute inset-0 grid place-content-center">
                  <h1 className="font-semibold max-w-[120px]">Application of Statistics on Analytics</h1>
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
