import { BorderBottom } from "@mui/icons-material";
import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "30px",
          color: "black",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "rgb(125 125 125 / 80%) !important", // Change the border color
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&::after": {
            borderBottom: "1px solid #4bc3cc !important", // Corrected property name to borderBottom
            color: "red", // This won't affect the bottom border color; it's for the cursor color
          },
          "&::before": {
            borderBottom: "1px solid rgb(125 125 125 / 80%) !important", // Corrected property name to borderBottom
            color: "red", // This won't affect the bottom border color; it's for the cursor color
          },
        },
        input: {
          color: "rgb(125 125 125 / 90%)", // Input text color
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        header: {},

        outlined: {
          padding: "12px 15px",
          borderWidth: "1px 1px 1px 5px",
          color: "white",
          fontWeight: 700,
        },

        menu_header: {
          fontFamily: "sans-serif",
          fontWeight: 700,
          color: "white",
          fontSize: "15px",
          textTransform: "none",
          display: "block",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "transparent",
            color: "#CAFF50",
          },
        },

        contained: {
          padding: "20px 40px",
          color: "black",
          fontWeight: "bold",
          "@media (min-width: 0px) and (max-width: 780px)": {
            padding: "18px 36px",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          // margin: "0px !important",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        standard: {
          fontFamily: "Sans-serif",
          textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          fontWeight: 700,
          fontSize: "0.8rem",
          color: "#3F3A3B",
        },
        outlined: {
          fontWeight: 500,
          fontSize: "0.8rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#3F3A3B", // Change this to your primary color
    },
    secondary: {
      main: "#CAFF50", // Change this to your secondary color
    },

    text: {
      w: "rgba(255, 255, 255, 0.7)",
      blue: "#4bc3cc",
      main: "#093134B3",
    },

    error: {
      main: "#F24E1E",
    },

    background: {
      // paper: "#EAE5E1", // Background color for containers, cards, etc.
      // default: "#DEF5F3", // Default background color for the entire document
    },
  },

  typography: {
    fontFamily: "DM Sans,Open Sans, sans-serif",
    text: {
      color: "#093134B3",
      "@media (min-width: 0px) and (max-width: 780px)": {
        fontSize: "14px",
      },
    },
    h1: {
      fontWeight: 700,
      lineHeight: 1.1,
      fontSize: "80px",
      "@media (min-width: 0px) and (max-width: 780px)": {
        fontWeight: 700,
        lineHeight: 1.1,
        fontSize: "40px",
      },
    },
    h2: {
      fontWeight: "bold",
      lineHeight: 1.1,
      fontSize: "60px",
      "@media (min-width: 0px) and (max-width: 600px)": {
        fontWeight: 700,
        lineHeight: 1.1,
        fontSize: "40px",
      },
    },
    h3: {
      lineHeight: 1.1,
      fontSize: "24px",
    },
    h4: {
      fontWeight: 500,
      lineHeight: 1.1,
      fontSize: "22px",
      "@media (min-width: 0px) and (max-width: 600px)": {
        fontSize: "19px",
      },
    },
    h5: {
      fontWeight: 500,
      lineHeight: 1.1,
      fontSize: "18px",
      "@media (min-width: 0px) and (max-width: 600px)": {
        fontSize: "16px",
      },
    },
    bannerH1: {
      fontFamily: "Prompt",
      "@media (max-width: 480px)": {
        marginBottom: "20px",
        maxWidth: "800px",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "120%",
        textAlign: "start",
      },
      "@media (min-width: 481px) and (max-width: 900px)": {
        marginBottom: "20px",
        maxWidth: "800px",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "120%",
        textAlign: "start",
      },
      "@media (min-width: 901px) and (max-width: 1920px)": {
        marginBottom: "20px",
        maxWidth: "800px",
        fontWeight: 700,
        fontSize: "60px",
        lineHeight: "120%",
        textAlign: "start",
      },
    },

    title: {
      fontFamily: "Inika",
      fontWeight: 700,
      fontSize: "2.2rem",
      color: "#3F3A3B",
    },
    inputTitle: {
      fontFamily: "Inika",
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: 700,
      fontSize: "1rem",
      textDecoration: "underline",
    },
  },
});

export default theme;
