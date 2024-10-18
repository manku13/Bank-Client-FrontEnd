import React from "react";
import { useState, useEffect } from "react";
import Item from "./item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axis from "@assets/axis.png";
import hdfc from "@assets/hdfc.png";
import sbi from "@assets/sbi.png";
import union from "@assets/union.png";
import pnb from "@assets/pnb.png";

function MyCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Update the slidesToShow value based on screen size
      if (window.innerWidth <= 600) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    // Add event listener to update slidesToShow value on window resize
    window.addEventListener("resize", handleResize);

    // Initial value setup
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  var items = [
    {
      name: "Axis",
      logo: axis,
    },
    {
      name: "SBI",
      logo: sbi,
    },
    {
      name: "PNB",
      logo: pnb,
    },
    {
      name: "HDFC",
      logo: hdfc,
    },
    {
      name: "Union",
      logo: union,
    },
  ];

  var settings = {
    dots: false,
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow, // Use the dynamic slidesToShow value
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Slider>
  );
}

export default MyCarousel;
