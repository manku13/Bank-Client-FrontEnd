import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import BlogSection from "@containers/Blog/BlogSection";
import BlogsHeader from "@containers/Blog/BlogsHeader";
import BlogCard from "@components/BlogCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useMediaQuery } from "@mui/material";
import Footer from "@containers/Footer";

const BlogsPage = () => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <BlogsHeader />
      <LazyLoad height={200}>
        <BlogSection />
      </LazyLoad>
      <LazyLoad height={200}>
        <Grid
          my={"140px"}
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: { xs: "98%", sm: "92", md: "92%", lg: "90%" }, // Maximum width for larger screens
            px: { xs: 2, md: 0 }, // Adjust horizontal padding for smaller screens
          }}
          container
          justifyContent={"center"}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          gap={2}
          display={"flex"}
          alignItems={"center"}
        >
          <Grid xs={12} sm={12} md={3.5}>
            <BlogCard
              date={"September 18, 2023"}
              title={
                "Small Business Success Stories: How Loans Made a Difference"
              }
              displayType={"block"}
            />
          </Grid>
          <Grid xs={12} sm={12} md={3.5}>
            <BlogCard
              date={"September 18, 2023"}
              title={"The ABCs of Commercial Mortgages: What You Need to Know"}
              displayType={"block"}
            />
          </Grid>
          <Grid xs={12} sm={12} md={3.5}>
            <BlogCard
              date={"September 18, 2023"}
              title={"The Human Touch in Banking: Personalized Business Loans"}
              displayType={"block"}
            />
          </Grid>
        </Grid>
      </LazyLoad>
      <LazyLoad height={200}>
        <Footer />
      </LazyLoad>
    </div>
  );
};

export default BlogsPage;
