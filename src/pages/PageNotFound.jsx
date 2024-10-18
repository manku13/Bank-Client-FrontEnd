import { useNavigate } from "react-router-dom";
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
import CommonContainer from "@containers/CommonContainer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LazyLoad from "react-lazyload";
import Footer from "@containers/Footer";

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

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div>
      <CommonContainer fullHeight={"120vh"}>
        <Grid container>
          <Header />

          <Grid
            xs={12}
            sx={{ paddingY: { xs: 12, sm: 12, md: 10 } }}
            rowSpacing={2}
          >
            <Stack
              spacing={2}
              sx={{
                // alignItems: { sm: "center", md: "flex-start" },
                textAlign: { xs: "center" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                fontSize={"180px"}
                maxWidth={"800px"}
                color="secondary.main"
              >
                404
              </Typography>
              <Typography
                variant="h2"
                fontSize={"70px"}
                maxWidth={"800px"}
                color="white"
              >
                Page Not Found!
              </Typography>

              <Typography
                textAlign={"center"}
                maxWidth={"500px"}
                color={"text.w"}
              >
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable
              </Typography>

              <CustomButton
                variant="contained"
                size="large"
                color="secondary"
                onClick={() => handleNavigation("/")}
                endIcon={<ArrowRightAltIcon />}
              >
                Back To Home
              </CustomButton>
            </Stack>
          </Grid>
        </Grid>
      </CommonContainer>
      <LazyLoad height={200}>
        <Footer />
      </LazyLoad>
    </div>
  );
};

export default PageNotFound;
