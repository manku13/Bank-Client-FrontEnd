import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  styled,
  Typography,
  Box,
} from "@mui/material";
import BankCard from "@components/BankCard";
import inCredImg from "@assets/incred.jpg";

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

const AddBank = ({ onSubmit }) => {
  const [bankName, setBankName] = useState("BankName");
  const [businessPercent, setBusinessPercent] = useState("?");
  const [personalPercent, setPersonalPercent] = useState("?");
  const [bankLogo, setBankLogo] = useState(inCredImg);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      bankName,
      businessPercent: parseInt(businessPercent),
      personalPercent: parseInt(personalPercent),
      bankLogo,
    });
    setBankName("");
    setBusinessPercent("");
    setPersonalPercent("");
    setBankLogo(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBankLogo(file);
  };

  return (
    <Box>
      <Typography
        py={2}
        textAlign={"center"}
        fontSize={"44px"}
        fontWeight={"bold"}
        variant="h3"
      >
        Add Bank
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container padding={2} justifyContent={"space-around"}>
          <Grid
            item
            container
            xs={12}
            md={5}
            padding={"40px"}
            sx={{
              border: "1px solid #1796A0",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
            rowGap={3}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Business Percent"
                type="number"
                value={businessPercent}
                onChange={(e) => setBusinessPercent(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Personal Percent"
                type="number"
                value={personalPercent}
                onChange={(e) => setPersonalPercent(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography fontWeight={"bold"}>Bank Logo</Typography>
              <Box>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <CustomButton
                fullWidth
                type="submit"
                variant="contained"
                size="large"
              >
                Add Bank
              </CustomButton>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9} md={5}>
            <BankCard
              bankName={bankName}
              personalPercent={personalPercent}
              businessPercent={businessPercent}
              bankLogo={bankLogo}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddBank;
