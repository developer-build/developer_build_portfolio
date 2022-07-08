import React from "react";
import About from "./About/About";

import AboutSection from "./AboutSection/AboutSection";
import BlogSection from "./BlogSection/BlogSection";
import ContactSection from "./ContactSection/ContactSection";
import Counting from "./Counting/Counting";
import FAQsection from "./FAQsection/FAQsection";
import FixedBackground from "./FixedBackground/FixedBackground";
import HeroSection from "./HeroSection/HeroSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import PricingSection from "./PricingSection/PricingSection";
import Quote from "./Quote/Quote";
import Brand from "./Services/Brand";
import Services from "./Services/Services";
import TeamSection from "./TeamSection/TeamSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Counting />
      <AboutSection />
      <Brand />
      <Services />
      <FixedBackground />
      <PricingSection />
      <FAQsection />
      <PortfolioSection />
      <TeamSection />
      <Quote />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;
