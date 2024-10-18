import React, { useState } from "react";

import { Box, Typography, styled, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import dotPattern from "@assets/dot_pattern.png";
import sideImage from "@assets/side_image.jpg";
import PersonContact from "@components/Common/PersonContact";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import face from "@assets/face.jpg";
import InstantLoanForm from "@containers/Forms/InstantLoanForm";
import { Dialog } from "@mui/material";
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#083135",
  backgroundImage: `
    linear-gradient(146deg, #083135D9 8%, #083135 100%),
    url(${dotPattern})
  `,
  backgroundPosition: "center center",
  backgroundSize: "20px auto",
  borderRadius: "20px 0px 0px 20px",
  padding: "100px 80px",
  [theme.breakpoints.only("sm")]: {
    borderRadius: "20px 20px 0px 0px",
    display: "flex",
    justifyContent: "center",
    padding: "100px 50px",
  },
  [theme.breakpoints.only("xs")]: {
    borderRadius: "20px 20px 0px 0px",
    display: "flex",
    justifyContent: "center",
    padding: "80px 20px",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  transition: "all 0.5s ease", // Common transition for all states
  "&:hover": {
    border: "1px solid #CAFF50",
    borderWidth: "1px 1px 1px 5px",
    background: "rgb(255, 255, 255, 0.2)",
    color: "white",
    marginLeft: "10px",
  },
  "&:not(:hover)": {
    transition: "all 0.5s ease", // Smooth reverse transition
  },
  [theme.breakpoints.only("sm")]: {
    padding: "18px 36px",
  },
}));

const ImageWithBorderRadius = styled("img")(({ theme }) => ({
  borderRadius: "0px 20px 20px 0px", // Apply borderRadius directly to the img element
  width: "100%", // Set image width to 100%
  height: "100%", // Set image height to 100%
  objectFit: "cover",
  [theme.breakpoints.only("sm")]: {
    borderRadius: "0px 0px 20px 20px",
  },
  [theme.breakpoints.only("xs")]: {
    borderRadius: "0px 0px 20px 20px",
  },
}));

const ContactContainer = () => {
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
    <Box
      my={"140px"}
      sx={{
        mx: "auto",
        maxWidth: { xs: "98%", sm: "92", md: "90%" }, // Maximum width for larger screens
        px: { xs: 2, md: 0 }, // Adjust horizontal padding for smaller screens
      }}
    >
      <Grid container>
        <Grid md={6}>
          <StyledBox>
            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                },
              }}
            >
              <Grid>
                <Typography color="white" variant="h2">
                  We Provide Fair Interest Rates For You
                </Typography>
              </Grid>

              <Grid>
                <Typography color="#B5C1C2" variant="body1">
                  Consectetur adipiscing elit sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliquaenim dolore magna.
                </Typography>
              </Grid>
              <Grid
                m={0}
                container
                display={"flex"}
                justifyContent={"center"}
                gap={2}
              >
                <Grid p={0} alignContent={"center"}>
                  <CustomButton
                    variant="contained"
                    size="large"
                    color="secondary"
                    endIcon={<ArrowRightAltIcon />}
                    onClick={handleOpenPopup} // Open the popup on button click
                  >
                    Apply Now
                  </CustomButton>
                </Grid>
                <Grid alignContent={"center"}>
                  <PersonContact
                    name={"Contact Agent"}
                    nameColor={"white"}
                    desColor={"#FFFFFFB3"}
                    avatar={face}
                    desc={"+91 8103398414"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </StyledBox>
        </Grid>
        <Grid md={6}>
          <ImageWithBorderRadius src={sideImage} alt="Your Image" />
        </Grid>
      </Grid>

      <InstantLoanForm
        onSubmit={handleSubmit}
        showPopup={showPopup}
        handleClosePopup={handleClosePopup}
      />
    </Box>
  );
};

export default ContactContainer;
