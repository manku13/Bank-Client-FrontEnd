import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BigCard from "@components/Common/BigCard";
import { Box, useMediaQuery } from "@mui/material";
import {
  CurrencyBitcoin,
  Handshake,
  MapsHomeWork,
  School,
} from "@mui/icons-material/";
const LoansCardList = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
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
        md={12}
        display={"flex"}
        height={"100%"}
        alignContent={"center"}
      >
        <Grid md={4}>
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
        <Grid md={4}>
          <BigCard
            icon={<Handshake fontSize="large" />}
            displayType={"block"}
            heading={"Personal Loan"}
            height={window.innerWidth <= 600 ? "250px" : "310px"}
            margin={"auto"}
            bgColor={"#FFFFFF"}
            iconCardSize={"15px"}
            headingWeight={"bold"}
          />
        </Grid>
        <Grid md={4}>
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
        <Grid md={4}>
          <BigCard
            icon={<School fontSize="large" />}
            displayType={"block"}
            heading={"Education Loan"}
            height={window.innerWidth <= 600 ? "250px" : "310px"}
            margin={"auto"}
            bgColor={"#FFFFFF"}
            iconCardSize={"15px"}
            headingWeight={"bold"}
          />
        </Grid>
        <Grid md={4}>
          <BigCard
            icon={<School fontSize="large" />}
            displayType={"block"}
            heading={"Education Loan"}
            height={window.innerWidth <= 600 ? "250px" : "310px"}
            margin={"auto"}
            bgColor={"#FFFFFF"}
            iconCardSize={"15px"}
            headingWeight={"bold"}
          />
        </Grid>
        <Grid md={4}>
          <BigCard
            icon={<School fontSize="large" />}
            displayType={"block"}
            heading={"Education Loan"}
            height={window.innerWidth <= 600 ? "250px" : "310px"}
            margin={"auto"}
            bgColor={"#FFFFFF"}
            iconCardSize={"15px"}
            headingWeight={"bold"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoansCardList;
