import React from "react";
import aboutLogo from "../../../assets/AboutSectionImage/about.jpeg";

const AboutMenuSection = () => {
  const aboutMenuData = [
    {
      id: 1,
      number: "20+",
      title: "Years Experience",
    },
    {
      id: 2,
      number: "100+",
      title: "Master Chefs",
    },
    {
      id: 3,
      number: "30+",
      title: "Achievements",
    },
  ];
  return (
    <div className="pt-[115px] w-[1391px] mx-auto pb-[127px]">
      <div className="grid grid-cols-2 gap-[202px]">
        <div>
          <div className="flex justify-normal items-center gap-[10px]">
            <div className="h-[3px] w-[180px] bg-gradient-to-l from-[#86371C]"></div>
            <h2
              className="text-[16px] text-[#86371C]"
              style={{
                fontFamily: "Lemonada, cursive",
              }}>
              Why Choose Us
            </h2>
          </div>
          <h1
            className="text-[44px] text-[#270A05] mt-[14px]"
            style={{ fontFamily: "bakilda_historiregular" }}>
            Choosing Unlocklive, A Taste of Perfection
          </h1>
          <p
            className="text-[16px] text-[#270A05] font-normal"
            style={{ fontFamily: "value_sans_proregular" }}>
            Unlocklive takes pride in the art of roasting, transforming raw
            coffee beans into a symphony of aromatic notes and rich flavors.
          </p>
          <div className="grid grid-cols-3 gap-[26px] mt-[30px]">
            {aboutMenuData?.map((e, i) => {
              return (
                <div className="w-[203px] h-[134px] rounded-[10px] border-[1.5px] border-[#270A05] flex flex-col justify-center items-center">
                  <h2
                    className="text-[44px] leading-[56px] text-[#270A05]"
                    style={{
                      fontFamily: "bakilda_historiregular",
                    }}>
                    {e?.number}
                  </h2>
                  <p className="text-[20px] font-normal text-[#270A05]">
                    {e?.title}
                  </p>
                </div>
              );
            })}
          </div>
          <p
            className="text-[16px] text-[#270A05] mt-[30px]"
            style={{ fontFamily: "value_sans_proregular" }}>
            Your choice to savor our coffee is an invitation to experience the
            epitome of craftsmanship, flavor, and dedication.
          </p>
          <button className="w-[199px] h-[52px] rounded-xl border border-[#86371C] text-[16px] text-[#86371C] mt-[50px]">
            Explore Our Menus
          </button>
        </div>
        <div className="w-[464px] h-[528px] rounded-[14px]">
          <img
            src={aboutLogo}
            alt=""
            className="h-full w-full rounded-[14px] object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMenuSection;
