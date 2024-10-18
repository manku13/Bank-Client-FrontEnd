import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FaUser as UsersIcon } from "react-icons/fa";
import { FaArrowUp as ArrowUpIcon } from "react-icons/fa";
import { FaArrowDown as ArrowDownIcon } from "react-icons/fa";

export function TotalUsers({ diff, trend, sx, value }) {
  const TrendIcon = trend === "up" ? ArrowUpIcon : ArrowDownIcon;
  const trendColor =
    trend === "up"
      ? "var(--mui-palette-success-main)"
      : "var(--mui-palette-error-main)";

  return (
    <Card
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 5px 22px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;",
      }}
    >
      <CardContent>
        <Stack spacing={3}>
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography
                color="text.secondary"
                fontWeight={"bold"}
                variant="overline"
              >
                Total Users
              </Typography>
              <Typography variant="h4" fontSize={"48px"}>
                {value}
              </Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: "#15b79f",
                height: "66px",
                width: "66px",
              }}
            >
              <UsersIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
          {diff ? (
            <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
              <Stack
                sx={{ alignItems: "center" }}
                direction="row"
                spacing={0.5}
              >
                <TrendIcon
                  color={"#f04438"}
                  fontSize="var(--icon-fontSize-md)"
                />
                <Typography color={"#f04438"} variant="body2">
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                Since last month
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
