"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";

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

export function UpdatePasswordForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: "sm" }}>
            <FormControl fullWidth>
              <InputLabel>Password</InputLabel>
              <OutlinedInput label="Password" name="password" type="password" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Confirm password</InputLabel>
              <OutlinedInput
                label="Confirm password"
                name="confirmPassword"
                type="password"
              />
            </FormControl>
          </Stack>
        </CardContent>
        <Divider />
        <CardActions>
          <CustomButton
            variant="contained"
            size="large"
            // startIcon={<AddCircleOutlineRounded fontSize="small" />}
            // onClick={handleOpenPopup}
          >
            Update
          </CustomButton>
        </CardActions>
      </Card>
    </form>
  );
}
