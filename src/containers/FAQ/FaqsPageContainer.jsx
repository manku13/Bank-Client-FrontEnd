import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FaqAccordion from "@components/FaqAccordion";
import React, { useState } from "react";

const FaqsPageContainer = () => {
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
      <Grid container gap={2}>
        <Grid xs={12} sm={5.8}>
          <Grid container xs={6} spacing={3}>
            <Grid xs={12}>
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
            <Grid xs={12}>
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
            <Grid xs={12}>
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
            <Grid xs={12}>
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
        <Grid xs={12} sm={5.8}>
          <Grid container spacing={3}>
            <Grid xs={12}>
              <FaqAccordion
                que={"How Do I Apply for a Business Loan?"}
                ans={
                  "Integer mollis felis risus, ut convallis justo rhoncus nec. Duis scelerisque vitae purus a fringilla. Curabitur ut leo vitae est rutrum ornare ut efficitur urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nunc diam, ullamcorper sed dolor bibendum, pharetra aliquam magna. Praesent porttitor dapibus neque a fermentum."
                }
                expanded={expanded}
                onChange={handleChange}
                panel="panel5"
              />
            </Grid>
            <Grid xs={12}>
              <FaqAccordion
                que={"How Long Does the Loan Approval Process Take?"}
                ans={
                  "Integer mollis felis risus, ut convallis justo rhoncus nec. Duis scelerisque vitae purus a fringilla. Curabitur ut leo vitae est rutrum ornare ut efficitur urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nunc diam, ullamcorper sed dolor bibendum, pharetra aliquam magna. Praesent porttitor dapibus neque a fermentum."
                }
                expanded={expanded}
                onChange={handleChange}
                panel="panel6"
              />
            </Grid>
            <Grid xs={12}>
              <FaqAccordion
                que={"How Long Does the Loan Approval Process Take?"}
                ans={
                  "Integer mollis felis risus, ut convallis justo rhoncus nec. Duis scelerisque vitae purus a fringilla. Curabitur ut leo vitae est rutrum ornare ut efficitur urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nunc diam, ullamcorper sed dolor bibendum, pharetra aliquam magna. Praesent porttitor dapibus neque a fermentum."
                }
                expanded={expanded}
                onChange={handleChange}
                panel="panel7"
              />
            </Grid>
            <Grid xs={12}>
              <FaqAccordion
                que={"How Long Does the Loan Approval Process Take?"}
                ans={
                  "Integer mollis felis risus, ut convallis justo rhoncus nec. Duis scelerisque vitae purus a fringilla. Curabitur ut leo vitae est rutrum ornare ut efficitur urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nunc diam, ullamcorper sed dolor bibendum, pharetra aliquam magna. Praesent porttitor dapibus neque a fermentum."
                }
                expanded={expanded}
                onChange={handleChange}
                panel="panel8"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FaqsPageContainer;
