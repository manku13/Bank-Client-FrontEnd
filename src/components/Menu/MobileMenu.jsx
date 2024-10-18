import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Drawer,
  styled,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import logo_dark from "@assets/logo_dark.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HeaderLogo = styled("img")({
  height: "45px",
  width: "150px",
});

const SidebarContainer = styled("div")(({ theme }) => ({
  width: "40vw",
  backgroundColor: "#E9F1F2",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 999,
  padding: "20px",
  [theme.breakpoints.only("xs")]: {
    width: "100vw",
  },
}));

const CustomButton = styled(Button)({
  zIndex: 1,
  transition: "all 0.5s ease",
  "&:hover": {
    border: "1px solid #4bc3cc",
    borderWidth: "1px 1px 1px 5px",
    background: "rgb(255, 255, 255, 0.2)",
    color: "black",
    marginLeft: "25px",
  },
  "&:not(:hover)": {
    transition: "all 0.5s ease",
  },
});

const MobileMenu = ({
  sidebarOpen,
  setSidebarOpen,
  activeItem,
  setActiveItem,
}) => {
  const navigate = useNavigate();

  const [menuItems, setMenuItems] = useState([
    { label: "Home", route: "/", isOpen: false, subItems: [] },
    { label: "Services", route: "/services", isOpen: false, subItems: [] },
    {
      label: "Loans",
      route: "",
      collapseName: "Loans",
      isOpen: false,
      subItems: [
        { label: "Personal Loans", route: "/personal-loans" },
        { label: "Home Loans", route: "/home-loans" },
        { label: "Car Loans", route: "/car-loans" },
      ],
    },
    {
      label: "Credit Cards",
      route: "",
      isOpen: false,
      subItems: [
        { label: "Rewards Cards", route: "/rewards-cards" },
        { label: "Travel Cards", route: "/travel-cards" },
        { label: "Cashback Cards", route: "/cashback-cards" },
      ],
    },
    {
      label: "Quick Links",
      route: "",
      isOpen: false,
      collapseName: "Quick Links",
      subItems: [
        { label: "About Page", route: "/about" },
        { label: "FAQs Page", route: "/faqs" },
        { label: "Blogs Page", route: "/blogs" },
      ],
    },
  ]);

  const handleItemClick = (item) => {
    setActiveItem(item.route);
    if (item.route) {
      navigate(item.route);
      handleSidebarClose();
    } else {
      const updatedMenuItems = menuItems.map((menuItem) => {
        if (menuItem.label === item.label) {
          menuItem.isOpen = !menuItem.isOpen;
        } else {
          menuItem.isOpen = false;
        }
        return menuItem;
      });
      setMenuItems(updatedMenuItems);
    }
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Drawer anchor="right" open={sidebarOpen} onClose={handleSidebarClose}>
      <SidebarContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <HeaderLogo
            src={logo_dark}
            alt="Logo"
            onClick={() => {
              navigate("/");
            }}
            sx={{
              ":hover": {
                cursor: "pointer",
                display: "inline-flex",
              },
            }}
          />
          <Button
            variant="text"
            sx={{
              minWidth: "10px",
              background: "black",
              display: "flex",
              color: "white",
              borderRadius: "5px",
              ":hover": {
                backgroundColor: "#D2FF6A",
                color: "black",
              },
            }}
            onClick={handleSidebarClose}
          >
            <CloseIcon />
          </Button>
        </div>
        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
              <ListItem button onClick={() => handleItemClick(item)}>
                <ListItemText
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    color:
                      activeItem === (item.route || item.collapseName)
                        ? "text.blue"
                        : "black",
                  }}
                  primary={item.label}
                />
                {item.subItems.length > 0 && (
                  <ListItemIcon>
                    <KeyboardArrowDownIcon />
                  </ListItemIcon>
                )}
              </ListItem>
              {item.subItems.length > 0 && (
                <Collapse in={item.isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        button
                        onClick={() => handleItemClick(subItem)}
                      >
                        <ListItemText
                          primary={subItem.label}
                          primaryTypographyProps={{
                            color:
                              activeItem === subItem.route
                                ? "text.blue"
                                : "black",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
          <CustomButton
            variant="outlined"
            size="large"
            sx={{
              borderColor: "black",
              display: "flex",
              color: "black",
              margin: "8px 16px",
            }}
            onClick={() => navigate("/agent-apply")}
            endIcon={<ArrowRightAltIcon />}
          >
            Become A Partner
          </CustomButton>
        </List>
      </SidebarContainer>
    </Drawer>
  );
};

export default MobileMenu;
