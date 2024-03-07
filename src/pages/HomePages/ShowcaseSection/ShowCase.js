import React, { useState } from "react";

const ShowCase = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  //   //filter handle function
  //   const handleRatingFilterChange = (e) => {
  //     const selectedRating = e.target.value;
  //     setRatingFilter(selectedRating);
  //   };

  //   const Art = filteredServices?.filter((item) => item.type === "Art");
  //   const Celebrities = filteredServices?.filter(
  //     (item) => item.type === "Celebrities"
  //   );
  //   const Gaming = filteredServices?.filter((item) => item.type === "Gaming");
  //   const Sport = filteredServices?.filter((item) => item.type === "Sport");
  //   const Music = filteredServices?.filter((item) => item.type === "Music");
  //   const Crypto = filteredServices?.filter((item) => item.type === "Crypto");

  //   const renderFilteredServices = (filteredItems) => {
  //     if (filteredItems && filteredItems.length > 0) {
  //       return (
  //         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 my-7 justify-items-center">
  //           {filteredItems.map((item, index) => (
  //             <Card item={item} key={index} />
  //           ))}
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20 gap-4">
  //           No products available for the selected rating or search.
  //         </p>
  //       );
  //     }
  //   };
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
          {toggleState === 1 && <p>hi</p>}
          {toggleState === 2 && <p>hi hello</p>}
          {toggleState === 3 && <p>hi</p>}
          {toggleState === 4 && <p>hi</p>}
          {toggleState === 5 && <p>hi</p>}
          {toggleState === 6 && <p>hi</p>}
          {toggleState === 7 && <p>hi</p>}
        </div>
      </div>

      {/* <div className="md:mt-[90px] lg:mt-0">
        {toggleState === 1 && renderFilteredServices(filteredServices)}
        {toggleState === 2 && renderFilteredServices(Art)}
        {toggleState === 3 && renderFilteredServices(Celebrities)}
        {toggleState === 4 && renderFilteredServices(Gaming)}
        {toggleState === 5 && renderFilteredServices(Sport)}
        {toggleState === 6 && renderFilteredServices(Music)}
        {toggleState === 7 && renderFilteredServices(Crypto)}

        <Link
          to="/market_place"
          className="py-[30px] flex justify-center items-center">
          <button>
            <p className="h-[66px] w-[179px] rounded-[50px] text-[#3D00B7] border border-[#3D00B7] text-xl text-medium flex justify-center items-center cursor-pointer hover:shadow-md shadow-violet-900 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:text-white">
              More NFTs
            </p>
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default ShowCase;
