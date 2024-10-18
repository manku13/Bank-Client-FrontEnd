import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";

import { TotalLeads } from "@components/dashboard/overview/TotalLeads";
import { TotalUsers } from "@components/dashboard/overview/TotalUsers";
import LeadsList from "@components/dashboard/overview/LeadsList";
import BankCard from "@components/BankCard";
import bankList from "@components/bankList";
import Marquee from "@components/Common/Marquee";
import LeadList from "@components/dashboard/overview/LeadsList";
import AdminCustomers from "./AdminCustomers";
function applyPagination(rows, page, rowsPerPage) {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
export default function AdminOverview() {
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

  const paginatedCustomers = applyPagination(AdminCustomers, page, rowsPerPage);

  return (
    <Grid container spacing={3}>
      <Grid xs={12} px={0}>
        <Marquee text={"This is a notification!"} />
      </Grid>
      <Grid lg={6} sm={6} xs={12}>
        <TotalLeads diff={12} trend="up" sx={{ height: "100%" }} value="120" />
      </Grid>
      <Grid lg={6} sm={6} xs={12}>
        <TotalUsers
          diff={16}
          trend="down"
          sx={{ height: "100%" }}
          value="210"
        />
      </Grid>
      {/* <Grid container spacing={3}>
        {bankList.map((bank) => (
          <Grid key={bank.bankName} xs={12} sm={6} md={4}>
            <BankCard
              bankName={bank.bankName}
              personalPercent={bank.personalPercent}
              businessPercent={bank.businessPercent}
              bankLogo={bank.bankLogo}
            />
          </Grid>
        ))}
      </Grid> */}
      {/* <Grid lg={3} sm={6} xs={12}>
        <TasksProgress sx={{ height: "100%" }} value={75.5} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalProfit sx={{ height: "100%" }} value="$15k" />
      </Grid> */}

      <Grid lg={12} md={12} xs={12}>
        <LeadList
          count={paginatedCustomers.length}
          page={page}
          rows={paginatedCustomers}
          rowsPerPage={rowsPerPage}
          filter={"Pending"}
        />
      </Grid>
    </Grid>
  );
}
