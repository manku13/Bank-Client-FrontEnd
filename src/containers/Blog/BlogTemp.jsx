import React from "react";
import {
  Button,
  Typography,
  styled,
  Box,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import Header from "@containers/Header"; // Using alias
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Stack from "@mui/material/Stack";
import CommonContainer from "../CommonContainer";
import sideImage from "@assets/side_image.jpg";

const ImageWithBorderRadius = styled("img")(({ theme }) => ({
  borderRadius: "20px", // Apply borderRadius directly to the img element
  width: "80%", // Set image width to 100%
  height: "80%", // Set image height to 100%
  objectFit: "cover",
  // [theme.breakpoints.only("sm")]: {
  //   borderRadius: "0px 0px 20px 20px",
  // },
  // [theme.breakpoints.only("xs")]: {
  //   borderRadius: "0px 0px 20px 20px",
  // },
}));

const BlogTemp = ({ children }) => {
  return (
    <Grid container display={"flex"} justifyContent={"center"}>
      <Grid xs={12}>
        <CommonContainer fullHeight={"100vh"}>
          <Grid container>
            <Header />

            <Grid
              xs={12}
              sx={{ paddingY: { xs: 12, sm: 12, md: 16 } }}
              rowSpacing={3}
            >
              <Stack
                spacing={4}
                sx={{
                  // alignItems: { sm: "center", md: "flex-start" },
                  textAlign: { xs: "center" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid container gap={3}>
                  <Grid>
                    <Typography color={"secondary.main"}>Bussiness</Typography>
                  </Grid>
                  <Grid color={"white"}>{"|"}</Grid>
                  <Grid>
                    <Typography color={"white"}>September 18, 2023</Typography>
                  </Grid>
                </Grid>
                <Typography variant="h2" fontSize={"70px"} color="white">
                  Navigating the World of Business Loans: A Comprehensive Guide
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </CommonContainer>
      </Grid>

      <Grid container my={5}>
        <Grid
          xs={12}
          style={{ textAlign: "center" }}
          sx={{ marginTop: { xs: "-160px", sm: "-150px", md: "-200px" } }}
        >
          <ImageWithBorderRadius src={sideImage} alt="Your Image" />
        </Grid>
      </Grid>
      {children}
    </Grid>
  );
};

export default BlogTemp;
