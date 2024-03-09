import React from "react";

const SectionHeaderText = ({ title }) => {
  return (
    <p
      className="text-[22px] lg:text-left text-center lg:text-[44px] text-[#270A05] mt-[10px] lg:mt-[12px] leading-[30px] lg:leading-[60px]"
      style={{ fontFamily: "bakilda_historiregular" }}>
      {title}
    </p>
  );
};

export default SectionHeaderText;
