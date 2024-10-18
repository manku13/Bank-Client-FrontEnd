import React, { useState } from "react";
import { AppBar, Toolbar, Grid, Button, styled } from "@mui/material";
import logo_header from "@assets/logo.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MenuIcon from "@mui/icons-material/Menu";
import DesktopMenu from "@components/Menu/DesktopMenu";
import MobileMenu from "@components/Menu/MobileMenu";
import { useNavigate, useLocation } from "react-router-dom";

const HeaderLogo = styled("img")({
  height: "45px",
  width: "150px",
});

const CustomButton = styled(Button)({
  transition: "all 0.7s ease", // Common transition for all states
  "&:hover": {
    border: "1px solid #CAFF50",
    borderWidth: "1px 1px 1px 5px",
    background: "rgb(255, 255, 255, 0.2)",
    color: "white",
    marginRight: "-10px",
  },
  "&:not(:hover)": {
    transition: "all 0.7s ease", // Smooth reverse transition
  },
});

const HeaderContainer = styled("div")({
  width: "80vw",
  margin: "0 auto",
});

const Header = () => {
  const [activeItem, setActiveItem] = useState(useLocation().pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  return (
    <HeaderContainer>
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: "20px 0px",
        }}
      >
        <Toolbar disableGutters>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyItems="space-around"
            justifyContent="space-between"
          >
            {/* Logo Column */}
            <Grid item style={{ padding: 0 }}>
              {/* Place your logo component here */}
              <HeaderLogo
                src={logo_header}
                onClick={() => {
                  navigate("/");
                }}
                sx={{
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                alt="Logo"
              />
            </Grid>
            {/* Navigation Links Column */}
            <DesktopMenu
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            {/* Buttons Column */}
            <Grid item style={{ padding: 0 }}>
              <CustomButton
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#CAFF50",
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
                onClick={() => navigate("/agent-apply")}
                endIcon={<ArrowRightAltIcon />}
              >
                Become A Partner
              </CustomButton>
              <Button
                onClick={handleSidebarOpen}
                sx={{
                  minWidth: "0px",
                  background: "#D2FF6A",

                  padding: "8px 16px",
                  borderRadius: "5px",
                  display: { md: "none" },
                  ":hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                <MenuIcon
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <MobileMenu
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </HeaderContainer>
  );
};

export default Header;
