import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Badge,
  Button,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  WhatsApp,
  LinkedIn,
  FileCopy,
  ShareRounded,
  AddCircleOutlineRounded,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CustomBadge from "./Common/CustomBadge";
import LeadCreateForm from "@containers/Forms/LeadCreateForm";

const CustomButton = styled(Button)({
  width: "80%",
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
const UserPicture = styled("div")({
  overflow: "visible",
});

const UserContent = styled("div")({
  marginTop: "2rem",
  width: "100%",
});

const BadgeContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
});

const InputGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "80%",
  //   marginTop: "1.5rem",
});

const ShareButton = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});

const BankCard = ({ bankName, personalPercent, businessPercent, bankLogo }) => {
  const [showPopup, setShowPopup] = useState(false); // State variable to control popup visibility

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (formData) => {
    // Logic to handle form submission, you can console log formData for now
    console.log("Form submitted:", formData);
    // Close the popup after submission
    handleClosePopup();
  };
  return (
    <Card
      style={{
        maxWidth: "380",
        margin: "0 auto",
        marginTop: "5rem",
        textAlign: "center",
        position: "relative",
        overflow: "visible",
        borderRadius: "30px",
        boxShadow: "0 .125rem .25rem #4bc3cc",
      }}
    >
      <CardContent>
        <UserPicture>
          <img
            src={bankLogo}
            alt="ABFL Udyog Plus"
            height="130"
            width="130"
            style={{
              position: "absolute",
              top: 0,
              right: "10%",
              background: "#ffffff",
              padding: "10px",
              objectFit: "contain",
              transform: "translateY(-50%)",
              borderRadius: "50%",
              boxShadow: "0 .125rem .25rem rgba(0, 0, 0, .075)",
            }}
          />
        </UserPicture>
        <UserContent>
          <Grid container display={"block"} rowSpacing={3.5}>
            <Grid>
              <Typography
                fontWeight={"bold"}
                mr={"150px"}
                variant="h5"
                component="h2"
              >
                {bankName}
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              rowSpacing={2}
              spacing={3}
            >
              <Grid>
                <CustomBadge
                  text={`Business Loan ${businessPercent}%`}
                  color={"green"}
                />
              </Grid>
              <Grid>
                <CustomBadge
                  text={`Personal Loan ${personalPercent}%`}
                  color={"blue"}
                />
              </Grid>
            </Grid>

            <Grid display={"flex"} justifyContent={"center"}>
              <InputGroup>
                <Typography variant="h6" color="primary">
                  COPY URL FOR REFERRAL
                </Typography>
                <Input
                  value={`https://gcfs.in/loan-application/${bankName}/Dsa6499788`}
                  readOnly
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          /* copy function */
                        }}
                      >
                        <FileCopy />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </InputGroup>
            </Grid>

            <Grid>
              <CustomButton
                variant="contained"
                size="large"
                startIcon={<AddCircleOutlineRounded fontSize="small" />}
                onClick={handleOpenPopup}
              >
                New Lead
              </CustomButton>
            </Grid>

            <Grid>
              <ShareButton>
                <Typography
                  gap={1}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  variant="h6"
                  color="primary"
                  fontSize={"15px"}
                  fontWeight={"bold"}
                >
                  <ShareRounded fontSize="xs" /> Share
                </Typography>
                <div>
                  <IconButton
                    color="primary"
                    href="https://www.facebook.com/sharer/sharer.php?u=https://cpadvisordigital.in/loan-application/50/Dsa6499788"
                    target="_blank"
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://api.whatsapp.com/send?text=https%3A%2F%2Fcpadvisordigital.in%2Floan-application%2F50%2FDsa6499788"
                    target="_blank"
                  >
                    <WhatsApp />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://cpadvisordigital.in/loan-application/50/Dsa6499788"
                    target="_blank"
                  >
                    <LinkedIn />
                  </IconButton>
                </div>
              </ShareButton>
            </Grid>
          </Grid>
        </UserContent>
      </CardContent>
      <LeadCreateForm
        onSubmit={handleSubmit}
        showPopup={showPopup}
        handleClosePopup={handleClosePopup}
      />
    </Card>
  );
};

export default BankCard;
