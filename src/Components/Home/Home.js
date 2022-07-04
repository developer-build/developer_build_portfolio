import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import BlogSection from "./BlogSection/BlogSection";
import ContactSection from "./ContactSection/ContactSection";
import FAQsection from "./FAQsection/FAQsection";
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
      <FAQsection />
      <PortfolioSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;
