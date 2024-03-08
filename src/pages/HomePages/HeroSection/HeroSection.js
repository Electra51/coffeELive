import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bg1 from "../../../assets/heroSectionImage/bg1.png";
import bg2 from "../../../assets/heroSectionImage/bg2.png";
import bg3 from "../../../assets/heroSectionImage/bg-coffee.png";
import openImg from "../../../assets/heroSectionImage/openimage.png";
import { FaPlay } from "react-icons/fa6";
import { heroData, aboutData } from "../../../components/common/data";

const HeroSection = () => {
  const settings = {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <img src={bg1} alt="" className="hidden lg:flex absolute top-10 left-2" />
      <img
        src={bg2}
        alt=""
        className="hidden lg:flex absolute w-[400px] bottom-[250px] right-20"
      />
      <img
        src={bg3}
        alt=""
        className="hidden lg:flex absolute w-[250px] bottom-[280px] left-60"
      />
      <div className="w-[340px] lg:w-[1391px] mx-auto mb-[80px] lg:mb-[175px]">
        <Slider {...settings}>
          {heroData?.map((hero, i) => {
            return (
              <div className="mt-[70px] lg:mt-[131px]" key={i}>
                <div className="block lg:flex justify-between items-center gap-[80px]">
                  <div className="">
                    <p
                      className="text-[#270A05] lg:text-left text-center pb-[12px]"
                      style={{
                        fontFamily: "Lemonada, cursive",
                      }}>
                      {hero?.welcome}
                    </p>
                    <h2
                      className="text-[50px] lg:text-[110px] lg:text-left text-center text-[#270A05]"
                      style={{ fontFamily: "bakilda_historiregular" }}>
                      {hero?.headline}
                    </h2>
                    <p
                      className="text-[20px] lg:text-[44px] text-[#270A05] lg:text-left text-center mt-[-10px] text-nowrap"
                      style={{ fontFamily: "bakilda_historiregular" }}>
                      {hero?.sub_head}
                    </p>
                    <p
                      className="text-[#270A05] mt-[12px] lg:mt-[24px] text-[16px] font-normal lg:text-left text-center"
                      style={{ fontFamily: "value_sans_proregular" }}>
                      {hero?.para}
                    </p>
                    <div className="flex justify-start gap-[44px] items-center lg:mt-[50px] mt-[20px]">
                      <button className="w-[190px] px-3 lg:w-[211px] h-[42px] lg:h-[52px] rounded-[8px] lg:rounded-[12px] bg-[#86371C] text-white flex justify-center items-center text-[12px] lg:text-[16px] text-nowrap">
                        EXPLORE OUR MENU
                      </button>

                      <div className="flex justify-normal items-center gap-[12px] lg:gap-[24px]">
                        {" "}
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                          {hero?.avarter_img?.map((avarter, i) => {
                            return (
                              <div className="avatar" key={i}>
                                <div className=" w-[39px] lg:w-[54px]">
                                  <img src={avarter?.img} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div>
                          <h2
                            className="text-[20px] lg:text-2xl font-semibold text-[#270A05]"
                            style={{
                              fontFamily: "abril_displayregular_",
                            }}>
                            1200+
                          </h2>
                          <p
                            className="hidden lg:flex text-[12px] lg:text-[14px] font-normal text-[#270A05]"
                            style={{
                              fontFamily: "value_sans_proregular",
                            }}>
                            Tasty Variant Coffee
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src={hero?.main_img} alt="banner image" width={600} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* mobile responsive */}
      <div className="lg:hidden bg-[#FFFAF2] w-[320px] mx-auto h-[335px] lg:h-[246px]">
        <div className="grid grid-cols-1 divide-y-2 gap-y-4">
          {aboutData?.map((data, i) => {
            return (
              <div className="" key={i}>
                <p
                  className="text-xl text-center font-semibold text-[#270A05] pt-4"
                  style={{ fontFamily: "abril_displayregular_" }}>
                  {data?.name}
                </p>
                <p
                  className="text-[14px] text-[#270A05] mt-[10px] text-center"
                  style={{ fontFamily: "value_sans_proregular" }}>
                  {data?.name2}
                </p>
                <p
                  className="text-[14px] text-[#270A05] text-center"
                  style={{ fontFamily: "value_sans_proregular" }}>
                  {data?.name3}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden lg:block bg-[#FFFAF2] h-[246px]">
        <div className="grid grid-cols-4 gap-[146px] w-[1391px] mx-auto">
          <div className="w-[319px] bg-[#86371C] h-[326px] rounded-b-xl">
            <img
              src={openImg}
              alt="w-[242px]"
              className=" px-[40px] py-[26px]"
            />
            <div className="flex justify-center items-center gap-[20px] mt-[18px]">
              <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border border-[#F2EFDF]">
                <FaPlay className="text-[20px] text-white" />
              </div>
              <p
                className="text-[24px] font-semibold text-white text-nowrap"
                style={{
                  fontFamily: "abril_displayregular_",
                }}>
                Play Intro Video
              </p>
            </div>
          </div>
          <div className="col-span-3 py-[70px]">
            <div className="grid grid-cols-3 divide-x-2 divide-[#270A05] divide-opacity-10">
              {aboutData?.map((data, i) => {
                return (
                  <div className=" pl-[76px]" key={i}>
                    <p
                      className="text-2xl font-semibold text-[#270A05]"
                      style={{ fontFamily: "abril_displayregular_" }}>
                      {data?.name}
                    </p>
                    <p
                      className="text-[16px] text-[#270A05] mt-[24px]"
                      style={{ fontFamily: "value_sans_proregular" }}>
                      {data?.name2}
                    </p>
                    <p
                      className="text-[16px] text-[#270A05] mt-[8px]"
                      style={{ fontFamily: "value_sans_proregular" }}>
                      {data?.name3}
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
