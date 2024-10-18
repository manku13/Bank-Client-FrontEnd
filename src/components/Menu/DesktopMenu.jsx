import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Typography, styled, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate
const StyledButton = styled(Button)({
  display: "inline-flex",
});

const DesktopMenu = ({ activeItem, setActiveItem }) => {
  const [loansAnchorEl, setLoansAnchorEl] = useState(null);
  const [cardsAnchorEl, setCardsAnchorEl] = useState(null);
  const [quickLinksAnchorEl, setQuickLinksAnchorEl] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoansClick = (event) => {
    setLoansAnchorEl(event.currentTarget);
  };

  const handleCardsClick = (event) => {
    setCardsAnchorEl(event.currentTarget);
  };

  const handleLoansClose = () => {
    setLoansAnchorEl(null);
  };

  const handleQuickLinksClick = (event) => {
    setQuickLinksAnchorEl(event.currentTarget);
  };

  const handleQuickLinksClose = () => {
    setQuickLinksAnchorEl(null);
  };

  const handleCardsClose = () => {
    setCardsAnchorEl(null);
  };

  const handleNavigation = (route) => {
    setActiveItem(route);
    console.log(route);
    console.log(activeItem);
    navigate(route); // Navigate to the specified route
    handleLoansClose(); // Close the loans menu after navigation
    handleCardsClose(); // Close the cards menu after navigation
  };

  return (
    <Grid
      mt={1}
      container
      gap={2}
      sx={{ flex: 1, display: { xs: "none", md: "flex" } }}
      style={{ padding: 0 }}
      justifyContent="center"
    >
      <Grid sx={{ padding: 0 }}>
        <Button
          variant="menu_header"
          sx={{
            color: activeItem === "/" ? "secondary.main" : "white",
          }}
          onClick={() => handleNavigation("/")}
        >
          {" "}
          {/* Navigate to '/' */}
          Home
        </Button>
      </Grid>
      <Grid sx={{ padding: 0 }}>
        <Button
          variant="menu_header"
          sx={{
            color: activeItem === "/services" ? "secondary.main" : "white",
          }}
          onClick={() => handleNavigation("/services")}
        >
          {" "}
          {/* Navigate to '/services' */}
          Services
        </Button>
      </Grid>
      {/* Loans Dropdown */}
      <Grid sx={{ padding: 0 }}>
        <StyledButton
          variant="menu_header"
          aria-controls={loansAnchorEl ? "loans-menu" : undefined}
          aria-haspopup="true"
          onClick={handleLoansClick}
        >
          Loans
          <KeyboardArrowDownIcon />
        </StyledButton>
        <Menu
          id="loans-menu"
          anchorEl={loansAnchorEl}
          open={Boolean(loansAnchorEl)}
          onClose={handleLoansClose}
        >
          <MenuItem onClick={() => handleNavigation("/business-loans")}>
            Business Loans
          </MenuItem>{" "}
          <MenuItem onClick={() => handleNavigation("/instant-loans")}>
            Instant Loans
          </MenuItem>{" "}
          <MenuItem onClick={() => handleNavigation("/personal-loans")}>
            Personal Loans
          </MenuItem>{" "}
          <MenuItem onClick={() => handleNavigation("/business-loans")}>
            Education Loans
          </MenuItem>{" "}
          {/* Navigate to '/personal-loans' */}
          <MenuItem onClick={() => handleNavigation("/home-loans")}>
            Home Loans
          </MenuItem>{" "}
          {/* Navigate to '/home-loans' */}
          <MenuItem onClick={() => handleNavigation("/car-loans")}>
            Car Loans
          </MenuItem>{" "}
          {/* Navigate to '/car-loans' */}
        </Menu>
      </Grid>
      {/* Credit Cards Dropdown */}
      <Grid sx={{ padding: 0 }}>
        <Button
          variant="menu_header"
          sx={{
            color: activeItem === "/credit-card" ? "secondary.main" : "white",
          }}
          onClick={() => handleNavigation("/credit-card")}
        >
          {" "}
          {/* Navigate to '/services' */}
          Credit Card
        </Button>
      </Grid>

      <Grid sx={{ padding: 0 }}>
        <StyledButton
          variant="menu_header"
          aria-controls={quickLinksAnchorEl ? "loans-menu" : undefined}
          aria-haspopup="true"
          onClick={handleQuickLinksClick}
        >
          Ouick Links
          <KeyboardArrowDownIcon />
        </StyledButton>
        <Menu
          id="quick-links-menu"
          anchorEl={quickLinksAnchorEl}
          open={Boolean(quickLinksAnchorEl)}
          onClose={handleQuickLinksClose}
        >
          <MenuItem onClick={() => handleNavigation("/about")}>
            About Page
          </MenuItem>{" "}
          {/* Navigate to '/personal-loans' */}
          <MenuItem onClick={() => handleNavigation("/faqs")}>
            FAQs Page
          </MenuItem>{" "}
          {/* Navigate to '/home-loans' */}
          <MenuItem onClick={() => handleNavigation("/blogs")}>
            Blogs Page
          </MenuItem>{" "}
          {/* Navigate to '/car-loans' */}
          <MenuItem onClick={() => handleNavigation("/contact")}>
            Contact Page
          </MenuItem>{" "}
          {/* Navigate to '/car-loans' */}
        </Menu>
      </Grid>
    </Grid>
  );
};

export default DesktopMenu;
