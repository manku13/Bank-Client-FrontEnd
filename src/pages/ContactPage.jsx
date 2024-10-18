import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Achievements from "@containers/Achievements";
import AboutPageContainer from "@containers/About/AboutPageContainer";
import ContactPageHeader from "@containers/Contact/ContactPageHeader";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ContactForm from "@containers/Forms/ContactForm";
import { Box } from "@mui/material";
import ContactDetails from "@containers/Contact/ContactDetails";
import Footer from "@containers/Footer";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ContactPageHeader />

      <Box
        my={"140px"}
        sx={{
          mx: "auto",
          width: "100%",
          maxWidth: { xs: "98%", sm: "92", md: "92%", lg: "80%" }, // Maximum width for larger screens
          px: { xs: 2, md: 0 }, // Adjust horizontal padding for smaller screens
        }}
      >
        <Grid container gap={5}>
          <Grid xs={12} sm={12} md={5}>
            <ContactForm />
          </Grid>
          <Grid xs={12} sm={12} md={6.5}>
            <ContactDetails />
          </Grid>
        </Grid>
      </Box>
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

export default ContactPage;
