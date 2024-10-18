import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Rating from "@mui/material/Rating";
import PersonContact from "../Common/PersonContact";
import { Box, Typography } from "@mui/material";
const ReviewCard = ({ item }) => {
  return (
    <Box
      sx={{
        border: "1px solid #EAECF0",
        borderColor: "#EAECF0",
        background: "#FFFFFF",
        display: "flex",
        padding: "40px",
        margin: "10px",
        borderRadius: "5px",
        height: "100%",
      }}
    >
      <Grid container gap={2}>
        <Grid xs={12}>
          <Typography color="#526E71" variant="body1">
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et dolore magna aliquaenim dolore magna.
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Rating name="read-only" value={5} readOnly />
        </Grid>
        <Grid xs={12}>
          <PersonContact
            nameColor={"black"}
            desColor={"text"}
            name={item.name}
            avatar={item.avatar}
            desc={"Developer"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewCard;
