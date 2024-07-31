import React from "react";
import Layout from "@theme/Layout";
import { Container, Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { deepPurple, orange, green } from "@mui/material/colors";
import { motion } from "framer-motion";

const HeroSection = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(135deg, ${deepPurple[500]} 30%, ${orange[500]} 90%)`,
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
  backgroundColor: deepPurple[700],
  color: "#fff",
  "&:hover": {
    backgroundColor: deepPurple[900],
  },
}));

const ServicesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: green[50],
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
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
            There is Always a Way of Doing it Better
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="inherit">
            Research and Development with GeekInk Lab
          </Typography>
          <Typography variant="body1" color="inherit" paragraph>
            At GeekInk, we believe in continuous improvement and innovation. Our
            research and development team is dedicated to finding better ways to
            code, implement, and solve technical challenges.
          </Typography>
          <Typography variant="body1" color="inherit" paragraph>
            We handle all the technical aspects; you focus on the paperwork. Let's collaborate to
            bring your ideas to life with cutting-edge technology.
          </Typography>
          <HeroButton
            variant="contained"
            component={motion.a}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#services"
          >
            Discover Our Research Projects
          </HeroButton>
        </ContentBox>
      </Container>
    </HeroSection>
  );
};
const Services = () => (
  <ServicesSection id="services">
    <Container maxWidth="lg">
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Our Services
      </Typography>
      <Typography variant="body1" paragraph align="center">
        We help businesses improve their efficiency and digital presence, handling all your business logistics with expertise and precision.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard component={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CardContent>
              <Typography variant="h6" component="h3">
                Staffing of Tech Teams
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Build a strong, entrepreneurship-oriented tech team tailored to your business needs. Our teams are trained by industry tech leaders, open-source developers, and entrepreneurs from the northern region.
              </Typography>
            </CardContent>
          </ServiceCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard component={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CardContent>
              <Typography variant="h6" component="h3">
                CTO as a Service
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Get expert technical leadership without the overhead of a full-time CTO.
              </Typography>
            </CardContent>
          </ServiceCard>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard component={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CardContent>
              <Typography variant="h6" component="h3">
                Project Technical Assistance
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Receive specialized technical support for your projects, ensuring timely and efficient execution.
              </Typography>
            </CardContent>
          </ServiceCard>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={4}>
        <HeroButton
          variant="contained"
          component={motion.a}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/2347018565308?text=I%20am%20interested%20in%20your%20services"
        >
          Let’s Work Together
        </HeroButton>
      </Box>
    </Container>
  </ServicesSection>
);

function Writting() {
  return (
    <Layout title={`writting`} description="Description will go into a meta tag in <head />">
      <Hero />
      <Services />
      <main></main>
    </Layout>
  );
}

export default Writting;
