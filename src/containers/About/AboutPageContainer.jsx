import React from "react";
import { Typography, Box, styled, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BgClicleCover from "@components/Common/BgCircleCover";
import CustomCard from "@components/Common/CustomCard";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import aboutGirl from "@assets/about_girl.png";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PersonContact from "@components/Common/PersonContact";
import face from "@assets/face.jpg";
const CustomButton = styled(Button)(({ theme }) => ({
  transition: "all 0.5s ease", // Common transition for all states
  boxShadow: "none",
  "&:hover": {
    background: "black",
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

const AboutPageContainer = () => {
  return (
    <Box
      my={"140px"}
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: { xs: "98%", sm: "92", md: "82%" }, // Maximum width for larger screens
        px: { xs: 2, md: 0 }, // Adjust horizontal padding for smaller screens
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        sx={{
          textAlign: { xs: "center", sm: "center", md: "start" },
          gap: { xs: 3, sm: 3, md: 0 },
        }}
      >
        <Grid md={8}>
          <Typography variant="h2" color="black">
            Turning Your Dreams into Reality with Our Loans
          </Typography>
        </Grid>
        <Grid
          md={4}
          alignItems={"center"}
          display={"flex"}
          sx={{
            justifyContent: { xs: "center", sm: "center", md: "flex-end" },
          }}
        >
          <Typography
            color={"text.main"}
            sx={{ width: { xs: "80%", sm: "80%", md: "90%" } }}
          >
            requiring minimal documentation: PAN card, Aadhar card, UDYAM, 6
            months net banking statement, and customer details (shop photo).
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent={"space-between"}
        sx={{
          pt: { md: 15, xs: 5, sm: 5 },
          flexDirection: { xs: "column-reverse", sm: "row", md: "row" },
        }}
      >
        <Grid
          xs={12}
          md={6}
          sx={{
            display: { xs: "flex", sm: "none", md: "block" },
            pt: { xs: "50px", md: "0px" },
          }}
          justifyContent={"center"}
        >
          <BgClicleCover
            image={aboutGirl}
            imgWidth={"100%"}
            contWidth={"85%"}
            bRadius={"20px"}
          />
        </Grid>
        <Grid
          xs={12}
          container
          md={6}
          spacing={5}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid>
            <CustomCard
              displayType="flex"
              icon={<RemoveRedEyeOutlinedIcon />}
              heading={"Our Vision"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidi."
              }
              headingSize={"24px"}
              headingWeight={"bold"}
              iconCardSize={"20px"}
            />
          </Grid>
          <Grid>
            <CustomCard
              displayType="flex"
              icon={<TrackChangesOutlinedIcon />}
              heading={"Our Mission"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidi."
              }
              headingSize={"24px"}
              headingWeight={"bold"}
              iconCardSize={"20px"}
            />
          </Grid>
          <Grid xs={12}>
            <Divider color="white" variant="middle" />
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
              >
                Apply Now
              </CustomButton>
            </Grid>
            <Grid alignContent={"center"}>
              <PersonContact
                name={"Contact Agent"}
                nameColor={"black"}
                desColor={"#black"}
                avatar={face}
                desc={"+91 8103398414"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPageContainer;
