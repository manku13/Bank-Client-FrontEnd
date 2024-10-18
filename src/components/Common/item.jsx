import { Paper, Button } from "@mui/material";

function Item(props) {
  return (
    <Button
      variant="text"
      sx={{ color: "#515F63", fontSize: "17px" }}
      startIcon={<img src={props.item.logo} alt="Your Image" />}
    >
      <h2>{props.item.name}</h2>
      {/* <p>{props.item.description}</p> */}
    </Button>
  );
}

export default Item;
