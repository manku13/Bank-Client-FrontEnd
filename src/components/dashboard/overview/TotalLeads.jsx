import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import { ArrowDown as ArrowDownIcon } from "@phosphor-icons/react/dist/ssr/ArrowDown";
// import { ArrowUp as ArrowUpIcon } from "@phosphor-icons/react/dist/ssr/ArrowUp";
// import { CurrencyDollar as CurrencyDollarIcon } from "@phosphor-icons/react/dist/ssr/CurrencyDollar";
import { FaArrowUp as ArrowUpIcon } from "react-icons/fa";
import { FaArrowDown as ArrowDownIcon } from "react-icons/fa";
import { FaDollarSign as CurrencyDollarIcon } from "react-icons/fa";
export function TotalLeads({ diff, trend, sx, value }) {
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
                fontWeight={"bold"}
                color="text.secondary"
                variant="overline"
              >
                Total Leads
              </Typography>
              <Typography variant="h4" fontSize={"48px"}>
                {value}
              </Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: "#635bff",
                height: "66px",
                width: "66px",
              }}
            >
              <CurrencyDollarIcon />
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
                  color={"#15b79f"}
                  fontSize="var(--icon-fontSize-md)"
                />
                <Typography color={"#15b79f"} variant="body2">
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
