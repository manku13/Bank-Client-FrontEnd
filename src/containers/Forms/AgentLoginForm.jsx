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

const AgentLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation checks for state, city, and pincode can be implemented here
    console.log("Form submitted:", formData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={0}
        padding={"50px"}
        py={15}
        sx={{
          borderColor: "#1796A0",
          border: "2px solid #1796A0",
          borderRadius: "20px",
        }}
        gap={3}
        color={"white"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <Typography fontWeight={"bold"}>Email</Typography>
          <TextField
            variant="standard"
            type="email"
            fullWidth
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography fontWeight={500}>Password</Typography>
          <Input
            fullWidth
            placeholder="Enter Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Grid>

        <Grid container item justifyContent={"space-between"}>
          <Grid>
            <Button
              variant="text"
              // disabled={!agreeToTerms}
              sx={{
                padding: 0,
                boxShadow: "none",
                color: "white",
                ":hover": {
                  color: "secondary.main",
                },
              }}
              onClick={() => {
                navigate("/agent-apply");
              }}
            >
              Become a Member ?
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="text"
              // disabled={!agreeToTerms}
              sx={{
                padding: 0,
                boxShadow: "none",
                color: "white",
                ":hover": {
                  color: "secondary.main",
                },
              }}
              onClick={() => {
                navigate("/agent-apply");
              }}
            >
              Forgot Password ?
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              boxShadow: "none",
              ":hover": {
                color: "white",
                backgroundColor: "black",
              },
            }}
            onClick={() => {
              navigate("/agent/dashboard");
            }}
          >
            SIGN IN
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AgentLoginForm;
