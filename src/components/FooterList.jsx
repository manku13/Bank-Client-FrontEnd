import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const FooterList = ({ ls, title }) => {
  return (
    <Box color={"white"} display={"block"}>
      <Typography variant="h4" fontWeight={"bold"}>
        {title}
      </Typography>
      <List>
        {ls.map((item, index) => (
          <ListItem
            sx={{
              paddingY: 1,
              ":hover": {
                color: "#CAFF50",
              },
            }}
            disablePadding
            key={index}
          >
            <ListItemText
              primaryTypographyProps={{ fontWeight: 500 }}
              primary={item}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FooterList;
