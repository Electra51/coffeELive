import React from "react";
import aboutLogo from "../../../assets/AboutSectionImage/about.jpeg";
import { aboutMenuData } from "../../../components/common/data";
import borderImage from "../../../assets/AboutSectionImage/1.png";
import flowerImage from "../../../assets/AboutSectionImage/2.svg";
import Button from "../../../components/common/Button";
import SectionHeaderText from "../../../components/common/SectionHeaderText";

const WhyChooseSection = () => {
  return (
    <div className="pt-[100px] lg:pt-[165px] w-[340px] lg:w-[1391px] mx-auto pb-[100px] lg:pb-[127px] relative">
      <img
        src={flowerImage}
        alt=""
        className="lg:flex hidden absolute top-0 right-[-130px] rotate-12"
      />
      <div className="flex flex-col lg:flex-row justify-normal items-start gap-[69px] lg:gap-[202px]">
        <div className="">
          <div className="flex justify-center lg:justify-normal items-center gap-[10px]">
            <div className="h-[3px] w-[50px] bg-gradient-to-l from-[#86371C]"></div>
            <h2
              className="text-[16px] text-[#86371C]"
              style={{
                fontFamily: "Lemonada, cursive",
              }}>
              Why Choose Us
            </h2>{" "}
            <div className="h-[3px] w-[50px] bg-gradient-to-r from-[#86371C] lg:hidden"></div>
          </div>

          <SectionHeaderText
            title={"Choosing CoffeELive, A Taste of Perfection"}
          />
          <p
            className="text-[16px] text-[#270A05] lg:text-left text-center font-normal mt-[12px] leading-[22px] lg:leading-[27px]"
            style={{ fontFamily: "value_sans_proregular" }}>
            CoffeELive takes pride in the art of roasting, transforming raw
            coffee beans into a symphony of aromatic notes and rich flavors.
          </p>
          <div className="grid grid-cols-3 gap-[12px] lg:gap-[26px] mt-[30px]">
            {aboutMenuData?.map((menuData, i) => {
              return (
                <div
                  className="w-[105px] lg:w-[203px] h-[70px] lg:h-[134px] rounded-[10px] border-[1.5px] border-[#270A05] border-opacity-10 flex flex-col justify-center items-center relative"
                  key={i}
                  style={{ fontFamily: "bakilda_historiregular" }}>
                  {menuData?.number == "100+" ? (
                    <div className="w-[105px] lg:w-[203px] h-[70px] lg:h-[134px] rounded-[10px] border-[1.5px] border-[#270A05] border-opacity-10 absolute -top-0 -left-2 rotate-3"></div>
                  ) : (
                    ""
                  )}

                  <h2 className="text-[22px] lg:text-[44px] leading-[18px] lg:leading-[56px] text-[#270A05]">
                    {menuData?.number}
                  </h2>
                  <p className="text-[12px] lg:text-[20px] font-normal text-[#270A05]">
                    {menuData?.title}
                  </p>
                </div>
              );
            })}
          </div>
          <p
            className="text-[16px] lg:text-left text-center text-[#270A05] mt-[30px] leading-[22px] lg:leading-[27px]"
            style={{ fontFamily: "value_sans_proregular" }}>
            Your choice to savor our coffee is an invitation to experience the
            epitome of craftsmanship, flavor, and dedication.
          </p>
          <div className="flex justify-center lg:justify-start items-center mt-[25px] lg:mt-[50px]">
            <Button
              title={"Explore Our Menus"}
              bgColor={"#00FFFFFF"}
              textColor={"#86371C"}
            />
          </div>
        </div>{" "}
        <div className="relative">
          <div
            className="w-[380px] lg:w-[500px] h-[528px] rounded-[14px] absolute top-[95px] lg:top-[35px] left-[-20px]"
            style={{ zIndex: "-99" }}>
            <img
              src={borderImage}
              alt=""
              className="h-full w-full rounded-[14px] object-contain"
            />
          </div>
          <div className="w-[340px] lg:w-[464px] h-[528px] rounded-[14px] z-">
            <img
              src={aboutLogo}
              alt=""
              className="h-full w-full rounded-[14px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
