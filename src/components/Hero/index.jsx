import * as React from "react";
import { motion } from "framer-motion";
import Testimonials from "../Testimonials";
import { alpha } from "@mui/material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "@docusaurus/Link";

export default function Hero() {
  const gradientBg = (theme) =>
    theme.palette.mode === "light"
      ? "linear-gradient(180deg, #97f0af, #FFF)"
      : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`;

  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonAnimation = {
    hidden: { scale: 0.9 },
    visible: { scale: 1 },
  };

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const iconsAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage: gradientBg(theme),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            component="span"
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 2rem)",
              color: "text.primary",
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              variants={animationVariants}
            >
              Geek Ink
            </motion.div>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
              variants={textAnimation}
            >
              is here to bridge the gap for aspiring tech professionals in
              northern Nigeria. We understand the unique challenges you face –
              limited access to quality education, a focus on theory over
              practical skills, and a lack of mentorship to navigate the
              industry.
            </motion.div>
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              variants={buttonAnimation}
            >
              <Button
                variant="contained"
                color="success"
                component={Link}
                to="/docs/intro"
                sx={{ backgroundColor: "#66BB6A" }}
              >
                Explore Courses
              </Button>
            </motion.div>
          </Stack>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              pt: 3,
              alignSelf: "center",
              width: { sm: "100%", md: "80%" },
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 2 }}
              variants={textAnimation}
            >
              At Geek Ink, we believe in practical knowledge. Our courses are
              project-based: learn by building.
            </motion.div>
          </Typography>
        </Stack>
        <Stack>
          <Box
            sx={{
              pt: 4,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: 2,
              "@media (min-width: 600px)": {
                flexDirection: "row",
              },
            }}
          >
            {["Skills", "Innovate", "Build"].map((text) => (
              <Stack
                key={text}
                direction="row"
                spacing={2}
                sx={{ alignSelf: "center", width: { xs: "100%", sm: "auto" } }}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1 }}
                  variants={iconsAnimation}
                >
                  <Typography
                    component="span"
                    variant="h1"
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignSelf: "center",
                      textAlign: "center",
                      fontSize: "clamp(3rem, 10vw, 2rem)",
                      color: "text.primary",
                    }}
                  >
                    {text}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircleOutlineIcon color="success" fontSize="large" />
                </motion.div>
              </Stack>
            ))}
          </Box>
          <Testimonials />
        </Stack>
      </Container>
    </Box>
  );
}
