import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Container from "@mui/material/Container";
import Link from "@docusaurus/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Testimonials from "../Testimonials";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #97f0af, #f9f9f9)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
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
              color: "success.main",
            }}
          >
            Geek Ink
          </Typography>
          <Typography
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            is here to bridge the gap for aspiring tech professionals in
            northern Nigeria. We understand the unique challenges you face –
            limited access to quality education, a focus on theory over
            practical skills, and a lack of mentorship to navigate the industry.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/docs/intro"
            >
              Expore Courses
            </Button>
          </Stack>
          <Typography
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            textAlign="center"
            color="text.secondary"
            sx={{
              pt: 3,
              alignSelf: "center",
              width: { sm: "100%", md: "80%" },
            }}
          >
            At Geek Ink, we believe in practical knowledge. Our courses are
            project-based: learn by building.
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
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignSelf: "center",
                    textAlign: "center",
                    fontSize: "clamp(3rem, 10vw, 2rem)",
                    color: "success.main",
                  }}
                >
                  {text}
                </Typography>
                <CheckCircleOutlineIcon color="success" fontSize="large" />
              </Stack>
            ))}
          </Box>
          <Testimonials />
          {/*  */}
        </Stack>
      </Container>
    </Box>
  );
}
