import React from "react";
import SectionHeaderText from "../../components/common/SectionHeaderText";
import imga from "../../assets/AboutSectionImage/a.png";
import imgceo from "../../assets/AboutSectionImage/ceo.png";
import img3 from "../../assets/AboutSectionImage/3.jpg";
import img4 from "../../assets/AboutSectionImage/4.jpg";
import img5 from "../../assets/AboutSectionImage/5.jpg";
import SocialIcons from "../../components/common/SocialIcons";
import LastPart from "./LastPart";
const About = () => {
  const stats = [
    {
      number: 250,
      label: "Varaities of Coffee",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    },
    {
      number: 123,
      label: "Hours of Testing",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    },
    {
      number: 321,
      label: "Coffee Markets",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    },
    {
      number: 220,
      label: "Coffee Brands",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    },
  ];
  return (
    <div>
      <div className="w-[390px] lg:w-[1360px] mx-auto mb-[100px] lg:mb-[175px]">
        <div className="mt-20 grid grid-cols-2 gap-14">
          <div>
            <div className="flex justify-center lg:justify-normal items-center gap-[10px]">
              <div className="h-[3px] w-[50px] bg-gradient-to-l from-[#86371C]"></div>
              <h2
                className="text-[16px] text-[#86371C]"
                style={{
                  fontFamily: "Lemonada, cursive",
                }}>
                About CoffeELive
              </h2>{" "}
              <div className="h-[3px] w-[50px] bg-gradient-to-r from-[#86371C] lg:hidden"></div>
            </div>

            <SectionHeaderText title={"Brewing Moments, One Cup at a Time"} />
            <p
              className="text-[16px] text-[#270A05] lg:text-justify text-center font-normal mt-[12px] leading-[22px] lg:leading-[27px]"
              style={{ fontFamily: "value_sans_proregular" }}>
              At CoffeELive, we’re more than just a coffee shop – we’re a
              community hub where great coffee and great people meet. Founded in
              2024, our journey began with a passion for brewing exceptional
              coffee and creating a cozy space where everyone feels at home.
              What started as a small dream has now become a thriving
              destination for coffee lovers and casual hangouts alike.
            </p>
          </div>
          <div>
            <img src={imga} alt="" />
          </div>
        </div>
        <div className="mt-[180px] grid grid-cols-2 items-center gap-14">
          <div>
            <img src={imgceo} alt="" />
          </div>
          <div>
            <div className="flex justify-center lg:justify-normal items-center gap-[10px]">
              <div className="h-[3px] w-[50px] bg-gradient-to-l from-[#86371C]"></div>
              <h2
                className="text-[16px] text-[#86371C]"
                style={{
                  fontFamily: "Lemonada, cursive",
                }}>
                The Owner Words
              </h2>{" "}
              <div className="h-[3px] w-[50px] bg-gradient-to-r from-[#86371C] lg:hidden"></div>
            </div>

            <SectionHeaderText title={"Welcome to CoffeELive!"} />
            <p
              className="text-[16px] text-[#270A05] lg:text-justify text-center font-normal mt-[12px] leading-[22px] lg:leading-[27px]"
              style={{ fontFamily: "value_sans_proregular" }}>
              As the owner of this coffee shop, my vision has always been
              simple: to create a space where every sip tells a story and every
              visit feels like home. Coffee is more than just a drink to me –
              it’s an experience, a connection, and a moment of comfort in our
              busy lives. At CoffeELive, we believe in the magic of bringing
              people together over a great cup of coffee. From sourcing the
              finest beans to perfecting every brew, our goal is to ensure you
              enjoy the best coffee possible. This shop is more than just a
              business – it’s a reflection of my passion for coffee and my
              desire to build a community. Whether you’re here to work, relax,
              or catch up with friends, I hope you feel the warmth and care that
              we pour into everything we do. Thank you for being part of our
              story. Your support means the world to us, and we can’t wait to
              serve you again and again.
            </p>
            <p
              style={{ fontFamily: "value_sans_proregular" }}
              className="text-[16px] text-[#270A05] lg:text-justify text-center font-normal mt-[16px] leading-[22px] lg:leading-[27px]">
              {" "}
              Warm regards,
            </p>
            <p
              style={{ fontFamily: "value_sans_proregular" }}
              className="text-[16px] text-[#270A05] lg:text-justify text-center font-normal">
              {" "}
              Mr. Devid Anthony Owner,
            </p>
            <p
              style={{ fontFamily: "value_sans_proregular" }}
              className="text-[16px] text-[#270A05] lg:text-justify text-center font-normal">
              CoffeELive
            </p>
            <p
              style={{ fontFamily: "value_sans_proregular" }}
              className="text-[16px] text-[#270A05] lg:text-justify text-center font-normal mt-6 mb-[-5px]">
              Contact Me with on
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
      <LastPart />

      <div className="w-[390px] lg:w-[1360px] mx-auto mb-[100px] lg:mb-[175px] text-center mt-[130px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="hover:shadow-lg p-6 rounded-lg hover:bg-white hover:scale-105 transform transition duration-300">
              <h3
                className="text-3xl font-bold  text-[#86371C]"
                style={{ fontFamily: "value_sans_proregular" }}>
                {stat.number}
              </h3>
              <p
                className="text-3xl font-semibold mt-2 text-[#86371C] tracking-[1]"
                style={{ fontFamily: "bakilda_historiregular" }}>
                {stat.label}
              </p>
              <p
                className="text-[#7d4937] mt-2"
                style={{ fontFamily: "value_sans_proregular" }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
