import React from "react";
import footerImage from "../../assets/footerbg.png";
import footerLogo from "../../assets/footerlogo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={`h-[110px] relative`}>
        <img src={footerImage} alt="" className="h-full object-fill w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1391px] mx-auto flex justify-between items-center">
            <img src={footerLogo} alt="" />
            <div className="flex justify-center items-center gap-[45px]">
              <p
                className="text-[16px] font-normal text-white"
                style={{
                  fontFamily: "value_sans_proregular",
                }}>
                Terms
              </p>
              <p
                className="text-[16px] font-normal text-white"
                style={{
                  fontFamily: "value_sans_proregular",
                }}>
                Privacy
              </p>
              <p
                className="text-[16px] font-normal text-white"
                style={{
                  fontFamily: "value_sans_proregular",
                }}>
                Cookies
              </p>
            </div>
            <div className="flex justify-center items-center gap-[15px]">
              <div className="h-[35px] w-[35px] border border-[#FFFFFF] border-spacing-1.5 rounded-full flex justify-center items-center">
                <FaLinkedinIn className="text-[11px] text-white" />
              </div>
              <div className="h-[35px] w-[35px] border border-[#FFFFFF] border-spacing-1.5 rounded-full flex justify-center items-center">
                <FaFacebookF className="text-[11px] text-white" />
              </div>
              <div className="h-[35px] w-[35px] border border-[#FFFFFF] border-spacing-1.5 rounded-full flex justify-center items-center">
                <FaTwitter className="text-[11px] text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
