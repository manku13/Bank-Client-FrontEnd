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
const LeadCreateForm = ({ handleClosePopup, showPopup }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    panCard: "",
    requestAmount: "",
    aadharCard: "",
    salarySlip: "",
    bankStatement: "",
    passportPhoto: "",
    electricityBill: "",
    joiningLetter: "",
    form16: "",
    state: "",
    city: "",
    bankName: "",
    gender: "",
    productType: "",
    contactNo: "",
    employmentType: "",
    monthlyIncome: "",
    email: "",
    dateOfBirth: null,
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
      <DialogTitle fontWeight={"bold"}>
        Add Lead
        <Button
          onClick={handleClosePopup}
          color="inherit"
          sx={{ position: "absolute", right: 15, top: 15, fontWeight: "bold" }}
        >
          Close
        </Button>
      </DialogTitle>
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
            <Grid container justifyContent={"space-between"} gap={1}>
              <Grid item xs={12} sm={5.5} md={2.8}>
                <Typography fontWeight={500} display={"flex"}>
                  Bank List
                  <span style={{ width: 8 }} />
                  <Typography component={"span"} color={"red"}>
                    *
                  </Typography>
                </Typography>
                <FormControl size="large" fullWidth>
                  <Select
                    required
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">Bank List</MenuItem>
                    {bankOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5.5} md={2.8}>
                <Typography fontWeight={500} display={"flex"}>
                  Product Type
                  <span style={{ width: 8 }} />
                  <Typography component={"span"} color={"red"}>
                    *
                  </Typography>
                </Typography>
                <FormControl size="large" fullWidth>
                  <Select
                    required
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">Choose Product Type</MenuItem>
                    <MenuItem key={"Personal"} value={"Personal"}>
                      Personal
                    </MenuItem>
                    <MenuItem key={"Business"} value={"Business"}>
                      Business
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5.5} md={2.8}>
                <Typography fontWeight={500} display={"flex"}>
                  Lead Owner
                  <span style={{ width: 8 }} />
                  <Typography component={"span"} color={"red"}>
                    *
                  </Typography>
                </Typography>
                <TextField
                  fullWidth
                  defaultValue="Gaurav"
                  InputProps={{
                    readOnly: true,
                  }}
                  // variant="container"
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
                <Typography fontWeight={500}>First Name</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500}>Last Name</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={formData.lastName}
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
                  Employee Type
                  <span style={{ width: 8 }} />
                  <Typography component={"span"} color={"red"}>
                    *
                  </Typography>
                </Typography>
                <FormControl size="large" fullWidth>
                  <Select
                    required
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">Choose Employee Type</MenuItem>
                    <MenuItem key={"Salaried"} value={"Salaried"}>
                      Personal
                    </MenuItem>
                    <MenuItem key={"Business"} value={"Business"}>
                      Business
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
                <Typography fontWeight={500}>Request Amount</Typography>
                <TextField
                  fullWidth
                  type="number"
                  placeholder="Enter Request Amount"
                  name="requestAmount"
                  value={formData.requestAmount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={3.5}>
                <Typography fontWeight={500}>Monthly Income</Typography>
                <TextField
                  fullWidth
                  type="number"
                  placeholder="Enter Monthly Income"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                />
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
                <Typography fontWeight={500}>Date of Birth</Typography>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                    <DatePicker
                      width="100%"
                      inputFormat="dd/MM/yyyy"
                      value={formData.dateOfBirth}
                      onChange={(newValue) =>
                        setFormData({ ...formData, dateOfBirth: newValue })
                      }
                      textField={<TextField />}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5.5} md={3.5}>
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
              <Grid item xs={12} sm={5.5} md={3.5}>
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

export default LeadCreateForm;
