import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SpeedIcon from "@mui/icons-material/Speed";
import CustomCard from "@components/Common/CustomCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Divider, Typography } from "@mui/material";
import SocialIcon from "@components/Common/SocialIcon";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <Grid container gap={12}>
      <Grid container gap={4}>
        <Grid>
          <Typography variant="h2" fontSize={"45px"}>
            Contact Information
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="text">
            Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Utenim ad minim veniam quis nostrud exercitation
            ullamco laboris.
          </Typography>
        </Grid>

        <Grid
          xs={12}
          container
          spacing={2}
          justifyContent={"center"}
          alignContent={"center"}
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
              descSize={"15px"}
            />
          </Grid>
          <Grid xs={12} sm={6} md={6}>
            <CustomCard
              displayType="flex"
              icon={<AccountBalanceIcon />}
              heading={"Phone Number"}
              desc={"(+021) 245 538"}
              headingSize={"20px"}
              descSize={"15px"}
              headingWeight={"bold"}
              iconCardSize={"16px"}
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
              descSize={"15px"}
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
              descSize={"15px"}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        xs={12}
        container
        gap={3}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid xs={12}>
          <Divider />
        </Grid>
        <Grid>
          <Typography fontSize={"19px"} fontWeight={500}>
            Social Media:
          </Typography>
        </Grid>
        <Grid container gap={2}>
          <Grid>
            <SocialIcon icon={<FaFacebook />} />
          </Grid>
          <Grid>
            <SocialIcon icon={<FaTwitter />} />
          </Grid>
          <Grid>
            <SocialIcon icon={<FaInstagram />} />
          </Grid>
          <Grid>
            <SocialIcon icon={<FaYoutube />} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactDetails;
