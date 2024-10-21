import {
  styled,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import dotPattern from "@assets/dot_pattern.png";
import FooterList from "@components/FooterList";
import logo_header from "@assets/logo.png";
import Divider from "@mui/material/Divider";

const HeaderLogo = styled("img")({
  height: "45px",
  width: "150px",
});
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#083135",
  backgroundImage: `
        linear-gradient(146deg, #083135D9 8%, #083135 100%),
        url(${dotPattern})
      `,
  backgroundPosition: "center center",
  backgroundSize: "20px auto",
  width: "100%",
  [theme.breakpoints.only("xs")]: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  [theme.breakpoints.only("sm")]: {
    paddingBottom: "20px",
  },
}));

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "100%", // Maximum width for larger screens
        justifyContent: "center",
      }}
    >
      <StyledBox>
        <Grid
          container
          display={"flex"}
          gap={5}
          sx={{
            padding: {
              xs: "40px 40px 10px 40px",
              sm: "50px 50px 10px 50px",
              md: "100px 100px 10px 100px",
            },
          }}
        >
          <Grid gap={2} xs={12} container justifyContent={"space-between"}>
            <Grid xs={5} sm={5} md={2.5}>
              <FooterList
                title={"Quick Links"}
                ls={["About", "Services", "Team", "FAQs"]}
              />
            </Grid>

            <Grid xs={5} sm={5} md={2.5}>
              <FooterList
                title={"Services"}
                ls={[
                  "Personal Loan",
                  "Business Loan",
                  "Mortgage Loans",
                  "Education Loan",
                ]}
              />
            </Grid>

            <Grid xs={5} sm={5} md={2.5}>
              <FooterList
                title={"Support"}
                ls={[
                  "Support",
                  "Terms & Conditions",
                  "Contact",
                  "Privacy Policy",
                ]}
              />
            </Grid>
            <Grid xs={5} sm={5} md={2.5} sx={{ color: "white" }}>
              <Typography variant="h4" fontWeight={"bold"}>
                {"Contact"}
              </Typography>
              <List>
                <ListItem sx={{ paddingY: 1 }} disablePadding>
                  <ListItemText
                    secondaryTypographyProps={{
                      color: "#FFFFFF80",
                      fontSize: "16px",
                    }}
                    secondary={"Make Appointment"}
                  />
                </ListItem>
                <ListItem
                  sx={{ paddingY: 1, fontWeight: "bold" }}
                  disablePadding
                >
                  <ListItemText
                    primary={"8770725697 | 9098727387"}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: { xs: "16px", sm: "18px" },
                    }} // Apply fontWeight to Typography component
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 1 }} disablePadding>
                  <ListItemText
                    secondaryTypographyProps={{
                      color: "#FFFFFF80",
                      fontSize: "16px",
                    }}
                    secondary={"Need Help ? Email us"}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 1 }} disablePadding>
                  <ListItemText
                    primary={"support@domain.com"}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: { xs: "16px", sm: "18px" },
                    }} // Apply fontWeight to Typography component
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Grid
            container
            md={12}
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
              },
            }}
            gap={2}
            alignItems={"center"}
          >
            <Grid xs={12}>
              <Divider color="#194044" variant="middle" />
            </Grid>

            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <Grid>
                <HeaderLogo src={logo_header} alt="Logo" />
              </Grid>
              <Grid>
                <Typography color={"text.w"} variant="text">
                  Banking, Loans, and Credit Card Services
                </Typography>
              </Grid>
            </Grid>

            <Grid>
              <Typography color={"text.w"} variant="text">
                Website Made With ❤️ |{" "}
                <Button
                  target="_blank"
                  href="https://www.linkedin.com/in/manku13/"
                  sx={{
                    color: "white",
                    ":hover": {
                      color: "red",
                    },
                  }}
                >
                  Mayank Soni
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </StyledBox>
    </Box>
  );
};

export default Footer;
