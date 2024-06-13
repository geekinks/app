import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import Founder from "./Founder";

function Mentors() {
  const founderInfo = {
    image: "/img/hero.png", // Replace with the actual image path or URL
    bio: "Our mentors aren't just tech experts—they're industry leaders, innovators, and passionate advocates for open source collaboration. With years of experience and a deep commitment to empowering the next generation of tech heroes, they're the driving force behind our mission to revolutionize tech education in the northern region of Nigeria.",
    experiences: [
      "Expertise: Our mentors bring a wealth of knowledge and expertise to the table, spanning a wide range of tech fields and disciplines",
      "Dedication: They are deeply committed to guiding and supporting students, offering personalized mentorship and hands-on assistance.",
      "Impact: Through their leadership and advocacy, our mentors are making a tangible impact on the world of technology, shaping the future of open source and inspiring the next generation of tech leaders.",
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 2, sm: 4 },
        p: { xs: 2, sm: 4 },
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#1b5e20",
          fontSize: { xs: "1.5rem", sm: "2.5rem" },
        }}
      >
        Meet Our Mentors
      </Typography>
      <Typography
        component="p"
        variant="body1"
        sx={{
          textAlign: "center",
          color: "#1b5e20",
          fontSize: { xs: "1rem", sm: "1.25rem" },
        }}
      >
        Meet the amazing people behind the Geek Ink courses
      </Typography>
      <Founder {...founderInfo} />
    </Box>
  );
}

export default Mentors;
