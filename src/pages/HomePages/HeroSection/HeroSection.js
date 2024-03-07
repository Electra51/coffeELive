import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/heroSectionImage/1.png";
import img2 from "../../../assets/heroSectionImage/2.png";
import img3 from "../../../assets/heroSectionImage/3.png";
import img4 from "../../../assets/heroSectionImage/4.png";
import img5 from "../../../assets/heroSectionImage/5.png";
import img6 from "../../../assets/heroSectionImage/6.png";
import avarter1 from "../../../assets/heroSectionImage/avater1.jpeg";
import avarter2 from "../../../assets/heroSectionImage/avater2.jpeg";
import avarter3 from "../../../assets/heroSectionImage/avater3.jpeg";
import avarter4 from "../../../assets/heroSectionImage/avater4.jpeg";
import avarter5 from "../../../assets/heroSectionImage/avater5.jpeg";
import avarter6 from "../../../assets/heroSectionImage/avater6.jpeg";
import bg1 from "../../../assets/heroSectionImage/bg1.png";
import bg2 from "../../../assets/heroSectionImage/bg2.png";
// import bg3 from "../../../assets/heroSectionImage/bg3.png";
const HeroSection = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const heroData = [
    {
      id: 1,
      welcome: "WELCOME TO OUR",
      headline: " Unlocklive",
      sub_head: "Elevating Your Coffee Experience",
      para: "Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
      main_img: img1,
      avarter_img: [
        {
          id: 1,
          img: avarter1,
        },
        {
          id: 2,
          img: avarter2,
        },
        {
          id: 3,
          img: avarter3,
        },
      ],
    },
    {
      id: 2,
      welcome: "WELCOME TO OUR",
      headline: " Unlocklive",
      sub_head: "Elevating Your Coffee Experience",
      para: "Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
      main_img: img2,
      avarter_img: [
        {
          id: 1,
          img: avarter4,
        },
        {
          id: 2,
          img: avarter5,
        },
        {
          id: 3,
          img: avarter6,
        },
      ],
    },
    {
      id: 3,
      welcome: "WELCOME TO OUR",
      headline: " Unlocklive",
      sub_head: "Elevating Your Coffee Experience",
      para: "Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
      main_img: img3,
      avarter_img: [
        {
          id: 1,
          img: avarter1,
        },
        {
          id: 2,
          img: avarter3,
        },
        {
          id: 3,
          img: avarter5,
        },
      ],
    },
    {
      id: 4,
      welcome: "WELCOME TO OUR",
      headline: " Unlocklive",
      sub_head: "Elevating Your Coffee Experience",
      para: "Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
      main_img: img4,
      avarter_img: [
        {
          id: 1,
          img: avarter2,
        },
        {
          id: 2,
          img: avarter4,
        },
        {
          id: 3,
          img: avarter6,
        },
      ],
    },
    {
      id: 5,
      welcome: "WELCOME TO OUR",
      headline: " Unlocklive",
      sub_head: "Elevating Your Coffee Experience",
      para: "Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
      main_img: img5,
      avarter_img: [
        {
          id: 1,
          img: avarter2,
        },
        {
          id: 2,
          img: avarter3,
        },
        {
          id: 3,
          img: avarter4,
        },
      ],
    },
    {
      id: 6,
      welcome: "WELCOME TO OUR",
      headline: " Unlocklive",
      sub_head: "Elevating Your Coffee Experience",
      para: "Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
      main_img: img6,
      avarter_img: [
        {
          id: 1,
          img: avarter5,
        },
        {
          id: 2,
          img: avarter6,
        },
        {
          id: 3,
          img: avarter1,
        },
      ],
    },
  ];

  const aboutData = [
    {
      id: 1,
      name: "Our Opening Hours",
      name2: "Mon - Sat: 07:00 - 18:00",
      name3: "Only Sun: 09:00 - 14:00",
    },
    {
      id: 2,
      name: "Our Live Location",
      name2: "848 A 28TH ST, Brooklyn",
      name3: "New York, UK",
    },
    {
      id: 3,
      name: "Book A Table Now",
      name2: "+1 318-254-6849",
      name3: "+1 452-754-6579",
    },
  ];
  return (
    <div className=" relative">
      <img src={bg1} alt="" className="absolute top-10 left-2" />
      <img
        src={bg2}
        alt=""
        className="absolute w-[400px] bottom-[250px] right-20"
      />
      <div className="w-[1391px] mx-auto mb-[175px]">
        <Slider {...settings}>
          {heroData?.map((e, i) => {
            return (
              <div className="mt-[131px]" key={i}>
                <div className="flex justify-between items-center gap-[80px]">
                  <div className="">
                    <p
                      className="text-[#270A05] pb-[12px]"
                      style={{
                        fontFamily: "Lemonada, cursive",
                      }}>
                      {e?.welcome}
                    </p>
                    <h2
                      className="text-[110px] text-[#270A05]"
                      style={{ fontFamily: "bakilda_historiregular" }}>
                      {e?.headline}
                    </h2>
                    <p
                      className="text-[44px] text-[#270A05] mt-[-10px] text-nowrap"
                      style={{ fontFamily: "bakilda_historiregular" }}>
                      {e?.sub_head}
                    </p>
                    <p
                      className="text-[#270A05] mt-[24px] text-[16px] font-normal"
                      style={{ fontFamily: "value_sans_proregular" }}>
                      {e?.para}
                    </p>
                    <div className="flex justify-start gap-[44px] items-center mt-[50px]">
                      <button className="w-[211px] h-[52px] rounded-[12px] bg-[#86371C] text-white flex justify-center items-center ">
                        EXPLORE OUR MENU
                      </button>

                      <div className="flex justify-normal items-center gap-[24px]">
                        {" "}
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                          {e?.avarter_img?.map((s, i) => {
                            return (
                              <div className="avatar">
                                <div className="w-[54px]">
                                  <img src={s?.img} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div>
                          <h2
                            className="text-2xl font-semibold text-[#270A05]"
                            style={{
                              fontFamily: "abril_displayregular_",
                            }}>
                            1200+
                          </h2>
                          <p
                            className="text-[14px] font-normal text-[#270A05]"
                            style={{
                              fontFamily: "value_sans_proregular",
                            }}>
                            Tasty Variant Coffee
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src={e?.main_img} alt="" width={600} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="bg-[#FFFAF2] h-[246px] border border-red-500 ">
        <div className="grid grid-cols-4 gap-[146px] w-[1391px] mx-auto">
          <div className="w-[319px] bg-[#86371C] h-[326px] rounded-b-xl"></div>
          <div className="col-span-3 py-[70px]">
            <div className="grid grid-cols-3 divide-x-2 ">
              {aboutData?.map((e, i) => {
                return (
                  <div className=" pl-[76px]">
                    <p
                      className="text-2xl font-semibold text-[#270A05]"
                      style={{ fontFamily: "abril_displayregular_" }}>
                      {e?.name}
                    </p>
                    <p
                      className="text-[16px] text-[#270A05] mt-[24px]"
                      style={{ fontFamily: "value_sans_proregular" }}>
                      {e?.name2}
                    </p>
                    <p
                      className="text-[16px] text-[#270A05] mt-[8px]"
                      style={{ fontFamily: "value_sans_proregular" }}>
                      {e?.name3}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
