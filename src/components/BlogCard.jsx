import { Box, Typography, styled, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import sideImage from "@assets/side_image.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
const ImageWithBorderRadius = styled("img")(({ theme }) => ({
  borderRadius: "10px", // Apply borderRadius directly to the img element
  width: "100%", // Set image width to 100%
  height: "100%", // Set image height to 100%
  objectFit: "cover",
  backgroundImage: "linear-gradient(180deg, #FFFFFF00 0%, #052629 88%)",
  [theme.breakpoints.up("lg")]: {
    height: "25vh",
    backgroundSize: "120%",
  },
  [theme.breakpoints.only("md")]: {
    height: "30vh",
    backgroundSize: "120%",
  },
  [theme.breakpoints.only("sm")]: {
    height: "30vh",
    backgroundSize: "120%",
  },
  [theme.breakpoints.only("xs")]: {
    height: "30vh",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  padding: 0,
  transition: "all 0.5s ease", // Common transition for all states
  fontWeight: "bold",
  textTransform: "none",
  color: "#4BC3CC",
  "&:hover": {
    background: "none",
    color: "black",
  },
  "&:not(:hover)": {
    transition: "all 0.5s ease", // Smooth reverse transition
  },
}));

const BlogCard = ({ date, title, displayType }) => {
  return (
    <Box>
      <Grid container gap={1.5}>
        <Grid xs={12} sm={12} display={displayType} md={12} lg={12} gap={2}>
          <ImageWithBorderRadius src={sideImage} alt="Your Image" />
          <Grid container gap={2}>
            <Grid xs={12} display={"flex"} alignItems={"center"} gap={0.5}>
              <WatchLaterIcon fontSize="inherit" />
              <Typography>{date}</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography
                fontWeight={"bold"}
                fontSize={"20px"}
                sx={{ ":hover": { color: "#4BC3CC" } }}
                variant="h3"
              >
                {title}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <CustomButton
                variant="text"
                size="large"
                endIcon={<ArrowRightAltIcon />}
              >
                Read More
              </CustomButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogCard;
