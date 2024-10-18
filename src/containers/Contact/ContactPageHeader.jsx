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

const ContactPageHeader = () => {
  return (
    <CommonContainer fullHeight={"90vh"}>
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
            <Typography variant="h2" fontSize={"70px"} color="white">
              Get In Touch with Us Today
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
          </Stack>
        </Grid>
      </Grid>
    </CommonContainer>
  );
};

export default ContactPageHeader;
