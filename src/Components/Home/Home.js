import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import PricingSection from "./PricingSection/PricingSection";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <PricingSection />
      <PortfolioSection />
    </>
  );
};

export default Home;
