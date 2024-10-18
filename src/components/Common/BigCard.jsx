import React from "react";
import { useState } from "react";

import { Box, Typography } from "@mui/material";
import IconCard from "@components/Common/IconCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const BigCard = ({
  icon,
  displayType,
  heading,
  bdRadius,
  height,
  margin,
  bgColor,
  iconCardSize,
  headingSize,
  headingWeight,
  Hover,
}) => {
  // Determine padding based on viewport width
  const padding = window.innerWidth <= 600 ? "30px" : "50px";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      display={"flex"}
      sx={{
        backgroundColor: bgColor,
        padding: padding,
        borderRadius: bdRadius,
        border: "1px solid #EAECF0",
        borderColor: "#EAECF0",
        height: height,
        margin: margin,
        transition: "all 0.5s ease",
        ":hover": {
          backgroundColor: "#4bc3cc21",
          border: "1px solid #4bc3cc",
          transform: Hover ? "scale(1.03)" : "none",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Grid container gap={2}>
        <Grid>
          <IconCard
            icon={icon}
            height={"75px"}
            bgColor={isHovered ? "black" : "#D2FF6A"}
            iconColor={isHovered ? "white" : "black"}
            iconCardSize={iconCardSize}
          />
        </Grid>
        <Grid>
          <Typography
            pb={1}
            variant="h3"
            fontSize={headingSize}
            fontWeight={headingWeight}
          >
            {heading}
          </Typography>
          <Typography variant="text">
            Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Utenim ad minim veniam quis nostrud.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BigCard;
