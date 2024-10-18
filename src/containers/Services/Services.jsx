import { Box, styled, Button, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import line from "@assets/line.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BgClicleCover from "@components/Common/BgCircleCover";
import servicesGirl from "@assets/services_girl.png";
import {
  CurrencyBitcoin,
  Handshake,
  MapsHomeWork,
  School,
} from "@mui/icons-material/";
import BigCard from "@components/Common/BigCard";
import { useNavigate } from "react-router-dom";

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

const Services = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  return (
    <Box
      my={"140px"}
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: { xs: "95%", sm: "92", md: "82%" }, // Maximum width for larger screens
        px: { xs: 2, md: 0 }, // Adjust horizontal padding for smaller screens
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          textAlign: { xs: "center", sm: "center", md: "start" },
        }}
      >
        <Grid container md={5.5} gap={2} py={4}>
          <Grid>
            <Typography color="black" variant="h2">
              We Provide the Best Loan Services
            </Typography>
          </Grid>
          <Grid>
            <Typography color="#B5C1C2" variant="body1">
              Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              labore et dolore magna aliquaenim dolore magna.
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
          md={2.5}
          alignSelf={"center"}
          display={"flex"}
          height={"100%"}
          justifyContent={"flex-end"}
        >
          <CustomButton
            variant="outlined"
            size="large"
            sx={{
              borderColor: "#4bc3cc",
            }}
            endIcon={<ArrowRightAltIcon />}
            onClick={() => navigate("/services")}
          >
            All Services
          </CustomButton>
        </Grid>
      </Grid>

      <Grid container sx={{ pt: { xs: "50px", md: "80px" } }}>
        <Grid
          xs={12}
          md={4}
          sx={{
            display: { xs: "flex", sm: "none", md: "flex" },
          }}
        >
          <BgClicleCover
            image={servicesGirl}
            imgWidth={isMobile || isTablet ? "52%" : "85%"}
            contWidth={"100%"}
            bRadius={
              isMobile || isTablet ? "20px 20px 0px 0px" : "20px 0px 0px 20px"
            }
          />
        </Grid>
        <Grid
          container
          md={8}
          display={"flex"}
          height={"100%"}
          alignContent={"center"}
        >
          <Grid md={6}>
            <BigCard
              icon={<CurrencyBitcoin fontSize="large" />}
              displayType={"block"}
              heading={"Business Loan"}
              height={window.innerWidth <= 600 ? "250px" : "310px"}
              margin={"auto"}
              bgColor={"#FFFFFF"}
              iconCardSize={"15px"}
              headingWeight={"bold"}
            />
          </Grid>
          <Grid md={6}>
            <BigCard
              icon={<Handshake fontSize="large" />}
              displayType={"block"}
              heading={"Personal Loan"}
              height={window.innerWidth <= 600 ? "250px" : "310px"}
              bdRadius={
                isMobile || isTablet ? "0px 0px 0px 0px" : "0px 20px 0px 0px"
              }
              margin={"auto"}
              bgColor={"#FFFFFF"}
              iconCardSize={"15px"}
              headingWeight={"bold"}
            />
          </Grid>
          <Grid md={6}>
            <BigCard
              icon={<MapsHomeWork fontSize="large" />}
              displayType={"block"}
              heading={"Mortage Loan"}
              height={window.innerWidth <= 600 ? "250px" : "310px"}
              margin={"auto"}
              bgColor={"#FFFFFF"}
              iconCardSize={"15px"}
              headingWeight={"bold"}
            />
          </Grid>
          <Grid md={6}>
            <BigCard
              icon={<School fontSize="large" />}
              displayType={"block"}
              heading={"Education Loan"}
              bdRadius={
                isMobile || isTablet ? "0px 0px 20px 20px" : "0px 0px 20px 0px"
              }
              height={window.innerWidth <= 600 ? "250px" : "310px"}
              margin={"auto"}
              bgColor={"#FFFFFF"}
              iconCardSize={"15px"}
              headingWeight={"bold"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
