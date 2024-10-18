import React from "react";
import { useState, useEffect } from "react";
import Item from "./item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, IconButton, Typography } from "@mui/material";
import { FaBell } from "react-icons/fa6";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function Marquee() {
  var items = [
    {
      text: "This is notification1",
    },
    {
      text: "This is notification2",
    },
    {
      text: "This is notification3",
    },
    {
      text: "This is notification4",
    },
  ];

  var settings = {
    dots: false,
    arrows: false,
    speed: 7000,
    autoplay: true,
    slidesToShow: 1, // Use the dynamic slidesToShow value
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
  };

  return (
    <Grid container p={3} bgcolor={"black"}>
      <Grid xs={1}>
        <FaBell color="white" />
      </Grid>
      <Grid xs={11}>
        <Slider {...settings}>
          {items.map((item, index) => (
            <Typography key={index} color={"white"}>
              {item.text}
            </Typography>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
}

export default Marquee;
