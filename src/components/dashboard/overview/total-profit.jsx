import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FaReceipt } from "react-icons/fa";
const TotalProfit = ({ value, sx }) => {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          direction="row"
          sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Total Profit
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "black",
              height: "56px",
              width: "56px",
            }}
          >
            <FaReceipt />
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TotalProfit;
