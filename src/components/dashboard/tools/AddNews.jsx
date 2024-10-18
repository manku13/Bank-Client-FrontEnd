import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  styled,
  Typography,
  Box,
  Input,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import BankCard from "@components/BankCard";
import inCredImg from "@assets/incred.jpg";
import AccountInfo from "../account/AccountInfo";
import { useNavigate } from "react-router-dom";
const CustomButton = styled(Button)({
  backgroundColor: "black",
  color: "white",
  //   zIndex: 1,
  transition: "all 0.5s ease", // Common transition for all states
  "&:hover": {
    border: "1px solid black",
    borderWidth: "1px 1px 1px 5px",
    background: "rgb(255, 255, 255, 0.2)",
    color: "black",
    marginLeft: "10px",
  },
  "&:not(:hover)": {
    transition: "all 0.5s ease", // Smooth reverse transition
  },
});

const user = {
  name: "Sofia Rivers",
  avatar: "/assets/avatar.png",
  jobTitle: "Senior Developer",
  country: "USA",
  city: "Los Angeles",
  timezone: "GTM-7",
};

const AddNews = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    message: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation checks for state, city, and pincode can be implemented here
    console.log("Form submitted:", formData);
  };

  return (
    <Box height={"80vh"}>
      <Typography
        pb={2}
        textAlign={"center"}
        fontSize={"44px"}
        fontWeight={"bold"}
        variant="h3"
      >
        Send News
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          padding={"40px"}
          sx={{
            border: "1px solid #1796A0",
            borderRadius: "20px",
            backgroundColor: "white",
          }}
          rowGap={3}
        >
          <Grid item xs={12}>
            <Typography fontWeight={500}>Title</Typography>
            <TextField
              variant="standard"
              fullWidth
              placeholder="Input Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight={500}>Your Message</Typography>
            <Input
              fullWidth
              placeholder="Write your message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomButton
              fullWidth
              type="submit"
              variant="contained"
              size="large"
            >
              Send Message
            </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddNews;
