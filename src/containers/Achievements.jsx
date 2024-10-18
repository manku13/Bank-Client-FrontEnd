import { styled, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import dotPattern from "@assets/dot_pattern.png";
import Counter from "@components/Common/Counter";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#083135",
  backgroundImage: `
      linear-gradient(146deg, #083135D9 8%, #083135 100%),
      url(${dotPattern})
    `,
  backgroundPosition: "center center",
  backgroundSize: "20px auto",
  borderRadius: "20px",
  padding: "100px 80px",

  // Calculate the minimum height based on the iframe height plus padding
  // Default minHeight for larger screens

  [theme.breakpoints.only("sm")]: {
    height: "850px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    padding: "100px 50px",
  },
  [theme.breakpoints.only("xs")]: {
    height: "550px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    padding: "80px 20px",
  },
  [theme.breakpoints.up("md")]: {
    minHeight: "900px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    padding: "100px 50px",
  },
}));

const StyledIframe = styled("iframe")(({ theme }) => ({
  borderRadius: "20px", // Apply border-radius to the iframe
  // maxWidth: "100%",
  [theme.breakpoints.only("xs")]: {
    minWidth: "350px",
    minHeight: "200px",
  },
  [theme.breakpoints.only("sm")]: {
    minWidth: "650px",
    height: "450px",
  },
  [theme.breakpoints.only("md")]: {
    width: "900px",
    height: "600px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1150px",
    height: "600px",
  },
}));

const Achievements = () => {
  return (
    <Box
      sx={{
        display: "flex",
        mx: "auto",
        mb: { xs: "120px", sm: "250px", md: "200px" },
        maxWidth: { xs: "98%", sm: "92", md: "90%" }, // Maximum width for larger screens
        px: { xs: 2, md: 0 }, // Adjust horizontal padding for smaller screens
        justifyContent: "center",
      }}
    >
      <StyledBox position={"relative"}>
        <Grid
          container
          display={"flex"}
          alignContent={"flex-start"}
          justifyContent={"space-between"}
          sx={{
            textAlign: { xs: "center", sm: "center", md: "start" },
            gap: { xs: 5, sm: 5, md: 0 },
          }}
        >
          <Grid md={6} lg={5} xs={12}>
            <Typography color="white" variant="h2">
              Crafting Success Stories through Our Loans
            </Typography>
          </Grid>

          <Grid container xs={12} md={6} lg={5}>
            <Grid xs={6}>
              <Counter
                start={0}
                end={10}
                txtEnd={"K"}
                sign={"+"}
                desc={"Happy Clients"}
              />
            </Grid>
            <Grid xs={6}>
              <Counter
                start={0}
                end={20}
                sign={"+"}
                desc={"Years Of Experiences"}
              />
            </Grid>
            <Grid xs={6}>
              <Counter
                start={30}
                end={98}
                sign={"%"}
                desc={"Satisfied Clients"}
              />
            </Grid>
            <Grid xs={6}>
              <Counter
                start={1100}
                end={1200}
                sign={"+"}
                desc={"Businesses Helped"}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          position={"absolute"}
          sx={{ top: { xs: "75%", sm: "60%", md: "50%", lg: "45%" } }}
          container
          justifyContent={"center"}
        >
          <Grid xs={12} md={12}>
            {/* Empty Grid item for the YouTube video */}
            <StyledIframe
              src="https://www.youtube.com/embed/-LcvXpomwMo?si=P_Fb9F3ni_0mDF_d"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></StyledIframe>
          </Grid>
        </Grid>
      </StyledBox>
    </Box>
  );
};

export default Achievements;
