import { teamMembers } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main>
      <div className="bg-[#F8F3F0]">
        <section>
          <nav className="flex items-center justify-between max-w-[1620px] px-4 pt-10 md:px-10 mx-auto">
            <div>
              <h1 className="text-[#132742] text-3xl">Logo</h1>
            </div>
            <div className="flex items-center gap-10">
              <div className="cursor-pointer">
                <h1 className="text-lg text-[#132742]">About Us</h1>
              </div>
              <div className="flex gap-[10px] items-center cursor-pointer">
                <h1 className="text-lg text-[#132742]">Enterprise Solution</h1>
                <img src="/svgs/chevron-down.svg" alt="chevron-down" className="w-[10px]" />
              </div>
              <div className="flex gap-[10px] items-center cursor-pointer">
                <h1 className="text-lg text-[#132742]">Training Solution</h1>
                <img src="/svgs/chevron-down.svg" alt="chevron-down" className="w-[10px]" />
              </div>
              <div className="cursor-pointer">
                <h1 className="text-lg text-[#132742]">Enterprise Solution</h1>
              </div>
              <div className="cursor-pointer">
                <h1 className="text-lg text-[#132742]">Contact Us</h1>
              </div>
              <div className="w-[2px] bg-[#000000]/20 h-[28px]"></div>
              <button className="cursor-pointer">
                <Image src="/svgs/search.svg" alt="search" width={24} height={24} />
              </button>
              <button className="border-[2px] border-[#FD7D4C] rounded-xl font-semibold h-[50px] w-[140px] hover:bg-neutral-100/60 transition duration-300">
                Sign Up
              </button>
            </div>
          </nav>
        </section>
        <section>
          <div className="max-w-[1620px] mx-auto px-4 mt-28 pb-20 md:px-10">
            <div className="flex items-center justify-between">
              <div className="max-w-[50%] space-y-8">
                <h1 className="text-5xl text-[#132742] font-bold leading-[1.4] capitalize">
                  <span className="text-[#FD7D4C]">Boosting</span> potential, driving excellence!
                </h1>
                <p className="text-[#5A687B] leading-[1.7] text-lg">
                  At TalentBoost, we believe in unlocking your true potential. Our comprehensive training programs and expert guidance empower individuals to
                  excel in their careers. With a focus on skill development and continuous learning, we are here to boost your potential and drive excellence in
                  every aspect of your professional journey.
                </p>
                <button className="bg-red-orange rounded-lg h-[50px] px-6 font-semibold text-white">GET STARTED</button>
              </div>
              <div className="">
                <Image src="/image-1.png" alt="image" width={1000} height={1000} className="max-w-[560px]" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="max-w-[1620px] mx-auto px-4 md:px-10 mt-14">
          <div className="space-y-2">
            <h1 className="text-[#5A687B] text-center">TRUSTED GLOBALLY</h1>
            <p className="text-xl font-semibold text-cyan-blue text-center">12,000 people trained in 86 countries</p>
          </div>
          <div className="flex items-center mt-10 justify-between">
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
      <section className="bg-[#F4F8FA] mt-16 p-10 relative">
        <Image alt="grid" src="/grid-crystals-orange-1.png" width={400} height={300} className="absolute right-5 top-5" />
        <div className="max-w-[1620px] mx-auto px-4 md:px-10 relative z-[1]">
          <div className="space-y-1">
            <h1 className="text-center text-red-orange">Enterprise Solutions</h1>
            <h1 className="text-[40px] text-[#132742] font-bold leading-[1.4] text-center">Empower Your Team with Enterprise Solutions</h1>
            <p className="text-[#8993A0] text-lg text-center max-w-2xl mx-auto leading-relaxed">
              Equip your team with our powerful enterprise solutions, designed to enhance productivity and drive business success.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="w-full bg-white px-6 py-10 rounded-xl shadow-lg shadow-gray-200 space-y-4">
              <Image src="/teams-1.png" alt="team" width={400} height={400} className="w-full" />
              <h1 className="text-[#132742] text-2xl font-bold leading-[1.5] max-w-xs">Recruit, Train, Place - Ramp Up 360</h1>
              <p className="text-[#8993A0] text-[17px]">
                Forget the theoretical case studies, our flagship training product is a bespoke e‑learning experience that coaches you on your.
              </p>
            </div>
            <div className="w-full bg-white px-6 py-10 rounded-xl shadow-lg shadow-gray-200 space-y-4">
              <Image src="/teams-2.png" alt="team" width={400} height={400} className="w-full" />
              <h1 className="text-[#132742] text-2xl font-bold leading-[1.5] max-w-[240px]">Group Training - Level Up 360</h1>
              <p className="text-[#8993A0] text-[17px]">
                Forget the theoretical case studies, our flagship training product is a bespoke e‑learning experience that coaches you on your.
              </p>
            </div>
            <div className="w-full bg-white px-6 py-10 rounded-xl shadow-lg shadow-gray-200 space-y-4">
              <Image src="/teams-3.png" alt="team" width={400} height={400} className="w-full" />
              <h1 className="text-[#132742] text-2xl font-bold leading-[1.5] max-w-xs">Cybersecurity Awareness Training</h1>
              <p className="text-[#8993A0] text-[17px]">
                Forget the theoretical case studies, our flagship training product is a bespoke e‑learning experience that coaches you on your.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-[1620px] mx-auto px-4 mt-28 pb-20 md:px-10">
          <div className="flex items-center justify-between">
            <div className="max-w-[50%] space-y-8">
              <h1 className="text-[40px] text-[#132742] font-bold leading-[1.4] max-w-xl">Boost Your Tech Careers with Bootcamps</h1>
              <p className="text-[#8993A0] leading-[1.7] text-lg">
                Looking to accelerate your tech career? TalentBoost offers intensive bootcamp programs that provide hands-on training and industry-relevant
                skills. Our experienced instructors and immersive learning environment ensure you gain the expertise needed to thrive in the fast-paced tech
                industry. From coding to data analytics, our bootcamps cover a wide range of in-demand skills. Boost your tech career today with TalentBoost and
                unlock new opportunities in the exciting world of technology.
              </p>
              <button className="border border-red-orange rounded-lg h-[50px] px-6 font-semibold text-red-orange hover:transition duration-300 hover:bg-red-orange hover:text-white">
                GET IN TOUCH
              </button>
            </div>
            <div className="relative">
              <Image alt="grid" src="/grid-crystals-gray-1.png" width={500} height={300} className="absolute left-[-200px] top-[-20px] opacity-[0.15]" />
              <Image src="/image-3.png" alt="image" width={1000} height={1000} className="max-w-[500px] relative z-[1]" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFFCFA] mt-20 pb-20 p-10">
        <div className="max-w-[1620px] mx-auto px-4 md:px-10 relative">
          <Image alt="grid" src="/grid-crystals-orange-2.png" width={400} height={300} className="absolute left-[-100px] top-[-80px]" />
          <div className=" relative z-[1]">
            <div className="space-y-1">
              <h1 className="text-center text-red-orange text-lg">Training Solutions</h1>
              <h1 className="text-[40px] text-[#132742] font-bold leading-[1.4] text-center">Empower Your Team with Training Solutions</h1>
              <p className="text-[#8993A0] text-center max-w-2xl mx-auto leading-relaxed">
                Maximize your team's potential with our tailored training solutions designed to meet your organization's unique needs.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
              <div className="w-full bg-white px-6 py-10 rounded-xl shadow-lg shadow-gray-200 space-y-4">
                <Image src="/training-1.png" alt="team" width={400} height={400} className="w-full" />
                <h1 className="text-[#132742] text-2xl font-bold leading-[1.5] max-w-xs">Recruit, Train, Place - Ramp Up 360</h1>
                <p className="text-[#8993A0] text-[17px]">
                  Forget the theoretical case studies, our flagship training product is a bespoke e‑learning experience that coaches you on your.
                </p>
              </div>
              <div className="w-full bg-white px-6 py-10 rounded-xl shadow-lg shadow-gray-200 space-y-4">
                <Image src="/training-2.png" alt="team" width={400} height={400} className="w-full" />
                <h1 className="text-[#132742] text-2xl font-bold leading-[1.5] max-w-[240px]">Group Training - Level Up 360</h1>
                <p className="text-[#8993A0] text-[17px]">
                  Forget the theoretical case studies, our flagship training product is a bespoke e‑learning experience that coaches you on your.
                </p>
              </div>
              <div className="w-full bg-white px-6 py-10 rounded-xl shadow-lg shadow-gray-200 space-y-4">
                <Image src="/training-3.png" alt="team" width={400} height={400} className="w-full" />
                <h1 className="text-[#132742] text-2xl font-bold leading-[1.5] max-w-xs">Cybersecurity Awareness Training</h1>
                <p className="text-[#8993A0] text-[17px]">
                  Forget the theoretical case studies, our flagship training product is a bespoke e‑learning experience that coaches you on your.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-[1620px] mx-auto px-4 mt-28 pb-20 md:px-10">
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="max-w-[50%] space-y-8">
              <h1 className="text-[40px] capitalize text-[#132742] font-bold leading-[1.4] max-w-xl">
                Discover a world of training resources and unleash your full potential
              </h1>
              <p className="text-[#8993A0] leading-[1.7] text-lg">
                At TalentBoost, we offer a comprehensive range of training resources to help you reach your full potential. From interactive e-learning modules
                to instructor-led training, our diverse learning options cater to all learning styles. Our industry-leading experts provide valuable insights
                and practical knowledge, ensuring you stay ahead in today's competitive market. Discover a world of opportunities and unleash your full
                potential with TalentBoost.
              </p>
              <button className="border border-red-orange rounded-lg h-[50px] px-6 font-semibold text-red-orange hover:transition duration-300 hover:bg-red-orange hover:text-white">
                GET IN TOUCH{" "}
              </button>
            </div>
            <div className="relative">
              <Image alt="grid" src="/grid-crystals-gray-2.png" width={500} height={300} className="absolute right-[-200px] top-[-20px] opacity-[0.15]" />
              <Image src="/image-3.png" alt="image" width={1000} height={1000} className="max-w-[500px] relative z-[1]" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F8FA] mt-20 p-10">
        <div className="max-w-[1620px] mx-auto px-4 md:px-10">
          <div className="space-y-1">
            <h1 className="text-[42px] text-[#132742] font-bold leading-[1.4] text-center">Browse Training Categories</h1>
            <p className="text-[#8993A0] text-center max-w-2xl mx-auto leading-relaxed">
              Our courses are designed to empower you with insights developed over a century of experience. Here’s our curriculum breakdown for our featured
              course, Persuasive Selling.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-[1620px] mx-auto px-4 mt-20 pb-20 md:px-10">
          <div className="flex items-center justify-between">
            <div className="max-w-[50%] space-y-2">
              <h1 className="text-4xl text-[#132742] font-bold leading-[1.4] max-w-2xl">Why Company Learning</h1>
              <p className="text-cyan-blue leading-[1.7] text-2xl max-w-xl">
                Company reputation spans the globe, having effectively trained 12,000+ people in 86 countries.
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-[#8993A0] text-lg leading-relaxed">
                Investing in company learning is essential for staying competitive in today's fast-paced business landscape. TalentBoost offers customized
                learning solutions that empower organizations to upskill their workforce, foster innovation, and drive business growth. Stay ahead of the curve
                with TalentBoost's comprehensive learning programs.
              </p>
            </div>
          </div>
          <h1 className="text-cyan-blue text-4xl font-bold text-center mt-20">Meet Our Team</h1>
        </div>
      </section>
      <section>
        <div className="max-w-[1620px] mx-auto">
          <div className="flex justify-between gap-10">
            {teamMembers.map((member) => (
              <div className="team-member w-[200px] relative overflow-hidden rounded-t-2xl">
                <Image src={member.image} alt="member" width={1000} height={1000} className="h-full object-cover" />
                <div className="absolute bottom-0 h-24 left-0 right-0 backdrop-blur-lg bg-black/30 z-[1] flex flex-col justify-center items-center">
                  <h1 className="text-xl text-white">{member.names}</h1>
                  <p className="text-white text-lg">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FFFCFA] mt-14 py-14">
        <div className="max-w-[1620px] mx-auto space-y-10">
          <div className="space-y-1">
            <h1 className="text-[36px] text-center text-cyan-blue">We'd love to hear from you</h1>
            <p className="text-[#8993A0] text-center max-w-2xl mx-auto leading-relaxed text-lg">
              Use this form to begin registering or inquire further about our products. Provide as much info as possible, so we’re prepared when we respond.
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="bg-[#132742] pt-10 pb-4 px-10">
        <footer className="max-w-[1620px] mx-auto space-y-10">
          <div className="flex justify-between">
            <div className="w-full">
              <h1 className="text-2xl text-white">Logo</h1>
              <p className="text-[#8993A0] leading-loose max-w-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur. Nunc dui massa diam nibh tellus donec volutpat sed tempus. Euismod scelerisque mattis est tortor.
              </p>
            </div>
            <div className="space-y-6 w-1/3">
              <h1 className="font-semibold text-white text-lg">Links</h1>
              <ul className="space-y-6">
                <li className="text-[#D0D4D9]">Account</li>
                <li className="text-[#D0D4D9]">Contact Us</li>
              </ul>
            </div>
            <div className="space-y-6 w-1/3">
              <h1 className="font-semibold text-white text-lg">Reach Us Anytime</h1>
              <div className="flex gap-2 items-center text-[#D0D4D9]">
                <img src="/svgs/phone.svg" className="w-6" />
                <p>(855) 616-0999</p>
              </div>
              <div className="flex gap-2 items-center text-[#D0D4D9]">
                <img src="/svgs/mail.svg" className="w-6" />
                <p>sales@company.io</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-white">Follow Us</h1>
            <div className="flex gap-5">
              <img src="/svgs/twitter.svg" className="w-7" />
              <img src="/svgs/instagram.svg" className="w-7" />
              <img src="/svgs/facebook.svg" className="w-7" />
              <img src="/svgs/google.svg" className="w-7" />
              <img src="/svgs/linkedin.svg" className="w-7" />
            </div>
          </div>
          <p className="text-center text-[#fff]/40">© Company Name 2023. All Rights Reserved.</p>
        </footer>
      </section>
    </main>
  );
}
