import React from "react";
import { coffeeMenuData } from "../../../components/common/data";
import { Link } from "react-router-dom";
import coffeeMenubg from "../../../assets/CoffeeMenuImage/coffeeMenubg.png";

const CoffeeMenuSection = () => {
  return (
    <div className="pt-0 lg:pt-[80px] w-[340px] lg:w-[1391px] mx-auto flex flex-col justify-center items-center pb-[100px] relative">
      <img
        src={coffeeMenubg}
        alt=""
        className="hidden lg:flex absolute bottom-14 right-[-150px]"
      />
      <div className="flex justify-center items-center gap-[15px]">
        <div className="h-[3px] w-[50px] bg-gradient-to-l from-[#86371C]"></div>
        <p
          className="text-[16px] text-[#86371C]"
          style={{
            fontFamily: "Lemonada, cursive",
          }}>
          Coffee Menu
        </p>
        <div className="h-[3px] w-[50px] bg-gradient-to-r from-[#86371C]"></div>
      </div>
      <p
        className="text-[22px] lg:text-[44px] text-[#270A05] text-center mt-[10px] lg:mt-[14px]"
        style={{ fontFamily: "bakilda_historiregular" }}>
        Unlocklive Coffee Menu
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-[40px] lg:mt-[80px] pb-[40px] lg:pb-[60px]">
        {coffeeMenuData?.map((coffeeMenu, i) => {
          return (
            <div
              className="w-[340px] lg:w-[668px] h-[100px] lg:h-[144px] rounded-[12px] border border-[#270a054a] p-[4px] lg:p-[30px] flex justify-normal items-center gap-[20px] lg:gap-[136px]"
              key={i}>
              <div className="flex justify-normal items-center gap-[8px] lg:gap-[16px]">
                <div className="w-[75px] lg:w-[78px] h-[53px] lg:h-[75px] rounded-full border border-[#86371C] border-dotted flex justify-center items-center">
                  <div className="w-[45px] lg:w-[63px] h-[45px] lg:h-[65px] rounded-full">
                    <img
                      src={coffeeMenu?.img}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <p
                    className="text-[17px] lg:text-[24px] text-[#270A05] font-semibold"
                    style={{
                      fontFamily: "abril_displayregular_",
                    }}>
                    {coffeeMenu?.title}
                  </p>
                  <p
                    className="text-[12px] lg:text-[14px] text-[#270A05] font-normal"
                    style={{
                      fontFamily: "value_sans_proregular",
                    }}>
                    {coffeeMenu?.para}
                  </p>
                </div>
              </div>
              <div className="border border-[#86371C] h-[36px] lg:h-[57px] w-[49px] lg:w-[61px] rounded-full border-dotted flex justify-center items-center">
                <div className="bg-[#86371C] h-[30px] lg:h-[50px] w-[30px] lg:w-[50px] rounded-full flex justify-center items-center">
                  <p
                    className="text-[10px] lg:text-[20px] text-white font-medium"
                    style={{
                      fontFamily: "value_sans_proregular",
                    }}>
                    ${coffeeMenu?.rate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/menu">
        <button
          className="w-[130px] lg:w-[162px] text-[13px] lg:text-[16px] text-[#86371C] h-[39px] lg:h-[52px] rounded-[8px] lg:rounded-[12px] border border-[#86371C]"
          style={{
            fontFamily: "value_sans_proregular",
          }}>
          View All Menu
        </button>
      </Link>
    </div>
  );
};

export default CoffeeMenuSection;
