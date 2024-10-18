import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Box,
  styled,
} from "@mui/material";
import payImg from "@assets/payment.jpg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const CustomButton = styled(Button)({});

const TermsModal = ({
  open,
  onClose,
  onAgree,
  formData,
  handleChange,
  onDisAgree,
}) => {
  const [transactionNumber, setTransactionNumber] = useState("");

  const handleTransactionNumberChange = (e) => {
    setTransactionNumber(e.target.value);
  };

  const handleAgreeAndClose = () => {
    if (formData.transaction_no !== "") {
      onAgree();
      onClose();
    }
  };

  // Ensure formData.transaction_no is always defined
  const transactionNo = formData.transaction_no || "";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>Terms and Conditions For GCFS</DialogTitle>
      <DialogContent>
        <Grid container gap={2} p={2}>
          <Grid>
            <Typography>
              I authorize CP Advisor Digital Pvt. Ltd. & their representatives
              to call/SMS/email towards this application and other
              products/services. This consent overrides my registration for
              DNC/NDNC. By clicking on Apply for Association, I agree and
              confirm that I have read Terms & Conditions.
            </Typography>
          </Grid>

          <Grid>
            <Typography>Being an Associate ?</Typography>
            <Typography variant="body1" color={"blue"} className="text-primary">
              Are you an existing loan DSA looking for growth or interested in
              associating with us? Be our Channel Partner! Why become our
              partner?
            </Typography>
            <ul>
              <li>High Potential Industry</li>
              <li>Channel Partner Recognition</li>
              <li>Best Deals to offer</li>
              <li>Instant Payouts</li>
            </ul>
          </Grid>
          <Grid>
            <Typography>
              After filling all details, kindly make payment (Channel Partner
              fee) of Rs. 499 & enter transaction ID in the box before
              submitting a form. Submission details without payment can't be
              considered.
            </Typography>
          </Grid>
          <Grid>
            <Typography>
              In Case of Queries, Call on this Number: 8200241300
            </Typography>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" mt={3}>
          <img src={payImg} alt="" width="70%" />
        </Box>
        <Box mt={3}>
          <Typography variant="subtitle1">Transaction Number</Typography>
          <TextField
            fullWidth
            value={transactionNo} // Use transactionNo instead of formData.transaction_no
            margin="normal"
            name="transaction_no"
            placeholder="Enter Transaction Number"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">#</InputAdornment>
              ),
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <CustomButton
          onClick={handleAgreeAndClose}
          variant="contained"
          color="secondary"
          disabled={transactionNo === ""}
        >
          I Agree
        </CustomButton>
        <CustomButton onClick={onDisAgree} variant="contained" color="error">
          Dismiss
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default TermsModal;
