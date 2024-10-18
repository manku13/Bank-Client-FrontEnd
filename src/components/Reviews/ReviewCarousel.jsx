import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
import avatar from "@assets/face.jpg";
function ReviewCarousel({ reviewsList, rtl }) {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Update the slidesToShow value based on screen size
      if (window.innerWidth <= 1000 && window.innerWidth >= 551) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 550) {
        setSlidesToShow(1);
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
      name: "Sapna",
      avatar: avatar,
    },
    {
      name: "Sapna",
      avatar: avatar,
    },
    {
      name: "Sapna",
      avatar: avatar,
    },
    {
      name: "Sapna",
      avatar: avatar,
    },
    {
      name: "Sapna",
      avatar: avatar,
    },
    {
      name: "Sapna",
      avatar: avatar,
    },
    {
      name: "Sapna",
      avatar: avatar,
    },
    {
      name: "Sapna",
      avatar: avatar,
    },
  ];

  var settings = {
    dots: false,
    arrows: false,
    slidesToShow: slidesToShow, // Use the dynamic slidesToShow value
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    rtl: rtl,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <ReviewCard key={index} item={item} />
      ))}
    </Slider>
  );
}

export default ReviewCarousel;
