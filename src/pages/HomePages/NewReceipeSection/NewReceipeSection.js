import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { RecipeData } from "../../../components/common/data";

const NewReceipeSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="pt-0 lg:pt-[100px] h-[673px] bg-[#FFFAF2]">
      <div className="flex flex-col lg:flex-row justify-normal items-center gap-[60px] lg:gap-[100px] w-[340px] lg:w-[1391px] mx-auto">
        <div className="w-[340px] lg:w-[593px]">
          <div className="flex justify-center lg:justify-normal items-center gap-[10px]">
            <div className="h-[3px] w-[50px] bg-gradient-to-l from-[#86371C]"></div>
            <p
              className="text-[16px] text-[#86371C] text-nowrap"
              style={{
                fontFamily: "Lemonada, cursive",
              }}>
              New Recipes
            </p>{" "}
            <div className="h-[3px] w-[50px] bg-gradient-to-r from-[#86371C] lg:hidden"></div>
          </div>

          <p
            className=" text-[22px] lg:text-left text-center lg:text-[44px] text-[#270A05] mt-[10px] lg:mt-[12px] leading-[30px] lg:leading-[60px]"
            style={{ fontFamily: "bakilda_historiregular" }}>
            Taste Our New Recipe
          </p>
          <p
            className="text-[16px] font-normal leading-[21px] lg:leading-[24px] mt-[19px] text-[#53565C] text-justify"
            style={{
              fontFamily: "value_sans_proregular",
            }}>
            Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
            malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
            porttitor scelerisque amet dolor et. Nisi ac vitae tortor
            lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis
            nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing
            eu sit ornare imperdiet viverra sit vel.
          </p>
          <p
            className="text-[16px] font-normal leading-[21px] lg:leading-[24px] mt-[19px] text-[#53565C] text-justify"
            style={{
              fontFamily: "value_sans_proregular",
            }}>
            There are many variations of passages of Lorem Ipsum form any
            injected humour, or randomised words which don't look slightly
            believable.
          </p>
          <div className="flex justify-center lg:justify-normal items-center gap-[20px] lg:gap-[30px] mt-[20px] lg:mt-[40px]">
            <div
              className="w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer border border-[#270A05]"
              onClick={goToPrevSlide}>
              <TiArrowLeft className="text-2xl" />
            </div>
            <div
              className="w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer border border-[#270A05]"
              onClick={goToNextSlide}>
              <TiArrowRight className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="w-[340px] lg:w-[800px]">
          <Slider ref={sliderRef} {...settings}>
            {RecipeData?.map((e, i) => (
              <div key={i}>
                <div className="relative block w-[340px] lg:w-[375px] h-[460px] lg:h-[472px] rounded-[28px] bg-gray-900 group">
                  <img
                    className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50 rounded-[28px] group-hover:border-[9px] border-white"
                    src={e?.img}
                  />
                  <div className="relative p-5">
                    <div className="absolute top-[350px] left-6">
                      {/* Hidden content */}
                      <div
                        className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                        <ul
                          className="pl-2 lg:pl-6 text-[16px] text-white leading-[26px] list-disc"
                          style={{
                            fontFamily: "value_sans_proregular",
                          }}>
                          <li>{e?.title}</li>
                          <li>{e?.text}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewReceipeSection;
