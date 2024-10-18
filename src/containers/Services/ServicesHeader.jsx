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
import avatar from "@assets/face.jpg";
import img1 from "@assets/face1.jpg";
import img2 from "@assets/face2.jpg";
import CommonContainer from "../CommonContainer";

const ServicesHeader = () => {
  return (
    <CommonContainer fullHeight={"100vh"}>
      <Grid container>
        <Header />

        <Grid
          xs={12}
          sx={{ paddingY: { xs: 12, sm: 12, md: 17 } }}
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
            <Typography variant="h2" fontSize={"70px"} color="white">
              We Provide The Best Loan Services
            </Typography>

            <Typography
              textAlign={"center"}
              maxWidth={"600px"}
              color={"text.w"}
            >
              Adipiscing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Utenim ad minim veniam quis nostrud
              exercitation laboris.
            </Typography>
            <Grid container alignItems={"center"}>
              <Grid>
                <AvatarGroup max={4}>
                  <Avatar
                    sx={{ width: 45, height: 45 }}
                    alt="Remy Sharp"
                    src={avatar}
                  />
                  <Avatar
                    sx={{ width: 45, height: 45 }}
                    alt="Travis Howard"
                    src={img1}
                  />
                  <Avatar
                    sx={{ width: 45, height: 45 }}
                    alt="Cindy Baker"
                    src={img2}
                  />
                </AvatarGroup>
              </Grid>
              <Grid>
                <Typography
                  fontWeight={500}
                  sx={{
                    fontSize: "18px",
                    color: "white",
                  }}
                >
                  <Typography
                    component={"span"}
                    sx={{
                      fontWeight: 500,
                      paddingLeft: "10px",
                      paddingRight: "5px",
                      fontSize: "17px",
                      color: "#D2FF6A",
                    }}
                  >
                    10K+
                  </Typography>
                  Happy CLients
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </CommonContainer>
  );
};

export default ServicesHeader;
