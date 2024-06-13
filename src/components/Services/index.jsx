// src/components/Services.js
import React from "react";
import Link from "@docusaurus/Link";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { green, blue, black } from "@mui/material/colors";
import { motion } from "framer-motion";

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: "#fff",
  marginBottom: theme.spacing(4),
}));

const courses = [
  "Introduction to Entrepreneurship",
  "Startup Funding and Financing",
  "Marketing for Startups",
  "Lean Startup Methodology",
  "Innovation and Creativity in Business",
];

const Services = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          color="black"
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionBox>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  color={green[700]}
                >
                  Tech Education
                </Typography>
                <Typography variant="body1" component="p" color="black">
                  Our Tech Education program, with a technopreneurship mindset,
                  offers a comprehensive, hands-on learning experience designed
                  to equip you with essential skills for the tech industry. Join
                  us to gain practical skills and knowledge
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/docs/intro"
                  sx={{ mt: 2, backgroundColor: green[500] }}
                >
                  Learn More
                </Button>
              </SectionBox>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionBox>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  color={green[700]}
                >
                  IT Consultancy Services
                </Typography>
                <Typography variant="body1" component="p" color="black">
                  Our IT Consultancy services provide expert advice and
                  solutions to help businesses leverage technology effectively.
                  Partner with us for customized IT strategies.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/consultancy"
                  sx={{ mt: 2, backgroundColor: green[500] }}
                >
                  Get Started
                </Button>
              </SectionBox>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SectionBox>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  color={green[700]}
                >
                  Technical Research Assistance
                </Typography>
                <Typography variant="body1" component="p" color="black">
                  Our Technical Research Assistance services support academic
                  and industry research projects with advanced technical
                  expertise and resources. Collaborate with us to achieve your
                  research goals.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/research"
                  sx={{ mt: 2, backgroundColor: green[500] }}
                >
                  Contact Us
                </Button>
              </SectionBox>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
