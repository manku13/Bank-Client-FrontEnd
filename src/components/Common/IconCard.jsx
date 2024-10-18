import { Box, Button } from "@mui/material";

const IconCard = ({ icon, iconCardSize, bgColor, iconColor }) => {
  return (
    <Box
      sx={{
        background: bgColor,
        color: iconColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: iconCardSize,
        borderRadius: "5px",
        height: "100%",

        transition: "color 0.4s ease", // Add transition for smooth color change
      }}
    >
      {icon}
    </Box>
  );
};

export default IconCard;
