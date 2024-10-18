import React, { useState } from "react";
import { Button, Typography, styled, Box } from "@mui/material";
import Header from "@containers/Header"; // Using alias
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Stack from "@mui/material/Stack";
import bgCircle from "@assets/bg-circle.png"; // Using alias
import headerGirl from "@assets/header_girl.png"; // Using alias
import GppGoodIcon from "@mui/icons-material/GppGood";
import PaidIcon from "@mui/icons-material/Paid";
import MyCarousel from "@components/Common/Carousel"; // Using alias
import InstantLoanForm from "./Forms/InstantLoanForm";
import CustomButton from "@components/Common/CustomButton";
// Your component code here...

// Define a new styled component for the image

const ImageContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "59%", // Set the width to 50% of its container
  height: "75%", // Maintain aspect ratio
  [theme.breakpoints.only("sm")]: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "30%",
    width: "30%",
    // Set height to 100% for md and above screens
    bottom: "50%", // Position at vertical center for md and above screens
    right: "50%", // Position at horizontal center for md and above screens
    transform: "translate(50%, 50%)", // Translate to center
  },
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));

const GirlImageContainer = styled("div")({
  position: "absolute",
  bottom: 25,
  right: -50,
  marginBottom: "20px",
  width: "50%", // Set the width to 50% of its container
  height: "80%", // Maintain aspect ratio
});

const FullHeightContainer = styled("div")({
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: "#DEF5F3",
  overflow: "hidden", // Hide overflow content
});

const BackgroundContainer = styled("div")({
  width: "90vw",
  height: "auto",
  padding: "20px",
  margin: "0 auto",
  borderRadius: "0px 0px 20px 20px",
  position: "relative",
  overflow: "hidden",
  backgroundImage: `url(${bgCircle})`, // Set the image as background
  backgroundSize: "contain", // Adjust size as needed
  backgroundPosition: "bottom right", // Set position to bottom right
  backgroundRepeat: "no-repeat", // Prevent image repetition
  backgroundBlendMode: "lighten", // Adjust blend mode as needed
  background: "linear-gradient(to bottom, #4bc3cc, #1796a0)", // Set linear gradient
});

const CustomIcons = styled(Button)({
  background: "rgba(255, 255, 255, 0.2)",
  border: "none",
  transition: "all 0.8s ease",
  position: "relative",
  zIndex: 1, // Ensure icons appear above the images
  "&:hover": {
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    marginTop: "10px",
  },
});

const HomeHeaderContainer = () => {
  const [showPopup, setShowPopup] = useState(false); // State variable to control popup visibility

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (formData) => {
    // Logic to handle form submission, you can console log formData for now
    console.log("Form submitted:", formData);
    // Close the popup after submission
    handleClosePopup();
  };
  return (
    <FullHeightContainer>
      <Grid container gap={3} alignItems="center">
        <Grid xs={12}>
          <BackgroundContainer>
            <Header />
            <Grid
              container
              sx={{
                py: { xs: 4, sm: 10, md: 14 },
                px: { xs: 0, sm: 0, md: 5 },
              }}
            >
              <Grid xs={12} md={6} rowSpacing={3}>
                <Stack
                  spacing={4}
                  sx={{
                    // alignItems: { sm: "center", md: "flex-start" },
                    textAlign: { xs: "center", sm: "center", md: "start" },
                  }}
                >
                  <Typography variant="h1" color="white">
                    Empowering Futures with
                  </Typography>
                  <Typography
                    variant="h1"
                    component="span"
                    style={{ margin: 0 }}
                    color="#CAFF50"
                  >
                    Reliable Loans
                  </Typography>
                  <Typography color={"text.w"}>
                    requiring minimal documentation: PAN card, Aadhar card,
                    UDYAM,
                    <br /> 6 months net banking statement, and customer details
                    (shop photo).
                  </Typography>
                  <Box display="inline">
                    <CustomButton
                      variant="contained"
                      size="large"
                      color="secondary"
                      endIcon={<ArrowRightAltIcon />}
                      onClick={handleOpenPopup}
                    >
                      Apply Now
                    </CustomButton>
                  </Box>
                </Stack>
              </Grid>

              <Grid
                md={6}
                px={5}
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                <Grid
                  md={12}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <CustomIcons variant="contained">
                    <GppGoodIcon color="secondary" />
                  </CustomIcons>
                </Grid>

                <Grid md={12}>
                  <CustomIcons variant="contained">
                    <PaidIcon color="secondary" />
                  </CustomIcons>
                </Grid>
              </Grid>
            </Grid>
            <ImageContainer>
              <img src={bgCircle} alt="Your Image" />
            </ImageContainer>
          </BackgroundContainer>
        </Grid>

        <Grid container justifyContent={"center"}>
          <Grid
            xs={10}
            sm={9}
            md={4}
            py={2}
            // style={{ display: "block", justifyContent: "center" }}
            sx={{
              display: { xs: "block", sm: "block", md: "block" },

              justifyContent: "center",
            }}
          >
            <Typography variant="h5" fontSize={"18px"} fontWeight={"bold"}>
              Partner with more than 100+ Banks
            </Typography>
            <MyCarousel />
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <GirlImageContainer>
              <img
                width={"80%"}
                height={"120%"}
                src={headerGirl}
                alt="Your Image"
              />
            </GirlImageContainer>
          </Grid>
        </Grid>
      </Grid>
      <InstantLoanForm
        onSubmit={handleSubmit}
        showPopup={showPopup}
        handleClosePopup={handleClosePopup}
      />
    </FullHeightContainer>
  );
};

export default HomeHeaderContainer;
