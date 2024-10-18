import Grid from "@mui/material/Unstable_Grid2/Grid2";
import dotPattern from "@assets/dot_pattern.png";

import { Box, Typography, styled } from "@mui/material";
import ReviewCarousel from "@components/Reviews/ReviewCarousel";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F3F8F7",
  backgroundImage: `
  linear-gradient(180deg, #F3F8F766 0%, #F3F8F7 100%),
      url(${dotPattern})
    `,
  backgroundPosition: "center center",
  backgroundSize: "20px auto",
  borderRadius: "20px",
  padding: "100px 80px",
}));

const Reviews = () => {
  return (
    <StyledBox
      borderRadius={"20px"}
      py={"80px"}
      my={"140px"}
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: "90%", // Maximum width for larger screens
        px: { xs: 2, md: "60px" }, // Adjust horizontal padding for smaller screens
      }}
    >
      <Grid container justifyContent={"center"} pb={3} gap={2}>
        <Grid md={12}>
          <Typography color="black" variant="h2" textAlign={"center"}>
            Real Clients with Honest Review
          </Typography>
        </Grid>
        <Grid md={12}>
          <Typography color="#526E71" variant="body1" textAlign={"center"}>
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et dolore magna aliquaenim dolore magna.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid>
          <ReviewCarousel rtl={true} />
        </Grid>
        <Grid>
          <ReviewCarousel rtl={false} />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default Reviews;
