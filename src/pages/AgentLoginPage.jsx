import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Box,
  useMediaQuery,
  Typography,
  Stack,
  Divider,
  styled,
} from "@mui/material";
import Header from "@containers/Header";
import SpeedIcon from "@mui/icons-material/Speed";
import CustomCard from "@components/Common/CustomCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import dotPattern from "@assets/dot_pattern.png";
import AgentLoginForm from "@containers/Forms/AgentLoginForm";

const BackgroundContainer = styled("div")(({ theme, borderRadius, width }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "inherit",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#083135",
  backgroundImage: `
        linear-gradient(146deg, #041618db 8%, #083135 100%),
        url(${dotPattern})
      `,
  backgroundPosition: "center center",
  backgroundSize: "20px auto",
}));
const AgentLoginPage = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <BackgroundContainer>
      <Grid container>
        <Grid xs={12}>
          <Header />
        </Grid>

        <Grid
          container
          sx={{
            // py: { xs: 4, sm: 10, md: 6 },
            px: { xs: 0, sm: 0, md: 5 },
          }}
          justifyContent={"space-around"}
          rowGap={15}
          alignItems={"center"}
        >
          <Grid xs={12} md={6} rowSpacing={3} alignItems={"center"}>
            <Stack
              spacing={4}
              sx={{
                // alignItems: { sm: "center", md: "flex-start" },
                textAlign: { xs: "center", sm: "center", md: "start" },
              }}
            >
              <Typography variant="h2" fontSize={"75px"} color="white">
                LOGIN AS{" "}
                <Typography
                  variant="h2"
                  component="span"
                  style={{ margin: 0, fontSize: "75px" }}
                  color="#CAFF50"
                >
                  AGENT
                </Typography>
              </Typography>

              <Typography color={"text.w"}>
                Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                labore et dolore magna aliquaenim aminim veniam nostrud elit.
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
              <Grid
                xs={12}
                container
                spacing={2}
                justifyContent={"center"}
                alignContent={"center"}
                pt={5}
                textAlign={"start"}
              >
                <Grid xs={12} sm={6} md={6}>
                  <CustomCard
                    displayType="flex"
                    icon={<SpeedIcon />}
                    heading={"Office Location"}
                    desc={"Jl. Raya Puputan - Renon"}
                    headingSize={"20px"}
                    headingWeight={"bold"}
                    iconCardSize={"16px"}
                    backgroundColor="white"
                  />
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                  <CustomCard
                    displayType="flex"
                    icon={<AccountBalanceIcon />}
                    heading={"Phone Number"}
                    desc={"(+021) 245 538"}
                    headingSize={"20px"}
                    headingWeight={"bold"}
                    iconCardSize={"16px"}
                    backgroundColor="white"
                  />
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                  <CustomCard
                    displayType="flex"
                    icon={<SpeedIcon />}
                    heading={"Work Hours"}
                    desc={"Everyday 09.00 - 17.00"}
                    headingSize={"20px"}
                    headingWeight={"bold"}
                    iconCardSize={"16px"}
                    backgroundColor="white"
                  />
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                  <CustomCard
                    displayType="flex"
                    icon={<SpeedIcon fontSize="small" />}
                    heading={"Email"}
                    desc={"support@domain.com"}
                    headingSize={"20px"}
                    headingWeight={"bold"}
                    iconCardSize={"16px"}
                    backgroundColor="white"
                  />
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid xs={12} sm={12} md={5}>
            <AgentLoginForm />
          </Grid>
        </Grid>
      </Grid>
    </BackgroundContainer>
  );
};

export default AgentLoginPage;
