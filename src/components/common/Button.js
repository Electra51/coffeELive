import React from "react";

const Button = ({ title, bgColor, textColor, onClick }) => {
  console.log("first", title);
  return (
    <button
      onClick={onClick}
      className={`w-[190px] px-3 lg:w-[211px] h-[42px] lg:h-[52px] rounded-[8px] lg:rounded-[12px] bg-[${bgColor}] ${
        textColor == "white" ? "text-white" : `text-[${textColor}]`
      }   flex justify-center items-center text-[12px] lg:text-[16px] text-nowrap border border-[#86371C]`}
      style={{
        fontFamily: "value_sans_proregular",
      }}>
      {title}
    </button>
  );
};

export default Button;
