import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FaqAccordion from "@components/FaqAccordion";
import React, { useState } from "react";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null); // State to track expanded panel

  const handleChange = (panel) => {
    setExpanded(panel === expanded ? null : panel); // Toggle panel state
  };

  return (
    <Box
      my="140px"
      sx={{
        mx: "auto",

        maxWidth: { xs: "98%", sm: "92", md: "90%" }, // Maximum width for larger screens
        px: { xs: 2, md: 0 }, // Adjust horizontal padding for smaller screens
      }}
    >
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
      >
        <Grid container gap={2} justifyContent={"center"}>
          <Grid md={12}>
            <Typography color="black" variant="h2" textAlign={"center"}>
              Get Your Questions Answered
            </Typography>
          </Grid>
          <Grid md={12}>
            <Typography color="#526E71" variant="body1" textAlign={"center"}>
              Perspiciatis unde omnis iste natus error sit totam dolore magna.
            </Typography>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={12} md={8} gap={3}>
          <Grid>
            <FaqAccordion
              que={"How Do I Apply for a Business Loan?"}
              ans={
                "Integer mollis felis risus, ut convallis justo rhoncus nec. Duis scelerisque vitae purus a fringilla. Curabitur ut leo vitae est rutrum ornare ut efficitur urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nunc diam, ullamcorper sed dolor bibendum, pharetra aliquam magna. Praesent porttitor dapibus neque a fermentum."
              }
              expanded={expanded}
              onChange={handleChange}
              panel="panel1"
            />
          </Grid>
          <Grid>
            <FaqAccordion
              que={"How Long Does the Loan Approval Process Take?"}
              ans={
                "Integer mollis felis risus, ut convallis justo rhoncus nec. Duis scelerisque vitae purus a fringilla. Curabitur ut leo vitae est rutrum ornare ut efficitur urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nunc diam, ullamcorper sed dolor bibendum, pharetra aliquam magna. Praesent porttitor dapibus neque a fermentum."
              }
              expanded={expanded}
              onChange={handleChange}
              panel="panel2"
            />
          </Grid>
          <Grid>
            <FaqAccordion
              que={"How Long Does the Loan Approval Process Take?"}
              ans={
                "Integer mollis felis risus, ut convallis justo rhoncus nec. Duis scelerisque vitae purus a fringilla. Curabitur ut leo vitae est rutrum ornare ut efficitur urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nunc diam, ullamcorper sed dolor bibendum, pharetra aliquam magna. Praesent porttitor dapibus neque a fermentum."
              }
              expanded={expanded}
              onChange={handleChange}
              panel="panel3"
            />
          </Grid>
          <Grid>
            <FaqAccordion
              que={"How Long Does the Loan Approval Process Take?"}
              ans={
                "Integer mollis felis risus, ut convallis justo rhoncus nec. Duis scelerisque vitae purus a fringilla. Curabitur ut leo vitae est rutrum ornare ut efficitur urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nunc diam, ullamcorper sed dolor bibendum, pharetra aliquam magna. Praesent porttitor dapibus neque a fermentum."
              }
              expanded={expanded}
              onChange={handleChange}
              panel="panel4"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;
