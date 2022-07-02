import React from "react";

import AboutSection from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import HeroSection from "./HeroSection/HeroSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import PricingSection from "./PricingSection/PricingSection";
import Services from "./Services/Services";
import TeamSection from "./TeamSection/TeamSection";

const Home = () => {
  return (
    <>

      <HeroSection />
      <AboutSection />
      <Services />
      <PricingSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
    </>
  );
};

export default Home;
