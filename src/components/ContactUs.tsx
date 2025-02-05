import React from "react";

function ContactUs() {
  return (
    <div className="w-full">
      <h1 className="text-black text-base font-sourcesans">Contact Us</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#F6F6F6] px-4 py-3 w-full focus:border-none focus:outline-none rounded placeholder:text-[#474747] placeholder:text-sm placeholder:font-sourcesans"
        />
        <input
          type="text"
          placeholder="Phone"
          className="bg-[#F6F6F6] px-4 py-3 w-full rounded focus:border-none focus:outline-none mt-4 placeholder:text-[#474747] placeholder:text-sm placeholder:font-sourcesans"
        />
        <input
          type="text"
          placeholder="Email*"
          className="bg-[#F6F6F6] px-4 py-3 w-full rounded focus:border-none focus:outline-none mt-4 placeholder:text-[#474747] placeholder:text-sm placeholder:font-sourcesans"
        />
        <textarea
          name=""
          id=""
          rows={7}
          placeholder="How can we serve you?"
          className="bg-[#F6F6F6] px-4 py-4 w-full rounded focus:border-none focus:outline-none placeholder:text-[#474747] mt-4 placeholder:text-sm placeholder:font-sourcesans"
        ></textarea>
        <button className="bg-[#8D6956] w-full mt-3 px-8 py-4 text-white ml-2 shadow-buttonshadow hover:shadow-none transition-all duration-300 ease-in-out text-base font-bold font-sourcesans tracking-widest">
          SEND
        </button>
        <h1 className="text-xs text-[#474747] text-center mt-10">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </h1>
      </div>
    </div>
  );
}

export default ContactUs;
