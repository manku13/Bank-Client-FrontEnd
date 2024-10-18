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

const AddAgent = ({ onSubmit }) => {
  const [bankName, setBankName] = useState("Agent Name");
  const [businessPercent, setBusinessPercent] = useState("?");
  const [personalPercent, setPersonalPercent] = useState("?");
  const [bankLogo, setBankLogo] = useState(inCredImg);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleCheckboxChange = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgree = () => {
    setAgreeToTerms(true);
    setOpenModal(false);
  };

  const handleDisAgree = () => {
    setAgreeToTerms(false);
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation checks for state, city, and pincode can be implemented here
    console.log("Form submitted:", formData);
  };

  const stateOptions = [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "delhi", label: "Delhi" },
    // Add more states as needed
  ];

  const cityOptions = {
    maharashtra: [
      { value: "mumbai", label: "Mumbai" },
      { value: "pune", label: "Pune" },
      // Add more cities for Maharashtra
    ],
    delhi: [
      { value: "new_delhi", label: "New Delhi" },
      { value: "gurgaon", label: "Gurgaon" },
      // Add more cities for Delhi
    ],
    // Add cities for other states
  };

  return (
    <Box>
      <Typography
        pb={2}
        textAlign={"center"}
        fontSize={"44px"}
        fontWeight={"bold"}
        variant="h3"
      >
        Add Agent
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
            <Typography fontWeight={500}>Name</Typography>
            <TextField
              variant="standard"
              fullWidth
              placeholder="Input your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight={500}>Email</Typography>
            <TextField
              variant="standard"
              fullWidth
              placeholder="Input your email"
              name="name"
              type="email"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid container justifyContent={"space-between"} gap={2}>
            <Grid item xs={12} sm={5.5} md={5.2}>
              <Typography fontWeight={500}>Contact No.</Typography>
              <Input
                fullWidth
                placeholder="Input your email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={5.5} md={5.2}>
              <Typography fontWeight={500}>PAN No.</Typography>
              <Input
                fullWidth
                placeholder="Input your subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"space-between"} gap={2}>
            <Grid item xs={12} sm={5.5} md={5.2}>
              <Typography fontWeight={500}>State</Typography>
              <Select
                fullWidth
                name="state"
                value={formData.state}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">Choose State</MenuItem>
                {stateOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={5.5} md={5.2}>
              <Typography fontWeight={500}>City</Typography>
              <Select
                fullWidth
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!formData.state}
                displayEmpty
              >
                <MenuItem value="">Choose City</MenuItem>
                {formData.state &&
                  cityOptions[formData.state]?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Typography fontWeight={500}>Pincode</Typography>
            <Input
              fullWidth
              placeholder="Input your pincode"
              name="pincode"
              value={formData.pincode}
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
              Add Agent
            </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddAgent;
