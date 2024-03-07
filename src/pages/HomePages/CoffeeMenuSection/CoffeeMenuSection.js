import React from "react";
import img1 from "../../../assets/CoffeeMenuImage/1.jpeg";
import img2 from "../../../assets/CoffeeMenuImage/2.jpeg";
import img3 from "../../../assets/CoffeeMenuImage/3.jpeg";
import img4 from "../../../assets/CoffeeMenuImage/4.jpeg";
const CoffeeMenuSection = () => {
  const coffeeMenuData = [
    {
      id: 1,
      title: "Double Espresso x2",
      para: "There are many variations of passages Lorem Ipsum form",
      img: img1,
      rate: 10,
    },
    {
      id: 2,
      title: "Hazelnut Heaven Latte",
      para: "There are many variations of passages Lorem Ipsum form",
      img: img2,
      rate: 12,
    },
    {
      id: 3,
      title: "Salted Caramel Cold Brew",
      para: "There are many variations of passages Lorem Ipsum form",
      img: img3,
      rate: 9,
    },
    {
      id: 4,
      title: "Coconut Cream Delight (Summer)",
      para: "There are many variations of passages Lorem Ipsum form",
      img: img4,
      rate: 15,
    },
  ];
  return (
    <div className="pt-[100px] w-[1391px] mx-auto flex flex-col justify-center items-center pb-[100px]">
      <div className="flex justify-center items-center gap-[15px]">
        <div className="h-[3px] w-[180px] bg-gradient-to-l from-[#86371C]"></div>
        <p
          className="text-[16px] text-[#86371C]"
          style={{
            fontFamily: "Lemonada, cursive",
          }}>
          Coffee Menu
        </p>
        <div className="h-[3px] w-[180px] bg-gradient-to-r from-[#86371C]"></div>
      </div>
      <p
        className="text-[44px] text-[#270A05] text-center mt-[14px]"
        style={{ fontFamily: "bakilda_historiregular" }}>
        Unlocklive Coffee Menu
      </p>
      <div className="grid grid-cols-2 gap-[30px] mt-[80px] pb-[60px]">
        {coffeeMenuData?.map((e, i) => {
          return (
            <div
              className="w-[668px] h-[144px] rounded-[12px] border border-[#270a054a] p-[30px] flex justify-normal items-center gap-[136px]"
              key={i}>
              <div className="flex justify-normal items-center gap-[16px]">
                <div className="w-[78px] h-[75px] rounded-full border border-[#86371C] border-dotted flex justify-center items-center">
                  <div className="w-[63px] h-[65px] rounded-full">
                    <img
                      src={e?.img}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <p
                    className="text-[24px] text-[#270A05] font-semibold"
                    style={{
                      fontFamily: "abril_displayregular_",
                    }}>
                    {e?.title}
                  </p>
                  <p
                    className="text-[14px] text-[#270A05] font-normal"
                    style={{
                      fontFamily: "value_sans_proregular",
                    }}>
                    {e?.para}
                  </p>
                </div>
              </div>
              <div className="border border-[#86371C] h-[57px] w-[61px] rounded-full border-dotted flex justify-center items-center">
                <div className="bg-[#86371C] h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <p
                    className="text-[20px] text-white font-medium"
                    style={{
                      fontFamily: "value_sans_proregular",
                    }}>
                    ${e?.rate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="w-[162px] text-[16px] text-[#86371C] h-[52px] rounded-[12px] border border-[#86371C]">
        View All Menu
      </button>
    </div>
  );
};

export default CoffeeMenuSection;
