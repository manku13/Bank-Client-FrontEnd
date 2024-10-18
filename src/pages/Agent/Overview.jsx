import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";

import { TotalLeads } from "@components/dashboard/overview/TotalLeads";
import { TotalUsers } from "@components/dashboard/overview/TotalUsers";
import LeadsList from "@components/dashboard/overview/LeadsList";
import BankCard from "@components/BankCard";
import bankList from "@components/bankList";
import Marquee from "@components/Common/Marquee";
export default function Overview() {
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
      <Grid container spacing={3}>
        {/* Map over the bankList array and create BankCard components */}
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
      </Grid>
      {/* <Grid lg={3} sm={6} xs={12}>
        <TasksProgress sx={{ height: "100%" }} value={75.5} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalProfit sx={{ height: "100%" }} value="$15k" />
      </Grid> */}

      {/* <Grid lg={12} md={12} xs={12}>
        <LeadsList
          orders={[
            {
              id: "ORD-007",
              customer: { name: "Ekaterina Tankova" },
              amount: 30.5,
              status: "pending",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-006",
              customer: { name: "Cao Yu" },
              amount: 25.1,
              status: "delivered",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-004",
              customer: { name: "Alexa Richardson" },
              amount: 10.99,
              status: "refunded",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-003",
              customer: { name: "Anje Keizer" },
              amount: 96.43,
              status: "pending",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-002",
              customer: { name: "Clarke Gillebert" },
              amount: 32.54,
              status: "delivered",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-001",
              customer: { name: "Adam Denisov" },
              amount: 16.76,
              status: "delivered",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
          ]}
          sx={{ height: "100%" }}
        />
      </Grid> */}
    </Grid>
  );
}
