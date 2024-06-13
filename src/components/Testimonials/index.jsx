// src/components/Testimonials.js
import React from "react";
import { Container, Grid, Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { green, blue } from "@mui/material/colors";

import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import img4 from "@site/static/img/2.jpeg";
import img3 from "@site/static/img/1.png";

const TestimonialBox = styled(Box)(({ theme }) => ({
  padding: theme?.spacing(4) || 16,
  textAlign: "center",
  borderRadius: theme?.shape.borderRadius || 4,
  boxShadow: theme?.shadows?.[3] || "0px 1px 3px rgba(0,0,0,0.2)",
  backgroundColor: "#fff",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme?.shadows?.[6] || "0px 3px 6px rgba(0,0,0,0.3)",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const testimonials = [
  {
    name: "Salma Gazali Abdulhamid",
    feedback:
      "Being part of this project was inspiring and made me appreciate the power of hands-on learning. I learned so much through this project and feel more prepared for future challenges.",
    image: FaceTwoToneIcon,
  },
  {
    name: "Aliyu Sulaiman",
    feedback:
      "Well deserved to be a mentor as a man of thought and also innovation beyond imagination, I highly recommend Geek Ink to all the tech enthusiasts.",
    image: img3,
  },
  {
    name: "Fatima Sulaiman",
    feedback:
      "The course was well-structured with a good balance between theory and practice. The instructor was knowledgeable and approachable, making learning Python both enjoyable and effective. I particularly appreciate the real-world applications demonstrated through the hands-on projects, which greatly enhanced my understanding and skills.",
    image: FaceTwoToneIcon,
  },
  {
    name: "Hassan Musa Idris",
    feedback:
      "A very hardworking and dedicated person, thanks to his time and energy sacrifice, gentle and professional guy and also he knows what he is doing in terms of guiding and orienting his student/programmers learners.",
    image: img4,
  },
];

const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  marginBottom: theme?.spacing(2) || 8,
  border: `2px solid ${green[500]}`,
}));

const getRandomTestimonials = () => {
  const shuffledTestimonials = testimonials.sort(() => 0.5 - Math.random());
  return shuffledTestimonials.slice(0, 3);
};

const Testimonials = () => {
  const randomTestimonials = getRandomTestimonials();

  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          color={green[700]}
        >
          What Our Students Say
        </Typography>
        <Grid container spacing={4}>
          {randomTestimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TestimonialBox>
                  <TestimonialAvatar
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    color={green[700]}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body1" component="p" color="black">
                    {testimonial.feedback}
                  </Typography>
                </TestimonialBox>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
