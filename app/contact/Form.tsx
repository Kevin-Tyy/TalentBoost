import React from "react";

export default function Form() {
  return (
    <div>
      <form className="space-y-10">
        <div className="flex gap-8">
          <div className="w-full space-y-1 group">
            <label htmlFor="first-name" className="text-[#8D8D8D] group-focus-within:text-black transition duration-300 text-sm">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="block w-full outline-none border-b border-[#8D8D8D] group-focus-within:border-black transition duration-300 pb-2"
            />
          </div>
          <div className="w-full space-y-1 group">
            <label htmlFor="last-name" className="text-[#8D8D8D] group-focus-within:text-black transition duration-300 text-sm">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
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
        <div>
          <p>Select Subject</p>
          <div className="flex gap-6 mt-3">
            <div className="flex items- gap-3">
              <input type="radio" name="general-inquiry" id="general-inquiry" className="cursor-pointer" />
              <label htmlFor="general-inquiry" className="text-[#8D8D8D] text-sm">
                General Inquiry
              </label>
            </div>
            <div className="flex items- gap-3">
              <input type="radio" name="general-inquiry" id="general-inquiry-2" className="cursor-pointer" />
              <label htmlFor="general-inquiry-2" className="text-[#8D8D8D] text-sm">
                General Inquiry
              </label>
            </div>
            <div className="flex items- gap-3">
              <input type="radio" name="general-inquiry" id="general-inquiry-3" className="cursor-pointer" />
              <label htmlFor="general-inquiry-3" className="text-[#8D8D8D] text-sm">
                General Inquiry
              </label>
            </div>
            <div className="flex items- gap-3">
              <input type="radio" name="general-inquiry" id="general-inquiry-4" className="cursor-pointer" />
              <label htmlFor="general-inquiry-4" className="text-[#8D8D8D] text-sm">
                General Inquiry
              </label>
            </div>
          </div>
        </div>
        <div className="w-full space-y-1 group">
          <label htmlFor="Message" className="text-[#8D8D8D] group-focus-within:text-black transition duration-300 text-sm">
            Message
          </label>
          <input
            type="text"
            placeholder="Write your message..."
            id="Message"
            className="block w-full outline-none border-b border-[#8D8D8D] group-focus-within:border-black transition duration-300 pb-2"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-black text-white px-8 py-4 rounded-lg">Send Message</button>
        </div>
      </form>
    </div>
  );
}
