import React, { useState } from "react";
import TermsModal from "@components/TermsModal";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  TextField,
  Button,
  Grid,
  Input,
  Typography,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  Select,
  FormControl,
} from "@mui/material";
const InstantLoanForm = ({ handleClosePopup, showPopup }) => {
  const [formData, setFormData] = useState({
    Name: "",
    motherName: "",
    fatherName: "",
    age: "",
    panCard: "",
    aadharNo: "",
    shopType: "",
    shopAddress: "",
    residenceType: "",
    residenceAddress: "",
    gender: "",
    contactNo: "",
    email: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

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

  const bankOptions = [
    { value: "Prefr Digital PL And BL", label: "refr Digital PL And BL" },
    {
      value: "Aditya Birla (INSTANT LOAN)",
      label: "Aditya Birla (INSTANT LOAN)",
    },
    {
      value: "L&T Personal And Business Loan",
      label: "L&T Personal And Business Loan",
    },
    { value: "FAIRCENT EEZEE", label: "FAIRCENT EEZEE" },
    { value: "ABFL Udyog Plus", label: "ABFL Udyog Plus" },
    { value: "Piramal Finance", label: "Piramal Finance" },
    { value: "Nira", label: "Nira" },
    { value: "Finzy", label: "Finzy" },
    { value: "Flexi Loans", label: "Flexi Loans" },
    { value: "IIFL", label: "IIFL" },
  ];

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
    // Perform form submission logic here
    console.log("Form submitted:", formData);
    handleClosePopup(true);
  };

  return (
    <Dialog open={showPopup} onClose={handleClosePopup} maxWidth="lg">
      <DialogTitle fontWeight={"bold"}>Instant Apply For Loan</DialogTitle>
      <Button
        onClick={handleClosePopup}
        color="inherit"
        sx={{ position: "absolute", right: 15, top: 15, fontWeight: "bold" }}
      >
        Close
      </Button>
      <Divider />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            // spacing={2}
            sx={{ padding: { xs: "20px", sm: "30px", md: "20px" } }}
            rowGap={2}
            color={"black"}
          >
            <Grid container justifyContent={"space-between"} rowGap={3}>
              <Grid item xs={12} sm={5.5} md={2.8}>
                <Typography fontWeight={500}>Your Name</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter First Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={2.8}>
                <Typography fontWeight={500}>Father Name</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Father Name"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={2.8}>
                <Typography fontWeight={500}>Mother Name</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Mother Name"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={5.5} md={2.8}>
                <Typography fontWeight={500} display={"flex"}>
                  Gender
                  <span style={{ width: 8 }} />
                  <Typography component={"span"} color={"red"}>
                    *
                  </Typography>
                </Typography>
                <FormControl size="large" fullWidth>
                  <Select
                    required
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">Choose Gender</MenuItem>
                    <MenuItem key={"Male"} value={"Male"}>
                      Male
                    </MenuItem>
                    <MenuItem key={"Female"} value={"Female"}>
                      Female
                    </MenuItem>
                    <MenuItem key={"Others"} value={"Others"}>
                      Others
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500}>PAN No.</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter PAN No."
                  name="panCard"
                  value={formData.panCard}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500}>Age</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Pan Card Number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500} display={"flex"}>
                  Aadhar No.
                  <span style={{ width: 8 }} />
                  <Typography component={"span"} color={"red"}>
                    *
                  </Typography>
                </Typography>
                <FormControl size="large" fullWidth>
                  <TextField
                    required
                    name="aadharNo"
                    value={formData.aadharNo}
                    onChange={handleChange}
                    placeholder="Enter Your Aadhar No."
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500} display={"flex"}>
                  Residence Type
                  <span style={{ width: 8 }} />
                  <Typography component={"span"} color={"red"}>
                    *
                  </Typography>
                </Typography>
                <FormControl size="large" fullWidth>
                  <Select
                    required
                    name="residenceType"
                    value={formData.residenceType}
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">Choose Residence Type</MenuItem>
                    <MenuItem key={"Rent"} value={"Rent"}>
                      Rent
                    </MenuItem>
                    <MenuItem key={"Owned"} value={"Owned"}>
                      Owned
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500}>Email</Typography>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500} display={"flex"}>
                  Shop Type
                  <span style={{ width: 8 }} />
                  <Typography component={"span"} color={"red"}>
                    *
                  </Typography>
                </Typography>
                <FormControl size="large" fullWidth>
                  <Select
                    required
                    name="shopType"
                    value={formData.shopType}
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">Choose Shop Type</MenuItem>
                    <MenuItem key={"Rent"} value={"Rent"}>
                      Rent
                    </MenuItem>
                    <MenuItem key={"Owned"} value={"Owned"}>
                      Owned
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500}>Residence Address</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Residence Address"
                  name="residenceAddress"
                  multiline
                  rows={4}
                  value={formData.residenceAddress}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500}>Contact No.</Typography>
                <TextField
                  fullWidth
                  type="number"
                  placeholder="Enter Contact No."
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500}>Shop Address</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Shop Address"
                  name="shopAddress"
                  multiline
                  rows={4}
                  value={formData.shopAddress}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {/* Add more fields similarly */}
            <Grid item xs={12}>
              <FormControlLabel
                onClick={handleCheckboxChange}
                control={<Checkbox checked={agreeToTerms} />}
                label="I agree to the Terms and Conditions"
              />
            </Grid>
            <Grid item xs={12}>
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
                Submit
              </Button>
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
      </DialogContent>
    </Dialog>
  );
};

export default InstantLoanForm;
