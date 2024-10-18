import { Box, Avatar, Typography } from "@mui/material";

const PersonContact = ({ avatar, desc, name, nameColor, desColor }) => {
  return (
    <Box display={"flex"}>
      <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 50, height: 50 }} />
      <Box pl={2}>
        <Typography variant="h5" color={nameColor} pb={0.5}>
          {name}
        </Typography>
        <Typography variant="text" color={desColor}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonContact;
