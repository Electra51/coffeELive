import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const NewReceipeSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  return (
    <div className="pt-[100px] relative">
      <div className=" flex justify-normal items-center gap-[100px] w-[1391px] mx-auto">
        {" "}
        <div className="w-[593px]">
          {" "}
          <div className="flex justify-center items-center gap-[15px]">
            <div className="h-[3px] w-[60px] bg-gradient-to-l from-[#86371C]"></div>
            <p
              className="text-[16px] text-[#86371C] text-nowrap"
              style={{
                fontFamily: "Lemonada, cursive",
              }}>
              New Recipes
            </p>
          </div>
          <p
            className="mt-[12px] text-[44px] text-[#270A05] leading-[60px]"
            style={{ fontFamily: "bakilda_historiregular" }}>
            Taste Our New Recipe
          </p>
          <p className="text-[16px] leading-[24px] mt-[19px] text-[#53565C]">
            Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
            malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
            porttitor scelerisque amet dolor et. Nisi ac vitae tortor
            lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis
            nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing
            eu sit ornare imperdiet viverra sit vel.{" "}
          </p>
        </div>
        <div className="w-[1232px] absolute bottom-0 left-[520px]">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewReceipeSection;
