import { Box, Typography, styled, Button, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import line from "@assets/line.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BlogCard from "@components/BlogCard";
import mainImage from "@assets/mainBlog.jpg";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useNavigate } from "react-router-dom";

const BlogMainCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#F3F8F7",
  backgroundImage: `
  linear-gradient(180deg, #FFFFFF00 0%, #052629 88%),
      url(${mainImage})
    `,
  backgroundPosition: "center center",
  backgroundSize: "20px auto",
  borderRadius: "10px",
  padding: "40px",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    height: "85vh",
    backgroundSize: "170%",
  },
  [theme.breakpoints.only("md")]: {
    height: "60vh",
    backgroundSize: "120%",
  },
  [theme.breakpoints.only("sm")]: {
    height: "60vh",
    backgroundSize: "120%",
  },
  [theme.breakpoints.only("xs")]: {
    height: "60vh",
    backgroundSize: "190%",
  },
}));

const CustomButton = styled(Button)({
  transition: "all 0.7s ease", // Common transition for all states
  padding: "16px 32px",
  color: "black",
  "&:hover": {
    border: "1px solid #4bc3cc",
    borderWidth: "1px 1px 1px 5px",
    background: "#4bc3cc21",
    marginRight: "-10px",
  },
  "&:not(:hover)": {
    transition: "all 0.7s ease", // Smooth reverse transition
  },
});

const BlogSection = () => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box
      my={"140px"}
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: { xs: "98%", sm: "92", md: "92%", lg: "82%" }, // Maximum width for larger screens
        px: { xs: 2, md: 0 }, // Adjust horizontal padding for smaller screens
      }}
    >
      <Grid container gap={10}>
        <Grid
          container
          sx={{
            justifyContent: { xs: "center", sm: "center", md: "space-between" },
            textAlign: { xs: "center", sm: "center", md: "start" },
          }}
        >
          <Grid md={5.5} gap={2} py={4}>
            <Grid>
              <Typography color="black" variant="h2">
                Read Our Latest Blog & Articles
              </Typography>
            </Grid>
          </Grid>
          <Grid
            md={2}
            alignContent={"flex-end"}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <img
              style={{ width: "90%", opacity: 0.15 }} // Set image width to 100% and opacity to 0.15
              src={line}
              alt="Your Image"
            />
          </Grid>
          <Grid
            alignSelf={"center"}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <CustomButton
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#4bc3cc",
                textTransform: "none",
              }}
              endIcon={<ArrowRightAltIcon />}
              onClick={() => {
                navigate("/blogs");
              }}
            >
              View All Blog
            </CustomButton>
          </Grid>
        </Grid>

        <Grid container xs={12} gap={3}>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={6}
            display={"flex"}
            flexWrap={"wrap"}
          >
            <BlogMainCard alignContent={"flex-end"} textAlign={"start"}>
              <Grid
                container
                xs={12}
                gap={2}
                display={"flex"}
                alignContent={"space-evenly"}
              >
                <Grid xs={12} display={"flex"} alignItems={"center"} gap={0.5}>
                  <WatchLaterIcon fontSize="inherit" color="secondary" />
                  <Typography color={"secondary"}>
                    September 18, 2023
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography
                    variant="h3"
                    color={"white"}
                    sx={{
                      fontSize: { xs: "20px", sm: "33px" },
                      ":hover": { color: "#CAFF50" },
                      fontWeight: "bold",
                    }}
                  >
                    Small Business Success Stories: How Loans Made a Difference
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography variant="text" color={"#FFFFFFB0"}>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim...
                  </Typography>
                </Grid>
              </Grid>
            </BlogMainCard>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={5.5}
            display={"flex"}
            alignItems={"center"}
            gap={1.5}
          >
            <Grid xs={12} sm={12} md={12}>
              <BlogCard
                date={"September 18, 2023"}
                title={
                  "Small Business Success Stories: How Loans Made a Difference"
                }
                displayType={isTablet || isMobile ? "block" : "flex"}
              />
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <BlogCard
                date={"September 18, 2023"}
                title={
                  "The ABCs of Commercial Mortgages: What You Need to Know"
                }
                displayType={isTablet || isMobile ? "block" : "flex"}
              />
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <BlogCard
                date={"September 18, 2023"}
                title={
                  "The Human Touch in Banking: Personalized Business Loans"
                }
                displayType={isTablet || isMobile ? "block" : "flex"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogSection;
