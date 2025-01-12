import React, { useState } from "react";
import { images } from "../../../components/common/data";
import Button from "../../../components/common/Button";
import SectionHeaderText from "../../../components/common/SectionHeaderText";

const ShowCase = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const Burger = images?.filter((item) => item.category === "Burger");
  const Drinks = images?.filter((item) => item.category === "Drinks");
  const Pizza = images?.filter((item) => item.category === "Pizza");
  const Dinner = images?.filter((item) => item.category === "Dinner");
  const Cookies = images?.filter((item) => item.category === "Cookies");
  const Bakery = images?.filter((item) => item.category === "Bakery");

  const [index, setIndex] = useState(-1);
  const [displayCount, setDisplayCount] = useState(5);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const prevIndex = (index + images.length - 1) % images.length;

  console.log("currentImage", currentImage);
  const handleClick = (index) => setIndex(index);

  // Calculation container width based on the number of images and gap
  const containerWidth = images.length * (424 + 24) - 24;

  const showMore = (filteredItems) => {
    setDisplayCount(filteredItems.length);
  };

  const showLess = () => {
    setDisplayCount(5);
  };

  const renderFilteredServices = (filteredItems) => {
    if (filteredItems && filteredItems.length > 0) {
      return (
        <div style={{ maxWidth: containerWidth + "px" }}>
          <div className="flex flex-wrap gap-[24px] ">
            {filteredItems?.slice(0, displayCount).map((e, i) => {
              console.log("e", e);
              return (
                <div
                  key={i}
                  style={{
                    width: e.width + "px",
                    height: e.height + "px",
                    borderRadius: e.radius + "px",
                    overflow: "hidden",
                    marginBottom: "24px",
                  }}
                  className="relative">
                  <img
                    src={e.src}
                    alt={e.caption}
                    className="object-cover w-full h-full"
                    onClick={() => handleClick(i)}
                  />
                  <p
                    className="text-[14px] border border-white text-white border-opacity-50 px-2.5 py-0.5 rounded-[7px] hover:bg-[#86371C] cursor-pointer absolute bottom-5 left-5 shadow-md"
                    style={{ fontFamily: "value_sans_proregular" }}>
                    {e?.caption}
                  </p>
                </div>
              );
            })}

            {filteredItems.length > 5 && (
              <div className="flex justify-center mx-auto mt-4 pb-[90px]">
                {displayCount === filteredItems.length ? (
                  <Button
                    onClick={showLess}
                    title={"Show Less"}
                    bgColor={"#00FFFFFF"}
                    textColor={"#86371C"}
                  />
                ) : (
                  <Button
                    onClick={() => showMore(filteredItems)}
                    title={"Show More"}
                    bgColor={"#00FFFFFF"}
                    textColor={"#86371C"}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20 gap-4">
          No products available for the selected rating or search.
        </p>
      );
    }
  };

  return (
    <div className="mt-[360px] lg:mt-[90px] w-[340px] lg:w-[1391px] mx-auto">
      <p
        className="text-[16px] uppercase text-[#86371C] text-center leading-[24px]"
        style={{
          fontFamily: "Lemonada, cursive",
        }}>
        Showcase
      </p>
      <div className="h-[2px] mt-2 mx-auto w-[124px] bg-gradient-to-l from-[#df745151] via-[#86371C] to-[#df745151]"></div>

      <div className="flex justify-center items-center">
        <SectionHeaderText title={"Our Chefs New Creations"} />
      </div>
      <p
        className="text-[16px] lg:text-[18px] text-[#031811B2] w-[340px] text-center leading-[20px] lg:leading-[32px] lg:w-[674px] mx-auto mt-[19px] lg:mt-[24px]"
        style={{
          fontFamily: "value_sans_proregular",
        }}>
        Behold the extraordinary creations born from the synergy of our users'
        ingenuity and the transformative power of AI, a testament to boundless
        innovation.
      </p>

      <div className="mt-[60px] mx-auto  w-[340px] lg:w-[1320px]">
        <div className="hidden md:flex md:mx-auto lg:mx-0 lg:flex justify-center items-center gap-5">
          <p
            className={
              toggleState == 1
                ? "border-[1.5px] border-[#86371C] text-[#86371C] text-[22px] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[22px] text-[#031811] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            style={{ fontFamily: "value_sans_proregular" }}
            onClick={() => toggleTab(1)}>
            All
          </p>
          <p
            className={
              toggleState == 2
                ? " border-[1.5px] border-[#86371C] text-[#86371C] text-[22px] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[22px] text-[#031811] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(2)}>
            Burger
          </p>
          <p
            className={
              toggleState == 3
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[22px] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[22px] text-[#031811] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(3)}>
            Drinks
          </p>
          <p
            className={
              toggleState == 4
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[22px] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[22px] text-[#031811] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(4)}>
            Pizza
          </p>
          <p
            className={
              toggleState == 5
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[22px] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[22px] text-[#031811] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(5)}>
            Dinner
          </p>
          <p
            className={
              toggleState == 6
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[22px] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[22px] text-[#031811] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(6)}>
            Cookies
          </p>
          <p
            className={
              toggleState == 7
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[22px] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[22px] text-[#031811] font-normal px-[24px] py-[12px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(7)}>
            Bakery
          </p>
        </div>

        {/* for mobile  */}
        <div className="lg:hidden flex overflow-x-auto gap-x-[12px] w-[340px] mx-auto">
          <p
            className={
              toggleState == 1
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[16px] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[16px] text-[#031811] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            style={{ fontFamily: "value_sans_proregular" }}
            onClick={() => toggleTab(1)}>
            All
          </p>
          <p
            className={
              toggleState == 2
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[16px] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[16px] text-[#031811] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(2)}>
            Burger
          </p>
          <p
            className={
              toggleState == 3
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[16px] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[16px] text-[#031811] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(3)}>
            Drinks
          </p>
          <p
            className={
              toggleState == 4
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[16px] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[16px] text-[#031811] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(4)}>
            Pizza
          </p>
          <p
            className={
              toggleState == 5
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[16px] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[16px] text-[#031811] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(5)}>
            Dinner
          </p>
          <p
            className={
              toggleState == 6
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[16px] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[16px] text-[#031811] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(6)}>
            Cookies
          </p>
          <p
            className={
              toggleState == 7
                ? " border-[1.5px] border-[#86371C] text-[#86371C]  text-[16px] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
                : "text-[16px] text-[#031811] font-normal px-[10px] py-[5px] rounded-[50px] cursor-pointer hover:shadow-md shadow-[#86371C] hover:bg-[#86371C] hover:text-white"
            }
            onClick={() => toggleTab(7)}>
            Bakery
          </p>
        </div>
        <div className="mt-[48px]">
          {toggleState === 1 && renderFilteredServices(images)}
          {toggleState === 2 && renderFilteredServices(Burger)}
          {toggleState === 3 && renderFilteredServices(Drinks)}
          {toggleState === 4 && renderFilteredServices(Pizza)}
          {toggleState === 5 && renderFilteredServices(Dinner)}
          {toggleState === 6 && renderFilteredServices(Cookies)}
          {toggleState === 7 && renderFilteredServices(Bakery)}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
