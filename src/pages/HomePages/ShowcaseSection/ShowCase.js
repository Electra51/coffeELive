import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images } from "./images";

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

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  // Calculate container width based on the number of images and gap
  const containerWidth = images.length * (424 + 24) - 24;

  const renderFilteredServices = (filteredItems) => {
    if (filteredItems && filteredItems.length > 0) {
      return (
        <div style={{ maxWidth: containerWidth + "px" }}>
          <div className="flex flex-wrap gap-[24px]">
            {filteredItems?.map((e, i) => (
              <div
                key={i}
                style={{
                  width: e.width + "px",
                  height: e.height + "px",
                  borderRadius: e.radius + "px",
                  overflow: "hidden",
                  marginBottom: "24px", // Add gap at the bottom
                }}>
                <img
                  src={e.src}
                  alt={e.caption}
                  className="object-cover w-full h-full"
                  onClick={() => handleClick(i)}
                />
              </div>
            ))}

            {!!currentImage && (
              <Lightbox
                mainSrc={currentImage.original}
                imageTitle={currentImage.caption}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.original}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.original}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
              />
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
    <div className="pt-[90px] w-[1391px] mx-auto">
      <p
        className="text-[16px] uppercase text-[#86371C] text-center leading-[24px]"
        style={{
          fontFamily: "Lemonada, cursive",
        }}>
        Showcase
      </p>
      <div className="h-[2px] mt-2 mx-auto w-[124px] bg-gradient-to-l from-[#df745151] via-[#86371C] to-[#df745151]"></div>
      <p
        className="mt-[12px] text-[44px] text-[#270A05] text-center"
        style={{ fontFamily: "bakilda_historiregular" }}>
        Our Chefs New Creations
      </p>
      <p
        className="text-[18px] text-[#031811B2] w-[674px] mx-auto mt-[24px]"
        style={{
          fontFamily: "value_sans_proregular",
        }}>
        Behold the extraordinary creations born from the synergy of our users'
        ingenuity and the transformative power of AI, a testament to boundless
        innovation.
      </p>

      <div className="mt-[60px] mx-auto w-[1320px]">
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
        <div className="mt-[48px]">
          {toggleState === 1 && renderFilteredServices(images)}
          {toggleState === 2 && renderFilteredServices(Burger)}
          {toggleState === 3 && renderFilteredServices(Drinks)}
          {toggleState === 4 && renderFilteredServices(Pizza)}{" "}
          {toggleState === 5 && renderFilteredServices(Dinner)}
          {toggleState === 6 && renderFilteredServices(Cookies)}
          {toggleState === 7 && renderFilteredServices(Bakery)}
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
