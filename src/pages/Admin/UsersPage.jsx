import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FaDownload as DownloadIcon } from "react-icons/fa";
import { FaUpload as UploadIcon } from "react-icons/fa";
import { AddCircleOutlineRounded } from "@mui/icons-material";
import { FaPlus as PlusIcon } from "react-icons/fa";
import dayjs from "dayjs";

import CustomersFilters from "@components/dashboard/customer/customers-filters";
import CustomersTable from "@components/dashboard/customer/CustomersTable";
import customers from "./AdminCustomers";
import LeadCreateForm from "@containers/Forms/LeadCreateForm";

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

function applyPagination(rows, page, rowsPerPage) {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

const UsersPage = () => {
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

  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: "1 1 auto" }}>
          <Typography variant="h4">Users</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Button
              color="inherit"
              startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}
            >
              Import
            </Button>
            <Button
              color="inherit"
              startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}
            >
              Export
            </Button>
          </Stack>
        </Stack>
        <CustomButton
          variant="contained"
          size="large"
          startIcon={<AddCircleOutlineRounded fontSize="small" />}
          onClick={handleOpenPopup}
        >
          New Lead
        </CustomButton>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
      <LeadCreateForm
        onSubmit={handleSubmit}
        showPopup={showPopup}
        handleClosePopup={handleClosePopup}
      />
    </Stack>
  );
};

export default UsersPage;
