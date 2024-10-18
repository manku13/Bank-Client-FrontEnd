import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FormatListBulleted as ListBulletsIcon } from "@mui/icons-material";
export function TasksProgress({ value, sx }) {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography
                color="text.secondary"
                gutterBottom
                variant="overline"
              >
                Task Progress
              </Typography>
              <Typography variant="h4">{value}%</Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: "black",
                height: "56px",
                width: "56px",
              }}
            >
              <ListBulletsIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
          <div>
            <LinearProgress value={value} variant="determinate" />
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
