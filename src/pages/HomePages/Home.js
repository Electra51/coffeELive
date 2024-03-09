import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import CoffeeMenuSection from "./CoffeeMenuSection/CoffeeMenuSection";
import NewReceipeSection from "./NewReceipeSection/NewReceipeSection";
import ShowCase from "./ShowcaseSection/ShowCase";
import WhyChooseSection from "./WhyChooseSection/WhyChooseSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <CoffeeMenuSection />
      <NewReceipeSection />
      <ShowCase />
    </>
  );
};

export default Home;
