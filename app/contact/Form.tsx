import React from "react";

export default function Form() {
  return (
    <div>
      <form className="space-y-10">
        <div className="flex gap-8">
          <div className="w-full space-y-1 group">
            <label htmlFor="first-name" className="text-[#8D8D8D] group-focus-within:text-black transition duration-300 text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="full-names"
              className="block w-full outline-none border-b border-[#8D8D8D] group-focus-within:border-black transition duration-300 pb-2"
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-full space-y-1 group">
            <label htmlFor="email" className="text-[#8D8D8D] group-focus-within:text-black transition duration-300 text-sm">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="block w-full outline-none border-b border-[#8D8D8D] group-focus-within:border-black transition duration-300 pb-2"
            />
          </div>
          <div className="w-full space-y-1 group">
            <label htmlFor="phone-number" className="text-[#8D8D8D] group-focus-within:text-black transition duration-300 text-sm">
              Phone Number
            </label>
            <input
              type="text"
              id="phone-number"
              className="block w-full outline-none border-b border-[#8D8D8D] group-focus-within:border-black transition duration-300 pb-2"
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-full space-y-1 group">
            <label htmlFor="email" className="text-[#8D8D8D] group-focus-within:text-black transition duration-300 text-sm">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="block w-full outline-none border-b border-[#8D8D8D] group-focus-within:border-black transition duration-300 pb-2"
            />
          </div>
          <div className="w-full space-y-1 group">
            <label htmlFor="phone-number" className="text-[#8D8D8D] group-focus-within:text-black transition duration-300 text-sm">
              Zip Code (Optional){" "}
            </label>
            <input
              type="text"
              id="zip-code"
              className="block w-full outline-none border-b border-[#8D8D8D] group-focus-within:border-black transition duration-300 pb-2"
            />
          </div>
        </div>

        <div className="w-full space-y-3 group">
          <label htmlFor="Message" className="text-[#8D8D8D] group-focus-within:text-black transition duration-300 text-sm">
            Reason to Connect
          </label>
          <input
            type="text"
            placeholder="Write your reason to connect"
            id="reason"
            className="block w-full outline-none border-b border-[#8D8D8D] group-focus-within:border-black transition duration-300 pb-2"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-black text-white px-10 h-[50px] rounded-lg">Send Message</button>
        </div>
      </form>
    </div>
  );
}
