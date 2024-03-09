import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutMenuSection from "./AboutMenuSection/AboutMenuSection";
import CoffeeMenuSection from "./CoffeeMenuSection/CoffeeMenuSection";
import NewReceipeSection from "./NewReceipeSection/NewReceipeSection";
import ShowCase from "./ShowcaseSection/ShowCase";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMenuSection />
      <CoffeeMenuSection />
      <NewReceipeSection />
      {/* <ShowCase /> */}
    </>
  );
};

export default Home;
