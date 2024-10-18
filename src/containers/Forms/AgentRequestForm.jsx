import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Input,
  Typography,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Select,
} from "@mui/material";
import TermsModal from "@components/TermsModal";
import { useNavigate } from "react-router-dom";

const AgentRequestForm = () => {
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
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={0}
        padding={"50px"}
        sx={{
          borderColor: "#1796A0",
          border: "2px solid #1796A0",
          borderRadius: "20px",
        }}
        gap={3}
        color={"white"}
      >
        <Grid item xs={12}>
          <Typography fontWeight={"bold"}>Name</Typography>
          <TextField
            variant="standard"
            fullWidth
            placeholder="Input your name"
            name="name"
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
          <FormControlLabel
            onClick={handleCheckboxChange}
            control={
              <Checkbox style={{ color: "#4bc3cc" }} checked={agreeToTerms} />
            }
            label="I agree to the Terms and Conditions"
          />
        </Grid>
        <Grid container item xs={12} justifyContent={"space-between"}>
          <Grid>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={!agreeToTerms}
              sx={{
                boxShadow: "none",
                ":hover": {
                  color: "white",
                  backgroundColor: "black",
                },
              }}
            >
              Send Request
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              color="secondary"
              // disabled={!agreeToTerms}
              sx={{
                boxShadow: "none",
                ":hover": {
                  color: "white",
                  backgroundColor: "black",
                },
              }}
              onClick={() => {
                navigate("/agent-login");
              }}
            >
              Already a member ?
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <TermsModal
        formData={formData}
        open={openModal}
        onClose={handleModalClose}
        handleChange={handleChange}
        onAgree={handleAgree}
        onDisAgree={handleDisAgree}
      />
    </form>
  );
};

export default AgentRequestForm;
