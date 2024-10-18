import React from "react";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const CustomBadge = ({ text, color }) => {
  return (
    <Box
      py={"2px"}
      px={"10px"}
      border={`1px solid ${color}`}
      borderRadius={"20px"}
    >
      <Typography fontSize={"13px"} fontWeight={"bold"} color={color}>
        {text}
      </Typography>
    </Box>
  );
};

export default CustomBadge;
