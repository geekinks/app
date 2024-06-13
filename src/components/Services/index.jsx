import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function Services() {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses-section");
    if (coursesSection) {
      coursesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      id="services"
      sx={{
        width: "100%",
        py: { xs: 10, sm: 14 },
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom sx={{ color: "#1b5e20" }}>
          Our Services
        </Typography>
        <Stack spacing={4} sx={{ mt: 4 }}>
          <Typography variant="h5">
            At Geek Ink, we offer a range of services tailored to meet the needs
            of aspiring tech professionals in Northern Nigeria.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <ServiceItem
              icon={<i className="fas fa-cogs fa-3x"></i>}
              title="Tech Education"
              description="Practical, project-based courses designed to equip you with real-world skills."
            />
            <ServiceItem
              icon={<i className="fas fa-users fa-3x"></i>}
              title="Mentorship"
              description="Expert mentorship from industry leaders passionate about guiding the next generation of tech heroes."
            />
            <ServiceItem
              icon={<i className="fas fa-code-branch fa-3x"></i>}
              title="Open Source Collaboration"
              description="Contribute to real-world projects and build your portfolio through open source collaboration."
            />
          </Stack>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToCourses}
            variant="contained"
            color="success"
            sx={{ mt: 4, backgroundColor: "#388e3c", color: "#fff" }}
          >
            Explore Courses
          </motion.button>
        </Stack>
      </Container>
    </Box>
  );
}

function ServiceItem({ icon, title, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 2,
        borderRadius: 1,
        boxShadow: 1,
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ mb: 2 }}>{icon}</Box>
      <Typography variant="h6" sx={{ color: "#1b5e20" }}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}
