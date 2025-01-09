// import React from "react";

// const Contact = () => {
//   return (
//     <div className="h-[100vh] flex justify-center items-center">
//       <p
//         className="text-2xl font-medium"
//         style={{
//           fontFamily: "value_sans_proregular",
//         }}>
//         Comming Soon...
//       </p>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import SocialIcon from "../../components/Common/SocialIcon";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import SocialIcons from "../../components/common/SocialIcons";

const Contact = () => {
  return (
    <div className="w-[390px] lg:w-[1366px] mx-auto py-14">
      <div className="flex flex-col justify-center items-center gap-3">
        {/* <h1 className="text-[36px] font-semibold uppercase">Contact Us</h1> */}
        <p
          className="text-[#270A05] mt-[12px] lg:mt-[24px] text-[16px] font-normal lg:text-left text-center"
          style={{ fontFamily: "value_sans_proregular" }}>
          Feel free to contact us. Submit your queries here and we will get back
          to you as soon as possible.🙂
        </p>
      </div>
      <div className="grid sm:grid-cols-2 items-start gap-20 p-4 mx-auto mt-10">
        <div>
          <p
            className="text-[#270A05] text-xl font-semibold"
            style={{ fontFamily: "value_sans_proregular" }}>
            Get in touch
          </p>
          <p
            className="text-[#270A05] mt-[12px] lg:mt-[24px] text-[16px] font-normal lg:text-justify text-justify"
            style={{ fontFamily: "value_sans_proregular" }}>
            We value your feedback and are here to assist you. Whether you have
            a question, a suggestion, or need help with something, feel free to
            reach out to us. Our team is committed to providing you with the
            best service and will respond to your inquiries as quickly as
            possible. We are Very friendly. Please fill out the form with your
            details and message, and we'll get back to you as soon as we can. We
            look forward to hearing from you!
          </p>

          <div className="mt-8">
            <h2 className="text-gray-700 text-base font-semibold">Address</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#f1f1f1cf] border h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <MdLocationOn className="text-[#86371C]" />
                </div>
                <a
                  href="javascript:void(0)"
                  className="text-[#86371C] text-sm ml-4">
                  <p className="text-[14px] block text-gray-700">Location</p>
                  <span className="font-medium">
                    55 East Birchwood Ave. Brooklyn, New York 11201,
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8" style={{ fontFamily: "value_sans_proregular" }}>
            <h2 className="text-gray-700 text-base font-semibold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#f1f1f1cf] border h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <MdOutlineEmail className="text-[#86371C]" />
                </div>
                <a
                  href="javascript:void(0)"
                  className="text-[#86371C] text-sm ml-4">
                  <p className="text-[14px] block text-gray-700">
                    E-Mail Address
                  </p>
                  <span className="font-medium">info@example.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-700 text-base font-bold">Socials</h2>

            <SocialIcons />
          </div>
        </div>

        <form
          className="space-y-4"
          style={{ fontFamily: "value_sans_proregular" }}>
          <div>
            <label className="text-gray-700">Name:</label>
            <input
              type="text"
              placeholder="Type your Name..."
              className="w-full rounded-[5px] py-2 px-2 border mt-1"
            />
          </div>
          <div>
            <label className="text-gray-700">Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-[5px] py-2 px-2 border mt-1"
            />
          </div>
          <div className="">
            <label className="text-gray-700">Subject:</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-[5px] py-2 px-2 border mt-1"
            />
          </div>
          <div>
            <label className="text-gray-700">Message:</label>
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full rounded-[5px] py-2 px-2 border"></textarea>
          </div>

          <button
            type="button"
            className="text-white bg-[#86371C] hover:bg-[#86371C] tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
