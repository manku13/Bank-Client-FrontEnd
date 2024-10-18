import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GlobalStyles from "@mui/material/GlobalStyles";

import MainNav from "@components/dashboard/layout/main-nav";
import { SideNav } from "@components/dashboard/layout/side-nav";

const DashboardLayout = ({ children, setActivePage, activePage, navItems }) => {
  return (
    <Box>
      <GlobalStyles
        styles={{
          body: {
            "--MainNav-height": "56px",
            "--MainNav-zIndex": 1000,
            "--SideNav-width": "280px",
            "--SideNav-zIndex": 1100,
            "--MobileNav-width": "320px",
            "--MobileNav-zIndex": 1100,
          },
        }}
      />
      <Box
        sx={{
          bgcolor: "var(--mui-palette-background-default)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: "100%",
        }}
      >
        <SideNav
          navItems={navItems}
          setActivePage={setActivePage}
          activePage={activePage}
        />
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            pl: { lg: "var(--SideNav-width)" },
          }}
        >
          <MainNav
            setActivePage={setActivePage}
            activePage={activePage}
            navItems={navItems}
          />
          <main>
            <Container maxWidth="xl" sx={{ py: "30px", bgcolor: "#FAFAFA" }}>
              {children}
            </Container>
          </main>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
