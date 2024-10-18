import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";

const Counter = ({ start, end, desc, txtEnd, sign }) => {
  return (
    <Box>
      <Typography variant="h2" color={"white"}>
        <CountUp start={start} end={end} duration={5} />
        {txtEnd}
        <Typography
          component={"span"}
          sx={{
            paddingLeft: "10px",
            fontSize: { xs: "25px", md: "50px", sm: "40px" },
            color: "#D2FF6A",
          }}
        >
          {sign}
        </Typography>
      </Typography>
      <Typography color="text.w">{desc}</Typography>
    </Box>
  );
};

export default Counter;
