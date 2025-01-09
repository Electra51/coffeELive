import React from "react";
import NewImage from "../../assets/AboutSectionImage/4.jpg";

import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
const LastPart = () => {
  return (
    <div
      className="hero h-[430px] bg-fixed"
      style={{
        backgroundImage: `url(${NewImage})`,
      }}>
      <div className="hero-overlay bg-opacity-30"></div>

      <h1 className="font-medium text-[25px] lg:text-[50px] text-center text-white">
        Wanna join the CoffeELive?
      </h1>
      <p
        className="mt-24 text-[16px] font-medium text-white text-center"
        style={{ fontFamily: "value_sans_proregular" }}>
        It is a long established fact will be distracted.
      </p>

      <div className="mt-56">
        {" "}
        <Button title={"Contact Us"} bgColor={"#86371C"} textColor={"white"} />
      </div>
    </div>
  );
};

export default LastPart;
