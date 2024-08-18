import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4"
      name="contact"
    >
      <form
        method="POST"
        action="https://getform.io/f/bwngkzxa"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#72DE6A] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            andersmazen@gmail.com
          </p>
        </div>
        <input
          className="p-2 text-[#0a192f]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[ccd6f6] text-[#0a192f]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[ccd6f6] text-[#0a192f] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#72DE6A] border-[#72DE6A] px-4 py-3 my-8 flex items-center mx-auto">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
