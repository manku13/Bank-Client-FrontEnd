import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Logo from "@assets/logo.png";
import { FaChartPie } from "react-icons/fa";
import { MdSupervisorAccount } from "react-icons/md";
import { GiBreakingChain } from "react-icons/gi";
import { useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdSettings,
} from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import dotPattern from "@assets/dot_pattern.png";
import { FaTools } from "react-icons/fa";
const navIcons = {
  "chart-pie": <FaChartPie />,
  "gear-six": <IoMdSettings />,
  "users-icon": <MdSupervisorAccount />,
  "x-square": <IoMdSettings />,
  user: <FaUser />,
  leads: <FaRegIdCard />,
  tools: <FaTools />,
};

export function SideNav({ setActivePage, activePage, navItems }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#121621",
        color: "white",
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        height: "100%",
        left: 0,
        maxWidth: "100%",
        position: "fixed",
        scrollbarWidth: "none",
        top: 0,
        width: "var(--SideNav-width)",
        zIndex: "var(--SideNav-zIndex)",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box
          onClick={() => navigate("/")}
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          <img
            width={"50%"}
            src={Logo}
            alt="Your Image"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Stack>
      <Divider sx={{ borderColor: "var(--mui-palette-neutral-700)" }} />
      <Box component="nav" sx={{ flex: "1 1 auto", p: "12px" }}>
        {renderNavItems({
          pathname: activePage,
          items: navItems,
          setActivePage,
          activePage,
        })}
      </Box>
    </Box>
  );
}

function renderNavItems({ items = [], pathname, setActivePage, activePage }) {
  const children = items.map((item, index) => {
    if (item.children) {
      return (
        <DropdownNavItem
          key={index}
          setActivePage={setActivePage}
          activePage={activePage}
          pathname={pathname}
          {...item}
        />
      );
    } else {
      return (
        <NavItem
          key={index}
          setActivePage={setActivePage}
          activePage={activePage}
          pathname={pathname}
          {...item}
        />
      );
    }
  });

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

function NavItem({
  disabled,
  external,
  href,
  icon,
  pathname,
  title,
  setActivePage,
  activePage,
}) {
  const location = useLocation();
  const active = href === activePage;
  const Icon = icon ? navIcons[icon] : null;

  return (
    <li>
      <Box
        sx={{
          alignItems: "center",
          borderRadius: 1,
          color: "var(--NavItem-color)",
          cursor: "pointer",
          display: "flex",
          flex: "0 0 auto",
          gap: 1,
          p: "6px 16px",
          position: "relative",
          textDecoration: "none",
          whiteSpace: "nowrap",
          ...(disabled && {
            bgcolor: "var(--NavItem-disabled-background)",
            color: "var(--NavItem-disabled-color)",
            cursor: "not-allowed",
          }),
          ...(active && {
            bgcolor: "secondary.main",
            color: "black",
          }),
        }}
        onClick={() => {
          setActivePage(title);
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flex: "0 0 auto",
          }}
        >
          {Icon}
        </Box>
        <Box sx={{ flex: "1 1 auto" }}>
          <Typography
            component="span"
            sx={{
              color: "inherit",
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}

function DropdownNavItem({
  disabled,
  external,
  href,
  icon,
  pathname,
  title,
  setActivePage,
  activePage,
  children,
}) {
  const [expanded, setExpanded] = useState(false); // State to track dropdown expansion

  const isActive = href === activePage;

  const Icon = icon ? navIcons[icon] : null;

  const handleItemClick = () => {
    if (isActive) {
      setActivePage("");
    } else {
      setActivePage(href);
    }
    setExpanded(!expanded); // Toggle expansion state
  };

  return (
    <li>
      <Box
        sx={{
          borderRadius: 1,
          color: "var(--NavItem-color)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flex: "0 0 auto",
            p: "6px 16px",
            textDecoration: "none",
            gap: 1,
            ":hover": { bgcolor: "var(--NavItem-hover-background)" },
          }}
          onClick={handleItemClick}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flex: "0 0 auto",
            }}
          >
            {Icon}
          </Box>
          <Box sx={{ flex: "1 1 auto" }}>
            <Typography
              component="span"
              sx={{
                color: "inherit",
                fontSize: "0.875rem",
                fontWeight: 500,
                lineHeight: "28px",
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box>{expanded ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</Box>
        </Box>
        {expanded && (
          <ul style={{ listStyle: "none", margin: 0, paddingLeft: 20 }}>
            {children.map((child, index) => (
              <NavItem
                key={index}
                setActivePage={setActivePage}
                activePage={activePage}
                pathname={pathname}
                {...child}
              />
            ))}
          </ul>
        )}
      </Box>
    </li>
  );
}
