import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FaqAccordion = ({ que, ans, expanded, onChange, panel }) => {
  const [borderColor, setBorderColor] = useState("#EAECF0");
  const [backgroundColor, setBackgroundColor] = useState("#F8F8F8");

  const handleAccordionClick = () => {
    // Toggle between original color and #4bc3cc
    const newColor = borderColor === "#EAECF0" ? "#4bc3cc" : "#EAECF0";
    const newBgColor = backgroundColor === "#F8F8F8" ? "#4bc3cc21" : "#F8F8F8";
    setBorderColor(newColor);
    setBackgroundColor(newBgColor);
    onChange(panel); // Notify parent component about the change
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === panel} // Set the expanded state based on props
        sx={{
          padding: 2,
          backgroundColor: backgroundColor,
          border: `1px solid ${borderColor}`, // Use dynamic border color
          boxShadow: "none",
        }}
        onChange={handleAccordionClick}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5">{que}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="text">{ans}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FaqAccordion;
