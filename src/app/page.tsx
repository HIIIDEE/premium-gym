"use client";

import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";
import Planning from "../components/sections/Planning";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const PremiumGymSite: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Stats />
      <Planning />
      <Pricing />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default PremiumGymSite;
