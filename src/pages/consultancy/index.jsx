import React from "react";
import Layout from "@theme/Layout";
import { Container, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { green, blue } from "@mui/material/colors";
import { motion } from "framer-motion";

const HeroSection = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(135deg, ${green[500]} 30%, ${blue[500]} 90%)`,
  position: "relative",
  overflow: "hidden",
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

const ContentBox = styled(Box)(({ theme }) => ({
  zIndex: 1,
  textAlign: "center",
  color: "#fff",
  maxWidth: "800px",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1, 5),
  backgroundColor: green[700],
  color: "#fff",
  "&:hover": {
    backgroundColor: green[900],
  },
}));

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Container maxWidth="lg">
        <ContentBox
          component={motion.div}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom color="inherit">
            People First, Technology First
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="inherit">
            Empowering Businesses with Expert IT Consultancy Services
          </Typography>
          <Typography variant="body1" color="inherit" paragraph>
            Our approach prioritizes both people and technology, ensuring that
            your business thrives in the digital age. Partner with us to unlock
            innovative solutions tailored to your unique needs.
          </Typography>
          <HeroButton
            variant="contained"
            component={motion.a}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#services"
          >
            Discover Our Services
          </HeroButton>
        </ContentBox>
      </Container>
    </HeroSection>
  );
};

function Service() {
  return (
    <Layout
      title={`service`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <main></main>
    </Layout>
  );
}

export default Service;
