import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import ContactContainer from "@containers/Contact/ContactContainer";
import BlogSection from "@containers/Blog/BlogSection";
import FaqsHeader from "@containers/FAQ/FaqsHeader";
import FaqsPageContainer from "@containers/FAQ/FaqsPageContainer";
import Footer from "@containers/Footer";

const FaqsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <FaqsHeader />
      <LazyLoad height={200}>
        <FaqsPageContainer />
      </LazyLoad>
      <LazyLoad height={200}>
        <ContactContainer />
      </LazyLoad>
      <LazyLoad height={200}>
        <BlogSection />
      </LazyLoad>
      <LazyLoad height={200}>
        <Footer />
      </LazyLoad>
    </div>
  );
};

export default FaqsPage;
