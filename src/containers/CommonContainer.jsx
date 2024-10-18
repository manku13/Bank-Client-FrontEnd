import { styled } from "@mui/material";
import dotPattern from "@assets/dot_pattern.png";

const BackgroundContainer = styled("div")(({ theme, borderRadius, width }) => ({
  width: width || "90vw",
  height: "100%",
  display: "flex",
  alignItems: "inherit",
  margin: "0 auto",
  padding: "20px",
  borderRadius: borderRadius || "0px 0px 20px 20px",
  backgroundColor: "#083135",
  backgroundImage: `
        linear-gradient(146deg, #083135D9 8%, #083135 100%),
        url(${dotPattern})
      `,
  backgroundPosition: "center center",
  backgroundSize: "20px auto",
}));

const FullHeightContainer = styled("div")(({ theme, fullHeight }) => ({
  width: "100%",
  display: "flex",
  minHeight: fullHeight,
  justifyContent: "center",
  backgroundColor: "#DEF5F3",
  overflow: "hidden", // Hide overflow content
  [theme.breakpoints.only("sm")]: {
    minHeight: "95vh",
    backgroundSize: "120%",
  },
  [theme.breakpoints.only("xs")]: {
    minHeight: "90vh",
    backgroundSize: "190%",
  },
}));

const CommonContainer = ({ children, fullHeight, borderRadius, width }) => {
  return (
    <FullHeightContainer fullHeight={fullHeight}>
      <BackgroundContainer borderRadius={borderRadius} width={width}>
        {children}
      </BackgroundContainer>
    </FullHeightContainer>
  );
};

export default CommonContainer;
