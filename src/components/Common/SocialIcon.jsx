import { Box } from "@mui/material";
const SocialIcon = ({ icon }) => {
  return (
    <Box
      sx={{
        height: "40px",
        width: "40px",
        borderRadius: "5px",
        backgroundColor: "#def5f3",
        border: "1px solid #4bc3cc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s ease",
        ":hover": {
          backgroundColor: "#4bc3cc",
        },
      }}
    >
      {icon}
    </Box>
  );
};

export default SocialIcon;
