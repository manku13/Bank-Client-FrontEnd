import React from "react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import IconCard from "@components/Common/IconCard";

const CustomCard = ({
  icon,
  displayType,
  heading,
  desc,
  headingSize,
  headingWeight,
  iconCardSize,
  backgroundColor,
  descSize,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      display={displayType}
      sx={{
        backgroundColor: "#F9F9F9",
        padding: "30px",
        borderRadius: "10px",
        border: "1px solid #EAECF0",
        transition: "all 0.5s ease", // Add transition for smooth animation
        ":hover": {
          backgroundColor: backgroundColor || "#4bc3cc21",
          border: "1px solid #4bc3cc",
          transform: "scale(1.03)", // Scale up on hover
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconCard
        icon={icon}
        iconCardSize={iconCardSize}
        bgColor={isHovered ? "black" : "#D2FF6A"}
        iconColor={isHovered ? "white" : "black"}
      />
      <Box pl={3}>
        <Typography
          pb={1}
          variant="h3"
          fontSize={headingSize}
          fontWeight={headingWeight}
        >
          {heading}
        </Typography>
        <Typography variant="text" fontSize={descSize}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomCard;
