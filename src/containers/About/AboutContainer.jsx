import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BgClicleCover from "@components/Common/BgCircleCover";
import SpeedIcon from "@mui/icons-material/Speed";
import CustomCard from "@components/Common/CustomCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import aboutGirl from "@assets/about_girl.png";

const AboutContainer = () => {
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
              icon={<SpeedIcon />}
              heading={"Fast & Easy Process"}
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
              icon={<AccountBalanceIcon />}
              heading={"Only 3% Interest"}
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
              icon={<SpeedIcon />}
              heading={"No prepayment penalty"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incidi."
              }
              headingSize={"24px"}
              headingWeight={"bold"}
              iconCardSize={"20px"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutContainer;
