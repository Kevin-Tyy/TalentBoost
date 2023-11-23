"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";
export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState();
  const handleChange = () => {};
  const options = [
    { value: "friend", option: "From a friend" },
    { value: "online", option: "Online search" },
    { value: "socialMedia", option: "Social media" },
    { value: "advertisement", option: "Advertisement" },
  ];

  return (
    <form className="space-y-6">
      <div className="flex flex-col md:flex-row gap-y-4 gap-x-10">
        <div className="w-full space-y-4">
          <input type="text" placeholder="First Name" className="w-full h-[60px] rounded-lg ring-1 ring-[#D7D7D7] px-4 outline-none" />
          <input type="text" placeholder="Phone Number" className="w-full h-[60px] rounded-lg ring-1 ring-[#D7D7D7] px-4 outline-none" />
          <input type="text" placeholder="Location" className="w-full h-[60px] rounded-lg ring-1 ring-[#D7D7D7] px-4 outline-none" />
          <input type="text" placeholder="Zip Code (Optional)" className="w-full h-[60px] rounded-lg ring-1 ring-[#D7D7D7] px-4 outline-none" />
        </div>
        <div className="w-full h-full flex flex-col gap-4">
          {/* <div className="flex-1 h-full">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="How did you hear about us?" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
          <input type="email" placeholder="Email" className="w-full h-[60px] rounded-lg ring-1 ring-[#D7D7D7] px-4 outline-none" />

          <div className="space-y-3 flex-1">
            <label htmlFor="message" className="font-[500]">
              Reason to Connect
            </label>
            <textarea id="message" className="h-44 w-full resize-none rounded-lg ring-1 ring-[#D7D7D7] p-4 outline-none" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="h-[50px] rounded-lg bg-red-orange uppercase px-6 hover:bg-[#f76f60] transition duration-300 mx-auto text-white">Submit</button>
      </div>
    </form>
  );
}
