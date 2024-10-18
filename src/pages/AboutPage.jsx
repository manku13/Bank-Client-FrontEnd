import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Achievements from "@containers/Achievements";
import AboutPageHeader from "@containers/About/AboutPageHeader";
import AboutPageContainer from "@containers/About/AboutPageContainer";
import Footer from "@containers/Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AboutPageHeader />
      <LazyLoad height={200}>
        <AboutPageContainer />
      </LazyLoad>
      <LazyLoad height={200}>
        <Achievements />
      </LazyLoad>
      <LazyLoad height={200}>
        <Footer />
      </LazyLoad>
    </div>
  );
};

export default AboutPage;
