import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import HomeHeaderContainer from "@containers/HomeHeaderContainer";
import AboutContainer from "@containers/About/AboutContainer";
import ContactContainer from "@containers/Contact/ContactContainer";
import Services from "@containers/Services/Services";
import Reviews from "@containers/Reviews";
import LoanProcess from "@containers/LoanProcess";
import Achievements from "@containers/Achievements";
import BlogSection from "@containers/Blog/BlogSection";
import FAQ from "@containers/FAQ/FAQ";
import Footer from "@containers/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HomeHeaderContainer />
      <LazyLoad height={200}>
        <AboutContainer />
      </LazyLoad>
      <LazyLoad height={200}>
        <ContactContainer />
      </LazyLoad>
      <LazyLoad height={200}>
        <Services />
      </LazyLoad>
      <LazyLoad height={200}>
        <Reviews />
      </LazyLoad>
      <LazyLoad height={200}>
        <LoanProcess />
      </LazyLoad>
      <LazyLoad height={200}>
        <Achievements />
      </LazyLoad>
      <LazyLoad height={200}>
        <BlogSection />
      </LazyLoad>
      <LazyLoad height={200}>
        <FAQ />
      </LazyLoad>
      <LazyLoad height={200}>
        <Footer />
      </LazyLoad>
    </div>
  );
};

export default HomePage;
