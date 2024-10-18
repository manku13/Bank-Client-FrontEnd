import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Services from "@containers/Services/Services";
import Reviews from "@containers/Reviews";
import FAQ from "@containers/FAQ/FAQ";
import ServicesHeader from "@containers/Services/ServicesHeader";
import LoansCardList from "@containers/LoansCardList";
import Footer from "@containers/Footer";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ServicesHeader />
      <LazyLoad height={200}>
        <LoansCardList />
      </LazyLoad>
      <LazyLoad height={200}>
        <Reviews />
      </LazyLoad>
      <LazyLoad height={200}>
        <Services />
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

export default ServicesPage;
