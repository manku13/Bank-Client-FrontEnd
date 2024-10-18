import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  CurrencyBitcoin,
  Handshake,
  MapsHomeWork,
  School,
} from "@mui/icons-material/";
import BigCard from "@components/Common/BigCard";

const LoanProcess = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
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
        sx={{ textAlign: { xs: "center", sm: "center", md: "start" } }}
        gap={2}
      >
        <Grid md={6}>
          <Typography variant="h2" color="black">
            Fast & Easy Loan Process Here
          </Typography>
        </Grid>
        <Grid md={4} alignContent={"center"}>
          <Typography color={"text.main"}>
            requiring minimal documentation: PAN card, Aadhar card, UDYAM, 6
            months net banking statement, and customer details (shop photo).
          </Typography>
        </Grid>
      </Grid>
      <Grid
        mt={10}
        container
        display={"flex"}
        height={"100%"}
        justifyContent="center"
        sx={{ gap: { xs: 2, sm: 2, md: 2 } }}
      >
        <Grid sm={5} md={5.5} lg={2.8}>
          <BigCard
            icon={<CurrencyBitcoin fontSize="large" />}
            displayType={"block"}
            heading={"Choose Your Amount"}
            bdRadius={"10px"}
            bgColor={"#F9F9F9"}
            height={"auto"}
            iconCardSize={"15px"}
            headingWeight={"bold"}
            Hover={true}
          />
        </Grid>
        <Grid sm={5} md={5.5} lg={2.8}>
          <BigCard
            icon={<Handshake fontSize="large" />}
            displayType={"block"}
            heading={"Provide Your Document"}
            height={"auto"}
            bdRadius={"10px"}
            bgColor={"#F9F9F9"}
            iconCardSize={"15px"}
            headingWeight={"bold"}
            Hover={true}
          />
        </Grid>
        <Grid sm={5} md={5.5} lg={2.8}>
          <BigCard
            icon={<MapsHomeWork fontSize="large" />}
            displayType={"block"}
            heading={"Apply Review Loan"}
            height={"auto"}
            iconCardSize={"15px"}
            bgColor={"#F9F9F9"}
            bdRadius={"10px"}
            Hover={true}
            headingWeight={"bold"}
          />
        </Grid>
        <Grid sm={5} md={5.5} lg={2.8}>
          <BigCard
            icon={<School fontSize="large" />}
            displayType={"block"}
            bgColor={"#F9F9F9"}
            heading={"Approve Bank Loan"}
            height={"auto"}
            bdRadius={"10px"}
            iconCardSize={"15px"}
            headingWeight={"bold"}
            Hover={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanProcess;
