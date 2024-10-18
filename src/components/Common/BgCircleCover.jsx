import React from "react";
import bgCircle from "@assets/bg-circle.png";
import { styled } from "@mui/material";

const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${bgCircle})`, // Set bgCircle as background image
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain", // Adjust size as needed
  backgroundPosition: "bottom center", // Set position to bottom center
}));

const BackgroundContainer = styled("div")(({ theme }) => ({
  height: "85vh",

  background: "linear-gradient(to bottom, #4bc3cc, #1796a0)", // Set linear gradient
  [theme.breakpoints.only("xs")]: {
    marginTop: "50px",
    height: "50vh",
    width: "100%",
  },
}));

const GirlImageContainer = styled("div")({
  display: "flex",
  position: "absolute",
  bottom: 0,
  left: 25,
  overflow: "visible",
  width: "100%", // Ensure the girl image fills the container
});

const BgClicleCover = ({ image, imgWidth, contWidth, bRadius }) => {
  return (
    <BackgroundContainer style={{ width: contWidth, borderRadius: bRadius }}>
      <ImageContainer>
        <GirlImageContainer>
          <img
            style={{ width: imgWidth }} // Set image width to 100%
            src={image}
            alt="Your Image"
          />
        </GirlImageContainer>
      </ImageContainer>
    </BackgroundContainer>
  );
};

export default BgClicleCover;
