import React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { FaBell } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import MobileNav from "./mobile-nav";
import { UserPopover } from "./user-popover";
import { usePopover } from "@hooks/use-popover";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import avatar from "@assets/face.jpg";

const MainNav = ({ setActivePage, activePage, navItems }) => {
  const [openNav, setOpenNav] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };
  const userPopover = usePopover();
  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: "1px solid #aeb2b9",
          backgroundColor: "#FFFFFF",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "10vh",
            px: 2,
          }}
        >
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <IconButton
              onClick={() => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: "none" } }}
            >
              <FaList />
            </IconButton>
            <Tooltip title="Search">
              <IconButton>
                <FaMagnifyingGlass />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <Tooltip title="Contacts">
              <IconButton>
                <LuUsers2 />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <Badge badgeContent={4} color="success" variant="dot">
                <IconButton>
                  <FaBell />
                </IconButton>
              </Badge>
            </Tooltip>
            <Avatar
              onClick={userPopover.handleOpen}
              ref={userPopover.anchorRef}
              alt="Remy Sharp"
              src={avatar}
              sx={{ width: 40, height: 40 }}
            />
          </Stack>
        </Stack>
      </Box>
      <UserPopover
        anchorEl={userPopover.anchorRef.current}
        onClose={userPopover.handleClose}
        open={userPopover.open}
      />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
        activePage={activePage}
        navItems={navItems}
        setActivePage={setActivePage}
      />
    </React.Fragment>
  );
};

export default MainNav;
